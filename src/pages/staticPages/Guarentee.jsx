import React, { Component } from "react";
import Page from "../../components/Page";

class GuarenteePage extends Component {
  state = {};
  render() {
    return (
      <Page breadcrumbs={[{ name: "Guarentee", active: true }]} className='staticPageContainer'></Page>
    );
  }
}

export default GuarenteePage;
