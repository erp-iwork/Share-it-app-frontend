import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import STRIPE_PUBLISHABLE from "./stripe";
import PAYMENT_SERVER_URL from "./server";

const CURRENCY = "USD";

const fromUSDTOCent = (amount) => amount * 100;

const sucessPayment = (data) => {
  alert("Payment Sucessful");
};

const errorPayment = (data) => {
  alert("Something went Wrong");
};

const onToken = (amount, description) => (token) =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDTOCent(amount),
    })
    .then(sucessPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromUSDTOCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
