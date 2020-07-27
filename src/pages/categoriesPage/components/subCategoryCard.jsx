import React from "react";
import { Card, CardImg, CardBody, Col, CardText } from "reactstrap";
import { Mercedes1 } from "../../../assets/demoImages";
import { Link } from "react-router-dom";

function CategoryCard({ subCategory }) {
  return (
    <Link to={`/items/subcategory/${subCategory.id}`}>
      {" "}
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
    </Link>
  );
}

export default CategoryCard;
