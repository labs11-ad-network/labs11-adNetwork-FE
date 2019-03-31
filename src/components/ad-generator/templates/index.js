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
      bg={props.ad.back_img}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.preventDefault()}
      file={props.ad.file}
    />
  );
};

export const PlainSquareBanner = props => {
  return (
    <PlainSquareContainer
      bg={props.ad.back_img}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.preventDefault()}
      file={props.ad.file}
    />
  );
};

export const PlainVerticalBanner = props => {
  return (
    <PlainVerticalContainer
      bg={props.ad.back_img}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.preventDefault()}
      file={props.ad.file}
    />
  );
};

export const HorizontalBanner = props => {
  return (
    <HorizontalBannerContainer
      bg={props.ad.back_img}
      text_color={props.ad.text_color}
      btn_color={props.ad.btn_color}
      btn_text_color={props.ad.btn_text_color}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.preventDefault()}
      headline_color={props.ad.headline_color}
      tagline_color={props.ad.tagline_color}
      message_color={props.ad.message_color}
      file={props.ad.file}
    >
      <div>
        <Draggable>
          <h1>{props.ad.headline}</h1>
        </Draggable>
        <Draggable>
          <h3>{props.ad.tagline}</h3>
        </Draggable>
        <Draggable>
          <p>{props.ad.message}</p>
        </Draggable>
      </div>
      <Draggable>
        <button>{props.ad.cta_button}</button>
      </Draggable>
    </HorizontalBannerContainer>
  );
};

export const SquareBanner = props => {
  return (
    <SquareBannerContainer
      bg={props.ad.back_img}
      text_color={props.ad.text_color}
      btn_color={props.ad.btn_color}
      btn_text_color={props.ad.btn_text_color}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.preventDefault()}
      headline_color={props.ad.headline_color}
      tagline_color={props.ad.tagline_color}
      message_color={props.ad.message_color}
      file={props.ad.file}
    >
      <div>
        <Draggable>
          <h1>{props.ad.headline}</h1>
        </Draggable>
        <Draggable>
          <h3>{props.ad.tagline}</h3>
        </Draggable>
        <Draggable>
          <p>{props.ad.message}</p>
        </Draggable>
      </div>
      <Draggable>
        <button>{props.ad.cta_button}</button>
      </Draggable>
    </SquareBannerContainer>
  );
};

export const VerticalBanner = props => {
  return (
    <VerticalBannerContainer
      bg={props.ad.back_img}
      text_color={props.ad.text_color}
      btn_color={props.ad.btn_color}
      btn_text_color={props.ad.btn_text_color}
      href={props.ad.destination_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={e => e.preventDefault()}
      headline_color={props.ad.headline_color}
      tagline_color={props.ad.tagline_color}
      message_color={props.ad.message_color}
      file={props.ad.file}
    >
      <div>
        <Draggable>
          <h1>{props.ad.headline}</h1>
        </Draggable>
        <Draggable>
          <h3>{props.ad.tagline}</h3>
        </Draggable>
        <Draggable>
          <p>{props.ad.message}</p>
        </Draggable>
      </div>
      <Draggable>
        <button>{props.ad.cta_button}</button>
      </Draggable>
    </VerticalBannerContainer>
  );
};
