import React, { Component } from "react";
import Page from "../../components/Page";

class SecurityPage extends Component {
  state = {};
  render() {
    return (
      <Page breadcrumbs={[{ name: "Sharreit Security", active: true }]} className='staticPageContainer'></Page>
    );
  }
}

export default SecurityPage;
