import React from "react";
import Checkout from "../../checkout/Checkout.js";
import { connect } from 'react-redux';

import { chargeCustomer, payoutCustomer } from '../../../store/actions/stripeAction.js';
import { BillingCardContainer } from "../settingsStyles.js";

const BillingCard = props => {
  const { amount, acct_type, stripe_cust_id, stripe_payout_id, email } = props.currentUser;
  const { title , currentUser } = props;
  return (
    <BillingCardContainer>
      {currentUser && title ? 
      <div>
        <h1>{title}</h1>
        <h2>{`$ ${"0" /* Change this value to total amount made */} USD`}</h2>
        <button onClick={() => {
          console.log('this button should send you to the stripe page or payments page')
        }}>View Payments</button>
      </div> :
      acct_type === "affiliate" ?
      <div>
        <h1>Current Balance</h1>
        <h2>{`$ ${amount} USD`}</h2>
        {stripe_payout_id ? 
        <button onClick={() => {
          props.payoutCustomer()
        }}>
          Withdraw
        </button> :
        <a 
          href={`https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://ladnetwork.netlify.com/stripeCallback&client_id=ca_Eq3JPTMy0ZrHBcEaY2cQLuaIeCGQNUR9&stripe_user[email]=${email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Connect Stripe</button>
        </a>
        }
      </div> 
      : acct_type === "advertiser" &&
      <div>
        <h1>Amount Due</h1>
        <h2>{`$ ${amount} USD`}</h2>
        {stripe_cust_id ? 
        <button onClick={() => {
          props.chargeCustomer()
        }}>
          Pay Now
        </button>:
        <Checkout 
          btn_text="Add Payment Method"
        />
        }
      </div>
      }
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
