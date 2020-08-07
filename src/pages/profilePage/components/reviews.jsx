import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Avatar from "../../../components/Avatar";
import { MdStar } from "react-icons/md";
import { getRates } from "../../../store/rates";
import { connect } from "react-redux";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
class ReviewsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Row>
          {this.props.rates.map((rate) => (
            <>
              <div md={2}>
                <Avatar
                  src={
                    rate &&
                    rate.rater &&
                    process.env.REACT_APP_API_URL + rate.rater.avatar
                  }
                />
              </div>
              <Col md={10}>
                <Row className="reviewbody">
                  <Col md={7}>
                    <b>{rate && rate.rater && rate.rater.name}</b>
                  </Col>
                  <Col md={5}>
                    <Rate value={rate && rate.rating} disabled={true} />
                  </Col>
                </Row>
                <div>
                  <div>
                    <i>{rate && rate.description}</i>
                  </div>
                </div>
              </Col>
            </>
          ))}
        </Row>
        <hr />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  rates: getRates(state),
});
export default connect(mapStateToProps, null)(ReviewsComp);
