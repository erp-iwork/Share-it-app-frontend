import React from "react";
import Joi from "joi-browser";
import { Col } from "reactstrap";
import MainForm from "../../../components/MainForm";

class ProductSharingForm extends MainForm {
  state = {
    data: {
      title: "",
      location: "",
      price: "",
      description: "",
      termsAndConditions: "",
      condition: "",
      properties: JSON.stringify({ color: "red" }),
    },
    errors: {},
  };
  schema = {
    properties: Joi.any().label("Properties"),
    condition: Joi.string().required().label("Condition"),
    title: Joi.string().required().label("Product Name"),
    location: Joi.string().required().label("Location"),
    price: Joi.number().required().label("Price"),
    description: Joi.string().required().label("Product Category"),
    termsAndConditions: Joi.string().required().label("Terms And Conditions"),
  };
  render() {
    return (
      <>
        <Col xs={12} md={6}>
          {this.renderInput("title", "Product Name", "Product Name")}
        </Col>
        <Col xs={12} md={6}>
          {this.renderInput("location", "Location", "Location")}
        </Col>
        <Col xs={12} md={6}>
          {this.renderInput("price", "Price", "Price")}
        </Col>
        <Col xs={12} md={6}>
          {this.renderInput("condition", "Condition", "Condition")}
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
