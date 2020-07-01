import React, { Component } from "react";
// import { Col, Row } from "reactstrap";
import { Col, Row } from "reactstrap";
import SubHeader from "../../components/Layout/SubHeader";
import Item from "./components/item";
import {
  getLoading,
  getFilteredItems,
  loadFilteredItems,
} from "../../store/items";
import { connect } from "react-redux";
import Shimmer from "react-shimmer-effect";
import FilterComp from "../allItems/components/filterComp";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      waitingContent: [],
    };

    this.preLoaders = this.preLoaders.bind(this);
  }
  componentDidMount() {
    this.setState({ waitingContent: this.preLoaders() });
    //load filtered items without any filter option
    this.props.loadFilterdItems({});
  }

  preLoaders = () => {
    const loader = (
      <Row>
        <Col md={3} sm={12} xs={12}>
          <div className="itemImgContainer-HomeShimmer">
            <Shimmer>
              <div className="itemImgContainer-HomeShimmerImg" />
              <div className="ShimmerLine" />
            </Shimmer>
          </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
          <div className="itemImgContainer-HomeShimmer">
            <Shimmer>
              <div className="itemImgContainer-HomeShimmerImg" />
              <div className="ShimmerLine" />
            </Shimmer>
          </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
          <div className="itemImgContainer-HomeShimmer">
            <Shimmer>
              <div className="itemImgContainer-HomeShimmerImg" />
              <div className="ShimmerLine" />
            </Shimmer>
          </div>
        </Col>
        <Col md={3} sm={12} xs={12}>
          <div className="itemImgContainer-HomeShimmer">
            <Shimmer>
              <div className="itemImgContainer-HomeShimmerImg" />
              <div className="ShimmerLine" />
            </Shimmer>
          </div>
        </Col>
      </Row>
    );

    return Array(3).fill(loader);
  };

  render() {
    return (
      <div className="BackContainer">
        {this.props.loading && this.state.waitingContent}
        {this.props.items && (
          <Row>
            <Col md={3} className="filterContainer">
              <FilterComp />
            </Col>
            <Col md={9} className="mainBodyContainer">
              <SubHeader />

              <Row>
                {this.props.items.map((item) => (
                  <Col key={item.itemId} md={3} sm={12} xs={12}>
                    <Item item={item} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: getFilteredItems(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilterdItems: (options) => dispatch(loadFilteredItems(options)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
