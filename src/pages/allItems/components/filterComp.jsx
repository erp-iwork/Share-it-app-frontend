import React from "react";
import { Col, Row, Button, CardHeader, Label, Form } from "reactstrap";
import { Slider } from "antd";
import { loadFilteredItems } from "../../../store/items";
import { connect } from "react-redux";
import { getCategories, loadCategories } from "../../../store/categories";
import FilterForm from "./filterForm";

import {
  loadSubcategoriesByCategoryId,
  getSubcategoriesByCategoryId,
} from "../../../store/subcategories";
import csc from "country-state-city";

class FilterComponent extends FilterForm {
  state = {
    data: {
      category_id: "",
      min_price: "",
      max_price: "",
      sub_category_id: "",
      is_donating: "",
      state: "",
      city: "",
    },
  };
  componentDidMount() {
    this.props.loadCategories();
  }

  handleSearch = () => {
    this.props.search(this.state);
  };

  doSubmit = () => {
    const {
      category_id,
      sub_category_id,
      min_price,
      max_price,
      state,
      city,
    } = this.state.data;

    this.props.loadFilteredItems({
      category: category_id,
      sub_category: sub_category_id,
      min_price,
      max_price,
      state: csc.getStateById(state).name,
      city: csc.getCityById(city).name,
    });
  };
  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <hr />
          <div>
            <CardHeader>Filter Item Results</CardHeader>
            <hr />

            <Col>
              <Row>
                <Col>
                  {this.renderSelect(
                    "is_donating",
                    "Sharing || Donating?",
                    this.isDonatingOptions
                  )}
                </Col>
                <Col>
                  {this.renderSelect(
                    "category_id",
                    "Category",
                    this.props.categories
                  )}
                </Col>
              </Row>
              <hr />
              {this.renderSelect(
                "sub_category_id",
                "Sub category",
                this.props.subcategories
              )}
              <hr />
              <Label>Price</Label>
              <Row>
                <Col>{this.renderInput("min_price", "Lowest", "number")}</Col>
                <Label>To</Label>
                <Col>{this.renderInput("max_price", "Highest", "number")}</Col>
              </Row>
              {/* <hr />
              <Label>Distance</Label>
              <Row>
                <Col md={10}>
                  <Slider defaultValue={10} />
                </Col>
                <Col md={2}>Miles</Col>
              </Row> */}
              <hr />
              <Row>
                <Col>
                  {this.renderSelect(
                    "state",
                    "State",
                    csc.getStatesOfCountry("231")
                  )}
                </Col>
                <Col>
                  {this.renderSelect(
                    "city",
                    "City",
                    csc.getCitiesOfState(this.state.data.state)
                  )}
                </Col>
              </Row>

              <hr />

              <Label>Sort By</Label>
              <div>
                <Button outline size="sm" className="filterButtons">
                  Newest First
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
            {this.renderButton("Filter Search")}
          </div>
        </Form>
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

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  subcategories: getSubcategoriesByCategoryId(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCategories: () => dispatch(loadCategories()),
  loadSubcategoriesByCategoryId: (options) =>
    dispatch(loadSubcategoriesByCategoryId(options)),
  loadFilteredItems: (options) => dispatch(loadFilteredItems(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
