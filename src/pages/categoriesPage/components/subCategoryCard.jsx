import React, { Component } from "react";
import { Card, CardImg, CardBody, Col, CardText } from "reactstrap";
import { Mercedes1 } from "../../../assets/demoImages";

class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="zoom">
        <Col className="itemImgContainer-Home">
          <CardImg src={Mercedes1} alt="" />
        </Col>
        <CardBody>
          <CardText className="cardText">
            <b>SubCategory Name </b>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CategoryCard;
