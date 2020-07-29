import React, { Component } from "react";
import { Card, CardImg, CardBody, Col, CardText } from "reactstrap";
// import { Mercedes1 } from "../../../assets/demoImages";
import { MdStar, MdStarBorder } from "react-icons/md";

class ProductsComp extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card className="zoom">
        <Col className="itemImgContainer-Home mt-2">
          <CardImg src={item && item.item_images[0].image} alt="" />
        </Col>
        <CardBody>
          <div className="itemName">{item && item.title}</div>
          <CardText className="cardText">
            <div className="personName">{item && item.owner.name}</div>
            <div className="pricetag">$ {item && item.price}</div>
            <div className="ratingColor">
              <MdStar fontSize={15} className="rating" />
              <MdStar fontSize={15} className="rating" />
              <MdStarBorder fontSize={15} />
              <MdStarBorder fontSize={15} />
              <MdStarBorder fontSize={15} /> (23)
            </div>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default ProductsComp;


