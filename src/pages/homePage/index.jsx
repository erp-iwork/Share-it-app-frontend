import React, { Component } from "react";
// import { Col, Row } from "reactstrap";
import { Col, Row } from "reactstrap";
import {
  getLoading,
  getFilteredItems,
  loadFilteredItems,
} from "../../store/items";
import { connect } from "react-redux";
import Shimmer from "react-shimmer-effect";
import {
  PopularCategories,
  Search,
  ProductsComp,
  PopularAmongUsers,
} from "./components";
import HorizontalScroll from "react-scroll-horizontal";
import { Spacer } from "../../components/Layout";
import { Link } from "react-router-dom";

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
    const child = { width: `100%`, height: `40px` };
    const parent = { width: `100%`, height: `310px` };
    const boostedItems = this.props.items.filter((item) => item.boost === true);
    return (
      <div className="BackContainer">
        <Col md={12} sm={12} xs={12}>
          <Search />
        </Col>
        <div style={parent}>
          <HorizontalScroll
            config={{ stiffness: 50, damping: 20 }}
            animValues={2}
            reverseScroll={false}
          >
            {boostedItems.length === 0 && <h1>There is no boosted item yet</h1>}
            {boostedItems.map((item) => (
              <Link to={`/items/${item.itemId}`}>
                <ProductsComp item={item} style={child} />
              </Link>
            ))}
          </HorizontalScroll>
        </div>
        <Spacer title="POPULAR CATEGORIES" />
        <PopularCategories />
        <Spacer title="POPULAR AMONG USERS" />
        <PopularAmongUsers />
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
