import React from "react";
import Checkout from "../../checkout/Checkout.js";

import { BillingCardContainer } from "../settingsStyles.js";

const BillingCard = props => {
  const { amount, acct_type } = props.currentUser
  return (
    <BillingCardContainer>
      {acct_type === "affiliate" ?
      <div>
        <h1>Current Balance</h1>
        <h2>{`$ ${amount} USD`}</h2>
        <button>Add Funds</button>
      </div> 
      : acct_type === "advertiser" &&
      <div>
        <h1>Amount Due</h1>
        <h2>{`$ ${amount} USD`}</h2>
        <Checkout 
          btn_text="Pay Now"
          amount={Math.abs(amount).toString().split('.').join('')}
        />
      </div>
      }
    </BillingCardContainer>
  );
};

export default BillingCard;
