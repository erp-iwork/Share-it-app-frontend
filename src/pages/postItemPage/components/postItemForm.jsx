import React, { Component } from "react";
import Page from "../../../components/Page";
import ImageUploader from "react-images-upload";
import {
  Button,
  Card,
  Row,
  CardBody,
  CardHeader,
  Col,
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
      pictures: [],
      productSharing: false,
      serviceSharing: false,
      digitalSharing: false,
      category: "",
    };
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  handleChange = (event) => {
    this.setState({ category: event.target.value });
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
                    <ImageUploader
                      label="Max file size: 2mb, accepted: jpg png"
                      withIcon={true}
                      withPreview={true}
                      buttonText="Choose images"
                      onChange={this.onDrop}
                      imgExtension={[".jpg", ".png"]}
                      maxFileSize={2242880}
                    />
                  </Col>
                  {/* //Forms */}
                  <Col sm={12} md={6} xs={12}>
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
                      {this.state.category === "productSharing" ? (
                        <ProductSharingForm />
                      ) : null}
                      {this.state.category === "serviceSharing" ? (
                        <ServiceSharingForm />
                      ) : null}
                    </Row>
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
