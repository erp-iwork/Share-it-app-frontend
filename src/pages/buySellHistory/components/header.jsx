import React, { Component } from "react";
import { Col, Row, Button } from "reactstrap";

class BuyAndSellHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Row>
        <Col>
          <Button color="success" block outline>
            YOUR SHARED ITEMS
          </Button>
        </Col>
        <Col>
          <Button block outline>
            ITEMS YOU SHARED
          </Button>
        </Col>
      </Row>
    );
  }
}

export default BuyAndSellHeader;
