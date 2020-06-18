import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  Col,
  Row,
  CardHeader,
} from "reactstrap";
import Item from "../../assets/car1.png";
import { Link } from "react-router-dom";
import routes from "../../config/routes";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
        return (
        <div className="margin">
            <Link to={{ pathname: routes.singleItem }}>
          <Card className="relatedAdzoom">
            <Row>
              <Col md={6}>
                <CardImg src={Item} />
              </Col>
              <Col md={6}>
                <CardHeader className="cardHeader">
                  Item Name
                </CardHeader>
                <CardBody className="cardBody">Item Price</CardBody>
              </Col>
            </Row>
          </Card>
        </Link>
      </div>
    );
  }
}

export default Items;
