import React, { Component } from "react";
import MainBodyPage from "./components/mainBody";
// import FilterComponent from "./components/filterComp";
import { Col } from "reactstrap";

class AllItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col>
        <MainBodyPage />
      </Col>
    );
  }
}

export default AllItems;
