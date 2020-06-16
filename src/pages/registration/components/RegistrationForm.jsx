import React from "react";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { Button, Card, CardBody, CardHeader, Col, Form } from "reactstrap";
import { MdLock } from "react-icons/md";
import Logo from "../../../assets/Icons/CLogo.svg";
import Typography from "../../../components/Typography";
import { registerUser, getStatus, getLoading } from "../../../store/auth";
import MainForm from "../../../components/MainForm";

class RegistrationFormPage extends MainForm {
  state = {
    data: {
      name: "",
      email: "",
      location: "",
      password: "",
      confirmPassword: "",
    },
    errors: {},
  };
  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("email"),
    location: Joi.string().required().label("Location"),
    password: Joi.string().min(8).required().label("Password"),
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .options({
        language: {
          any: {
            allowOnly: "!!Passwords do not match",
          },
        },
      }),
  };
  doSubmit = async () => {
    const { name, email, password, location } = this.state.data;
    await this.props.registerUser({ email, password, name, location });
    // if (this.props.status === "success") window.location = "/";
    // if (this.props.error) {
    //   const errors = { ...this.state.errors };
    //   errors.email = this.props.error;
    //   this.setState({ errors });
    // }
  };

  render() {
    if (this.props.status === "success") window.location = "/";
    return (
      <Col md={12}>
        <Card>
          <CardHeader
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <img className="CLogo" src={Logo} alt="" />
          </CardHeader>
          <Typography className="label" align="center">
            Register
          </Typography>
          <Col align="center" md={12}>
            <Button className="loginIcon">
              <MdLock fontSize={30} />
            </Button>
          </Col>

          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Name", "Full Name")}
              {this.renderInput("email", "Email", "Email")}
              {this.renderInput("location", "Location", "Location")}
              {this.renderInput("password", "Password", "Password", "password")}
              {this.renderInput(
                "confirmPassword",
                "Confirm Password",
                "Confirm Password",
                "password"
              )}

              {this.renderButton("Register")}
            </Form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
const mapStateToProps = (state) => ({
  status: getStatus(state),
  loading: getLoading(state),
  error: state.auth.error,
});
const mapDispatchToProps = (dispatch) => ({
  registerUser: (userInfo) => dispatch(registerUser(userInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationFormPage);
