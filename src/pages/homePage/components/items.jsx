import React, { Component } from "react";
import { Card, CardImg, CardBody, Button, CardHeader } from "reactstrap";
import Item from "../../../assets/car1.png";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="margin">
        <Card className="zoom">
          <CardImg src={Item} />
          <CardHeader className="cardHeader">
            Item Name
            <Button size="sm" color="success" disabled>
              Boosted
            </Button>
          </CardHeader>
          <CardBody className="cardBody">Item Price</CardBody>
        </Card>
      </div>
    );
  }
}

export default Items;
