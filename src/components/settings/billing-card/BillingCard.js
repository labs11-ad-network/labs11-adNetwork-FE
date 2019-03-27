import React from "react";
import Checkout from "../../checkout/Checkout.js";

import { BillingCardContainer } from "../settingsStyles.js";

const BillingCard = props => {
  return (
    <BillingCardContainer>
      <div>
        <h1>Current Balance</h1>
        <h2>$ 50,000 USD</h2>
        <button>Add Funds</button>
      </div>
      <div>
        <h1>Amount Due</h1>
        <h2>$ 505.23 USD</h2>
        <button>Pay Now</button>
        <Checkout />
      </div>
    </BillingCardContainer>
  );
};

export default BillingCard;
