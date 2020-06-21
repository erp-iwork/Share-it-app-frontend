import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Page from "../../../components/Page";
// import Items from "../../homePage/components/item";??
import Item from "../../homePage/components/item";
import { getItems, loadItems, getFilteredItems } from "../../../store/items";
import { connect } from "react-redux";

class MainBodyPage extends Component {
  componentDidMount() {
    this.props.loadItems();
  }
  render() {
    console.log("main body", this.props.items);
    return (
      <Page
        className="mainBodyContainer"
        breadcrumbs={[{ name: "Category/ SubCategory Name", active: true }]}
      >
        <Row>
          {this.props.items.map((item) => (
            <Col md={3} sm={12} xs={12}>
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
  loadItems: () => dispatch(loadItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyPage);
