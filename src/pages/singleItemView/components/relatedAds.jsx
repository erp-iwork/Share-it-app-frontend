import React, { Component } from "react";
import { RelatedAdCard } from "../../../components/Card";
import { Col } from "reactstrap";


class RelatedAdsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
        <>
        Related Shares
        <Col className='relatedAdSingleItemContainer'>
        <RelatedAdCard />
        <RelatedAdCard />
        <RelatedAdCard />
        <RelatedAdCard />
        <RelatedAdCard />
        <RelatedAdCard />
        <RelatedAdCard />
        </Col>
        </>
    );
  }
}

export default RelatedAdsComp;
