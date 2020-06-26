import React, { Component } from "react";
import Avatar from "../../components/Avatar";
import Page from "../../components/Page";
import CoverImage from "../../assets/background.jpg";


import {
<<<<<<< HEAD
    Col, Form, Card,
    FormGroup, Label, Input,
    Button, Row, CardHeader, CardImg,
} from 'reactstrap';
=======
  Col,
  Form,
  Card,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import Page from "../../components/Page";
>>>>>>> d670491e7a7a65dbcebd94440017e1670f40ff81


class Settings extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Page breadcrumbs={[{ name: "person Name", active: true }]}>

                <Card >

                    <Form className="form">

                        <Row>


                            <Col align='center' md={6} sm={12}>
                                <CardHeader> Update Profile Picture </CardHeader>
                                {/* <Avatar size={250} /> */}
                                <CardImg alt=''  src={CoverImage}/>
                             


                                <Row>
                                    <Col>
                                       
                                        <Avatar size={150} />
                                    </Col>
                                    <Col align='center'>
                                        <div className='changeProfile'>
                                            <Button outline>Change background Picture</Button>
                                        </div>
                                        <div className='changeProfile'>
                                            <Button outline>Change Picture</Button>
                                        </div>

                                    </Col>
                                </Row>
                            </Col>


                            <Col>
                                <CardHeader>Update Personal Information </CardHeader>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Col>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Enter new user name "
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Col>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="myemail@email.com"
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Location</Label>
                                    <Col>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Enter new location name "
                                        /></Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Col>
                                        <Input
                                            type="password"
                                            name="password"
                                            placeholder=" New password "
                                        /></Col>
                                </FormGroup>
                                <CardHeader>Update contact Information </CardHeader>
                                <Row md={2} >
                                    <FormGroup>
                                        <Col>
                                            <Label>Phone number </Label>
=======
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page breadcrumbs={[{ name: "Edit Profile", active: true }]}>
        <Card>
          <Form className="form">
            <Row>
              <Col align="center" md={6} sm={12}>
                <CardHeader> Update Profile Picture </CardHeader>
                <CardBody>
                  <Avatar size={300} />
                  <div className="changeProfile">
                    <Button outline>Change Picture</Button>
                  </div>
                </CardBody>
              </Col>
              <Col>
                <CardHeader>Update Personal Information </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label>Name</Label>
                    <Col>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter new user name "
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Col>
                      <Input
                        type="email"
                        name="email"
                        placeholder="myemail@email.com"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label>Location</Label>
                    <Col>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter new location name "
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Col>
                      <Input
                        type="password"
                        name="password"
                        placeholder=" New password "
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
                <CardHeader>Update contact Information </CardHeader>
                <CardBody>
                  <Col>
                    <Row md={2}>
                      <FormGroup>
                        <Col>
                          <Label>Phone number </Label>
>>>>>>> d670491e7a7a65dbcebd94440017e1670f40ff81

                          <Input
                            type="number"
                            name="phoneNumber"
                            placeholder="Enter new Phone number  "
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Col>
                          <Label>Telegram username</Label>

<<<<<<< HEAD
                                            <Input
                                                type="text"
                                                name="telegramUN"
                                                placeholder="Enter new telegram user name "
                                            /></Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col>
                                            <Label>Facebook Adress</Label>
                                            <Input
                                                type="text"
                                                name="facebookUN"
                                                placeholder="Enter new Facebook user name "
                                            /></Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col>
                                            <Label>WhatsApp Adress </Label>
                                            <Input
                                                type="text"
                                                name="whatsAppUN"
                                                placeholder="Enter new WhatsApp user name "
                                            />
                                        </Col>
                                    </FormGroup>
                                </Row>
                                <Col className='submitbutton'>
                                    <Button color="success" size="lg" >Update Profile</Button>
                                </Col>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Page>
        );
    }
=======
                          <Input
                            type="text"
                            name="telegramUN"
                            placeholder="Enter new telegram user name "
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Col>
                          <Label>Facebook Adress</Label>
                          <Input
                            type="text"
                            name="facebookUN"
                            placeholder="Enter new Facebook user name "
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Col>
                          <Label>WhatsApp Adress </Label>
                          <Input
                            type="text"
                            name="whatsAppUN"
                            placeholder="Enter new WhatsApp user name "
                          />
                        </Col>
                      </FormGroup>
                    </Row>
                  </Col>
                </CardBody>

                <Col></Col>
              </Col>
            </Row>
          </Form>
          <CardFooter align="center">
            <Button outline>Update Profile</Button>
          </CardFooter>
        </Card>
      </Page>
    );
  }
>>>>>>> d670491e7a7a65dbcebd94440017e1670f40ff81
}

export default Settings;
