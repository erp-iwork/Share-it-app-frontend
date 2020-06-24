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
  FormGroup,
  Label,
  Input,
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
  serviceType = ["Tutor", "Cleaner", "Personal Driver"];
  tutor = [
    "subject",
    "levelOfStudy",
    "tutorTimeDedication",
    "tutorAvailability",
    "methodOfTutoring",
    "tutorPaymentDuration",
  ];
  personalDriver = [
    "methodOfService",
    "ownACar",
    "personalDriverTimeDedication",
    "experience",
    "paymentOptions",
  ];
  cleaner = [
    "comfortServiceZone",
    "cleanerTimeDedication",
    "cleanerAvailability",
    "numberOfPeople",
    "cleanerPaymentDuration",
  ];
  handlePropertyChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data.properties[input.name] = input.value;
    if (input.value === "Tutor") {
      for (const key of this.personalDriver) {
        delete data.properties[key];
      }
      for (const key of this.cleaner) {
        delete data.properties[key];
      }
    }
    if (input.value === "Cleaner") {
      for (const key of this.tutor) {
        delete data.properties[key];
      }
      for (const key of this.personalDriver) {
        delete data.properties[key];
      }
    }
    if (input.value === "Personal Driver") {
      for (const key of this.tutor) {
        delete data.properties[key];
      }
      for (const key of this.cleaner) {
        delete data.properties[key];
      }
    }
    this.setState({ data });
  };

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
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Service Type
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="select"
                                    name="serviceType"
                                    onChange={this.handlePropertyChange}
                                  >
                                    <option value="">
                                      Select Your Service Type
                                    </option>
                                    <option value="Tutor">Tutor</option>
                                    <option value="Cleaner">Cleaner</option>
                                    <option value="Personal Driver">
                                      Personal Driver
                                    </option>
                                  </Input>
                                </Col>
                              </FormGroup>

                              {properties.serviceType === "Tutor" ? (
                                <>
                                  <Row>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          What Subject?
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="subject"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Art">Art</option>
                                            <option value="Citizenship">
                                              Citizenship
                                            </option>
                                            <option value="essay">Essay</option>
                                            <option value="French">
                                              French
                                            </option>
                                            <option value="Geography">
                                              Geography
                                            </option>
                                            <option value="Mathematics">
                                              Mathematics
                                            </option>
                                            <option value="Science">
                                              Science
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Level Of Study
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="levelOfStudy"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Primary">
                                              Primary
                                            </option>
                                            <option value="A-Level">
                                              A-Level
                                            </option>
                                            <option value="Secondary">
                                              Secondary
                                            </option>
                                            <option value="Undergraduate">
                                              Undergraduate
                                            </option>
                                            <option value="GCSE">GCSE</option>
                                            <option value="IGCSE">IGCSE</option>
                                            <option value="Postgraduate">
                                              Postgraduate
                                            </option>
                                            <option value="ib">IB</option>
                                            <option value="Professional">
                                              Professional
                                            </option>
                                            <option value="Admission">
                                              Admission
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>

                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Time Dedication
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="tutorTimeDedication"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Occasional">
                                              Occasional
                                            </option>
                                            <option value="1-2 hours per week">
                                              1-2 hours per week
                                            </option>
                                            <option value="Over 2 hours per week">
                                              Over 2 hours per week
                                            </option>
                                            <option value="Intensive">
                                              Intensive
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Availability Comfort Zone
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="tutorAvailability"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Weekend Evening">
                                              Weekend Evening
                                            </option>
                                            <option value="Weekend Morning">
                                              Weekend Morning
                                            </option>
                                            <option value="Weekday Evening">
                                              Weekday Evening{" "}
                                            </option>
                                            <option value="Weekday Morning">
                                              Weekday Morning
                                            </option>
                                            <option value="flexible">
                                              Flexible
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Method Of Tutoring
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="methodOfTutoring"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Online">
                                              Online
                                            </option>
                                            <option value="Face to Face">
                                              Face to Face
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Payment Duration
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="tutorPaymentDuration"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Weekly">
                                              Weekly
                                            </option>
                                            <option value="Monthly">
                                              Monthly
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </>
                              ) : null}
                              {properties.serviceType === "Personal Driver" ? (
                                <>
                                  <Row>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Method Of Service
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="methodOfService"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Personal">
                                              Personal
                                            </option>
                                            <option value="Hourly">
                                              Hourly
                                            </option>
                                            <option value="Car-Pickup">
                                              Car-Pickup
                                            </option>
                                            <option value="Flexible">
                                              Flexible
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Do You own a Car??
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="ownACar"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>

                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Time Dedication
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="cleanerTimeDedication"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Occasional">
                                              Occasional
                                            </option>
                                            <option value="Full Time">
                                              Full Time
                                            </option>
                                            <option value="Flexible">
                                              Flexible
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Any Driving Experience?
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="experience"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Less than a Year">
                                              Less than a Year
                                            </option>
                                            <option value="One Year Experience">
                                              One Year Experience
                                            </option>
                                            <option value="Two Years Experience">
                                              Two Years Experience
                                            </option>
                                            <option value="Three Years Experience">
                                              Three Years Experience
                                            </option>
                                            <option value="More Than Three Years">
                                              More Than Three Years
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={12}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Payment Options
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="paymentOptions"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="On Hand">
                                              On Hand
                                            </option>
                                            <option value="Credit Card">
                                              Credit Card
                                            </option>
                                            <option value="Online Transaction">
                                              Online Transaction
                                            </option>
                                            <option value="Flexible">
                                              Flexible
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </>
                              ) : null}
                              {properties.serviceType === "Cleaner" ? (
                                <>
                                  <Row>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Comfort Service Zone
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="comfortServiceZone"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Commercial (e.g. office)">
                                              Commercial (e.g. office)
                                            </option>
                                            <option value="Religious Buildings">
                                              Religious Buildings
                                            </option>
                                            <option value="Industrial (e.g Warehouses)">
                                              Industrial (e.g Warehouses)
                                            </option>
                                            <option value="Retail location">
                                              Retail location
                                            </option>
                                            <option value="Restaurants || Bars">
                                              Restaurants || Bars
                                            </option>
                                            <option value="Flexible">
                                              Flexible
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Time Dedication
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="personalDriverTimeDedication"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Daily">Daily</option>
                                            <option value="Twice a Month">
                                              Twice a Month
                                            </option>
                                            <option value="Twice a Week">
                                              Twice a Week
                                            </option>
                                            <option value="Weekly">
                                              Weekly
                                            </option>
                                            <option value="Flexible">
                                              Flexible
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Availability Comfort Zone
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="cleanerAvailability"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Evenings">
                                              Evenings
                                            </option>
                                            <option value="Mornings">
                                              Mornings
                                            </option>
                                            <option value="Flexible">
                                              Flexible
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={6}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          How Many are you?
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="numberOfPeople"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Just Me">
                                              Just Me
                                            </option>
                                            <option value="Me and A Friend">
                                              Me and A Friend
                                            </option>
                                            <option value="More Than Three">
                                              More Than Three
                                            </option>
                                            <option value="Depends on the Area">
                                              Depends on the Area
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                    <Col xs={12} md={12}>
                                      <FormGroup>
                                        <Label for="exampleEmail" sm={12}>
                                          Payment Duration
                                        </Label>
                                        <Col sm={12}>
                                          <Input
                                            type="select"
                                            name="cleanerPaymentDuration"
                                            onChange={this.handlePropertyChange}
                                          >
                                            <option value="Daily">Daily</option>
                                            <option value="Weekly">
                                              Weekly
                                            </option>
                                            <option value="Monthly">
                                              Monthly
                                            </option>
                                            <option value="Flexible">
                                              Flexible
                                            </option>
                                          </Input>
                                        </Col>
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </>
                              ) : null}
                            </Col>
                          </>
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
