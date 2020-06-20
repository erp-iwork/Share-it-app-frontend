import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import SubHeader from "../../components/Layout/SubHeader";
import Items from "../../components/items-Home";
// import Items from "./components/items";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="BackContainer">
        <SubHeader />
        <Row>
          <Col md={3} sm={12} xs={12}>
            <Items />
          </Col>
          <Col md={3} sm={12} xs={12}>
            <Items />
          </Col>
          <Col md={3} sm={12} xs={12}>
            <Items />
          </Col>{" "}
          <Col md={3} sm={12} xs={12}>
            <Items />
          </Col>{" "}
          <Col md={3} sm={12} xs={12}>
            <Items />
          </Col>{" "}
          <Col md={3} sm={12} xs={12}>
            <Items />
          </Col>{" "}
          <Col md={3} sm={12} xs={12}>
            <Items />
          </Col>{" "}
          <Col md={3} sm={12} xs={12}>
            <Items />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
