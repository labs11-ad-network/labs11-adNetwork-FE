import React from "react";
import moment from "moment";

import {
  TimelineItem,
  TimelineContainerComponent
} from "../../settingsStyles.js";

const TimelineContainer = ({ currentUser, payouts, payments }) => (
  <TimelineContainerComponent>
    {/* ------------------------------ Affiliate Payouts ------------------------------ */}
    {currentUser.acct_type === "affiliate" && payouts.length ? (
      <>
        {payouts.map(p => {
          return (
            <TimelineItem>
              <div>
                {/* ------------ Time Bubble ------------ */}
                <h2>{moment.unix(p.created).format("h:mma")}</h2>
                {/* ------------ Title ------------ */}
                <h1>
                  <div />
                  Recieved
                </h1>
              </div>
              {/* ------------ SubTitle ------------ */}
              <h3>{`Amount: ${p.amount / 100}`}</h3>
              {/* ------------ Body ------------ */}
              <p>{`You recieved a payment for the amount of $${p.amount /
                100} ${moment.unix(p.created).fromNow()}`}</p>
            </TimelineItem>
          );
        })}
      </>
    /* ------------------------------ Advertiser Payments ------------------------------ */
    ) : currentUser.acct_type === "advertiser" && payments.length ? (
      <>
        {payments.map(p => {
          return (
            <TimelineItem key={p.id}>
              <div>
                {/* ------------ Time Bubble ------------ */}
                <h2>{moment.unix(p.created).format("h:mma")}</h2>
                {/* ------------ Title ------------ */}
                <h1>
                  <div />
                  Paid
                </h1>
              </div>
              {/* ------------ SubTitle ------------ */}
              <h3>{`Amount: ${p.amount / 100} Last 4 Digits: ${
                p.payment_method_details.card.brand
              } ${p.payment_method_details.card.last4}`}</h3>
              {/* ------------ Body ------------ */}
              <p>
                {`${p.description} of $${p.amount / 100} ${moment.unix(p.created).fromNow()}. You can find a copy `}
                <a
                  href={p.receipt_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
              </p>
            </TimelineItem>
          );
        })}
      </>
    ) : (
      /* ------------------------------ No Payment Data ------------------------------ */
      <TimelineItem>
        <div>
          <h2>{moment().format("h:mma")}</h2>
          <h1>
            <div />
            No payment data
          </h1>
        </div>
        <p>
          Make a payment to recieve an informational timeline for your
          account.
        </p>
      </TimelineItem>
    )}
  </TimelineContainerComponent>
);

export default TimelineContainer;
