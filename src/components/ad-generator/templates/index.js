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
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.recordAction}
    />
  );
};

export const PlainSquareBanner = props => {
  return (
    <PlainSquareContainer
      ad={props.ad}
      image={props.image}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.recordAction}
    />
  );
};

export const PlainVerticalBanner = props => {
  return (
    <PlainVerticalContainer
      ad={props.ad}
      image={props.image}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.recordAction}
    />
  );
};

export const HorizontalBanner = props => {
  return (
    <HorizontalBannerContainer
      ad={props.ad}
      image={props.image}
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.recordAction}
<<<<<<< HEAD
=======
      headline_color={props.ad.headline_color}
      tagline_color={props.ad.tagline_color}
      message_color={props.ad.message_color}
      headline_margin={props.ad.headline_margin}
      healine_bottom_margin={props.ad.healine_bottom_margin}
      tagline_margin={props.ad.tagline_margin}
      tagline_bottom_margin={props.ad.tagline_bottom_margin}
      message_margin={props.ad.message_margin}
      message_bottom_margin={props.ad.message_bottom_margin}
      cta_margin={props.ad.cta_margin}
      cta_bottom_margin={props.ad.cta_bottom_margin}
      file={props.ad.file}
>>>>>>> Dynamic sliders working on ad generator
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
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.recordAction}
<<<<<<< HEAD
=======
      headline_color={props.ad.headline_color}
      tagline_color={props.ad.tagline_color}
      message_color={props.ad.message_color}
      headline_margin={props.ad.headline_margin}
      healine_bottom_margin={props.ad.healine_bottom_margin}
      tagline_margin={props.ad.tagline_margin}
      tagline_bottom_margin={props.ad.tagline_bottom_margin}
      message_margin={props.ad.message_margin}
      message_bottom_margin={props.ad.message_bottom_margin}
      cta_margin={props.ad.cta_margin}
      cta_bottom_margin={props.ad.cta_bottom_margin}
      file={props.ad.file}
>>>>>>> Dynamic sliders working on ad generator
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
      target="_blank"
      rel="noopener noreferrer"
      onClick={props.recordAction}
<<<<<<< HEAD
=======
      headline_color={props.ad.headline_color}
      tagline_color={props.ad.tagline_color}
      message_color={props.ad.message_color}
      headline_margin={props.ad.headline_margin}
      healine_bottom_margin={props.ad.healine_bottom_margin}
      tagline_margin={props.ad.tagline_margin}
      tagline_bottom_margin={props.ad.tagline_bottom_margin}
      message_margin={props.ad.message_margin}
      message_bottom_margin={props.ad.message_bottom_margin}
      cta_margin={props.ad.cta_margin}
      cta_bottom_margin={props.ad.cta_bottom_margin}
      file={props.ad.file}
>>>>>>> Dynamic sliders working on ad generator
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
