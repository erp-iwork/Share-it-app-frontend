import React, { Component } from "react";
import { Col } from "reactstrap";
import { BuyHistory, Header, SellHistory } from "./components";

class BuyAndSellHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col>
        <Header />
        <BuyHistory />
        <SellHistory />
      </Col>
    );
  }
}

export default BuyAndSellHistory;
