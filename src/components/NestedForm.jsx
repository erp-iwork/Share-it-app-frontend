import React, { Component } from "react";
import { Input, Label, Col, FormGroup, Button, FormFeedback } from "reactstrap";
import LoadingSpinner from "./loader";

class NestedForm extends Component {
  state = {
    data: {},
  };

  serviceType = ["Tutor", "Cleaner", "Personal Driver"];
  digitalServiceType = ["Subscription Service", "Season Tickets"];
  sharingType = ["serviceType", "digitalServiceType"];

  nameMapToLabel = {
    serviceType: "Service Type",
    digitalServiceType: "Service Type",
    subject: "Subject",
    levelOfStudy: "Level Of Study",
    tutorTimeDedication: "Time Dedication",
    tutorAvailability: "Availability",
    methodOfTutoring: "Method of Tutoring",
    tutorPaymentDuration: "Payment Duration",
    methodOfService: "Service Method",
    ownACar: "Do you Own a Car?",
    personalDriverTimeDedication: "Time Dedication",
    experience: "Experience",
    paymentOptions: "Payment Options",
    comfortServiceZone: "Comfort Service Zone",
    cleanerTimeDedication: "Time Dedication",
    cleanerAvailability: "Availability",
    cleanerNumberOfPeople: "Cleaners",
    cleanerPaymentDuration: "Payment Duration",
    subscriptionType: "Type",
    numberofSubscriptionLeft: "Subscriptions Left",
    subscriptionStartDate: "Start Date",
    subscriptionEndDate: "End Date",
    eventType: "Event Type",
    seasonTicketsNumberOfPeople: "People/Ticket",
    numberOfTickets: "No' of Tickets",
    eventStartDate: "Start Date",
  };

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
    "cleanerNumberOfPeople",
    "cleanerPaymentDuration",
  ];

  subscriptionService = [
    "subscriptionType",
    "numberofSubscriptionLeft",
    "subscriptionStartDate",
    "subscriptionEndDate",
  ];
  seasonTickets = [
    "eventType",
    "seasonTicketsNumberOfPeople",
    "numberOfTickets",
    "eventStartDate",
  ];

  handlePropertyChange = ({ currentTarget: input }) => {
    console.log(input.name, input.value);
    const data = { ...this.state.data };
    if (input.name === ("serviceType" || "digitalServiceType")) {
      data.properties = {};
    }
    data.properties[input.name] = {
      label: this.nameMapToLabel[input.name],
      value: input.value,
    };
    this.setState({ data });
  };

  // when the user types to change the value of the state accordingly
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    if (input.name === "category_id") {
      data.properties = {};
      let selectedCategory = this.props.categories.find(
        (catagory) => catagory.id == input.value
      );
      this.setState({ selectedCategory });
    } //reset properties TODO
    data[input.name] = input.value; //dynamically access .. property
    this.setState({ data });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.doSubmit();
  };

  renderButton(label) {
    return (
      <FormGroup align="center" md={12}>
        <Button outline disabled={this.props.loading}>
          {this.props.loading ? <LoadingSpinner /> : label}
        </Button>
      </FormGroup>
    );
  }
  renderCustomSelect(name, label, options) {
    return (
      <FormGroup>
        <Label for="exampleEmail" sm={12}>
          {label}
        </Label>
        <Col sm={12}>
          <Input type="select" name={name} onChange={this.handlePropertyChange}>
            <option value=""></option>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Input>
        </Col>
      </FormGroup>
    );
  }
  renderDateInput(name, label) {
    return (
      <FormGroup>
        <Label for="exampleEmail" sm={12}>
          {label}
        </Label>
        <Col sm={12}>
          <Input
            type="date"
            name={name}
            onChange={this.handlePropertyChange}
          ></Input>
        </Col>
      </FormGroup>
    );
  }
  renderSelect(name, label, options) {
    const { data } = this.state;
    return (
      <FormGroup>
        <Label htmlFor={name} sm={12}>
          {label}
        </Label>
        <Col sm={12}>
          <Input
            type="select"
            name={name}
            onChange={this.handleChange}
            value={data[name]}
            invalid={
              this.props.errors && this.props.errors[name] ? true : false
            }
          >
            <option value="" />
            {options.map((option) => (
              <option value={option.id}>{option.category}</option>
            ))}
          </Input>
          <FormFeedback>
            {this.props.errors && this.props.errors[name]}
          </FormFeedback>
        </Col>
      </FormGroup>
    );
  }
  renderInput(name, label, placeholder, type = "text") {
    const { data } = this.state;
    return (
      <FormGroup>
        <Label for={name} sm={12}>
          {label}
        </Label>
        <Col sm={12}>
          <Input
            type={type}
            name={name}
            value={data[name]}
            placeholder={placeholder}
            onChange={this.handleChange}
            invalid={
              this.props.errors && this.props.errors[name] ? true : false
            }
          />
          <FormFeedback>
            {this.props.errors && this.props.errors[name]}
          </FormFeedback>
        </Col>
      </FormGroup>
    );
  }
  render() {
    return <div></div>;
  }
}

export default NestedForm;
