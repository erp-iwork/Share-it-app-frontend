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

class PersonalDriverService extends Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Method Of Service ...
              </Label>
              <Col sm={12}>
                <Input type="select" name="name">
                  <option>Personal</option>
                  <option>Hourly</option>
                  <option>Car-Pickup</option>
                  <option>Flexible ... </option>
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
                <Input type="select" name="name">
                  <option>Yes</option>
                  <option>No</option>
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
                  <option>Full Time</option>
                  <option>Flexible ...</option>
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
                <Input type="select" name="name">
                  <option>Less than a Year</option>
                  <option>One Year Experience</option>
                  <option>Two Years Experience</option>
                  <option>Three Years Experience</option>
                  <option>More Than Three Years</option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Payment Options
              </Label>
              <Col sm={12}>
                <Input type="select" name="name">
                  <option>On Hand</option>
                  <option>Credit Card</option>
                  <option>Online Transaction</option>
                  <option>Flexible</option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Pricing /Miles
              </Label>
              <Col sm={12}>
                <Input type="number" name="name" placeholder="Pricing" />
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={12}>
            <CardFooter>
              <Button outline block>
                Share
              </Button>
            </CardFooter>
          </Col>
        </Row>
      </>
    );
  }
}

export default PersonalDriverService;
