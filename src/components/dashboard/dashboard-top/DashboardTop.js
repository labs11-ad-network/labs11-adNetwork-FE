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
          <option value="">All Offers</option>
          {props.userOffers.length &&
            props.userOffers.map(offer => {
              return (
                <option key={offer.id} value={offer.id}>
                  {offer.name}
                </option>
              );
            })}
        </select>
        <Link to="/dashboard/create-ad">Create Advertisement</Link>
      </LeftSection>
      <RightSection>
        {props.currentUser && (
          <>
            <i
              className="fas fa-sync-alt"
              onClick={e => props.refreshStats(e)}
            />
            <i
              className="fas fa-sign-out-alt"
              onClick={() => {
                localStorage.clear();
                props.history.push("/login");
              }}
            />
            <div>
              <img src={props.currentUser.image_url} alt="" />
              <h2>{`${props.currentUser.first_name} ${
                props.currentUser.last_name
              }`}</h2>
            </div>
          </>
        )}
      </RightSection>
    </NavContainer>
  );
};

export default DashboardTop;
