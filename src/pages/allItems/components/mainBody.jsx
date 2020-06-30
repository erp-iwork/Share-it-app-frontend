import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Page from "../../../components/Page";
// import Items from "../../homePage/components/item";??
import Item from "../../homePage/components/item";
import {
  loadItemsBySubcategoryId,
  getFilteredItems,
} from "../../../store/items";
import { connect } from "react-redux";

//load items by subcategory and display
class MainBodyPage extends Component {
  componentDidMount() {
    console.log("main", this.props.subcategory);
    this.props.loadItemsBySubcategoryId(this.props.subcategory.id);
  }
  render() {
    return (
      <Page
        className="mainBodyContainer"
        breadcrumbs={[{ name: this.props.subcategory.name, active: true }]}
      >
        <Row>
          {this.props.items.map((item) => (
            <Col md={2} sm={12} xs={12}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getFilteredItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadItemsBySubcategoryId: (subcategory_id) =>
    dispatch(loadItemsBySubcategoryId(subcategory_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyPage);
