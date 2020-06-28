import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Page from "../../../components/Page";

import Item from "../../homePage/components/item"; //TODO refactor PUT item.jsx in the componnet folder

import { loadMyItems, getMyItems } from "../../../store/items";
import { connect } from "react-redux";
class SharedItemsComp extends Component {
  componentDidMount() {
    this.props.loadMyItems();
  }

  render() {
    return (
      <Page breadcrumbs={[{ name: "John's Shares", active: true }]}>
        <Row>
          {this.props.myItems.map((item) => (
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
  myItems: getMyItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadMyItems: () => dispatch(loadMyItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SharedItemsComp);
