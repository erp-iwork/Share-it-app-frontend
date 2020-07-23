import React, { Component } from "react";
import { Row, Col, Button, Input } from "reactstrap";
import SearchImage from "../../../assets/newResources/SearchImage.jpg";
import Spacer from "./Spacer";

class HomePageSearch extends Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col md={5} className="searchImageContainer">
            <img src={SearchImage} alt="" />
          </Col>
          <Col md={7} align="center" className="searchformLayout">
            <h1>
              <b>
                SHARE ANYTHING , <div>ANYWHERE ...</div>{" "}
              </b>
            </h1>
            <Input
              placeholder="Search Sharreit ..."
              className="searchInputHome"
            />
            <Col align="right">
              <Button className="buttonPaddingRight">SEARCH</Button>
              <b>
                <i>OR</i>
              </b>
              <Button outline className="buttonPaddingLeft" color="success">
                START SHARING
              </Button>
            </Col>
          </Col>
        </Row>
        <Spacer title="PREMIUM SHARES" />
      </>
    );
  }
}

export default HomePageSearch;
