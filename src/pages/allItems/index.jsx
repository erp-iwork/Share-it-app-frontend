import React, { Component } from "react";
import MainBodyPage from "./components/mainBody";
import FilterComponent from "./components/filterComp";
import { Row, Col } from "reactstrap";

class AllItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <Row>
      //   <Col className="filterContainer" md={3}>
      //     <FilterComponent />
      //   </Col>
        <Col >
          <MainBodyPage />
        </Col>
      // </Row>
    );
  }
}

export default AllItems;
