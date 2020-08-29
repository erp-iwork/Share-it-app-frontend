import React from "react";

import { Col, Row, CardHeader, CardFooter, Form, Alert } from "reactstrap";
import SettingForm from "./settingForm";
import { connect } from "react-redux";
import {
  getLoading,
  getErrors,
  getStatus,
  updateProfile,
  getProfile,
} from "../../store/profile";
import Joi from "joi-browser";
import { getUser } from "../../services/authService";
import { resetProfileErrorsAndStatus } from "../../store/profile";

class ContactInfoForm extends SettingForm {
  state = {
    data: {
      phonenumber: "",
      telegram: "",
      facebook: "",
      website: "",
      whatsapp: "",
    },
    errors: [],
  };
  componentDidMount() {
    const { profile } = this.props;
    if (profile) {
      const data = { ...this.state.data };
      data.phonenumber = profile.phonenumber;
      data.telegram = profile.telegram;
      data.facebook = profile.facebook;
      data.website = profile.website;
      data.whatsapp = profile.whatsapp;
      this.setState({ data });
    }
  }
  componentWillUnmount() {
    this.props.resetProfileErrorsAndStatus();
  }

  schema = {
    phonenumber: Joi.number().allow("").optional().label("Phone Number"),
    telegram: Joi.string().allow("").optional().label("Telegram"),
    facebook: Joi.string().allow("").optional().label("Facebook"),
    website: Joi.string().allow("").optional().label("Website"),
    whatsapp: Joi.string().allow("").optional().label("Whatsapp"),
  };
  doSubmit = () => {
    console.log(this.state.data);
    const currentUserId = getUser() && getUser().id;
    if (!currentUserId) return;
    this.props.updateProfile(currentUserId, this.state.data);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Col>
          <CardHeader>Update Your Contact Information</CardHeader>
          <Row className="m-3">
            <Col md={6} sm={12} xs={12}>
              {this.renderInput("phonenumber", "Phone Number", "number")}
            </Col>
            <Col md={6} sm={12} xs={12}>
              {this.renderInput("telegram", "Telegram")}
            </Col>
            <Col md={6} sm={12} xs={12}>
              {this.renderInput("facebook", "Facebook")}
            </Col>
            <Col md={6} sm={12} xs={12}>
              {this.renderInput("whatsapp", "Whatsapp")}
            </Col>
            <Col md={6} sm={12} xs={12}>
              {this.renderInput("website", "Website")}
            </Col>
          </Row>
          <CardFooter align="center">
            {this.renderButton("Update Contact Information")}
          </CardFooter>
          {this.props.status === "success" && (
            <Alert color="success">
              Contact Information Updated successfully
            </Alert>
          )}
          {this.props.errors && this.props.errors.detail && (
            <Alert color="danger">{this.props.errors.detail}</Alert>
          )}
        </Col>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  profile: getProfile(state),
  errors: getErrors(state),
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (userId, profile) => dispatch(updateProfile(userId, profile)),
  resetProfileErrorsAndStatus: () => dispatch(resetProfileErrorsAndStatus()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactInfoForm);
