import React from 'react'

import { OfferModalContainer, OfferModalContent } from './offersStyles.js';
import OfferForm from "./OfferForm.js";

const OfferModal = props => {
    return (
        <>
        <OfferModalContainer onClick={() => props.toggleModal()}>
            <OfferModalContent onClick={e => {
                e.stopPropagation();
            }}>
                <h1>{props.isUpdatingOffer ? "Update your Offer" : "Create an Offer"}</h1>
                <OfferForm
                    offerData={props.offerData}
                    handleChange={props.handleChange}
                    handleSubmit={props.isUpdatingOffer ? props.updateOffer : props.createOffer}
                    isUpdatingOffer={props.isUpdatingOffer}
                    toggleModal={props.toggleModal}
                />
            </OfferModalContent>
        </OfferModalContainer>
    </>
  )
}

export default OfferModal;