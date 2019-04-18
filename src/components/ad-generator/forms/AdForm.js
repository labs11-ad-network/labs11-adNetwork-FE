import React from "react";

import { Form, InputGroup, ImageUpload } from "./formStyles.js";

const AdForm = ({ 
  createAd, 
  productData, 
  handleChange, 
  offers, 
  selected, 
  handleElementChange,
   handleFileChange }) => (
  <>
    <Form onSubmit={createAd}>
      <div className="form-container" data-btn='ad-form-inputs'>
        {/* ------------------------------ Offer Selector ------------------------------ */}        
        <InputGroup>
          <label htmlFor="offer_id" />
          <select
            type="text"
            placeholder="Offer"
            name="offer_id"
            data-btn='select-offer'
            value={productData.offer_id}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select an offer
            </option>
            {offers.map(offer => {
              return (
                <option key={offer.id} value={offer.id}>
                  {offer.name}
                </option>
              );
            })}
          </select>
        </InputGroup>

        {!productData.size.includes('plain') &&
        <>
          {/* ------------------------------ Headline Input ------------------------------ */} 
          <InputGroup select={selected.includes("headline")}>
            <label htmlFor="headline" />
            <input
              type="text"
              placeholder="Headline"
              name="headline_text"
              value={productData.headline_text}
              onChange={handleChange}
            />
            <div>
              <h3>editing</h3>
              <button
                name="currentElement"
                value="headline"
                data-btn='selected-element'
                onClick={handleElementChange}
              />
            </div>
          </InputGroup>
          {/* ------------------------------ Tagline Input ------------------------------ */} 
          <InputGroup select={selected.includes("tagline")}>
            <label htmlFor="tagline" />
            <input
              type="text"
              placeholder="Tagline"
              name="tagline_text"
              value={productData.tagline_text}
              onChange={handleChange}
            />
            <div>
              <h3>editing</h3>
              <button
                name="currentElement"
                value="tagline"
                onClick={handleElementChange}
              />
            </div>
          </InputGroup>

          {/* ------------------------------ Message Input ------------------------------ */}           
          <InputGroup select={selected.includes("message")}>
            <label htmlFor="message" />
            <input
              type="text"
              placeholder="Message"
              name="message_text"
              value={productData.message_text}
              onChange={handleChange}
            />
            <div>
              <h3>editing</h3>
              <button
                name="currentElement"
                value="message"
                onClick={handleElementChange}
              />
            </div>
          </InputGroup>

          {/* ------------------------------ Button Input ------------------------------ */}           
          <InputGroup select={selected.includes("button")}>
            <label htmlFor="button_text" />
            <input
              type="text"
              placeholder="CTA Button"
              name="button_text"
              value={productData.button_text}
              onChange={handleChange}
            />
            <div>
              <h3>editing</h3>
              <button
                name="currentElement"
                value="button"
                onClick={handleElementChange}
              />
            </div>
          </InputGroup>
        </>
        }
          
        {/* ------------------------------ URL Input ------------------------------ */} 
        <InputGroup>
          <label htmlFor="destination_url" />
          <input
            type="text"
            placeholder="Destination Url"
            name="destination_url"
            value={productData.destination_url}
            onChange={handleChange}
            required
          />
        </InputGroup>

        {/* ------------------------------ Image Upload ------------------------------ */} 
        <label htmlFor="back_img" />
        <ImageUpload
          accept="image/*"
          type="file"
          placeholder="Background Image"
          name="back_img"
          multiple
          onChange={handleFileChange}
        />
      </div>
    </Form>
  </>
);

export default AdForm;
