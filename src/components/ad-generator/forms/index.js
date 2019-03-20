import React from 'react'

import { Form } from './formStyles.js';

export const AdForm = (props) => {
  return (
    <Form>
      <div>
        <label htmlFor="headline"/>
        <input 
            type="text"
            placeholder="Headline"
            name="headline"
            value={props.productData.headline}
        />
        <label htmlFor="tagline"/>
        <input 
            type="text"
            placeholder="Tagline"
            name="tagline"
            value={props.productData.tagline}
        />
        <label htmlFor="message"/>
        <input 
            type="text"
            placeholder="Message"
            name="message"
            value={props.productData.message}
        />
        <label htmlFor="cta_button"/>
        <input 
            type="text"
            placeholder="CTA Button"
            name="cta_button"
            value={props.productData.cta_button}
        />
        <label htmlFor="destination_url"/>
        <input 
            type="text"
            placeholder="Destination Url"
            name="destination_url"
            value={props.productData.destination_url}

        />
        <label htmlFor="back_img"/>
        <input 
            type="file"
            placeholder="Background Image"
            name="back_img"
            value={props.productData.back_img}
        />
      </div>
    </Form>
  )
}
