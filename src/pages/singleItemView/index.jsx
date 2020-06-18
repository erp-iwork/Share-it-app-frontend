import React, { Component } from "react";
import { ItemView, Profile, RelatedAds } from "./components/";
import { Col, Row } from "reactstrap";

class SingleItemViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Col>
          <Row>
            <Col md={9}>
              <ItemView />
            </Col>
            <Col md={3}>
              <Profile />
              <RelatedAds />
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

export default SingleItemViewPage;
