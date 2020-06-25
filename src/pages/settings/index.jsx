import React, { Component } from 'react';
import Avatar from "../../components/Avatar";
import {
     Col, Form, Card,
    FormGroup, Label, Input,
    Button, Row, CardHeader,
} from 'reactstrap';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Card >
                    <Form className="form">
                        <Row>
                            <Col align='center' md={6} sm={12}>
                                <CardHeader> Update Profile Picture </CardHeader>
                                <Avatar size={300} />
                                <div className='changeProfile'>
                                    <Button outline>Change Picture</Button>
                                </div>
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

                                            <Input
                                                type="number"
                                                name="phoneNumber"
                                                placeholder="Enter new Phone number  "
                                            /></Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col>
                                            <Label>Telegram username</Label>

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
            </div>
        );
    }
}

export default Settings;