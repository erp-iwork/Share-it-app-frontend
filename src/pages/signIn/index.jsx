import React, { Component } from "react";
import { Col } from "reactstrap";
import LoginImage1 from "../../assets/car1.png";
import LoginImage from "../../assets/demo-nanny.jpg";
import { Card, CardImg } from "reactstrap";
import LoginFormPage from "./components/loginForm";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false,
      images: [LoginImage, LoginImage1],
      selectedImage: LoginImage,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    let intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.selectedImage === this.state.images[0]) {
          return {
            selectedImage: this.state.images[1],
          };
        } else {
          return {
            selectedImage: this.state.images[0],
          };
        }
      });
    }, 2000);

    this.setState({
      intervalId,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
    clearInterval(this.state.intervalId);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 1000 });
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (
      <>
      <div className="loginBackground" />
      <div>
        {isDesktop ? (
          <Card md={12} sm={12} className="loginContainer">
            <Col md={7} sm={12} xs={12}>
              <CardImg
                width="100%"
                className="loginImage"
                src={this.state.selectedImage}
                alt="login image"
              />
            </Col>
            <Col md={5} sm={12} xs={12} className="loginFormContainer">
              <LoginFormPage />
            </Col>
          </Card>
        ) : (
          <Card md={12} sm={12} className="loginContainerMobile">
            <Col md={12} sm={12} xs={12} className="loginFormContainer">
              <LoginFormPage />
            </Col>
          </Card>
        )}
      </div>
      </>

    );
  }
}

export default SignInPage;
