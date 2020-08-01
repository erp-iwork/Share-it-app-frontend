import React, { Component } from "react";
import Checkout from "./components/Checkout";

class PaymentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Checkout
        onBoost={this.props.onBoost}
        name={"SharreIt Payment"}
        description={"Some Description Here"}
        amount={3}
      />
    );
  }
}

export default PaymentPage;
