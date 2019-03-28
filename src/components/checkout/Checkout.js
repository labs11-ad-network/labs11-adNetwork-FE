import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import {
  createCustomer
} from '../../store/actions/stripeAction.js';

class Checkout extends React.Component {
  onToken = token => {
    this.props.createCustomer()
  };

  render() {
    const { amount, btn_text } = this.props
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_OV7uPmi32yS44HY3dGXsTozz"
        amount={amount}
      >
        <button>{btn_text}</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  {
    createCustomer
  }
)(Checkout)