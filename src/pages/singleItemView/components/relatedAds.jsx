import React, { Component } from "react";
import { RelatedAdCard } from "../../../components/Card";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import {
  getSelectedItem,
  loadFilteredItems,
  getFilteredItems,
} from "../../../store/items";

class RelatedAdsComp extends Component {
  componentDidMount() {
    // this.props.loadFilteredItems({
    //   sub_category: this.props.selectedItem.sub_category.id,
    // });
  }

  render() {
    if (this.props.selectedItem.itemId !== this.props.match.params.id)
      this.props.loadFilteredItems({
        sub_category: this.props.selectedItem.sub_category.id,
      });
    return (
      <>
        Related Shares
        <Col className="relatedAdSingleItemContainer">
          {this.props.items
            .filter((item) => item.itemId !== this.props.selectedItem.itemId)
            .slice(0, 7)
            .map((item) => (
              <RelatedAdCard item={item} />
            ))}
        </Col>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedItem: getSelectedItem(state),
  items: getFilteredItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadFilteredItems: (options) => dispatch(loadFilteredItems(options)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RelatedAdsComp);
