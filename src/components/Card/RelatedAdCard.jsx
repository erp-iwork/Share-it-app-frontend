import React, { Component } from "react";
import { Card, CardImg, CardBody, Col, Row, CardHeader } from "reactstrap";
import Item from "../../assets/car1.png";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="margin">
        <Card className="relatedAdzoom">
          <Row>
            <Col md={6}>
              <CardImg src={Item} />
            </Col>
            <Col md={6}>
              <CardHeader className="cardHeader">Item Name</CardHeader>
              <CardBody className="cardBody">Item Price</CardBody>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Items;
