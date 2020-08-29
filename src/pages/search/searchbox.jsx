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
import { connect } from "react-redux";
import {
  searchItems,
  getLoading,
  getSearchedItems,
} from "../../../store/items";

class searchbox extends Component {
  state = {
    isOpenSearchPopover: false,
    focused: false,
    query: "",
  };
  onFocus = () => {
    this.setState({ focused: true });
  };
  onBlur = () => {
    this.setState({ focused: false });
  };
  toggleSearchPopover = (evt) => {
    // this.setState({
    //   target: target,
    //   isOpenSearchPopover: !this.state.isOpenSearchPopover,
    //   isOpenSearchCardPopover: false,
    // });
    if (evt.target.value && evt.target.value.length >= 3) {
      this.props.searchItems(evt.target.value);
      this.setState({
        isOpenSearchPopover: true,
        query: evt.target.value,
      });
    } else {
      this.setState({
        isOpenSearchPopover: false,
        query: evt.target.value,
      });
    }
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
          <PopoverBody className="border-light">
            <Card>
              <CardHeader>Search Results For "{this.state.query}"</CardHeader>
              <CardBody>
                <Row>
                  {this.props.items.map((item) => (
                    <Col key={item.itemId} md={4}>
                      <Link to={`/items/${item.itemId}`}>
                        <ProductsComp item={item} />
                      </Link>
                    </Col>
                  ))}
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
              value={this.state.query}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChange={this.toggleSearchPopover}
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

export default searchbox;
