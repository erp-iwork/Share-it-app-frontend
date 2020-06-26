import React, { Component } from 'react';
import Avatar from "../../components/Avatar";
import Page from "../../components/Page";
import CoverImage from "../../assets/background.jpg";

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

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Page breadcrumbs={[{ name: "person Name", active: true }]}>
                <Card>
                    <Form className="form">
                        <Row >
                            <Col align="center" md={6} sm={12} >
                                <CardHeader> Update Picture </CardHeader>
                                {/* <Avatar size={250} /> */}
                                <div className="containerBackground">
                                <CardImg alt="" src={CoverImage} />

                                </div>
                                <Row>
                                    <Col>
                                        <Avatar size={150} />
                                    </Col>
                                    <Col align="center">
                                        <div className="changeProfile">
                                            <Button outline>Change background Picture</Button>
                                        </div>
                                        <div className="changeProfile">
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
                                <CardHeader>Update contact Information </CardHeader>
                                <CardBody>

                                <Row>
                                <Col md={6}>

                                    <FormGroup row>
                                            <Label>Phone number </Label>

                                            <Input
                                                type="number"
                                                name="phoneNumber"
                                                placeholder="Enter new Phone number  "
                                            />
                                    </FormGroup>
                                    </Col>

                                    <FormGroup>
                                        <Col>
                                            <Label>Phone number </Label>

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
                                </CardBody>
                                <CardFooter>

                                <Col className="submitbutton">
                                    <Button color="success" size="lg">
                                        Update Profile
                  </Button>
                                </Col>
                                </CardFooter>
                            </Col>
                        </Row>

                    </Form>
                </Card>
            </Page>
        );
    }
}

export default Settings;