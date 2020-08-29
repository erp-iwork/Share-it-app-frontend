import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import MobileApp from "../../assets/newResources/MobileAppAvatar.svg";
import Logo from "../../assets/Icons/Logo.svg";
import MobileStoreButton from "react-mobile-store-button";

class MobileAppOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="mobileOverviewContainer">
        <Row align="center">
          <Col align="center" md={6} sm={12} xs={12}>
            <img className="mobileOverviewAvatar" src={MobileApp} alt="" />
          </Col>
          <Col
            md={6}
            sm={12}
            xs={12}
            align="center"
            className="searchformLayout"
          >
            <Row className="mb-2" color="secondary">
              <img className="mobileLogo" src={Logo} alt="" />
              <h1>
                <b>ACCESS ANYTHING ON THE GO ...</b>
              </h1>
            </Row>
            <Col className="mobileOverviewDescription2">
              <h3>
                Message and rent at the tap of a button. The Sharreit app is the
                easiest way to find what you need, manage your rentals and get
                instant updates. Get it now on iOS and Android.
              </h3>
            </Col>
            <Row>
              <Col className='pt-2'>
                <MobileStoreButton
                  store="ios"
                  width={180}
                  // url={androidUrl}
                  // linkProps={{ title: "Android Store Button" }}
                />
              </Col>
              <Col className="pb-5">
                <MobileStoreButton
                  store="android"
                  // width={200}
                  width={200}


                  // url={iOSUrl}
                  // linkProps={{ title: "iOS Store Button" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MobileAppOverview;
