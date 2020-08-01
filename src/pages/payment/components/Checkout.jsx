import React, { Component } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_PUBLISHABLE from "./stripe";
import PAYMENT_SERVER_URL from "./server";
import { Button } from "reactstrap";

class Checkout extends Component {
  state = {
    valid: false,
  };
  CURRENCY = "USD";

  fromUSDTOCent = (amount) => amount * 100;

  sucessPayment = (data) => {
    alert("Payment Sucessful");
    this.props.onBoost(true);
  };

  errorPayment = (data) => {
    alert("Something went Wrong");
    this.props.onBoost(false);
  };

  onToken = (amount, description) => (token) =>
    axios
      .post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: this.CURRENCY,
        amount: this.fromUSDTOCent(amount),
      })
      .then(this.sucessPayment)
      .catch(this.errorPayment);
  onSubmit = () => {
    console.log("submitted");
  };
  render() {
    const { name, description, amount } = this.props;
    return (
      <StripeCheckout
        name={name}
        description={description}
        amount={this.fromUSDTOCent(amount)}
        token={this.onToken(amount, description)}
        currency={this.CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
      >
        <Button enabled={this.state.valid} onClick={this.onSubmit}>
          Pay with card
        </Button>
      </StripeCheckout>
    );
  }
}

export default Checkout;
