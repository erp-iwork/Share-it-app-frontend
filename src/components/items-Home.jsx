import React, { Component } from "react";
import { Card, CardImg, Col, CardBody, Button, CardHeader } from "reactstrap";
// import Item from "../assets/car1.png";
import { Link } from "react-router-dom";
import routes from "../config/routes";
import { Mercedes4 } from "../assets/demoImages";
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
            <Col className="itemImgContainer-Home">
              <CardImg src={Mercedes4} />
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
