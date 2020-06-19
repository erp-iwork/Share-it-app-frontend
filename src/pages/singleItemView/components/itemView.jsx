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
import DemoImage from "../../../assets/demo-nanny.jpg";
import DemoImage1 from "../../../assets/Nunu.png";
import DemoImage2 from "../../../assets/car1.png";
import { Luggage } from "../../../assets/Sharreit-Icons";
import { Carousel } from "react-responsive-carousel";
import { MdSend } from "react-icons/md";

const openNotification = () => {
  toast.error("Did You Read the Terms and Conditions?");
};

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
    }
  };

  render() {
    const { accepted } = this.state;
    return (
      <Card>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle()}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle()}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle("Accepted")}>
              Accept
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <CardHeader>Item Name goes here</CardHeader>
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
                <div className="MainImageDisplayContainer">
                  <img
                    alt=""
                    class="singleItemMainImageDisplay"
                    src={DemoImage}
                  />
                </div>
                <div className="MainImageDisplayContainer">
                  <img
                    alt=""
                    class="singleItemMainImageDisplay"
                    src={DemoImage1}
                  />
                </div>
                <div className="MainImageDisplayContainer">
                  <img
                    alt=""
                    class="singleItemMainImageDisplay"
                    src={DemoImage2}
                  />
                </div>
                <div className="MainImageDisplayContainer">
                  <img
                    alt=""
                    class="singleItemMainImageDisplay"
                    src={DemoImage}
                  />
                </div>
                <div className="MainImageDisplayContainer">
                  <img
                    alt=""
                    class="singleItemMainImageDisplay"
                    src={Luggage}
                  />
                </div>
              </Carousel>
            </Col>
            <Col md={4}>
              <CardHeader className="singlePadding">
                Product Information
              </CardHeader>
              <Row>
                <Col md={6} className="singlePadding">
                  <div>
                    <i>Product Name</i>
                  </div>
                  <b>Something</b>
                </Col>
                <Col md={6}>
                  <div>
                    <i>Condition</i>
                  </div>{" "}
                  <b>Barely-Used</b>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="singlePadding">
                  <div>
                    <i>Availability</i>
                  </div>
                  <b>Available</b>
                </Col>
                <Col md={6}>
                  <div>
                    <i>Something</i>
                  </div>{" "}
                  <b>Something</b>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div>
                    <i>Availability</i>
                  </div>
                  <b>Available</b>
                </Col>
                <Col md={6}>
                  <div>
                    <i>Something</i>
                  </div>{" "}
                  <b>Something</b>
                </Col>
              </Row>
              <hr />
              <CardHeader className="singlePadding">Something</CardHeader>
              <Row className="singlePadding">
                <Col md={6}>
                  <div>
                    <i>Availability</i>
                  </div>
                  <b>Available</b>
                </Col>
                <Col md={6}>
                  <div>
                    <i>Something</i>
                  </div>{" "}
                  <b>Something</b>
                </Col>
              </Row>
              <div className="singlePadding">
                <div>
                  <i>Description</i>
                </div>
                <b>
                  AvailableAvailableAvailableAvailableAvailableAvailableAvailableAvai
                  lableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailable
                </b>
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
                      value="Hello There, I am Interested in your Item {ItemId}"
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
