import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Page from "../../../components/Page";
import ImageUploader from "react-images-upload";
import {
  Card,
  Row,
  CardBody,
  CardHeader,
  Col,
  CardFooter,
  Form,
  Alert,
} from "reactstrap";
import { connect } from "react-redux";
import { getCurrentUser } from "../../../store/auth";
import {
  getSubcategoriesByCategoryId,
  loadSubcategoriesByCategoryId,
} from "../../../store/subcategories";
import { getCategories, loadCategories } from "../../../store/categories";
import NestedForm from "../../../components/NestedForm";
import {
  addItem,
  getLoading,
  getErrors,
  getStatus,
} from "../../../store/items";
import PaymentPage from "../../payment";
import { Checkbox } from "antd";
import csc from "country-state-city";

class PostItemForm extends NestedForm {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        owner_id: "",
        title: "",
        zip_code: "",
        city: "",
        state: "",
        price: "",
        description: "",
        term_and_conditions: "",
        category_id: "",
        sub_category_id: "",
        condition: "",
        properties: {},
        is_donating: false,
        boost: false,
      },
      pictures: [],
      usStates: [],
      checked: false,
    };

    this.onDrop = this.onDrop.bind(this);
  }
  MySwal = withReactContent(Swal);
  componentDidMount() {
    console.log("country", csc.getCountryByCode("US"));
    console.log("us states", csc.getStatesOfCountry("231"));

    // console.log(cities.filter((city) => city.name.match("Albuquerque")));
    //get longtude and latitude
    const data = { ...this.state.data };
    navigator.geolocation.getCurrentPosition(function (position) {
      data.latitude = position.coords.latitude;
      data.longitude = position.coords.longitude;
    });
    this.props.loadCategories();
    this.setState({ data, usStates: csc.getStatesOfCountry("231") });
  }
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  doSubmit = () => {
    const data = { ...this.state.data };
    data.is_donating = data.is_donating === "true" ? true : false; //todo refactor
    if (!data.condition) data.condition = "none";
    data.properties = JSON.stringify(data.properties);
    data.owner_id = this.props.currentUser.id;
    //convert city by city name && state by state name
    data.city = csc.getCityById(data.city).name;
    data.state = csc.getStateById(data.state).name;
    //TODO remove when the backed fixed
    data.category = parseInt(data.category_id);
    data.is_available = true;
    delete data.category_id;
    const pictures = [...this.state.pictures];
    const formData = new FormData();
    for (const key in pictures) {
      formData.append(`image${key}`, pictures[key]);
    }
    for (var key in data) {
      formData.append(key, data[key]);
    }
    this.props.addItem(formData);
  };

  handleBoost = (bool) => {
    const data = { ...this.state.data };
    console.log("boost", bool);
    data.boost = bool;
    this.setState({
      data,
    });
  };

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { data } = this.state;
    if (data.is_donating === "true") {
      data.price = "0.00";
    }
    if (this.props.status === "success") {
      window.setTimeout(() => {
        window.location.reload(false);
      }, 2500);
      this.MySwal.fire({
        position: "center",
        icon: "success",
        text: "Your item has been posted.",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    // const { properties, category_id, sub_category_id } = this.state.data;
    const { category_id, sub_category_id } = this.state.data;

    const category = this.props.categories.find(
      (catagory) => catagory.id == category_id
    );
    const subcategory = this.props.subcategories.find(
      (subcategory) => subcategory.id == sub_category_id
    );

    return (
      <Page
        breadcrumbs={[{ name: "Share", active: true }]}
        className="postItemContainer"
      >
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Col xl={10} lg={12} md={12} sm={12}>
            <Card>
              <CardHeader>Share What You Have</CardHeader>
              <Form onSubmit={this.handleSubmit}>
                <CardBody>
                  <Row>
                    <Col sm={12} md={6} xs={12}>
                      <ImageUploader
                        label="Max file size: 2mb, accepted: jpg png"
                        withIcon={true}
                        withPreview={true}
                        buttonText="Choose images"
                        onChange={this.onDrop}
                        imgExtension={[".jpg", ".png"]}
                        maxFileSize={2242880}
                      />
                    </Col>
                    {/* //Forms */}
                    <Col sm={12} md={6} xs={12}>
                      <Row>
                        <Col xs={12} md={6}>
                          {this.renderSelect(
                            "is_donating",
                            "Sharing || Donating?",
                            this.isDonatingOptions
                          )}
                        </Col>
                        <Col xs={12} md={6}>
                          {this.renderSelect(
                            "category_id",
                            "Category",
                            this.props.categories
                          )}
                        </Col>
                        <Col xs={12} md={4}>
                          {this.renderInput("title", "Name", "Name")}
                        </Col>
                        <Col xs={12} md={4}>
                          {data.is_donating === "true"
                            ? this.renderInput("price", "Price", "Price")
                            : this.renderInput("price", "Price", "Price", true)}
                        </Col>

                        <Col xs={12} md={4}>
                          {this.renderSelect(
                            "state",
                            "State",
                            this.state.usStates
                          )}
                        </Col>
                        <Col xs={12} md={4}>
                          {this.renderSelect(
                            "city",
                            "City",
                            csc.getCitiesOfState(this.state.data.state)
                          )}
                        </Col>
                        <Col xs={12} md={4}>
                          {this.renderInput("zip_code", "Zip code", "zip code")}
                        </Col>

                        {category && category.name === "Product" ? (
                          <>
                            <Col xs={12} md={6}>
                              {this.renderSelect(
                                "sub_category_id",
                                "Sub category",
                                this.props.subcategories
                              )}
                            </Col>
                            <Col xs={12} md={6}>
                              {this.renderInput(
                                "condition",
                                "Condition",
                                "Condition"
                              )}
                            </Col>
                          </>
                        ) : null}
                        {category && category.name === "Service" ? (
                          <>
                            <Col xs={12} md={12}>
                              {this.renderSelect(
                                "sub_category_id",
                                "Service Type",
                                this.props.subcategories
                              )}

                              {subcategory && subcategory.name === "Tutor" ? (
                                <>
                                  <Row>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "subject",
                                        "Subject",
                                        [
                                          "Art",
                                          "Citizenship",
                                          "Essay",
                                          "French",
                                          "Geography",
                                          "Mathematics",
                                          "Science",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "levelOfStudy",
                                        "Level Of Study",
                                        [
                                          "Primary",
                                          "A-Level",
                                          "Secondary",
                                          "Undergraduate",
                                          "GCSE",
                                          "IGCSE",
                                          "Postgraduate",
                                          "IB",
                                          "Professional",
                                          "Admission",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "tutorTimeDedication",
                                        "Time Dedication",
                                        [
                                          "Occasional",
                                          "1-2 hours per week",
                                          "Over 2 hours per week",
                                          "Intensive",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "tutorAvailability",
                                        "Availability Comfort Zone",
                                        [
                                          "Weekend Evening",
                                          "Weekend Morning",
                                          "Weekday Evening",
                                          "Weekday Morning",
                                          "flexible",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "methodOfTutoring",
                                        "Method Of Tutoring",
                                        ["Online", "Face to Face"]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "tutorPaymentDuration",
                                        "Payment Duration",
                                        ["Weekly", "Monthly"]
                                      )}
                                    </Col>
                                  </Row>
                                </>
                              ) : null}
                              {subcategory &&
                              subcategory.name === "Personal Driver" ? (
                                <>
                                  <Row>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "methodOfService",
                                        "Method Of Service",
                                        [
                                          "Personal",
                                          "Hourly",
                                          "Car-Pickup",
                                          "Flexible",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "ownACar",
                                        "Do You own a Car??",
                                        ["Yes", "No"]
                                      )}
                                    </Col>

                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "cleanerTimeDedication",
                                        "Time Dedication",
                                        ["Occasional", "Full Time", "Flexible"]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "experience",
                                        "Any Driving Experience?",
                                        [
                                          "Less than a Year",
                                          "One Year Experience",
                                          "Two Years Experience",
                                          "Three Years Experience",
                                          "More Than Three Years",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={12}>
                                      {this.renderCustomSelect(
                                        "paymentOptions",
                                        "Payment Options",
                                        [
                                          "On Hand",
                                          "Credit Card",
                                          "Online Transaction",
                                          "Flexible",
                                        ]
                                      )}
                                    </Col>
                                  </Row>
                                </>
                              ) : null}
                              {subcategory && subcategory.name === "Cleaner" ? (
                                <>
                                  <Row>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "comfortServiceZone",
                                        "Comfort Service Zone",
                                        [
                                          "Commercial (e.g. office)",
                                          "Religious Buildings",
                                          "Industrial (e.g Warehouses)",
                                          "Retail location",
                                          "Restaurants || Bars",
                                          "Flexible",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "personalDriverTimeDedication",
                                        "Time Dedication",
                                        [
                                          "Daily",
                                          "Twice a Month",
                                          "Twice a Week",
                                          "Weekly",
                                          "Flexible",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "cleanerAvailability",
                                        "Availability Comfort Zone",
                                        ["Evenings", "Mornings", "Flexible"]
                                      )}
                                    </Col>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "cleanerNumberOfPeople",
                                        "How Many are you?",
                                        [
                                          "Just Me",
                                          "Me and A Friend",
                                          "More Than Three",
                                          "Depends on the Area",
                                        ]
                                      )}
                                    </Col>
                                    <Col xs={12} md={12}>
                                      {this.renderCustomSelect(
                                        "cleanerPaymentDuration",
                                        "Payment Duration",
                                        [
                                          "Daily",
                                          "Weekly",
                                          "Monthly",
                                          "Flexible",
                                        ]
                                      )}
                                    </Col>
                                  </Row>
                                </>
                              ) : null}
                            </Col>
                          </>
                        ) : null}
                        {category && category.name === "Digital" ? (
                          <Col xs={12} md={12}>
                            {this.renderSelect(
                              "sub_category_id",
                              "Service Type",
                              this.props.subcategories
                            )}

                            {subcategory &&
                            subcategory.name === "Subscription Services" ? (
                              <>
                                <Row>
                                  <Col xs={12} md={6}>
                                    {this.renderCustomSelect(
                                      "subscriptionType",
                                      "Subscription Type",
                                      [
                                        "Netflix",
                                        "Amazon",
                                        "Disney",
                                        "ESPN",
                                        "Other",
                                      ]
                                    )}
                                  </Col>
                                  <Col xs={12} md={6}>
                                    {this.renderCustomSelect(
                                      "numberofSubscriptionLeft",
                                      "Number of Users",
                                      ["1", "2", "3", "4", "5"]
                                    )}
                                  </Col>
                                  <Col xs={12} md={6}>
                                    {this.renderDateInput(
                                      "subscriptionStartDate",
                                      "Start Date"
                                    )}
                                  </Col>
                                  <Col xs={12} md={6}>
                                    {this.renderDateInput(
                                      "subscriptionEndDate",
                                      "End Date"
                                    )}
                                  </Col>
                                </Row>
                              </>
                            ) : null}
                            {subcategory &&
                            subcategory.name === "Season Tickets" ? (
                              <>
                                <Row>
                                  <Col xs={12} md={6}>
                                    {this.renderCustomSelect(
                                      "eventType",
                                      "Event Type",
                                      ["Sports", "Religious Sermons", "Others"]
                                    )}
                                  </Col>
                                  <Col xs={12} md={6}>
                                    {this.renderCustomSelect(
                                      "seasonTicketsNumberOfPeople",
                                      "Number of People per ticket",
                                      ["1", "2", "3", "4", "5"]
                                    )}
                                  </Col>
                                  <Col xs={12} md={6}>
                                    {this.renderInput(
                                      "numberOfTickets",
                                      "Number Of Tickets",
                                      "Number Of Tickets",
                                      "number"
                                    )}
                                  </Col>
                                  <Col xs={12} md={6}>
                                    {this.renderDateInput(
                                      "eventStartDate",
                                      "Event Start Date"
                                    )}
                                  </Col>
                                </Row>
                              </>
                            ) : null}
                          </Col>
                        ) : null}

                        <Col xs={12} md={12}>
                          {this.renderInput(
                            "description",
                            "Description",
                            "Description",
                            "textarea"
                          )}
                        </Col>
                        <Col xs={12} md={12}>
                          {this.renderInput(
                            "term_and_conditions",
                            "Terms And Conditions",
                            "Terms And Conditions",
                            "textarea"
                          )}
                        </Col>
                      </Row>
                      <Col>
                        <Checkbox
                          checked={this.state.data.boost}
                          onChange={this.toggleChecked}
                        >
                          Boost
                        </Checkbox>
                      </Col>
                      {this.state.checked && (
                        <Col align="right">
                          <PaymentPage onBoost={this.handleBoost} />
                        </Col>
                      )}
                    </Col>

                    <Col xs={12} md={12}>
                      <CardFooter align="center">
                        {this.renderButton("Share")}
                      </CardFooter>
                    </Col>
                  </Row>
                  {this.props.errors && this.props.errors.image && (
                    <Alert color="danger">{this.props.errors.image}</Alert>
                  )}
                  {this.props.errors && this.props.errors.detail && (
                    <Alert color="danger">{this.props.errors.detail}</Alert>
                  )}
                </CardBody>
              </Form>
            </Card>
          </Col>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  currentUser: getCurrentUser(state),
  categories: getCategories(state),
  subcategories: getSubcategoriesByCategoryId(state),
  errors: getErrors(state),
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  loadCategories: () => dispatch(loadCategories()),
  loadSubcategoriesByCategoryId: (category_id) =>
    dispatch(loadSubcategoriesByCategoryId(category_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItemForm);
