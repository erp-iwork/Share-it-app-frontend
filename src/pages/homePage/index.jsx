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
  Spacer,
  PopularAmongUsers,
} from "./components";
import HorizontalScroll from "react-scroll-horizontal";

class HomePage extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      loading: true,
      waitingContent: [],
      scrollTop: 0,
      scrolled: false,
    };

    this.preLoaders = this.preLoaders.bind(this);
  }
  componentDidMount() {
    this.setState({ waitingContent: this.preLoaders() });
    //load filtered items without any filter option
    this.props.loadFilterdItems({});
  }

  onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = this.myRef.current.scrollTop;
    // console.log(
    //   `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
    // );
    if (scrollTop > 20) {
      this.setState({
        scrolled: true,
      });
      console.log(this.state.scrolled);
    }
    if (scrollTop < 20) {
      this.setState({
        scrolled: false,
      });
    }
    this.setState({
      scrollTop: scrollTop,
    });
  };

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
    const { scrollTop } = this.state;
    return (
      <div
        style={{
          height: "100px",
          overflow: "scroll",
        }}
        className="BackContainer"
        onScroll={this.onScroll}
        ref={this.myRef}
      >
        <Col md={12} sm={12} xs={12}>
          <Search />
        </Col>
        <div style={parent}>
          <HorizontalScroll
            config={{ stiffness: 50, damping: 20 }}
            animValues={2}
            reverseScroll={false}
          >
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
            <ProductsComp style={child} />
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
