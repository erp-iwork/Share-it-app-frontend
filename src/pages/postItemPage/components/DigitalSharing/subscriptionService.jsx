import React, { Component } from "react";
import { Col, Row, FormGroup, Input, Label } from "reactstrap";

class SubscriptionService extends Component {
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
                Subscription Type
              </Label>
              <Col sm={12}>
                <Input type="select" name="name">
                  <option>Netflix</option>
                  <option>Amazon</option>
                  <option>Disney</option>
                  <option>ESPN</option>
                  <option>Other</option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Number of Subscription Left
              </Label>
              <Col sm={12}>
                <Input type="select" name="name">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Start Date
              </Label>
              <Col sm={12}>
                <Input type="date" name="name"></Input>
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                End Date
              </Label>
              <Col sm={12}>
                <Input type="date" name="name"></Input>
              </Col>
            </FormGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default SubscriptionService;
