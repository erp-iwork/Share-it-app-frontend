import React, { Component } from "react";
import { Card, CardImg, CardBody, Col, CardText } from "reactstrap";
import { Mercedes1, BlueCamera } from "../../../assets/demoImages";
import { MdStar, MdStarBorder } from "react-icons/md";


class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="zoom">
        <Col className="itemImgContainer-Category">
          <CardImg src={BlueCamera} alt="" />
        </Col>
        <CardBody>
          <div>Category name Goes Here</div>
          
        </CardBody>
      </Card>
    );
  }
}

export default CategoryCard;
