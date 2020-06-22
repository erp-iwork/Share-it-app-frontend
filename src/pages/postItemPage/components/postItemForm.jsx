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
import ServiceSharingForm from "./serviceSharingForm";
import ProductSharingForm from "./producSharingForm";
class PostItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [null],
      productSharing: false,
      serviceSharing: false,
      digitalSharing: false,
    };
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
                          <ProductSharingForm />
                        ) : null}
                        {this.state.serviceSharing ? (
                          <ServiceSharingForm />
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
