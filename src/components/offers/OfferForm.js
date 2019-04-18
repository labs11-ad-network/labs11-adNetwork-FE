import React from 'react'
import Button from '@material-ui/core/Button';

import { Form, ButtonContainer } from './offersStyles.js';

const OfferForm = ({ 
    handleSubmit, 
    handleChange, 
    offerData, 
    toggleModal, 
    isUpdatingOffer 
}) => (
<>
    <Form onSubmit={e => handleSubmit(e)}>
        <div>
            {/* ------------------------------ Budget Input ------------------------------ */}
            <label htmlFor="budget">Budget <span>(when this amount reaches 0 ads will stop running)</span></label>
            <input 
                type="number"
                name="budget"
                value={offerData.budget}
                onChange={handleChange}
                step="0.01"
            />
            {/* ------------------------------ Price Per Click Input ------------------------------ */}
            <label htmlFor="price_per_click">Price Per Click <span>(paid when someone clicks the ad)</span></label>
            <input 
                type="number"
                name="price_per_click"
                value={offerData.price_per_click}
                onChange={handleChange}
                step="0.001"
            />
            {/* ------------------------------ Price Per Impression Input ------------------------------ */}
            <label htmlFor="price_per_impression">Price Per Impression <span>(paid when someone views the ad)</span></label>
            <input 
                type="number"
                name="price_per_impression"
                value={offerData.price_per_impression}
                onChange={handleChange}
                step="0.001"
            />
            {/* ------------------------------ Name Input ------------------------------ */}
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                name="name"
                value={offerData.name}
                onChange={handleChange}
            />
            {/* ------------------------------ Description Input ------------------------------ */}
            <label htmlFor="description">Description</label>
            <input 
                type="text"
                name="description"
                value={offerData.description}
                onChange={handleChange}
            />
            {/* ------------------------------ Category Input ------------------------------ */}
            <label htmlFor="category">Category</label>
            <select 
                type="text"
                name="category"
                value={offerData.category}
                onChange={handleChange}
            >
                <option value="" disabled>Select a Category</option>
                <option value="Health + Wellness">Health + Wellness</option>
                <option value="Beauty">Beauty</option>
                <option value="Finance">Finance</option>
                <option value="Sports">Sports</option>
                <option value="Outdoors">Outdoors</option>
                <option value="Travel">Travel</option>
                <option value="Gaming">Gaming</option>
                <option value="Crypto">Crypto</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Skin Care">Skin Care</option>
                <option value="Food and Drink">Food and Drink</option>
                <option value="Supplements">Supplements</option>

            </select>
            {/* ------------------------------ Currency Input ------------------------------ */}
            <label htmlFor="currency">Currency</label>
            <select 
                type="text"
                name="currency"
                value={offerData.currency}
                onChange={handleChange}
            >
                <option value="" disabled>Select a Currency</option>
                <option value="USD">USD</option>
            </select>

        </div>
    </Form>
    <ButtonContainer>
        {/* ------------------------------ Cancel Button ------------------------------ */}
        <Button 
            color="primary"
            onClick={() => toggleModal()}
        >
        Cancel
        </Button>
        {/* ------------------------------ Submit Button ------------------------------ */}
        <Button 
            onClick={e => handleSubmit(e)}
            color="primary" 
            type="submit"
        >
        {isUpdatingOffer ? "Update Offer" : "Create Offer"}
        </Button>
    </ButtonContainer>
</>
);

export default OfferForm;