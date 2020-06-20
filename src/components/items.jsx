import React, { Component } from "react";
import { Card, Col, CardImg, CardBody, Button, CardHeader } from "reactstrap";
// import Item from "../assets/car1.png";
import { Link } from "react-router-dom";
import routes from "../config/routes";
import { Mercedes1 } from "../assets/demoImages";
class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="margin">
        <Link to={{ pathname: routes.singleItem }}>
          <Card className="zoom">
            <Col className="itemImgContainer">
              <CardImg src={Mercedes1} />
            </Col>
            <CardHeader className="cardHeader">
              Item Name
              <Button size="sm" color="success" disabled>
                Boosted
              </Button>
            </CardHeader>
            <CardBody className="cardBody">Item Price</CardBody>
          </Card>
        </Link>
      </div>
    );
  }
}

export default Items;
