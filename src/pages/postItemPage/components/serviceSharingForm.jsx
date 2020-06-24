import React, { Component } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { Cleaner, Tutor, PersonalDriver } from "./ServiceSharing";

class ServiceSharingForm extends Component {
  state = {
    tutor: false,
    cleaner: false,
    PersonalDriver: false,
  };

  handleChange = (event) => {
    if (event.target.value === "Tutor" && event.target.name === "ServiceType") {
      this.setState({
        tutor: true,
        cleaner: false,
        personaldriver: false,
      });
    } else if (
      event.target.value === "Cleaner" &&
      event.target.name === "ServiceType"
    ) {
      this.setState({
        cleaner: true,
        tutor: false,
        personaldriver: false,
      });
    } else if (
      event.target.value === "PersonalDriver" &&
      event.target.name === "ServiceType"
    ) {
      this.setState({
        cleaner: false,
        tutor: false,
        personaldriver: true,
      });
    }
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { tutor, personaldriver, cleaner } = this.state;

    return (
      <>
        <Col xs={12} md={12}>
          <FormGroup>
            <Label for="exampleEmail" sm={12}>
              Service Type
            </Label>
            <Col sm={12}>
              <Input
                type="select"
                name="ServiceType"
                onChange={this.handleChange}
              >
                <option value="">Select Your Service Type</option>
                <option value="Tutor">Tutor</option>
                <option value="Cleaner">Cleaner</option>
                <option value="PersonalDriver">Personal Driver</option>
              </Input>
            </Col>
          </FormGroup>
          {tutor ? <Tutor /> : null}
          {personaldriver ? <PersonalDriver /> : null}
          {cleaner ? <Cleaner /> : null}
        </Col>
      </>
    );
  }
}

export default ServiceSharingForm;
