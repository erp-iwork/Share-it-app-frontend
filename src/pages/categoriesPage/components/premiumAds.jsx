import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Logo from "../../../assets/Icons/CLogo.svg";
import Logo2 from "../../../assets/car1.png";
import Logo3 from "../../../assets/Nunu.png";
import Logo4 from "../../../assets/demo-nanny.jpg";

class PremiumAds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Carousel autoPlay infiniteLoop>
        <div onClick={() => alert("clicked")} className="container1">
          <img alt='' class="resize_fit_center" src={Logo2} />
          <p className="legend">
            <h1>Item Name 1</h1>
          </p>
        </div>
        <div className="container1">
          <img alt='' class="resize_fit_center" src={Logo} />
          <p className="legend">
            <h1>Item Name 1</h1>
          </p>
        </div>
        <div className="container1">
          <img alt='' class="resize_fit_center" src={Logo3} />
          <p className="legend">
            <h1>Item Name 1</h1>
          </p>
        </div>
        <div className="container1">
          <img alt='' class="resize_fit_center" src={Logo4} />
          <p className="legend">
            <h1>Item Name 1</h1>
          </p>
        </div>
      </Carousel>
    );
  }
}

export default PremiumAds;
