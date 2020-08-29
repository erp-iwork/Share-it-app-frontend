import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  CardFooter,
} from "reactstrap";
import { Reviews } from ".";
import RatingForm from "./ratingForm";
// import { getCurrentUser } from "../../../store/auth";
import { getUser } from "../../../store/users";
import { getRates } from "../../../store/rates";
import { connect } from "react-redux";
import { getProfile } from "../../../store/profile";

class RatingsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: false,
    };
  }
  componentDidMount() {}

  rate = () => {
    const rate = !this.state.rate;
    this.setState({
      rate,
    });
  };
  render() {
    const { rate } = this.state;
    const { user } = this.props.profile;
    return (
      <Card className="ratingContainer">
        <CardHeader color="success">
          <Row>
            <Col>Ratings For {user && user.name}</Col>
            {this.props.rates &&
              this.props.currentUser &&
              !this.props.rates.find(
                (rate) => rate.rater === this.props.currentUser.id
              ) && (
                <Button onClick={() => this.rate()} size="sm">
                  Rate
                </Button>
              )}
          </Row>
        </CardHeader>
        <CardBody>
          {rate &&
            this.props.rates &&
            this.props.currentUser &&
            !this.props.rates.find(
              (rate) => rate.rater === this.props.currentUser.id
            ) && (
              <>
                <RatingForm />
                <hr />
              </>
            )}
          <Col>
            {/* <Reviews /> */}
            <Reviews />
          </Col>
        </CardBody>
        {/* <CardFooter align="center">
          <Button outline size="sm">
            Show More
          </Button>
        </CardFooter> */}
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({
  currentUser: getUser(state),
  rates: getRates(state),
  profile: getProfile(state),
});

export default connect(mapStateToProps, null)(RatingsComp);
