import React, { Component } from "react";
import { Col, Row, FormGroup, Input, Label } from "reactstrap";

class SeasonTickets extends Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Event Type
              </Label>
              <Col sm={12}>
                <Input type="select" name="name">
                  <option>Sports</option>
                  <option>Religious Sermons</option>
                  <option>Others</option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Number of People <small> || per ticket</small>
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
                Number Of Tickets
              </Label>
              <Col sm={12}>
                <Input
                  type="number"
                  name="name"
                  placeholder="Number Of Tickets"
                />
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="exampleEmail" sm={12}>
                Event Start Date
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

export default SeasonTickets;
