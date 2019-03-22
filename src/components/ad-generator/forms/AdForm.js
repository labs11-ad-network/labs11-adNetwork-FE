import React from "react";

import { Form } from "./formStyles.js";
import { ImageUploader } from 'react-images-upload';
import ImageUpload from "../../image-upload/ImageUpload.js";

const AdForm = props => {
  return (
    <Form onSubmit={props.createAd}>
      <div>
        <h2>Create your ad.</h2>

        <label htmlFor="offer_id" />
        <select
          type="text"
          placeholder="Offer"
          name="offer_id"
          value={props.productData.offer_id}
          onChange={props.handleChange}
        >
          <option value="" disabled>
            Select an offer
          </option>
          {props.offers.map(offer => {
            return <option key={offer.id} value={offer.id}>{offer.name}</option>;
          })}
        </select>

        <label htmlFor="headline" />
        <input
          type="text"
          placeholder="Headline"
          name="headline"
          value={props.productData.headline}
          onChange={props.handleChange}
        />

        <label htmlFor="tagline" />
        <input
          type="text"
          placeholder="Tagline"
          name="tagline"
          value={props.productData.tagline}
          onChange={props.handleChange}
        />

        <label htmlFor="message" />
        <input
          type="text"
          placeholder="Message"
          name="message"
          value={props.productData.message}
          onChange={props.handleChange}
        />

        <label htmlFor="text_color" />
        <input
          type="text"
          placeholder="Text Color"
          name="text_color"
          value={props.productData.text_color}
          onChange={props.handleChange}
        />

        <label htmlFor="cta_button" />
        <input
          type="text"
          placeholder="CTA Button"
          name="cta_button"
          value={props.productData.cta_button}
          onChange={props.handleChange}
        />

        <label htmlFor="btn_color" />
        <input
          type="text"
          placeholder="Button Color"
          name="btn_color"
          value={props.productData.btn_color}
          onChange={props.handleChange}
        />

        <label htmlFor="btn_text_color" />
        <input
          type="text"
          placeholder="Button Text Color"
          name="btn_text_color"
          value={props.productData.btn_text_color}
          onChange={props.handleChange}
        />

        <label htmlFor="destination_url" />
        <input
          type="text"
          placeholder="Destination Url"
          name="destination_url"
          value={props.productData.destination_url}
          onChange={props.handleChange}
        />

        <label htmlFor="back_img" />
        {/* --------------------- image upload --------------------- */}
        <ImageUpload />
        <input
          type="file"
          placeholder="Background Image"
          name="back_img"
          value={props.productData.back_img}
          onChange={props.handleChange}
        />
        {/* --------------------- image upload --------------------- */}

        <button type="submit">Create Ad</button>
      </div>
    </Form>
  );
};

export default AdForm;
