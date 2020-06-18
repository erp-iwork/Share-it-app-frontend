import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
} from "reactstrap";
import DemoImage from "../../../assets/demo-nanny.jpg";
import DemoImage1 from "../../../assets/Nunu.png";
import DemoImage2 from "../../../assets/car1.png";
import { Luggage } from "../../../assets/Sharreit-Icons";
import { Carousel } from "react-responsive-carousel";
import { MdSend } from "react-icons/md";

class ItemViewComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
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
                  AvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailableAvailable
                </b>
              </div>
              <div>
                <div className="singlePaddingterm">
                  <i>Terms And Conditions For this Item</i>
                </div>
                <Col>
                  <Button
                    block
                    outline
                    onClick={() => alert("Terms And Conditions")}
                  >
                    Terms And Conditions
                  </Button>
                </Col>
              </div>
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
                <Col md={3}>
                  <Button block outline>
                    <MdSend />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default ItemViewComp;
