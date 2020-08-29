import React, { Component } from "react";
import {
  Col,
  Row,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

class CleanerService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Row>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Comfort Service Zone
              </Label>
              <Col sm={12}>
                <Input type="select" name="name">
                  <option>Commercial (e.g. office)</option>
                  <option>Religious Buildings</option>
                  <option>Industrial (e.g Warehouses)</option>
                  <option>Retail location</option>
                  <option>Restaurants || Bars</option>
                  <option>Flexible ...</option>
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
                  <option>Daily</option>
                  <option>Twice a Month</option>
                  <option>Twice a Week</option>
                  <option>Weekly</option>
                  <option>Flexible</option>
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
                  <option>Evenings</option>
                  <option>Mornings</option>
                  <option>Flexible ... </option>
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
                <Input type="select" name="name">
                  <option>Just Me</option>
                  <option>Me and A Friend</option>
                  <option>More Than Three</option>
                  <option>Depends on the Area ...</option>
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
                <Input type="select" name="name">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Flexible</option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </>
    
    );
  }
}

export default CleanerService;
