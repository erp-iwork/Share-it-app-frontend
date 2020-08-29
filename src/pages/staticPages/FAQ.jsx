import React, { Component } from "react";
import Page from "../../components/Page";

class FAQPage extends Component {
  state = {};
  render() {
    return (
      <Page breadcrumbs={[{ name: "Frequently Asked Questions", active: true }]} className='staticPageContainer'></Page>
    );
  }
}

export default FAQPage;
