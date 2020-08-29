import React from "react";
import Avatar from "../../components/Avatar";
import {
  Col,
  Input,
  Button,
  Row,
  CardHeader,
  CardFooter,
  Form,
  Alert,
} from "reactstrap";
import SettingForm from "./settingForm";
import Joi from "joi-browser";
import { connect } from "react-redux";
import {
  getLoading,
  getErrors,
  getStatus,
  updateUser,
  resetUserErrorsAndStatus,
} from "../../store/users";
import { getUser } from "../../store/users";
import * as auth from "../../services/authService";

class PersonalInfoForm extends SettingForm {
  state = {
    data: { avatar: "", name: "", location: "", password: "" },
    preview: "",
    errors: [],
  };
  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser) {
      const data = { ...this.state.data };
      data.name = currentUser.name;
      data.location = currentUser.location;
      this.setState({ data, preview: currentUser.avatar });
    }
  }
  componentWillUnmount() {
    this.props.resetUserErrorsAndStatus();
  }

  onSelectFile = (e) => {
    const data = { ...this.state.data };
    if (!e.target.files || e.target.files.length === 0) {
      data.avatar = undefined;
      this.setState({ data });
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    data.avatar = e.target.files[0];
    const objectUrl = URL.createObjectURL(data.avatar);
    this.setState({ data, preview: objectUrl });
  };
  schema = {
    avatar: Joi.any().allow("").optional().label("Profile picture"),
    name: Joi.string().allow("").optional().label("Name"),
    location: Joi.string().allow("").optional().label("Location"),
    password: Joi.string().allow("").optional().label("Password"),
  };

  doSubmit = () => {
    const data = { ...this.state.data };
    console.log(data.avatar);
    const currentUserId = auth.getUser().id;
    if (!currentUserId) return;
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    data.email = auth.getUser().email;
    this.props.updateUser(currentUserId, formData);
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
  currentUser: getUser(state),
  errors: getErrors(state),
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userId, user) => dispatch(updateUser(userId, user)),
  resetUserErrorsAndStatus: () => dispatch(resetUserErrorsAndStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoForm);
