import React from 'react'

import { HorizontalBannerContainer } from './adStyles.js';

export const HorizontalBanner = props => {
  return (
    <HorizontalBannerContainer bg={props.ad.back_img}>
      <h1>{props.ad.headline}</h1>
      <h3>{props.ad.tagline}</h3>
      <p>{props.ad.message}</p>
      <a 
        href={props.ad.destination_url} 
        target="_blank" 
        rel="noopener noreferrer"
        >
        {props.ad.cta_button}
      </a>
    </HorizontalBannerContainer>
  )
}