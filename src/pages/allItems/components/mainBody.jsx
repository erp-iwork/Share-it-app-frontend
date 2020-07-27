import React, { Component } from "react";
import { loadFilteredItems, getFilteredItems } from "../../../store/items";
import { connect } from "react-redux";
// import { Spacer } from "../../../components/Layout";

class MainBodyPage extends Component {
  componentDidMount() {
    // this.props.loadFilteredItems({
    //   sub_category: this.props.subcategoryId,
    // });
  }
  render() {
    return <h1>This is all Items</h1>;
  }
}

const mapStateToProps = (state) => ({
  items: getFilteredItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilteredItems: (options) => dispatch(loadFilteredItems(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyPage);
