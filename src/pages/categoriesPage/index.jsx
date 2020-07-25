import React, { Component } from "react";
import MainBodyPage from "../categoriesPage/components/mainBody";
// import FilterComponent from "./components/filterComp";
import { Col } from "reactstrap";

class CategoriesPage extends Component {
  render() {
    const { state } = this.props.location;
    return (
      <Col>
        <MainBodyPage subcategory={state ? state.subcategory : ""} />
      </Col>
    );
  }
}

export default CategoriesPage;