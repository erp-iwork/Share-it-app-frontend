import MainForm from "../../../components/MainForm";
import React from "react";
import Page from "../../../components/Page";
import ImageUploader from "react-images-upload";
import {
  Card,
  Row,
  CardBody,
  CardHeader,
  Col,
  CardFooter,
  Form,
  Alert,
} from "reactstrap";
import ServiceSharingForm from "./serviceSharingForm";
import Joi from "joi-browser";
import { connect } from "react-redux";
import { getCurrentUser } from "../../../store/auth";
import { getCategories, loadCategories } from "../../../store/categories";
import {
  addItem,
  getLoading,
  getErrors,
  getStatus,
} from "../../../store/items";
import ProductSharingForm from "../components/producSharingForm";

function withPostItem(component) {
  return class WithPostItem extends MainForm {
    componentDidMount() {
      this.props.loadCategories();
    }

    onDrop(picture) {
      this.setState({
        pictures: this.state.pictures.concat(picture),
      });
    }
    doSubmit = () => {
      const data = { ...this.state.data };
      data.is_donating = data.is_donating === "true" ? true : false;
      const pictures = [...this.state.pictures];
      const formData = new FormData();
      for (const key in pictures) {
        formData.append(`image${key}`, pictures[key]);
      }
      for (var key in data) {
        formData.append(key, data[key]);
      }
      this.props.addItem(formData);
    };
    render() {
      const { category_id } = this.state.data;
      return (
        <Page breadcrumbs={[{ name: "Share", active: true }]}>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Col xl={10} lg={12} md={12} sm={12}>
              <Card>
                <CardHeader>Share What You Have</CardHeader>
                <Form onSubmit={this.handleSubmit}>
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
                            {this.renderSelect(
                              "is_donating",
                              "Sharing || Donating?",
                              this.isDonatingOptions
                            )}
                          </Col>
                          <Col xs={12} md={6}>
                            {this.renderSelect(
                              "category_id",
                              "Category",
                              this.props.categories
                            )}
                          </Col>
                          {category_id === "2" ? (
                            <ProductSharingForm
                              renderInput={this.renderInput}
                            />
                          ) : null}
                          {category_id === "1" ? <ServiceSharingForm /> : null}
                        </Row>
                      </Col>
                    </Row>
                    {this.props.errors && (
                      <Alert color="danger">
                        {Object.values(this.props.errors)[0]}
                      </Alert>
                    )}
                    {this.props.status === "success" && (
                      <Alert color="success">
                        An item has been successfully created
                      </Alert>
                    )}
                  </CardBody>
                  <CardFooter align="center">
                    {this.renderButton("Share")}
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </div>
        </Page>
      );
    }
  };
}
