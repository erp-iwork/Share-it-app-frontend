import React, { Component } from "react";
import { loadFilteredItems, getFilteredItems } from "../../../store/items";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import ProductsComp from "../../homePage/components/Products";

class MainBodyPage extends Component {
  componentDidMount() {
    this.props.loadFilteredItems({
      sub_category: this.props.subcategory.id,
    });
  }
  render() {
    return (
      <div className="m-5">
        <Row>
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>{" "}
          <Col md={2} xs={12} sm={12}>
            <ProductsComp />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getFilteredItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilteredItems: (options) => dispatch(loadFilteredItems(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyPage);
