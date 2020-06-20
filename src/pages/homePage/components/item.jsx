import React from "react";
import { Card, CardImg, CardBody, Button, CardHeader } from "reactstrap";
// import Item from "../../../assets/car1.png";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";

/**
 * Interface
 * Input - title:string, boost:boolean, price: string, image:string
 */

const Item = ({ item }) => {
  return (
    <div className="margin">
      <Link to={`/items/${item.itemId}`}>
        <Card className="zoom">
          <CardImg src={item.item_images[0].image} />
          <CardHeader className="cardHeader">
            {item.title}
            <Button size="sm" color="success" disabled>
              {/* {boost ? "Boosted" : ""} */}
              Boosted
            </Button>
          </CardHeader>
          <CardBody className="cardBody">{item.price}</CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
