import React from "react";
import { Card, CardImg, CardBody, Button, CardHeader, Col } from "reactstrap";
import { Link } from "react-router-dom";

/**
 * Interface
 * Input - title:string, boost:boolean, price: string, image:string
 */

const Item = ({ item }) => {
  return (
    <div className="margin">
      <Link to={`/items/${item.itemId}`}>
        <Card className="zoom">
          <Col className="itemImgContainer-Home">
            <CardImg src={item.item_images[0].image} />
          </Col>
          <CardHeader className="cardHeader">
            {item.title}
            {/* <Button size="sm" color="success" disabled>
              Boosted
            </Button> */}
          </CardHeader>
          <CardBody className="cardBody">Price : {item.price}</CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
