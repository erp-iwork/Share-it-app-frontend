import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Logo from "./formLayout";
import { MdLock } from "react-icons/md";
import Typography from "../../../components/Typography";
import { connect } from "react-redux";
import { login } from "../../../store/auth";

class LoginFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
              <FormGroup>
                <Label for="exampleEmail" sm={12}>
                  Email
                </Label>
                <Col sm={12}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" sm={12}>
                  Password
                </Label>
                <Col sm={12}>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup align="center" md={12}>
                <Button>Login</Button>
              </FormGroup>
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
