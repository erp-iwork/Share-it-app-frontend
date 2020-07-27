import React from "react";
import { Card, CardImg, CardBody, Col, CardText } from "reactstrap";
import { Mercedes1 } from "../../../assets/demoImages";

function CategoryCard({ subCategory }) {
  return (
    <Card className="zoom">
      <Col className="itemImgContainer-Home">
        <CardImg src={subCategory.icon} alt="" />
      </Col>
      <CardBody>
        <CardText className="cardText">
          <b>{subCategory.name} </b>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
