import React, { Component } from "react";
import Page from "../../components/Page";

class AboutUsPage extends Component {
  state = {};
  render() {
    return (
      <Page breadcrumbs={[{ name: "About Us", active: true }]} className='staticPageContainer'></Page>
    );
  }
}

export default AboutUsPage;
