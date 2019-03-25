import React from 'react'

import { Form } from './offersStyles.js';

const OfferForm = props => {
  return (
    <Form onSubmit={e => props.createOffer(e)}>
        <div>
            <label htmlFor="budget"/>
            <input 
                type="number"
                placeholder="Budget"
                name="budget"
                value={props.offerData.budget}
                onChange={props.handleChange}
                step="0.01"
            />

            <label htmlFor="price_per_click"/>
            <input 
                type="number"
                placeholder="Price Per Click"
                name="price_per_click"
                value={props.offerData.price_per_click}
                onChange={props.handleChange}
                step="0.001"
            />

            <label htmlFor="price_per_impression"/>
            <input 
                type="number"
                placeholder="Price Per Impression"
                name="price_per_impression"
                value={props.offerData.price_per_impression}
                onChange={props.handleChange}
                step="0.001"
            />

            <label htmlFor="name"/>
            <input 
                type="text"
                placeholder="Offer Name"
                name="name"
                value={props.offerData.name}
                onChange={props.handleChange}
            />

            <label htmlFor="description"/>
            <input 
                type="text"
                placeholder="Offer Description"
                name="description"
                value={props.offerData.description}
                onChange={props.handleChange}
            />
            
            <label htmlFor="category"/>
            <select 
                type="text"
                name="category"
                value={props.offerData.category}
                onChange={props.handleChange}
            >
                <option value="" disabled>Select a Category</option>
                <option value="Health + Wellness">Health + Wellness</option>
            </select>

            <label htmlFor="currency"/>
            <select 
                type="text"
                name="currency"
                value={props.offerData.currency}
                onChange={props.handleChange}
            >
                <option value="" disabled>Select a Currency</option>
                <option value="USD">USD</option>
            </select>

            <label htmlFor="status">Status</label>
            <input 
                type="radio" 
                placeholder="enabled" 
                value="true" 
                name="status"
                onChange={props.handleChange}
            />
            <button type="submit">Create Offer</button>
        </div>
    </Form>
  )
}

export default OfferForm;