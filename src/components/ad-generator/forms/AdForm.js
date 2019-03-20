import React from 'react'

import { Form } from './formStyles.js';

const AdForm = (props) => {
  return (
    <Form>
      <div>
        <label htmlFor="headline"/>
        <input 
            type="text"
            placeholder="Headline"
            name="headline"
            value={props.productData.headline}
            onChange={props.handleChange}
        />
        <label htmlFor="tagline"/>
        <input 
            type="text"
            placeholder="Tagline"
            name="tagline"
            value={props.productData.tagline}
            onChange={props.handleChange}
        />
        <label htmlFor="message"/>
        <input 
            type="text"
            placeholder="Message"
            name="message"
            value={props.productData.message}
            onChange={props.handleChange}
        />
        <label htmlFor="cta_button"/>
        <input 
            type="text"
            placeholder="CTA Button"
            name="cta_button"
            value={props.productData.cta_button}
            onChange={props.handleChange}
        />
        <label htmlFor="destination_url"/>
        <input 
            type="text"
            placeholder="Destination Url"
            name="destination_url"
            value={props.productData.destination_url}
            onChange={props.handleChange}
        />
        <label htmlFor="back_img"/>
        <input 
            type="file"
            placeholder="Background Image"
            name="back_img"
            value={props.productData.back_img}
            onChange={props.handleChange}
        />
      </div>
    </Form>
  )
}

export default AdForm;