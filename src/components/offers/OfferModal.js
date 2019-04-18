import React from "react";

import { OfferModalContainer, OfferModalContent } from "./offersStyles.js";
import OfferForm from "./OfferForm.js";

const OfferModal = ({ 
  toggleModal, 
  isUpdatingOffer, 
  offerData, 
  handleChange, 
  updateOffer, 
  createOffer 
}) => (
  <>
    <OfferModalContainer onClick={() => toggleModal()}>
      <OfferModalContent
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {/* ------------------------------ Conditional Rendering Header ------------------------------ */}
        <h1>
          {isUpdatingOffer ? "Update your Offer" : "Create an Offer"}
        </h1>
        {/* ------------------------------ Offer Creation/Updating Form ------------------------------ */}
        <OfferForm
          offerData={offerData}
          handleChange={handleChange}
          handleSubmit={
            isUpdatingOffer ? updateOffer : createOffer
          }
          isUpdatingOffer={isUpdatingOffer}
          toggleModal={toggleModal}
        />
      </OfferModalContent>
    </OfferModalContainer>
  </>
);

export default OfferModal;
