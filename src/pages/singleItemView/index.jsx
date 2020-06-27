import React, { Component } from "react";
import _ from "lodash";
import { ItemView, Profile, NotFound, RelatedAds } from "./components/";
import { Col, Row } from "reactstrap";
import { getItemById, getSelectedItem } from "../../store/items";
import { connect } from "react-redux";
import PageSpinner from "../../components/PageSpinner";
import { getLoading } from "../../store/items";


class SingleItemViewPage extends Component {
  componentDidMount() {
    const itemId = this.props.match.params.id;
    this.props.getItemById(itemId);
  }

  render() {
    return (
      <Col>
        {this.props.loading && <PageSpinner />}
        {!this.props.loading && _.isEmpty(this.props.selectedItem) && (
          <NotFound />
        )}
        {!_.isEmpty(this.props.selectedItem) && (
          <Row>
            <Col md={9}>
              <ItemView selectedItem={this.props.selectedItem} />
            </Col>
            <Col md={3}>
              <Profile selectedItem={this.props.selectedItem} />
              {/* TODO - */}
              <RelatedAds />
            </Col>
          </Row>
        )}
      </Col>
    );
  }
}

//for test
const mapStateToProps = (state) => ({
  selectedItem: getSelectedItem(state),
  loading: getLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  getItemById: (id) => dispatch(getItemById(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleItemViewPage);
