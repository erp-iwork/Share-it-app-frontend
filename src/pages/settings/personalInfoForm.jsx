import React, { Component } from "react";
import Avatar from "../../components/Avatar";
import Page from "../../components/Page";
import {
  Col,
  Card,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  CardHeader,
  CardFooter,
  Form,
} from "reactstrap";
import { MdSave } from "react-icons/md";
import SettingForm from "./settingForm";
import Joi from "joi-browser";
import { connect } from "react-redux";
import {
  getLoading,
  getErrors,
  getStatus,
  updateUser,
} from "../../store/users";
import { getCurrentUser } from "../../store/auth";
import { getUser } from "../../services/authService";

class PersonalInfoForm extends SettingForm {
  state = {
    data: { avater: "", name: "", location: "", password: "" },
    preview: "",
    errors: [],
  };
  onSelectFile = (e) => {
    const data = { ...this.state.data };
    if (!e.target.files || e.target.files.length === 0) {
      data.avater = undefined;
      this.setState({ data });
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    data.avater = e.target.files[0];
    const objectUrl = URL.createObjectURL(data.avater);
    this.setState({ data, preview: objectUrl });
  };
  schema = {
    avater: Joi.string().allow("").optional().label("Profile picture"),
    name: Joi.string().allow("").optional().label("Name"),
    location: Joi.string().allow("").optional().label("Location"),
    password: Joi.string().allow("").optional().label("Password"),
  };

  doSubmit = () => {
    const data = { ...this.state.data };
    const currentUserId = getUser().id;
    if (!currentUserId) return;
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    data.email = getUser().email;
    this.props.updateUser(currentUserId, data);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Col align="center" md={12} sm={12}>
          <CardHeader> Update Profile </CardHeader>
          <Avatar className="mt-3" size={200} src={this.state.preview} />
          <div className="mt-4">
            <Button outline>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                onChange={this.onSelectFile}
              />
            </Button>
          </div>
        </Col>
        <Col>
          <CardHeader>Update Your Personal Information </CardHeader>
          <Row className="m-3">
            <Col md={12} sm={12} xs={12}>
              {this.renderInput("name", "Name")}
            </Col>
            <Col md={6} sm={12} xs={12}>
              {this.renderInput("location", "Location")}
            </Col>
            <Col md={6} sm={12} xs={12}>
              {this.renderInput("password", "New Password", "password")}
            </Col>
          </Row>
          <CardFooter align="center">
            {this.renderButton("Update Personal Information")}
          </CardFooter>
        </Col>
      </Form>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: getLoading(state),
  currentUser: getCurrentUser(state),
  errors: getErrors(state),
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userId, user) => dispatch(updateUser(userId, user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm);
