import React, { Component } from "react";
import { RelatedAdCard } from "../../../components/Card";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import { getSelectedItem, getItemsByCategory } from "../../../store/items";

class RelatedAdsComp extends Component {
  render() {
    console.log(this.props.relatedItems);
    return (
      <>
        Related Shares
        <Col className="relatedAdSingleItemContainer">
          {this.props.relatedItems.slice(0, 7).map((item) => (
            <RelatedAdCard item={item} />
          ))}
        </Col>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedItem: getSelectedItem(state),
  relatedItems: getItemsByCategory(state),
});
export default connect(mapStateToProps, null)(RelatedAdsComp);
