import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Form } from "reactstrap";
import { MdLock } from "react-icons/md";
import Logo from "../../../assets/Icons/CLogo.svg";
import Typography from "../../../components/Typography";
import { registerUser } from "../../../store/users";
import { connect } from "react-redux";
import MainForm from "../../../components/MainForm";

class RegistrationFormPage extends MainForm {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  doSubmit = () => {
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
              {this.renderInput("name", "Name", "Full Name")}
              {this.renderInput("email", "Email", "Email", "email")}
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
const mapDispatchToProps = (dispatch) => ({
  register: (userInfo) => dispatch(registerUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(RegistrationFormPage);
