import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Page from "../../../components/Page";

import Item from "../../homePage/components/item"; //TODO refactor PUT item.jsx in the componnet folder

import { connect } from "react-redux";
import { getSharedItems } from "../../../store/sharedItems";
class SharedItemsComp extends Component {
  render() {
    return (
      <Page
        breadcrumbs={[
          {
            name: ` ${
              this.props.sharedItems[0]
                ? this.props.sharedItems[0].owner.name
                : ""
            } Shared items`,
            active: true,
          },
        ]}
      >
        <Row>
          {this.props.sharedItems.map((item) => (
            <Col md={3} sm={12} xs={12} key={item.itemId}>
              <Item item={item} />
            </Col>
          ))}
        </Row>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  sharedItems: getSharedItems(state),
});

export default connect(mapStateToProps, null)(SharedItemsComp);
