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
import MainForm from "../../../components/MainForm";
import { connect } from "react-redux";
import { getCurrentUser } from "../../../store/auth";
import { getCategories, loadCategories } from "../../../store/categories";
import {
  addItem,
  getLoading,
  getErrors,
  getStatus,
} from "../../../store/items";
class PostItemForm extends MainForm {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        owner_id: this.props.currentUser.id,
        title: "",
        location: "",
        price: "",
        description: "",
        termsAndConditions: "",
        category_id: "",
        condition: "",
        properties: JSON.stringify({ color: "red" }),
        is_donating: false,
      },
      errors: {},
      pictures: [],
      categories: this.props.categories,
    };

    this.onDrop = this.onDrop.bind(this);
  }
  schema = {
    is_donating: Joi.any().label("Is sharing"),
    properties: Joi.any().label("Properties"),
    condition: Joi.string().required().label("Condition"),
    category_id: Joi.string().required().label("Category"),
    owner_id: Joi.string().required().label("owner_id"),
    title: Joi.string().required().label("Product Name"),
    location: Joi.string().required().label("Location"),
    price: Joi.number().required().label("Price"),
    description: Joi.string().required().label("Product Category"),
    termsAndConditions: Joi.string().required().label("Terms And Conditions"),
  };
  isDonatingOptions = [
    {
      id: "false",
      category: "Sharing",
    },
    {
      id: "true",
      category: "Donating",
    },
  ];
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
                          <>
                            <Col xs={12} md={6}>
                              {this.renderInput(
                                "title",
                                "Product Name",
                                "Product Name"
                              )}
                            </Col>
                            <Col xs={12} md={6}>
                              {this.renderInput(
                                "location",
                                "Location",
                                "Location"
                              )}
                            </Col>
                            <Col xs={12} md={6}>
                              {this.renderInput("price", "Price", "Price")}
                            </Col>
                            <Col xs={12} md={6}>
                              {this.renderInput(
                                "condition",
                                "Condition",
                                "Condition"
                              )}
                            </Col>
                            <Col xs={12} md={12}>
                              {this.renderInput(
                                "description",
                                "Description",
                                "Description",
                                "textarea"
                              )}
                            </Col>
                            <Col xs={12} md={12}>
                              {this.renderInput(
                                "termsAndConditions",
                                "Terms And Conditions",
                                "Terms And Conditions",
                                "textarea"
                              )}
                            </Col>
                            <CardFooter align="center">
                              {this.renderButton("Share")}
                            </CardFooter>
                          </>
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
              </Form>
            </Card>
          </Col>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  currentUser: getCurrentUser(state),
  categories: getCategories(state),
  errors: getErrors(state),
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  loadCategories: () => dispatch(loadCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItemForm);
