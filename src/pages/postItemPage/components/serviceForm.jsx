import React, { Component } from "react";
import MainForm from "../../../components/MainForm";
import { Col } from "reactstrap";

class serviceForm extends MainForm {
  render() {
    return (
      <div>
        <>
          <Col xs={12} md={6}>
            {this.renderInput("serviceType", "Service Type", "Service Type")}
          </Col>
          <Col xs={12} md={6}>
            {this.renderInput("location", "Location", "Location")}
          </Col>
          <Col xs={12} md={6}>
            {this.renderInput("price", "Price", "Price")}
          </Col>
          <Col xs={12} md={6}>
            {this.renderInput("productCategory", "Product Category")}
          </Col>
          <Col xs={12} md={12}>
            {this.renderInput(
              "description",
              "Description",
              "Description",
              "textarea"
            )}
          </Col>
          <Col xs={12} md={12}>
            {this.renderInput(
              "termsAndConditions",
              "Terms And Conditions",
              "Terms And Conditions",
              "textarea"
            )}
          </Col>
        </>
      </div>
    );
  }
}

export default serviceForm;
