import React from "react";
import Checkout from "../../checkout/Checkout.js";
import { connect } from "react-redux";

import {
  chargeCustomer,
  payoutCustomer
} from "../../../store/actions/stripeAction.js";
import { BillingCardContainer } from "../settingsStyles.js";

const BillingCard = props => {
  const {
    amount,
    acct_type,
    stripe_cust_id,
    stripe_payout_id,
    email
  } = props.currentUser;
  const { title, currentUser, balance, button, clicked } = props;
  return (
    <BillingCardContainer>
      {currentUser && title ? (
        <div>
          <h1>{title}</h1>
          <h2>{`$ ${balance}`}</h2>
          <button
            onClick={() => {
              clicked();
            }}
          >
            {button}
          </button>
        </div>
      ) : acct_type === "affiliate" ? (
        <div>
          <h1>Current Balance</h1>
          <h2>{`$ ${amount}`}</h2>
          {stripe_payout_id ? (
            <button
              onClick={() => {
                props.payoutCustomer();
              }}
            >
              Withdraw
            </button>
          ) : (
            <a
              href={`https://connect.stripe.com/express/oauth/authorize?client_id=ca_Eq3JPTMy0ZrHBcEaY2cQLuaIeCGQNUR9&stripe_user[email]=${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Connect Stripe</button>
            </a>
          )}
        </div>
      ) : (
        acct_type === "advertiser" && (
          <div data-btn="amount_due-card">
            <h1>Amount Due</h1>
            <h2>{`$ ${amount}`}</h2>
            {stripe_cust_id ? (
              <button
                onClick={() => {
                  props.chargeCustomer();
                }}
              >
                Pay Now
              </button>
            ) : (
              <Checkout btn_text="Add Payment Method" />
            )}
          </div>
        )
      )}
    </BillingCardContainer>
  );
};

export default connect(
  null,
  {
    chargeCustomer,
    payoutCustomer
  }
)(BillingCard);
