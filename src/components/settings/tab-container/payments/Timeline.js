import React from "react";
import moment from "moment";

import { TimelineItem, TimelineContainerComponent } from '../../settingsStyles.js';

const TimelineContainer = props => {
  const { currentUser, payouts, payments } = props;
  
  return (
    <TimelineContainerComponent>
      {currentUser.acct_type === "affiliate" && payouts.length ? (
        <>
          {payouts.map(p => {
            return(
              <TimelineItem>
                <div>
                  <h2>{moment.unix(p.arrival_date).format('h:mma')}</h2>{/* time */}
                  <h1><div/>Recieved</h1>{/* type */}
                </div>
                <h3>{`Amount: ${p.amount / 100}`}</h3>{/* subtitle */}
                <p>{`You recieved a payment for the amount of $${p.amount / 100} ${moment.unix(p.arrival_date).fromNow()}`}</p>{/* title */}
              </TimelineItem>
            )
          })}
        </>
      ): currentUser.acct_type === "advertiser" && payments.length ? (
        <>
          {payments.map(p => {
            console.log(p)
            return (
              <TimelineItem key={p.id}>
                <div>
                  <h2>{moment.unix(p.created).format('h:mma')}</h2>
                  <h1><div/>Paid</h1>
                </div>
                <h3>{`Amount: ${p.amount / 100} Last 4 Digits: ${p.payment_method_details.card.brand} ${p.payment_method_details.card.last4}`}</h3>
                <p>
                  {`${p.description} of $${p.amount / 100} ${moment.unix(p.created).fromNow()}. You can find a copy `}
                  <a href={p.receipt_url} target="_blank" rel="noopener noreferrer" >
                    here
                  </a>
                </p>
              </TimelineItem>
            );
          })}
        </>
      ):(
        <TimelineItem>
          <div>
            <h2>7:00pm</h2>
            <h1><div/>No payment data</h1>
          </div>
          <p>Make a payment to recieve an informational timeline for your account.</p>
        </TimelineItem>
      )}
    </TimelineContainerComponent>
  );
};

export default TimelineContainer;
