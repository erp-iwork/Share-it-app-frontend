import React, { Component } from "react";
import { Card } from "reactstrap";
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
    // const isDesktop = this.state.isDesktop;
    return (
      <Card md={12} sm={12} xs={12} className="loginContainer">
        <RegistrationFormPage />
      </Card>
    );
  }
}

export default RegistrationPage;
