import React, { Component } from "react";
import { loadFilteredItems, getFilteredItems } from "../../../store/items";
import { connect } from "react-redux";
// import { Spacer } from "../../../components/Layout";

class MainBodyPage extends Component {
  componentDidMount() {
    this.props.loadFilteredItems({
      sub_category: this.props.subcategory.id,
    });
  }
  render() {


    return (
      <h1>Hello</h1>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getFilteredItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilteredItems: (options) => dispatch(loadFilteredItems(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainBodyPage);
