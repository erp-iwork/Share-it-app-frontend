import React, { Component } from "react";
import {
  Col,
  Row,
  FormGroup,
  Input,
  Label,
  Button,
  CardFooter,
} from "reactstrap";

class TutorService extends Component {
  state = {};
  render() {
    return (
      <>
        <Row>
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
        </Row>
      </>
    );
  }
}

export default TutorService;
