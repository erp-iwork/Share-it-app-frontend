import React from "react";
import Joi from "joi-browser";
import { Button, Card, CardBody, CardHeader, Col, Form } from "reactstrap";
import Logo from "./formLayout";
import { MdLock } from "react-icons/md";
import Typography from "../../../components/Typography";
import { connect } from "react-redux";
import { loginUser, getStatus, getLoading } from "../../../store/auth";
import MainForm from "../../../components/MainForm";
import { Link } from "react-router-dom";

class LoginFormPage extends MainForm {
  constructor(props) {
    super(props);
    this.state = {
      data: { email: "", password: "" },
      errors: {},
    };
    this.schema = {
      email: Joi.string().email().required().label("email"),
      password: Joi.string().min(8).required().label("Password"),
    };
  }

  doSubmit = () => {
    this.props.loginUser(this.state.data);
  };

  render() {
    if (this.props.status === "success") window.location = "/home";
    return (
      <Col md={12}>
        <Card>
          <CardHeader
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Logo className="CLogo" />
          </CardHeader>
          <Typography className="label" align="center">
            Sign In
          </Typography>
          <Col md={12} align="center">
            <Button className="loginIcon">
              <MdLock fontSize={30} />
            </Button>
          </Col>

          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              {this.renderInput("email", "Email", "Email", "email")}
              {this.renderInput("password", "Password", "Password", "password")}
              {this.renderButton("Login")}
            </Form>
            <Link to={{ pathname: "/registration" }}>
              <Col align="right" className="dir-registration">
                <h8>Don't have an Account? Register here ... </h8>
              </Col>
            </Link>
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
  loginUser: (userInfo) => dispatch(loginUser(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormPage);
