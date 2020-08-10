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
    return (
      <Card className="ratingContainer">
        <CardHeader color="success">
          <Row>
            <Col>Ratings For John Doe</Col>
            <Button onClick={() => this.rate()} size="sm">
              Rate
            </Button>
          </Row>
        </CardHeader>
        <CardBody>
          {rate ? (
            <>
              <RatingForm />
              <hr />
            </>
          ) : null}
          <Col>
            {/* <Reviews /> */}
            <Reviews />
          </Col>
        </CardBody>
        <CardFooter align="center">
          <Button outline size="sm">
            Show More
          </Button>
        </CardFooter>
      </Card>
    );
  }
}
// const mapStateToProps = (state) => ({
//   selectedUserId: getSelectedUserId(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   loadRates: (userId) => dispatch(loadRates(userId)),
// });

export default RatingsComp;
