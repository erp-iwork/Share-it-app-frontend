import React, { Component } from "react";
import { Col } from "reactstrap";
import MainForm from "../../../components/MainForm";

class ProductForm extends MainForm {
  render() {
    return (
      <div>
        <>
          <Col xs={12} md={6}>
            {this.renderInput("productName", "Product Name", "Product Name")}
          </Col>
          <Col xs={12} md={6}>
            {this.renderInput("location", "Location", "Location")}
          </Col>
          <Col xs={12} md={6}>
            {this.renderInput("price", "Price", "Price")}
          </Col>
          <Col xs={12} md={6}>
            {this.renderInput(
              "productCategory",
              "Product Caregory",
              "Product Caregory"
            )}
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

export default ProductForm;
