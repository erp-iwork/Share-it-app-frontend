import React from "react";
import { Alert, Form } from "reactstrap";
import RateForm from "./form";
import Joi from "joi-browser";
import { rate, getLoading, getStatus } from "../../../store/rates";
import { getUser, getSelectedUserId } from "../../../store/users";
import { connect } from "react-redux";

class RatingForm extends RateForm {
  state = {
    data: {
      rating: 0,
      description: "",
    },
    errors: {},
  };
  schema = {
    rating: Joi.number().label("Rate"),
    description: Joi.string().label("Description"),
  };

  doSubmit = () => {
    const user = this.props.selectedUserId;
    const rater = this.props.currentUser.id;
    const data = { ...this.state.data, user, rater };
    this.props.rate(data);
  };

  render() {
    if (this.props.status === "success") {
      window.setTimeout(() => {
        // window.location.reload(false);
        const data = { ...this.state.data };
        data.rating = 0;
        data.description = "";
        this.setState({ data });
      }, 0);
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderRate("rating")}
        {this.renderInput("description", "description", "textarea")}
        {this.renderButton("Submit")}
        {this.props.status === "success" && (
          <Alert color="success">Success</Alert>
        )}
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: getUser(state),
  selectedUserId: getSelectedUserId(state),
  loading: getLoading(state),
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  rate: (data) => dispatch(rate(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);
