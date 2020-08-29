import React, { Component } from "react";
import Page from "../../components/Page";

class HowSharreitWorkPage extends Component {
  state = {};
  render() {
    return (
      <Page breadcrumbs={[{ name: "How Sharreit Works.", active: true }]} className='staticPageContainer'></Page>
    );
  }
}

export default HowSharreitWorkPage;
