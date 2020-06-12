import React, { Component } from "react";
import { Col } from "reactstrap";
// import LoginImage from "../../assets/Nunu.jpg";
import RegistrationImage from "../../assets/demo-nanny.jpg";

import { Card, CardImg } from "reactstrap";
import RegistrationFormPage from "./components/RegistrationForm";

class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1000 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <div className="loginBackground">
        {isDesktop ? (
          <Card md={12} sm={12} className="loginContainer">
            <Col md={5} sm={12} xs={12} className="loginFormContainer">
              <RegistrationFormPage />
            </Col>
            <Col md={7} sm={12} xs={12}>
              <CardImg
                width="100%"
                className="loginImage"
                src={RegistrationImage}
                alt="login image"
              />
            </Col>
            )
          </Card>
        ) : (
          <Card md={12} sm={12} className="loginContainerMobile">
            <Col md={12} sm={12} xs={12} className="loginFormContainer">
              <RegistrationFormPage />
            </Col>
          </Card>
        )}
      </div>
    );
  }
}

export default RegistrationPage;
