import React, { Component } from "react";
import { Card, CardImg, CardBody, Col, CardText } from "reactstrap";
import { Mercedes1 } from "../../../assets/demoImages";
import { MdStar, MdStarBorder } from "react-icons/md";

class ProductsComp extends Component {
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
          <div>Item Title Goes Here</div>
          <CardText className="cardText">
            <div>Christopher B.</div>
            <div className="pricetag">$ 29 / Day</div>
            <div>
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
