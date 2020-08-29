import React from "react";
import { Card, CardImg, CardBody, CardText, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { MdStar, MdStarBorder } from "react-icons/md";

/**
 * Interface
 * Input - title:string, boost:boolean, price: string, image:string
 */

const Item = ({ item }) => {
  return (
    <div className="margin">
      <Link to={`/items/${item.itemId}`}>
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
      </Link>
    </div>
  );
};

export default Item;
