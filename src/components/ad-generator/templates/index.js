import React from "react";
import Draggable from "react-draggable";

import {
  HorizontalBannerContainer,
  SquareBannerContainer,
  VerticalBannerContainer,
  PlainHorizontalContainer,
  PlainSquareContainer,
  PlainVerticalContainer
} from "./adStyles.js";

export const PlainHorizontalBanner = props => {
  return (
    <PlainHorizontalContainer
      ad={props.ad}
      image={props.image}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
        e.preventDefault();
        props.recordAction();
      }}
    />
  );
};

export const PlainSquareBanner = props => {
  return (
    <PlainSquareContainer
      ad={props.ad}
      image={props.image}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
        e.preventDefault();
        props.recordAction();
      }}
    />
  );
};

export const PlainVerticalBanner = props => {
  return (
    <PlainVerticalContainer
      ad={props.ad}
      image={props.image}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
        e.preventDefault();
        props.recordAction();
      }}
    />
  );
};

export const HorizontalBanner = props => {
  return (
    <HorizontalBannerContainer
      ad={props.ad}
      image={props.image}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
        e.preventDefault();
        props.recordAction();
      }}
    >
      <div>
        <Draggable>
          <h1>{props.ad.headline_text}</h1>
        </Draggable>
        <Draggable>
          <h3>{props.ad.tagline_text}</h3>
        </Draggable>
        <Draggable>
          <p>{props.ad.message_text}</p>
        </Draggable>
      </div>
      <Draggable>
        <button>{props.ad.button_text}</button>
      </Draggable>
    </HorizontalBannerContainer>
  );
};

export const SquareBanner = props => {
  return (
    <SquareBannerContainer
      ad={props.ad}
      image={props.image}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
        e.preventDefault();
        props.recordAction();
      }}
    >
      <div>
        <Draggable>
          <h1>{props.ad.headline_text}</h1>
        </Draggable>
        <Draggable>
          <h3>{props.ad.tagline_text}</h3>
        </Draggable>
        <Draggable>
          <p>{props.ad.message_text}</p>
        </Draggable>
      </div>
      <Draggable>
        <button>{props.ad.button_text}</button>
      </Draggable>
    </SquareBannerContainer>
  );
};

export const VerticalBanner = props => {
  return (
    <VerticalBannerContainer
      ad={props.ad}
      image={props.image}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => {
        e.preventDefault();
        props.recordAction();
      }}
    >
      <div>
        <Draggable>
          <h1>{props.ad.headline_text}</h1>
        </Draggable>
        <Draggable>
          <h3>{props.ad.tagline_text}</h3>
        </Draggable>
        <Draggable>
          <p>{props.ad.message_text}</p>
        </Draggable>
      </div>
      <Draggable>
        <button>{props.ad.button_text}</button>
      </Draggable>
    </VerticalBannerContainer>
  );
};
