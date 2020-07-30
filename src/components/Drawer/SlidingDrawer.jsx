import React from "react";
import FilterComp from "../../pages/allItems/components/filterComp";
import { ProductsComp } from "../../pages/homePage/components";
import { Row, Col } from "reactstrap";

class SlidingDrawer extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <div className={drawerClasses}>
        <h3>Filter Your Search Here</h3>
        <FilterComp />
        <Row>
          <Col md={6} sm={12} xs={12}>
            <ProductsComp />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <ProductsComp />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <ProductsComp />
          </Col>
          <Col md={6} sm={12} xs={12}>
            <ProductsComp />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SlidingDrawer;
