import React, { Component } from "react";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { toast } from "react-toastify";

class ServiceSharingComp extends Component {
  state = {};

  handleChange = (event) => {
    if (event.target.value !== "Tutor" && event.target.name === "ServiceType") {
      toast.error("Download the Mobile App To Use This Service");
    }
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Col xs={12} md={6}>
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
                <option value="Nanny">Nanny</option>
              </Input>
            </Col>
          </FormGroup>
        </Col>
        <Col xs={12} md={6}>
          <FormGroup>
            <Label for="exampleEmail" sm={12}>
              What Subject? ...
            </Label>
            <Col sm={12}>
              <Input type="select" name="name">
                <option>Art</option>
                <option>Citizenship</option>
                <option>Essay</option>
                <option>French</option>
                <option>Geography</option>
                <option>Mathematics</option>
                <option>Science</option>
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
              <Input type="select" name="name">
                <option>Primary</option>
                <option>A-Level</option>
                <option>Secondary</option>
                <option>Undergraduate</option>
                <option>GCSE</option>
                <option>IGCSE</option>
                <option>Postgraduate</option>
                <option>IB</option>
                <option>Professional</option>
                <option>Admission</option>
                <option>Admission</option>
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
              <Input type="select" name="name">
                <option>Occasional</option>
                <option>1-2 hours per week</option>
                <option>Over 2 hours per week</option>
                <option>Intensive</option>
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
              <Input type="select" name="name">
                <option>Weekend Evening</option>
                <option>Weekend Morning</option>
                <option>Weekday Evening </option>
                <option>Weekday Morning</option>
                <option>Flexible ... </option>
              </Input>
            </Col>
          </FormGroup>
        </Col>
        <Col xs={12} md={6}>
          <FormGroup>
            <Label for="exampleEmail" sm={12}>
              Method Of Tutoring ...
            </Label>
            <Col sm={12}>
              <Input type="select" name="name">
                <option>Online</option>
                <option>Face to Face</option>
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
              <Input type="select" name="name">
                <option>Weekly</option>
                <option>Monthly</option>
              </Input>
            </Col>
          </FormGroup>
        </Col>
        <Col xs={12} md={6}>
          <FormGroup>
            <Label for="exampleEmail" sm={12}>
              Pricing ...
            </Label>
            <Col sm={12}>
              <Input type="number" name="name" placeholder="Pricing" />
            </Col>
          </FormGroup>
        </Col>
      </>
    );
  }
}

export default ServiceSharingComp;
