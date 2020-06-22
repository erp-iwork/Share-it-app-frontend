import React, { Component } from "react";
import Joi from "joi-browser";
import { Col } from "reactstrap";
import MainForm from "../../../components/MainForm";

class ProductSharingForm extends MainForm {
  state = {
    data: {
      category: "product",
      productName: "",
      location: "",
      price: "",
      productCategory: "",
      description: "",
      termsAndConditions: "",
    },
    errors: {},
  };
  schema = {
    category: Joi.string().required().label("Category"),
    productName: Joi.string().required().label("Product Name"),
    location: Joi.string().required().label("Location"),
    price: Joi.string().required().label("Price"),
    productCategory: Joi.string().required().label("Product Category"),
    description: Joi.string().required().label("Product Category"),
    termsAndConditions: Joi.string().required().label("Terms And Conditions"),
  };
  render() {
    return (
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
    );
  }
}

export default ProductSharingForm;
