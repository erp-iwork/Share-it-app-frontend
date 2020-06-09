import React, { Component } from "react";
import { Col } from "reactstrap";
import LoginImage from "../../assets/Nunu.jpg";
import { Card, CardImg } from "reactstrap";
import LoginFormPage from "./components/loginForm";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Card className="loginContainer">
          <Col md={7}>
            <CardImg
              style={{ width: "auto", height: 900 }}
              src={LoginImage}
              alt="login image"
            />
          </Col>

          <Col md={5} className="loginFormContainer">
            <LoginFormPage />
          </Col>
        </Card>
      </div>
    );
  }
}

export default SignInPage;
