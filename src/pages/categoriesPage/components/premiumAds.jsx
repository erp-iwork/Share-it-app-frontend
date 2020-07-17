import React, { Component } from "react";

import { Carousel } from "react-responsive-carousel";
import { loadItems, getBoostedItems } from "../../../store/items";
import { connect } from "react-redux";

class PremiumAds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    return (
      <Carousel autoPlay infiniteLoop showThumbs={true}>
        {this.props.items.map((item) => (
          <div className="container1">
            <img
              alt=""
              className="resize_fit_center"
              src={item.item_images[0].image}
            />
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

const mapStateToProps = (state) => ({
  items: getBoostedItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  loadItems: () => dispatch(loadItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PremiumAds);
