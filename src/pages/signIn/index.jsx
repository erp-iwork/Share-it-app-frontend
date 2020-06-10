import React, { Component } from "react";
import { Col } from "reactstrap";
// import LoginImage from "../../assets/Nunu.jpg";
import LoginImage from "../../assets/demo-nanny.jpg";

import { Card, CardImg } from "reactstrap";
import LoginFormPage from "./components/loginForm";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='loginBackground'>
        <Card md={12} sm={12} className="loginContainer">
          <Col md={7} sm={12} xs={12}>
            <CardImg
              width="100%"
              className='loginImage'
              // style={{ width: "auto", height: 900 }}
              src={LoginImage}
              alt="login image"
            />
          </Col>

          <Col md={5} sm={12} xs={12} className="loginFormContainer">
            <LoginFormPage />
          </Col>
        </Card>
      </div>
    );
  }
}

export default SignInPage;
