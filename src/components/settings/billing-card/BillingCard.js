import React from "react";
import Checkout from "../../checkout/Checkout.js";
import { connect } from "react-redux";

import { chargeCustomer, payoutCustomer } from "../../../store/actions/stripeAction.js";
import { BillingCardContainer } from "../settingsStyles.js";

const BillingCard = ({ 
    title, 
    currentUser, 
    balance, 
    button, 
    clicked, 
    payoutCustomer ,
    chargeCustomer
  }) => {

  const {
    amount,
    acct_type,
    stripe_cust_id,
    stripe_payout_id,
    email
  } = currentUser;

  return (
    <BillingCardContainer data-btn="billing-card">
      {/* ------------------------------ Custom Billing Card ------------------------------ */}
      {currentUser && title ? (
        <div>
          <h1>{title}</h1>
          <h2>{`$ ${balance}`}</h2>
          <button onClick={() => clicked()}> {button} </button>
        </div>
      ) : acct_type === "affiliate" ? (
        /* ------------------------------ Affiliate Card ------------------------------ */
        <div>
          <h1>Current Balance</h1>
          <h2>{`$ ${amount}`}</h2>
          {/* ------------------------------ Affiliate Payout Balance ------------------------------ */}
          {stripe_payout_id ? (
            <button onClick={() => payoutCustomer()}> Withdraw </button>
          ) : (
            /* ------------------------------ Affiliate Stripe Connect ------------------------------ */
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
        /* ------------------------------ Advertiser Card ------------------------------ */
        acct_type === "advertiser" && (
          <div data-btn="billing-card">
            <h1>Amount Due</h1>
            <h2>{`$ ${amount}`}</h2>
            {/* ------------------------------ Advertiser Pay Balance ------------------------------ */}
            {stripe_cust_id ? (
              <button onClick={() => chargeCustomer()}> Pay Now </button>
            ) : (
              /* ------------------------------ Advertiser Ad Payment Method ------------------------------ */
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
