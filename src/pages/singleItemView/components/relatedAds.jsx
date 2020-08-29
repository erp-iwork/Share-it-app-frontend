import React, { Component } from "react";
import { RelatedAdCard } from "../../../components/Card";
import { Col } from "reactstrap";
import { connect } from "react-redux";
import {
  getSelectedItem,
  loadFilteredItemsBySubcategory,
  getFilteredItemsBySubcategory,
} from "../../../store/items";

class RelatedAdsComp extends Component {
  componentDidMount() {
    this.props.loadFilteredItemsBySubcategory({
      sub_category: this.props.selectedItem.sub_category.id,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps == undefined) {
      return false;
    }
    const subcategoryId = this.props.selectedItem.sub_category.id;
    if (prevProps.selectedItem.sub_category.id != subcategoryId) {
      this.props.loadFilteredItemsBySubcategory({
        sub_category: subcategoryId,
      });
    }
  }

  render() {
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
  items: getFilteredItemsBySubcategory(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadFilteredItemsBySubcategory: (options) =>
    dispatch(loadFilteredItemsBySubcategory(options)),
});
export default connect(mapStateToProps, mapDispatchToProps)(RelatedAdsComp);
