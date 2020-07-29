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
          <Form>
            <Col align="center" md={12} sm={12}>
              <CardHeader> Update Profile </CardHeader>
              <Avatar className="mt-3" size={200} />
              <div className="mt-4">
                <Button outline>
                  <Input type="file" name="file" id="exampleFile" />
                </Button>
              </div>
            </Col>
            <Col>
            
              <CardHeader>Update Your Personal Information </CardHeader>
              <Row className="m-3">
                <Col md={12} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="name" placeholder="Name ..." />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Location</Label>
                    <Input
                      type="text"
                      name="location"
                      placeholder="Location ..."
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>New Password</Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="New Password"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <CardFooter align="center">
                <Button outline>
                  {" "}
                  <MdSave className="mr-1" /> Update Personal Information
                </Button>
              </CardFooter>
            </Col>
          </Form>

          <Form>
            <Col>
              <CardHeader>Update Your Contact Information</CardHeader>
              <Row className="m-3">
                <Col md={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="number"
                      name="name"
                      placeholder="Phone Number ..."
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Telegram</Label>
                    <Input
                      type="text"
                      name="location"
                      placeholder="Telegram ..."
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Facebook</Label>
                    <Input
                      type="text"
                      name="text"
                      placeholder="Facebook ... "
                    />
                  </FormGroup>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Website</Label>
                    <Input
                      type="text"
                      name="text"
                      placeholder="Your Website (if any) ..."
                    />
                  </FormGroup>
                </Col>
              </Row>
              <CardFooter align="center">
                <Button outline>
                  {" "}
                  <MdSave className="mr-1" />
                  Update Contact Information
                </Button>
              </CardFooter>
            </Col>
          </Form>
        </Card>
      </Page>
    );
  }
}

export default Settings;
