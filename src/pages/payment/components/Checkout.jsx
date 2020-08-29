import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_PUBLISHABLE from "./stripe";
import { Button } from "reactstrap";
import { pay, getStatus } from "../../../store/payment";
import { connect } from "react-redux";

class Checkout extends Component {
  state = {
    valid: false,
  };
  CURRENCY = "USD";

  fromUSDTOCent = (amount) => amount * 100;

  onToken = (amount, description) => (token) =>
    this.props.pay({
      description,
      source: token.id,
      currency: this.CURRENCY,
      amount: this.fromUSDTOCent(amount),
    });

  render() {
    const { name, description, amount } = this.props;
    if (this.props.status === "success") {
      console.log("Payment Sucessful");
      this.props.onBoost(true);
    }
    if (this.props.status === "failed") {
      console.log("payment failed");
      this.props.onBoost(false);
    }
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

const mapStateToProps = (state) => ({
  status: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  pay: (data) => dispatch(pay(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
