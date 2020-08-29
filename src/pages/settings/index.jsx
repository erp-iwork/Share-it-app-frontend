import React, { Component } from "react";
import Page from "../../components/Page";
import {
  Card,
} from "reactstrap";
import PersonalInfoForm from "./personalInfoForm";
import ContactInfoForm from "./contactInfoForm";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page
        breadcrumbs={[{ name: "person Name", active: true }]}
        className="settingsContainer"
      >
        <Card className="settingsFormContainer">
          <PersonalInfoForm />
          <ContactInfoForm />
        </Card>
      </Page>
    );
  }
}

export default Settings;
