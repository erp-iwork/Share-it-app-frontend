import React from "react";
import Joi from "joi-browser";
import Logo from "../../../assets/Icons/CLogo.svg";
import { Button, Card, CardBody, Col, Form, Alert } from "reactstrap";
import { MdLock } from "react-icons/md";
import Typography from "../../../components/Typography";
import { connect } from "react-redux";
import {
  loginUser,
  getStatus,
  getLoading,
  resetErrors,
} from "../../../store/auth";
import MainForm from "../../../components/MainForm";
import { Link, Redirect } from "react-router-dom";
import routes from "../../../config/routes";
import { getUser } from "../../../services/authService";

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
  componentWillUnmount() {
    this.props.resetErrors();
  }

  doSubmit = () => {
    this.props.loginUser(this.state.data);
  };

  render() {
    if (this.props.status === "success") {
      window.location = this.props.from
        ? this.props.from.pathname
        : routes.homePage;
    }
    if (getUser()) return <Redirect to="/" />;
    return (
      <Card className="p-4">
        <Col align="center">
          <Link to={{ pathname: routes.homePage }}>
            <img className="CLogo" src={Logo} alt="" />
          </Link>
        </Col>
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
            {this.props.errors && (
              <Alert color="danger">
                {Object.values(this.props.errors)[0]}
              </Alert>
            )}
            {this.renderButton("Login")}
          </Form>
          <Link to={{ pathname: routes.registration }}>
            <Col align="right" className="dir-registration">
              <h8>Don't have an Account? Register here ... </h8>
            </Col>
          </Link>
        </CardBody>
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({
  status: getStatus(state),
  loading: getLoading(state),
  errors: state.auth.errors,
});
const mapDispatchToProps = (dispatch) => ({
  loginUser: (userInfo) => dispatch(loginUser(userInfo)),
  resetErrors: () => dispatch(resetErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormPage);
