import React, { Component } from "react";
import Page from "../../../components/Page";
import {
  Button,
  Card,
  Row,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
  CardFooter,
} from "reactstrap";
import { MdAdd } from "react-icons/md";

class PostItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page breadcrumbs={[{ name: "Share", active: true }]}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Col xl={10} lg={12} md={12} sm={12}>
            <Card>
              <CardHeader>Sharre What You Have</CardHeader>
              <CardBody>
                <Row>
                  <Col sm={12} md={6} xs={12}>
                    <Row>
                      <Col sm={12} md={6} xs={12}>
                        <Card
                          onClick={() => alert("image Clicked")}
                          className="imageContainer"
                        >
                          <Container className="d-flex justify-content-center align-items-center flex-column">
                            <MdAdd />
                          </Container>
                        </Card>
                      </Col>
                      <Col sm={12} md={6} xs={12}>
                        <Card className="imageContainer">
                          <div className="d-flex justify-content-center align-items-center flex-column">
                            Hello
                          </div>
                        </Card>
                      </Col>
                      <Col sm={12} md={6} xs={12}>
                        <Card className="imageContainer">
                          <div className="d-flex justify-content-center align-items-center flex-column">
                            Hello
                          </div>
                        </Card>
                      </Col>
                      <Col sm={12} md={6} xs={12}>
                        <Card className="imageContainer">
                          <div className="d-flex justify-content-center align-items-center flex-column">
                            Hello
                          </div>
                        </Card>
                      </Col>
                      <Col sm={12} md={6} xs={12}>
                        <Card className="imageContainer">
                          <div className="d-flex justify-content-center align-items-center flex-column">
                            Hello
                          </div>
                        </Card>
                      </Col>
                      <Col sm={12} md={6} xs={12}>
                        <Card className="imageContainer">
                          <div className="d-flex justify-content-center align-items-center flex-column">
                            Hello
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  {/* //Forms */}
                  <Col sm={12} md={6} xs={12}>
                    <Form>
                      <Row>
                        <Col xs={12} md={6}>
                          <FormGroup>
                            <Label for="exampleEmail" sm={12}>
                              Item Name
                            </Label>
                            <Col sm={12}>
                              <Input
                                type="text"
                                name="itemName"
                                placeholder="Item Name"
                              />
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                          <FormGroup>
                            <Label for="exampleEmail" sm={12}>
                              Category
                            </Label>
                            <Col sm={12}>
                              <Input type="select" name="itemName">
                                <option>Something</option>
                                <option>Product</option>
                                <option>Service</option>
                                <option>Digital</option>
                              </Input>
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                          <FormGroup>
                            <Label for="exampleEmail" sm={12}>
                              Item Name
                            </Label>
                            <Col sm={12}>
                              <Input
                                type="text"
                                name="itemName"
                                placeholder="Item Name"
                              />
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                          <FormGroup>
                            <Label for="exampleEmail" sm={12}>
                              Item Name
                            </Label>
                            <Col sm={12}>
                              <Input
                                type="text"
                                name="itemName"
                                placeholder="Item Name"
                              />
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                          <FormGroup>
                            <Label for="exampleEmail" sm={12}>
                              Item Name
                            </Label>
                            <Col sm={12}>
                              <Input
                                type="text"
                                name="itemName"
                                placeholder="Item Name"
                              />
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                          <FormGroup>
                            <Label for="exampleEmail" sm={12}>
                              Item Name
                            </Label>
                            <Col sm={12}>
                              <Input
                                type="text"
                                name="itemName"
                                placeholder="Item Name"
                              />
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="Description" sm={12}>
                          Terms And Conditions
                        </Label>
                        <Col sm={12}>
                          <Input
                            type="textarea"
                            name="itemName"
                            placeholder="Terms And Conditions"
                          />
                        </Col>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter align="center">
                <Button>Share</Button>
              </CardFooter>
            </Card>
          </Col>
        </div>
      </Page>
    );
  }
}

export default PostItemForm;
