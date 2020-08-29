import React, { Component } from "react";
import Page from "../../components/Page";

class TermsAndConditionsPage extends Component {
  state = {};
  render() {
    return (
      <Page breadcrumbs={[{ name: "Terms of Service", active: true }]} className='staticPageContainer'></Page>
    );
  }
}

export default TermsAndConditionsPage;
