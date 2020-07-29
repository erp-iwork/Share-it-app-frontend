import React, { Component } from "react";
import Avatar from "../../components/Avatar";
import Page from "../../components/Page";
import {
  Col,
  Form,
  Card,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  CardHeader,
  CardImg,
  CardFooter,
  CardBody,
} from "reactstrap";
import { MdSave, MdPictureInPicture } from "react-icons/md";

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
        <Card>
          <Row>
            <Col align="center" md={6} sm={12}>
              <CardHeader> Update Picture </CardHeader>
              <Avatar className="mt-3" size={400} />
              <div className="mt-4">
                <Button outline>
                  {" "}
                  <MdPictureInPicture className="mr-2" />
                  Change Picture
                </Button>
              </div>
            </Col>
            <Col>
              <CardHeader>Update Your Personal Information </CardHeader>
              <Row className="m-3">
                <Col md={6} sm={12} xs={12}>
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
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Old Password"
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
            </Col>
          </Row>
          <CardFooter align="center">
            <Button outline>
              {" "}
              <MdSave className="mr-2" /> Save
            </Button>
          </CardFooter>
        </Card>
      </Page>
    );
  }
}

export default Settings;
