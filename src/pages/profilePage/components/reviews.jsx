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
                <b>Header</b>
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
                  SomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomethingSomething
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
