import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Page from "../../../components/Page";
import Items from "../../homePage/components/items";

class MainBodyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page
        className="mainBodyContainer"
        breadcrumbs={[{ name: "Category/ SubCategory Name", active: true }]}
      >
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

      </Page>
    );
  }
}

export default MainBodyPage;
