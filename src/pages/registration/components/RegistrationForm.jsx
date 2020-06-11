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

class RegistrationFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
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
            <Form>
              <FormGroup>
                <Label for="exampleName" sm={12}>
                  Name
                </Label>
                <Col sm={12}>
                  <Input type="text" name="Name" placeholder="Full Name" />
                </Col>
              </FormGroup>
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
              <FormGroup>
                <Label for="exampleConfirmPassword" sm={12}>
                  Confirm Password
                </Label>
                <Col sm={12}>
                  <Input
                    type="password"
                    name="confirmPasssword"
                    placeholder="Confirm Password"
                  />
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

export default RegistrationFormPage;
