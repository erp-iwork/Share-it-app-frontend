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

class LoginFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
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
            <Form>
              <FormGroup>
                <Label for="exampleEmail" sm={12}>
                  Email
                </Label>
                <Col sm={12}>
                  <Input type="email" name="email" placeholder="Email" />
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

export default LoginFormPage;
