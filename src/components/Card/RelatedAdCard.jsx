import React, { Component } from "react";
import { Card, CardImg, CardBody, Col, Row, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

class Items extends Component {
  render() {
    const { title, item_images, price, itemId } = this.props.item;
    return (
      <div className="margin">
        <Link to={`/items/${itemId}`}>
          <Card className="relatedAdzoom">
            <Row>
              <Col md={6}>
                <CardImg src={item_images[0].image} />
              </Col>
              <Col md={6}>
                <CardHeader className="cardHeader">{title}</CardHeader>
                <CardBody className="cardBody">{price + "$"}</CardBody>
              </Col>
            </Row>
          </Card>
        </Link>
      </div>
    );
  }
}

export default Items;
