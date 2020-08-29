import React, { Component } from "react";
import { Col } from "reactstrap";
import { BuyHistory, Header } from "./components";

class BuyAndSellHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col className="statsticsContainer">
        <Header />
        <BuyHistory />
      </Col>
    );
  }
}

export default BuyAndSellHistory;
