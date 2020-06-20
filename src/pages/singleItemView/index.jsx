import React, { Component } from "react";
import { ItemView, Profile, RelatedAds } from "./components/";
import { Col, Row } from "reactstrap";
import { getItemById, getSelectedItem } from "../../store/items";
import { connect } from "react-redux";

class SingleItemViewPage extends Component {
  componentDidMount() {
    const itemId = this.props.match.params.id;
    this.props.getItemById(itemId);
  }

  render() {
    return (
      <>
        <Col>
          <Row>
            <Col md={9}>
              <ItemView />
            </Col>
            <Col md={3}>
              <Profile />
              <RelatedAds />
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

//for test
const mapStateToProps = (state) => ({
  selectedItem: getSelectedItem(state),
});
const mapDispatchToProps = (dispatch) => ({
  getItemById: (id) => dispatch(getItemById(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleItemViewPage);
