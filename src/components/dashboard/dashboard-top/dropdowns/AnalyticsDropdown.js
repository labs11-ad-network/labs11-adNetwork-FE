import React from "react";

const AnalyticsDropdown = props => {
  const {
    currentUser,
    handleOfferSelect,
    location,
    currentOffer,
    offers,
    agreements
  } = props;

  return (
    !location.pathname.includes("dashboard/") && (
      <select
        name="selected_offer"
        value={currentOffer}
        onChange={handleOfferSelect}
        required
        data-btn="offers_dropdown-button"
      >
        {currentUser.acct_type === "advertiser" ? (
          <>
            {/* ------------------------------ Mapping to populate Offers ------------------------------ */}
            <option value="">All Offers</option>
            {offers.length &&
              offers.map(offer => {
                return (
                  <option key={offer.id} value={offer.id}>
                    {offer.name}
                  </option>
                );
              })}
          </>
        ) : (
          <>
            {/* ------------------------------ Mapping to populate agreements ------------------------------ */}
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
  );
};

export default AnalyticsDropdown;
