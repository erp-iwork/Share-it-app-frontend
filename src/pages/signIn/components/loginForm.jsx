import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Form } from "reactstrap";
import Logo from "./formLayout";
import { MdLock } from "react-icons/md";
import Typography from "../../../components/Typography";
import { connect } from "react-redux";
import { login } from "../../../store/auth";
import MainForm from "../../../components/MainForm";

class LoginFormPage extends MainForm {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  doSubmit = () => {
    this.props.login(this.state);
  };
  render() {
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
          </CardBody>
        </Card>
      </Col>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  login: (userInfo) => dispatch(login(userInfo)),
});

export default connect(null, mapDispatchToProps)(LoginFormPage);
