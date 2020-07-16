import React, { Component } from "react";
import Checkout from "./components/Checkout";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Checkout
        name={"SharreIt Payment"}
        description={"Some Description Here"}
        amount={3}
      />
    );
  }
}

export default PaymentPage;
