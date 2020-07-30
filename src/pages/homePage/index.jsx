import React, { Component } from "react";
// import { Col, Row } from "reactstrap";
import { Col, Row } from "reactstrap";

import { getLoading, getItems, loadItems } from "../../store/items";
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
import { getUser } from "../../services/authService";
import { loadUser } from "../../store/users";

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
    this.props.loadItems();
    //load user info if they are logged in
    const userId = getUser() && getUser().id;
    if (!userId) return;
    this.props.loadUser(userId);
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
    const parent = { width: `100%`, height: `335px` };
    const boostedItems = this.props.items.filter((item) => item.boost === true);
    return (
      <div className="BackContainer">
        <Col md={12} sm={12} xs={12}>
          <Search />
        </Col>
        <Spacer title="PREMIUM SHARES" />

        {boostedItems.length === 0 ? (
          <Col md={12} sm={12} xs={12} align="center">
            <h3>There arent any premium Shares yet.</h3>
          </Col>
        ) : (
          <>
            <div style={parent}>
              <HorizontalScroll
                config={{ stiffness: 50, damping: 20 }}
                animValues={2}
                reverseScroll={false}
              >
                {boostedItems.map((item) => (
                  <Link to={`/items/${item.itemId}`}>
                    <ProductsComp item={item} style={child} />
                  </Link>
                ))}
              </HorizontalScroll>
            </div>
          </>
        )}

        <Spacer title="POPULAR CATEGORIES" />
        <PopularCategories />
        <Spacer title="POPULAR AMONG USERS" />
        <PopularAmongUsers />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  items: getItems(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadItems: () => dispatch(loadItems()),
  loadUser: (userId) => dispatch(loadUser(userId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
