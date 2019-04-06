import React from "react";

const AnalyticsDropdown = props => {
    const {
        currentUser,
        handleOfferSelect,
        location,
        currentOffer,
        userOffers,
        agreements
    } = props;

    return(
        !location.pathname.includes("dashboard/") && (
            <select
              name="selected_offer"
              value={currentOffer}
              onChange={handleOfferSelect}
              required
            >
              {currentUser.acct_type === "advertiser" ? (
                <>
                  <option value="">All Offers</option>
                  {userOffers.length &&
                    userOffers.map(offer => {
                      return (
                        <option key={offer.id} value={offer.id}>
                          {offer.name}
                        </option>
                      );
                    })}
                </>
              ) : (
                <>
                  <option value="">All Agreements</option>
                  {agreements.length &&
                    agreements.map(a => {
                      return (
                        <option key={a.id} value={a.id}>
                          {a.name}
                        </option>
                      );
                    })}
                </>
              )}
            </select>
          )
    )
}

export default AnalyticsDropdown;