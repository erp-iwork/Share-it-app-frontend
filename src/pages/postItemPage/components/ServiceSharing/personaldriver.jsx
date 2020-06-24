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
                Type Of Service ...
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
