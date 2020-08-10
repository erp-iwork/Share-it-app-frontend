import React from "react";
import { Col, Row, Button, CardHeader, Label, Form } from "reactstrap";
import { Slider } from "antd";
import {
  loadFilteredItems,
  getFilteredItems,
  sortFilteredItems,
} from "../../../store/items";
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
    sortData: {
      all: false,
      newest: false,
      priceasc: false,
      pricedesc: false,
      last24hours: false,
      last7days: false,
      lastmonth: false,
    },
  };
  componentDidMount() {
    this.props.loadCategories();
  }

  handleSearch = () => {
    this.props.search(this.state);
  };
  doSort = (options) => {
    this.props.sortFilteredItems(options);
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
            </Col>
            <hr />
            {this.renderButton("Filter Search")}

            {this.props.filteredItems && this.props.filteredItems.length > 1 && (
              <React.Fragment>
                <hr />
                <Label>Sort By</Label>
                <div>
                  {this.renderSortButton("newest", "Newest First")}
                  {this.renderSortButton("pricedesc", "Price: High to low")}
                  {this.renderSortButton("priceasc", "Price: Low to High")}
                </div>
                <hr />
                <Label>Posted Within</Label>
                <div>
                  {this.renderSortButton("all", "All Items")}
                  {this.renderSortButton("last24hours", "The Last 24 Hours")}
                  {this.renderSortButton("last7days", "The Last Seven Days")}
                  {this.renderSortButton("lastmonth", "The Last Month")}
                </div>
              </React.Fragment>
            )}
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
  filteredItems: getFilteredItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadCategories: () => dispatch(loadCategories()),
  loadSubcategoriesByCategoryId: (options) =>
    dispatch(loadSubcategoriesByCategoryId(options)),
  loadFilteredItems: (options) => dispatch(loadFilteredItems(options)),
  sortFilteredItems: (options) => dispatch(sortFilteredItems(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
