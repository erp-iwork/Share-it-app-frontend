import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ProductsComp from "./Products";

class PopularAmongUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="popularAmongUsersContainer">
        <Row>
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} sm={12} xs={12}>
            <ProductsComp />
          </Col>{" "}
        </Row>
      </div>
    );
  }
}

export default PopularAmongUsers;
