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
      selected={props.selected}
    >
      <div>
        <Draggable>
          <h1 
            onClick={(e) => props.handleElementChange(e, "currentElement", "headline")}
          >
          {props.ad.headline_text}
          </h1>
        </Draggable>
        <Draggable>
          <h3
            onClick={(e) => props.handleElementChange(e, "currentElement", "tagline")}
          >
          {props.ad.tagline_text}
          </h3>
        </Draggable>
        <Draggable>
          <p
            onClick={(e) => props.handleElementChange(e, "currentElement", "message")}
          >
          {props.ad.message_text}
          </p>
        </Draggable>
      </div>
      <Draggable>
        <button
          onClick={(e) => props.handleElementChange(e, "currentElement", "button")}
        >{props.ad.button_text}</button>
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
      selected={props.selected}
    >
      <div>
        <Draggable>
          <h1
            onClick={(e) => props.handleElementChange(e, "currentElement", "headline")}
          >
          {props.ad.headline_text}
          </h1>
        </Draggable>
        <Draggable>
          <h3
            onClick={(e) => props.handleElementChange(e, "currentElement", "tagline")}
          >
          {props.ad.tagline_text}
          </h3>
        </Draggable>
        <Draggable>
          <p
            onClick={(e) => props.handleElementChange(e, "currentElement", "message")}
          >
          {props.ad.message_text}
          </p>
        </Draggable>
      </div>
      <Draggable>
        <button
          onClick={(e) => props.handleElementChange(e, "currentElement", "button")}
        >
        {props.ad.button_text}
        </button>
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
      selected={props.selected}
    >
      <div>
        <Draggable>
          <h1
            onClick={(e) => props.handleElementChange(e, "currentElement", "headline")}
          >
          {props.ad.headline_text}
          </h1>
        </Draggable>
        <Draggable>
          <h3
            onClick={(e) => props.handleElementChange(e, "currentElement", "tagline")}
          >
          {props.ad.tagline_text}
          </h3>
        </Draggable>
        <Draggable>
          <p
            onClick={(e) => props.handleElementChange(e, "currentElement", "message")}
          >
          {props.ad.message_text}
          </p>
        </Draggable>
      </div>
      <Draggable>
        <button
          onClick={(e) => props.handleElementChange(e, "currentElement", "button")}
        >
        {props.ad.button_text}
        </button>
      </Draggable>
    </VerticalBannerContainer>
  );
};
