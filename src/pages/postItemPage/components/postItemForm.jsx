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
  CardFooter,
} from "reactstrap";
class PostItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productSharing: false,
      serviceSharing: false,
      digitalSharing: false,
      file: [null],
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
  }

  fileObj = [];
  fileArray = [];

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log(this.state.file);
  }

  handleChange = (event) => {
    if (
      event.target.value === "productSharing" &&
      event.target.name === "sharingtype"
    ) {
      this.setState({
        productSharing: true,
        serviceSharing: false,
        digitalSharing: false,
      });
    } else if (
      event.target.value === "serviceSharing" &&
      event.target.name === "sharingtype"
    ) {
      this.setState({
        serviceSharing: true,
        productSharing: false,
        digitalSharing: false,
      });
    } else if (
      event.target.value === "digitalSharing" &&
      event.target.name === "sharingtype"
    ) {
      this.setState({
        serviceSharing: false,
        productSharing: false,
        digitalSharing: true,
      });
    } else if (
      event.target.value === "digitalSharing" &&
      event.target.name === "sharingtype"
    ) {
      this.setState({
        serviceSharing: false,
        digitalSharing: false,
        productSharing: false,
      });
    }
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Page breadcrumbs={[{ name: "Share", active: true }]}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Col xl={10} lg={12} md={12} sm={12}>
            <Card>
              <CardHeader>Share What You Have</CardHeader>
              <CardBody>
                <Row>
                  <Col sm={12} md={6} xs={12}>
                    <CardHeader>Upload Images</CardHeader>
                    <Form>
                      <Input
                        type="file"
                        className="form-control"
                        onChange={this.uploadMultipleFiles}
                        multiple
                      />
                      <Row>
                        {(this.fileArray || []).map((url) => (
                          <img className="imageContainer" src={url} alt="..." />
                        ))}
                      </Row>
                    </Form>
                  </Col>

                  {/* //Forms */}
                  <Col sm={12} md={6} xs={12}>
                    <Form>
                      <Row>
                        <Col xs={12} md={6}>
                          <FormGroup>
                            <Label for="exampleEmail" sm={12}>
                              Sharing || Donating?
                            </Label>
                            <Col sm={12}>
                              <Input type="select" name="sharingtype">
                                <option value="Sharing">Sharing</option>
                                <option value="Donation">Donating</option>
                              </Input>
                            </Col>
                          </FormGroup>
                        </Col>
                        <Col xs={12} md={6}>
                          <FormGroup>
                            <Label for="exampleEmail" sm={12}>
                              Category
                            </Label>
                            <Col sm={12}>
                              <Input
                                type="select"
                                name="sharingtype"
                                onChange={this.handleChange}
                              >
                                <option value="">Select A Category</option>
                                <option value="productSharing">
                                  Product Sharing
                                </option>
                                <option value="serviceSharing">
                                  Service Sharing
                                </option>
                                <option value="digitalSharing">
                                  Digital Sharing
                                </option>
                              </Input>
                            </Col>
                          </FormGroup>
                        </Col>
                        {this.state.productSharing ? (
                          <>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Product Name
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    name="name"
                                    placeholder="Product Name"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Location
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Price
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Product Category
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    name="productCategory"
                                    placeholder="Product Category"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={12}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Description
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="textarea"
                                    name="itemName"
                                    placeholder="Description"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={12}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
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
                            </Col>
                          </>
                        ) : null}
                        {this.state.serviceSharing ? (
                          <>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Service Type
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    name="name"
                                    placeholder="Product Name"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Location
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    name="location"
                                    placeholder="Location"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Price
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={6}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Product Category
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="text"
                                    name="productCategory"
                                    placeholder="Product Category"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={12}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
                                  Description
                                </Label>
                                <Col sm={12}>
                                  <Input
                                    type="textarea"
                                    name="itemName"
                                    placeholder="Description"
                                  />
                                </Col>
                              </FormGroup>
                            </Col>
                            <Col xs={12} md={12}>
                              <FormGroup>
                                <Label for="exampleEmail" sm={12}>
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
                            </Col>
                          </>
                        ) : null}
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter align="center">
                <Button onClick={this.uploadFiles}>Share</Button>
              </CardFooter>
            </Card>
          </Col>
        </div>
      </Page>
    );
  }
}

export default PostItemForm;
