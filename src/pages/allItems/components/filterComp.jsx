import React, { Component } from "react";
import { Col, Row, Button, CardHeader, Input, Label } from "reactstrap";
import { Slider } from "antd";
// import Items from "../../../components/items-Home";
// import Items from "../../homePage/components/items";
import { search } from "../../../store/items";
import { connect } from "react-redux";

class FilterComponent extends Component {
  state = {
    from: "",
    to: "",
  };
  handleSearch = () => {
    this.props.search(this.state);
  };

  handlePriceRangeChange = ({ currentTarget: input }) => {
    let from = this.state.from;
    let to = this.state.to;
    if (input.name === "from") from = input.value;
    else to = input.value;

    this.setState({ from, to });
  };
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
            <Label>Sub-Category</Label>
            <Input type="select">
              <option>this will be mapped based on the category list</option>
            </Input>
            <hr />
            <Label>Price</Label>
            <Row>
              <Col>
                <Input
                  name="from"
                  type="number"
                  placeholder="Lowest"
                  onChange={this.handlePriceRangeChange}
                />
              </Col>
              <Label>To</Label>
              <Col>
                <Input
                  name="to"
                  type="number"
                  placeholder="Highest"
                  onChange={this.handlePriceRangeChange}
                />
              </Col>
            </Row>
            <hr />
            <Label>Distance</Label>
            <Row>
              <Col md={10}>
                <Slider defaultValue={10} />
              </Col>
              <Col md={2}>Miles</Col>
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
          <Button block onClick={this.handleSearch}>
            Filter Search
          </Button>
        </div>
        <hr />
        {/* <div>
          <h5>Premium Ads</h5>
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </div> */}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query)),
});

export default connect(null, mapDispatchToProps)(FilterComponent);
