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
import { MdLock } from "react-icons/md";

import Logo from "../../../assets/Icons/CLogo.svg";
import Typography from "../../../components/Typography";
import { registerUser } from "../../../store/users";
import { connect } from "react-redux";

class RegistrationFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //TODO
  //Refactor
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(this.state);
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
              <FormGroup>
                <Label for="exampleName" sm={12}>
                  Name
                </Label>
                <Col sm={12}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
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
              <FormGroup>
                <Label for="exampleConfirmPassword" sm={12}>
                  Confirm Password
                </Label>
                <Col sm={12}>
                  <Input type="password" placeholder="Confirm Password" />
                </Col>
              </FormGroup>
              <FormGroup align="center" md={12}>
                <Button>Register</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  register: (userInfo) => dispatch(registerUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(RegistrationFormPage);
