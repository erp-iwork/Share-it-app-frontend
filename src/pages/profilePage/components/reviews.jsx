import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Avatar from "../../../components/Avatar";
import { MdStar } from "react-icons/md";

class ReviewsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Row>
          <div md={2}>
            <Avatar />
          </div>
          <Col md={10}>
            <Row className="reviewbody">
              <Col md={7}>
                <b>John Doe</b>
              </Col>
              <Col md={5}>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
              </Col>
            </Row>
            <div>
              <div>
                <i>
                  Seller was prompt. Item shared was exactly as the picture showed, not mis-leading, and communicative.
                </i>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
      </>
    );
  }
}

export default ReviewsComp;
