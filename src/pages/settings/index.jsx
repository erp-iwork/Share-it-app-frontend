import React, { Component } from "react";
import Avatar from "../../components/Avatar";
import Page from "../../components/Page";
import {
  Col,
  Card,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  CardHeader,
  CardFooter,
  Form,
} from "reactstrap";
import { MdSave } from "react-icons/md";
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
