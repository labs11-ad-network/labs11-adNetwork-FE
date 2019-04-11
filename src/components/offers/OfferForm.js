import React from 'react'
import Button from '@material-ui/core/Button';

import { Form, ButtonContainer } from './offersStyles.js';

const OfferForm = props => {
  return (
    <>
        <Form onSubmit={e => props.handleSubmit(e)}>
            <div>
                <label htmlFor="budget">Budget</label>
                <input 
                    type="number"
                    name="budget"
                    value={props.offerData.budget}
                    onChange={props.handleChange}
                    step="0.01"
                />

                <label htmlFor="price_per_click">Price Per Click <span>(paid when someone clicks the ad)</span></label>
                <input 
                    type="number"
                    name="price_per_click"
                    value={props.offerData.price_per_click}
                    onChange={props.handleChange}
                    step="0.001"
                />

                <label htmlFor="price_per_impression">Price Per Impression <span>(paid when someone views the ad)</span></label>
                <input 
                    type="number"
                    name="price_per_impression"
                    value={props.offerData.price_per_impression}
                    onChange={props.handleChange}
                    step="0.001"
                />

                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    name="name"
                    value={props.offerData.name}
                    onChange={props.handleChange}
                />

                <label htmlFor="description">Description</label>
                <input 
                    type="text"
                    name="description"
                    value={props.offerData.description}
                    onChange={props.handleChange}
                />
                
                <label htmlFor="category">Category</label>
                <select 
                    type="text"
                    name="category"
                    value={props.offerData.category}
                    onChange={props.handleChange}
                >
                    <option value="" disabled>Select a Category</option>
                    <option value="Health + Wellness">Health + Wellness</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Finance">Finance</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Crypto">Crypto</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Skin Care">Skin Care</option>
                    <option value="Food and Drink">Food and Drink</option>
                    <option value="Supplements">Supplements</option>

                </select>

                <label htmlFor="currency">Currency</label>
                <select 
                    type="text"
                    name="currency"
                    value={props.offerData.currency}
                    onChange={props.handleChange}
                >
                    <option value="" disabled>Select a Currency</option>
                    <option value="USD">USD</option>
                </select>

            </div>
        </Form>
        <ButtonContainer>
            <Button 
                color="primary"
                onClick={() => props.toggleModal()}
            >
            Cancel
            </Button>
            <Button 
                onClick={e => props.handleSubmit(e)}
                color="primary" 
                type="submit"
            >
            {props.isUpdatingOffer ? "Update Offer" : "Create Offer"}
            </Button>
        </ButtonContainer>
    </>
  )
}

export default OfferForm;