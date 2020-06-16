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
        <Card className="bg-gradient-theme-left">
          <CardImg src={Item}></CardImg>
          <CardHeader className="cardHeader">
            Item Name
            <Button color="success" size="sm" disabled>
              Boosted
            </Button>
          </CardHeader>
          <CardBody>Item Price Goes Here</CardBody>
        </Card>
      </div>
    );
  }
}

export default Items;
