import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

export default class Checkout extends React.Component {
  onToken = token => {
    axios
      .post("https://lad-network.herokuapp.com/api/checkout/create_customer")
      .then(data => {
        alert(`We are in business, ${data.email}`);
      });
  };

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_OV7uPmi32yS44HY3dGXsTozz"
        amount={10000}
      />
    );
  }
}
