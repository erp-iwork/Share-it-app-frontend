import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Page from "../../../components/Page";
import Items from "../../../components/items";

class SharedItemsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page breadcrumbs={[{ name: "John's Shares", active: true }]}>
        <Row>
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
          </Col>
        </Row>
      </Page>
    );
  }
}

export default SharedItemsComp;
