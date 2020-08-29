import React, { Component } from "react";
import LoginImage1 from "../../assets/car1.png";
import LoginImage from "../../assets/demo-nanny.jpg";
import { Card } from "reactstrap";
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
    const { state: stateFromLocation } = this.props.location;
    // const isDesktop = this.state.isDesktop;
    return (
      <Card md={12} sm={12} xs={12} className="loginContainer1">
        <LoginFormPage from={stateFromLocation ? stateFromLocation.from : ""} />
      </Card>
    );
  }
}

export default SignInPage;
