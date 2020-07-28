import React, { Component } from "react";
// import { Row, Col, Button, Input } from "reactstrap";
import SearchImage from "../../../assets/newResources/SearchImage.jpg";
import { Spacer } from "../../../components/Layout";
import { Link } from "react-router-dom";
import routes from "../../../config/routes";
import {
  Popover,
  PopoverBody,
  Card,
  Row,
  Col,
  Button,
  Input,
  CardBody,
  CardHeader,
} from "reactstrap";
import { ProductsComp } from "./index";
class HomePageSearch extends Component {
  state = {
    isOpenSearchPopover: false,
  };

  toggleSearchPopover = (target) => {
    this.setState({
      target: target,
      isOpenSearchPopover: !this.state.isOpenSearchPopover,
      isOpenSearchCardPopover: false,
    });
  };
  render() {
    return (
      <>
        <Popover
          placement="bottom-start"
          isOpen={this.state.isOpenSearchPopover}
          toggle={this.toggleSearchPopover}
          target="SearchPopover"
          className="p-0"
          style={{ minWidth: 950 }}
        >
          <PopoverBody
          
          className="border-light">
            <Card>
              <CardHeader>Search Results For "Search Input here"</CardHeader>
              <CardBody>
                <Row>
                  <Col md={4}>
                    <ProductsComp />
                  </Col>
                  <Col md={4}>
                    <ProductsComp />
                  </Col>
                  <Col md={4}>
                    <ProductsComp />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </PopoverBody>
        </Popover>
        <Row>
          <Col md={5} className="searchImageContainer">
            <img src={SearchImage} alt="" />
          </Col>
          <Col
            md={7}
            align="center"
            className="searchformLayout"
            id="SearchPopover"
          >
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
              <Link to={{ pathname: routes.postItem }}>
                <Button outline className="buttonPaddingLeft" color="success">
                  START SHARING
                </Button>
              </Link>
            </Col>
          </Col>
        </Row>
        <Spacer title="PREMIUM SHARES" />
      </>
    );
  }
}

export default HomePageSearch;
