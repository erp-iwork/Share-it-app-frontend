import React from "react";
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
import { getCategories, loadCategories } from "../../../store/categories";
import NestedForm from "../../../components/NestedForm";
import {
  addItem,
  getLoading,
  getErrors,
  getStatus,
} from "../../../store/items";

class PostItemForm extends NestedForm {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        owner_id: this.props.currentUser.id,
        title: "",
        location: "",
        price: "",
        description: "",
        termsAndConditions: "",
        category_id: "",
        condition: "",
        properties: {},
        is_donating: false,
      },
      pictures: [],
      categories: this.props.categories,
    };

    this.onDrop = this.onDrop.bind(this);
  }
  isDonatingOptions = [
    {
      id: "false",
      category: "Sharing",
    },
    {
      id: "true",
      category: "Donating",
    },
  ];
  componentDidMount() {
    this.props.loadCategories();
  }
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  doSubmit = () => {
    const data = { ...this.state.data };
    data.is_donating = data.is_donating === "true" ? true : false;
    if (!data.condition) data.condition = "none";
    data.properties = JSON.stringify(data.properties);
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
  render() {
    const { category_id, properties } = this.state.data;
    return (
      <Page breadcrumbs={[{ name: "Share", active: true }]}>
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
                          {this.renderInput("location", "Location", "Location")}
                        </Col>
                        <Col xs={12} md={4}>
                          {this.renderInput("price", "Price", "Price")}
                        </Col>

                        {category_id === "2" ? (
                          <>
                            <Col xs={12} md={12}>
                              {this.renderInput(
                                "condition",
                                "Condition",
                                "Condition"
                              )}
                            </Col>
                          </>
                        ) : null}
                        {category_id === "1" ? (
                          <>
                            <Col xs={12} md={12}>
                              {this.renderCustomSelect(
                                "serviceType",
                                "Service Type",
                                ["Tutor", "Cleaner", "Personal Driver"]
                              )}

                              {properties.serviceType &&
                              properties.serviceType.value === "Tutor" ? (
                                <>
                                  <Row>
                                    <Col xs={12} md={6}>
                                      {this.renderCustomSelect(
                                        "subject",
                                        "What Subject?",
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
                              {properties.serviceType &&
                              properties.serviceType.value ===
                                "Personal Driver" ? (
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
                              {properties.serviceType &&
                              properties.serviceType.value === "Cleaner" ? (
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
                        {category_id === "3" ? (
                          <Col xs={12} md={12}>
                            {this.renderCustomSelect(
                              "digitalServiceType",
                              "Service Type",
                              ["Subscription Services", "Season Tickets"]
                            )}

                            {properties.digitalServiceType &&
                            properties.digitalServiceType.value ===
                              "Subscription Services" ? (
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
                                      "Number of Subscription Left",
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
                            {properties.digitalServiceType &&
                            properties.digitalServiceType.value ===
                              "Season Tickets" ? (
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
                                      "Number of People /ticket",
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
                            "termsAndConditions",
                            "Terms And Conditions",
                            "Terms And Conditions",
                            "textarea"
                          )}
                        </Col>
                      </Row>
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
                  {this.props.status === "success" && (
                    <Alert color="success">
                      An item has been successfully created
                    </Alert>
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
  errors: getErrors(state),
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  loadCategories: () => dispatch(loadCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItemForm);
