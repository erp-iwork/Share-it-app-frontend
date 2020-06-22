import React, { Component } from "react";
import { Col, Row, Button } from "reactstrap";
import Page from "../../../components/Page";
import ImageNotFound from "../../../assets/loader/404.gif";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";

class ItemNotFoundComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page>
        <Row>
          <Col md={8} className="singleItemNotFound">
            <img alt="" src={ImageNotFound} />
          </Col>
          <Col md={4} align="center">
            <div className="ItemNotFound"></div>
            <div className="ItemNotFound">
              <b>ITEM NOT FOUND!</b>
            </div>
            <div className="ItemNotFoundSub">
              Make sure you typed the URL Carefully
            </div>
            <Link to={{ pathname: routes.homePage }}>
              <Button size="lg" block outline>
                BACK TO HOME
              </Button>
            </Link>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default ItemNotFoundComp;
