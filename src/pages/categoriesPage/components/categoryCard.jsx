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
        <Col className="itemImgContainer-Home">
          <CardImg src={Mercedes1} alt="" />
        </Col>
        <CardBody>
         
          <CardText className="cardText">
            <b>This category </b>
           
           
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CategoryCard;
