import React, { Component } from "react";
import { Col, Row, Button, CardHeader, Input, Label } from "reactstrap";
import { Slider } from "antd";
import Items from "../../homePage/components/items";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <CardHeader>Filter Item Results</CardHeader>
          <Col>
            <Row>
              <Col>
                <Label>Donated|| Shared</Label>
                <Input type="select">
                  <option>Donated</option>
                  <option>Shared</option>
                </Input>
              </Col>
              <Col>
                <Label>Category</Label>

                <Input type="select">
                  <option>Product Sharing</option>
                  <option>Service Sharing</option>
                  <option>Digital Sharing</option>
                </Input>
              </Col>
            </Row>
            <hr />
            <Label>Location</Label>
            <Input type="select">
              <option>Hello</option>
              <option>Hello</option>
              <option>Hello</option>
              <option>Hello</option>
              <option>Hello</option>
            </Input>
            <hr />
            <Label>Price</Label>
            <Row>
              <Col md={2}>
                <Label>From</Label>
              </Col>
              <Col md={4}>
                <Input type="number" placeholder="Lowest">
                  Hello
                </Input>
              </Col>
              <Col md={1}>
                <Label>to</Label>
              </Col>
              <Col md={5}>
                <Input type="number" placeholder="Highest">
                  Hello
                </Input>
              </Col>
            </Row>
            <hr />
            <Label>Distance</Label>
            <Row>
              <Col md={10}>
                <Slider defaultValue={10} />
              </Col>
              <Col md={2}>KM</Col>
            </Row>

            <hr />

            <Label>Sort By</Label>
            <div>
              <Button outline size="sm" className="filterButtons">
                Relevance
              </Button>
              <Button outline size="sm" className="filterButtons">
                Newest First
              </Button>
              <Button outline size="sm" className="filterButtons">
                Closest First
              </Button>
              <Button size="sm" className="filterButtons" outline>
                Price: High to low
              </Button>
              <Button size="sm" className="filterButtons" outline>
                Price: Low to High
              </Button>
            </div>
            <hr />
            <Label>Posted Within</Label>
            <div>
              <Button outline size="sm" className="filterButtons">
                All Items
              </Button>
              <Button size="sm" className="filterButtons" outline>
                The Last 24 Hours
              </Button>
              <Button outline size="sm" className="filterButtons">
                The Last Seven Days
              </Button>
              <Button size="sm" className="filterButtons" outline>
                The Last Month
              </Button>
            </div>
          </Col>
          <hr />
          <Button block>Filter Search</Button>
        </div>
        <hr />
        <div>
          <h5>Premium Ads</h5>
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </div>
      </>
    );
  }
}

export default FilterComponent;
