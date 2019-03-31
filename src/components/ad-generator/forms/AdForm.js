import React from "react";
import { Form, TemplateSelectors, InputGroup } from "./formStyles.js";

const AdForm = props => {
  return (
    <>
      <TemplateSelectors>
        <h2>Create your ad.</h2>

        <div>
          <button
            value="horizontal_banner"
            name="size"
            onClick={props.handleChange}
          >
            Horizontal banner
          </button>

          <button
            value="vertical_banner"
            name="size"
            onClick={props.handleChange}
          >
            Vertical banner
          </button>

          <button
            value="square_banner"
            name="size"
            onClick={props.handleChange}
          >
            Square banner
          </button>
        </div>
        <div>
          <button
            value="plain_horizontal"
            name="size"
            onClick={props.handleChange}
          >
            Plain Horizontal Banner
          </button>
          <button value="plain_square" name="size" onClick={props.handleChange}>
            Plain Square Banner
          </button>

          <button
            value="plain_vertical"
            name="size"
            onClick={props.handleChange}
          >
            Plain Vertical Banner
          </button>
        </div>
      </TemplateSelectors>
      <Form onSubmit={props.createAd}>
        <div>
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
              return (
                <option key={offer.id} value={offer.id}>
                  {offer.name}
                </option>
              );
            })}
          </select>
          <InputGroup>
            <label htmlFor="headline" />
            <input
              type="text"
              placeholder="Headline"
              name="headline_text"
              value={props.productData.headline_text}
              onChange={props.handleTextChange}
            />
            <button
              name="currentElement"
              value="headline"
              onClick={props.handleElementChange}
            >
              Select
            </button>
          </InputGroup>
          <InputGroup>
            <label htmlFor="tagline" />
            <input
              type="text"
              placeholder="Tagline"
              name="tagline_text"
              value={props.productData.tagline_text}
              onChange={props.handleTextChange}
            />
            <button
              name="currentElement"
              value="tagline"
              onClick={props.handleElementChange}
            >
              Select
            </button>
          </InputGroup>

          <InputGroup>
            <label htmlFor="message" />
            <input
              type="text"
              placeholder="Message"
              name="message_text"
              value={props.productData.message_text}
              onChange={props.handleTextChange}
            />
            <button
              name="currentElement"
              value="message"
              onClick={props.handleElementChange}
            >
              Select
            </button>
          </InputGroup>

          <InputGroup>
            <label htmlFor="cta_button" />
            <input
              type="text"
              placeholder="CTA Button"
              name="button_text"
              value={props.productData.button_text}
              onChange={props.handleTextChange}
            />
            <button
              name="currentElement"
              value="button"
              onClick={props.handleElementChange}
            >
              Select
            </button>
          </InputGroup>
          <InputGroup>
            <label htmlFor="destination_url" />
            <input
              type="text"
              placeholder="Destination Url"
              name="destination_url"
              value={props.productData.destination_url}
              onChange={props.handleTextChange}
            />
          </InputGroup>
          <label htmlFor="back_img" />
          {/* --------------------- image upload --------------------- */}
          <input
            accept="image/*"
            type="file"
            placeholder="Background Image"
            name="back_img"
            multiple
            onChange={props.handleFileChange}
          />
          {/* --------------------- image upload --------------------- */}

          <button type="submit">Create Ad</button>
        </div>
      </Form>
    </>
  );
};

export default AdForm;
