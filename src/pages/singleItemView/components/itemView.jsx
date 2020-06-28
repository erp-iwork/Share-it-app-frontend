import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { toast } from "react-toastify";
import { Carousel } from "react-responsive-carousel";
import { MdSend } from "react-icons/md";

const openNotification = () => {
  toast.error("Did You Read the Terms and Conditions?");
};

//TODO - Refactor
class ItemViewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal_backdrop: false,
      modal_terms_and_conditions: false,
      modal_nested: false,
      backdrop: true,
      accepted: false,
    };
  }

  toggle = (status) => () => {
    if (!status) {
      return this.setState({
        modal: !this.state.modal,
      });
    } else if (status === "Accepted") {
      return this.setState({
        accepted: true,
        modal: false,
      });
    } else if (status === "Denied") {
      return (
        toast.warning(
          "You Can't Contact the Supplier Without Accepting the Terms and Conditions"
        ),
        this.setState({
          modal: false,
        })
      );
    }
  };

  render() {
    const { accepted } = this.state;
    const {
      item_images,
      title,
      price,
      description,
      condition,
      is_available,
      // location,
      properties,
    } = this.props.selectedItem;
    return (
      <Card>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle()}>
            Terms And Conditions for <b>{title}</b>
          </ModalHeader>
          <ModalBody>
            {"Terms and conditions goes here"}
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle("Accepted")}>
              Accept
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle("Denied")}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <CardHeader>
          <b>{title}</b>
        </CardHeader>

        <CardBody>
          <Row>
            <Col md={8}>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showArrows={false}
                showThumbs={true}
              >
                {item_images
                  ? item_images.map((image) => (
                      <div
                        key={image.imageId}
                        className="MainImageDisplayContainer"
                      >
                        <img
                          alt=""
                          class="singleItemMainImageDisplay"
                          src={image.image}
                        />
                      </div>
                    ))
                  : null}
              </Carousel>
            </Col>
            <Col md={4}>
              <hr />
              <Row>
                <Col md={6} className="singlePadding">
                  <div>
                    <i>Name</i>
                  </div>
                  <b>{title}</b>
                </Col>
                <Col md={6}>
                  <div>
                    <i>Condition</i>
                  </div>{" "}
                  <b>{condition}</b>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="singlePadding">
                  <div>
                    <i>Availability</i>
                  </div>
                  <b>{is_available ? "Not Available" : "Available"}</b>
                </Col>
                <Col md={6}>
                  <div>
                    <i>Price/Day</i>
                  </div>{" "}
                  <b>{price + "$"}</b>
                </Col>
              </Row>
              {/* <Row>
                <Col md={6}>
                  <div>
                    <i>Share Count</i>
                  </div>
                  <b>12</b>
                </Col>
                <Col md={6}>
                  <div>
                    <i>Driven Miles</i>
                  </div>{" "}
                  <b>14,548'</b>
                </Col> 
              </Row> */}
              <hr />
              <CardHeader className="singlePadding">
                Additional Information
              </CardHeader>
              <Row className="singlePadding">
                {properties
                  ? Object.keys(properties).map((key) => (
                      <Col md={6} key={key} className="singleItemViewBody">
                        <div>
                          <i>{properties[key].label}</i>
                        </div>
                        <b>{properties[key].value}</b>
                      </Col>
                    ))
                  : null}
                {/* <Col md={6}>
                  <div>
                    <i>location</i>
                  </div>{" "}
                  <b>{location}</b>
                </Col> */}
              </Row>
              <div className="singlePadding">
                <div>
                  <i>Description</i>
                </div>
                <b>{description}</b>
              </div>
              <div>
                <div className="singlePaddingterm">
                  <i>Terms And Conditions For this Item</i>
                </div>
                <Col>
                  <Button block outline onClick={this.toggle()}>
                    Terms And Conditions
                  </Button>
                </Col>
              </div>
              <>
                <CardHeader className="singlePaddingterm">
                  Interested?<small>Contact the Supplier</small>
                </CardHeader>
                <Row>
                  <Col md={9}>
                    <Input
                      type="textarea"
                      value="Hello There, I am Interested in what i see"
                    />
                  </Col>
                  {accepted ? (
                    <Col md={3}>
                      <Button block outline>
                        <MdSend />
                      </Button>
                    </Col>
                  ) : (
                    <Col md={3}>
                      <Button
                        color="danger"
                        onClick={() => openNotification()}
                        block
                        outline
                      >
                        <MdSend />
                      </Button>
                    </Col>
                  )}
                </Row>
              </>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default ItemViewComp;
