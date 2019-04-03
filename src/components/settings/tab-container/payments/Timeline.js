import React from "react";
import moment from "moment";
import { Timeline, TimelineEvent } from "react-event-timeline";

const TimelineContainer = props => {
  const { currentUser, payouts, payments } = props
  return (
    <Timeline>
      {(currentUser.acct_type === "affiliate" && typeof payouts === "object") ?
      <>
        {payouts.map(p => {
          return <TimelineEvent
            title={`Paid`}
            createdAt={Date(p.arrival_date)}
            subtitle={`Amount: ${p.amount / 100}`}
            icon={<i className="fas fa-money-bill-wave"/>}
            style={{
              fontSize: "1rem"
            }}
            key={p.id}
            bubbleStyle={{
              border: "2px solid #0A88DC",
              fontSize: "1.2rem",
              color: "#0A88DC",
              padding: "5px",
              marginLeft: "-5px"
            }}
          >
            {`You recieved a payment for the amount of $${p.amount / 100} ${moment.unix(p.arrival_date).fromNow()}`}
          </TimelineEvent>
        })} 
      </>: (currentUser.acct_type === "advertiser" && typeof payments === "object") ?
      <>
        {payments.map(p => {
          return <TimelineEvent
            title={`Paid`}
            createdAt={Date(p.created)}
            subtitle={`Amount: ${p.amount / 100} Last 4 Digits: ${p.payment_method_details.card.brand} ${p.payment_method_details.card.last4}`}
            icon={<i className="fas fa-receipt"/>}
            style={{
              fontSize: "1rem",
              color: !p.paid && "red"
            }}
            key={p.id}
            bubbleStyle={{
              border: "2px solid #0A88DC",
              fontSize: "1.4rem",
              color: "#0A88DC",
              padding: "5px",
              marginLeft: "-5px"
            }}
          >
            {`${p.description} of $${p.amount / 100} ${moment.unix(p.created).fromNow()}. You can find a copy `}
            <a href={p.receipt_url} target="_blank" rel="noopener noreferrer">here</a>
          </TimelineEvent>
        })}
      </>: <TimelineEvent 
          title="No Payment Data" 
          icon={<i className="fas fa-times-circle"/>}
          style={{
            fontSize: "1rem",
          }}
          bubbleStyle={{
            border: "2px solid #0A88DC",
            fontSize: "1.2rem",
            color: "#0A88DC",
            padding: "5px",
            marginLeft: "-5px"
          }}
        >
          Make a payment to recieve an informational timeline for your account.
        </TimelineEvent>
    }
    </Timeline>
  );
};

export default TimelineContainer;
