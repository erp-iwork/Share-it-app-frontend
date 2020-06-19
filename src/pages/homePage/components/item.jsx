import React from "react";
import { Card, CardImg, CardBody, Button, CardHeader } from "reactstrap";
// import Item from "../../../assets/car1.png";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";

/**
 * Interface
 * Input - title:string, boost:boolean, price: string, image:string
 */

const Item = ({ title, boost, price, image }) => {
  return (
    <div className="margin">
      <Link to={{ pathname: routes.singleItem }}>
        <Card className="zoom">
          <CardImg src={image} />
          <CardHeader className="cardHeader">
            {title}
            <Button size="sm" color="success" disabled>
              {/* {boost ? "Boosted" : ""} */}
              Boosted
            </Button>
          </CardHeader>
          <CardBody className="cardBody">{price}</CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Item;
