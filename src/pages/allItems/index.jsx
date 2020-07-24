import React, { Component } from "react";
import MainBodyPage from "./components/mainBody";
// import FilterComponent from "./components/filterComp";
import { Col } from "reactstrap";

class AllItems extends Component {
  render() {
    const { state } = this.props.location;
    return (
      <Col>
        <MainBodyPage subcategory={state ? state.subcategory : ""} />
      </Col>
    );
  }
}

export default AllItems;