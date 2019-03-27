import React from "react";
import { Link } from "react-router-dom";

import {
  NavContainer,
  LeftSection,
  RightSection,
  Header
} from "../dashboardStyles.js";

const DashboardTop = props => {
  return (
    <NavContainer>
      <LeftSection>
        <Header>
          <i className="fas fa-chart-line" />
          Dashboard
        </Header>
        <select
          name="selected_offer"
          value={props.currentOffer}
          onChange={props.handleOfferSelect}
          required
        >
        {props.currentUser.acct_type === "advertiser" ?
          <>
          <option value="">All Offers</option>
          {props.userOffers.length &&
            props.userOffers.map(offer => {
              return (
                <option key={offer.id} value={offer.id}>
                  {offer.name}
                </option>
              );
            })}
          </>:
          <>
          <option value="">All Agreements</option>
          {props.agreements.length && 
            props.agreements.map(a => {
              return(
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              )
            })
          }
          </>
            }
        </select>
        {props.currentUser.acct_type === "advertiser" &&
        <Link to="/dashboard/create-ad">Create Advertisement</Link>}
      </LeftSection>
      <RightSection>
        {props.currentUser && (
          <>
            <i
              className="fas fa-sign-out-alt"
              onClick={() => {
                localStorage.clear();
                props.history.push("/");
              }}
            />
            <div>
              <img src={props.currentUser.image_url} alt="" />
              <h2>{props.currentUser.name}</h2>
            </div>
          </>
        )}
      </RightSection>
    </NavContainer>
  );
};

export default DashboardTop;
