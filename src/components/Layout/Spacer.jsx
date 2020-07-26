import React from "react";
import { Col } from "reactstrap";
import Divider from "../../assets/newResources/Dividers.svg";

const CategorySpacer = ({ title }) => {
  return (
    <>
      <div className="mainspacer" />
      <Col align="center">
        <img src={Divider} alt="" />
        <div className="mainspacer" />
        <h4>{title}</h4>
      </Col>
      <div className="mainspacer" />
    </>
  );
};

export default CategorySpacer;
