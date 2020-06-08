import React, { Component } from "react";
import { Col } from "reactstrap";
import Page from "../../components/Page";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page title="Login" breadcrumbs={[{ name: "dropdowns", active: true }]}>
        <Col>This is SignIn Page</Col>
      </Page>
    );
  }
}

export default SignInPage;
