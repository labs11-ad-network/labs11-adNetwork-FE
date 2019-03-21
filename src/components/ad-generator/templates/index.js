import React from 'react'

import { 
  HorizontalBannerContainer,
  SquareBannerContainer,
  VerticalBannerContainer
} from './adStyles.js';

export const PlainImg = props => {
  return(
    <a 
      href={props.ad.destination_url} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img src={props.ad.image} alt={props.ad.headline}/>
    </a>
  )
}

export const HorizontalBanner = props => {
  return (
    <HorizontalBannerContainer 
      bg={props.ad.back_img} 
      text_color={props.ad.text_color}
      btn_color={props.ad.btn_color}
      main_color={props.ad.main_color}
    >
    <div>
      <h1>{props.ad.headline}</h1>
      <h3>{props.ad.tagline}</h3>
      <p>{props.ad.message}</p>
    </div>
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

export const SquareBanner = props => {
  return (
    <SquareBannerContainer 
      bg={props.ad.back_img}
      text_color={props.ad.text_color}
      btn_color={props.ad.btn_color}
      main_color={props.ad.main_color}
    >
      <div>
        <h1>{props.ad.headline}</h1>
        <h3>{props.ad.tagline}</h3>
        <p>{props.ad.message}</p>
      </div>
      <a
        href={props.ad.destination_url} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {props.ad.cta_button}
      </a>
    </SquareBannerContainer>
  )
}

export const VerticalBanner = props => {
  return (
    <VerticalBannerContainer 
      bg={props.ad.back_img}
      text_color={props.ad.text_color}
      btn_color={props.ad.btn_color}
      main_color={props.ad.main_color}
    >
      <div>
        <h1>{props.ad.headline}</h1>
        <h3>{props.ad.tagline}</h3>
        <p>{props.ad.message}</p>
      </div>
      <a 
        href={props.ad.destination_url} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {props.ad.cta_button}
      </a>
    </VerticalBannerContainer>
  )
}