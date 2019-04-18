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

/* ------------------------------ Plain Horizontal Banner ------------------------------ */
export const PlainHorizontalBanner = ({ ad }) => (
  <PlainHorizontalContainer
    ad={ad}
    target="_blank"
    rel="noopener noreferrer"
  />
);

/* ------------------------------ Plain Square Banner ------------------------------ */
export const PlainSquareBanner = ({ ad }) => (
  <PlainSquareContainer
    ad={ad}
    target="_blank"
    rel="noopener noreferrer"
  />
);

/* ------------------------------ Plain Vertical Banner ------------------------------ */
export const PlainVerticalBanner = ({ ad }) => (
  <PlainVerticalContainer
    ad={ad}
    target="_blank"
    rel="noopener noreferrer"
  />
);

/* ------------------------------ Horizontal Banner ------------------------------ */
export const HorizontalBanner = ({ ad, selected, handleElementChange }) => (
  <HorizontalBannerContainer
    ad={ad}
    target="_blank"
    rel="noopener noreferrer"
    selected={selected}
    id="parent"
  >
  <div>
    {/* ------------------------------ Draggable Headline ------------------------------ */}    
    <Draggable bounds="#parent">
      <h1 
        onClick={(e) => handleElementChange(e, "currentElement", "headline")}
      >
      {ad.headline_text}
      </h1>
    </Draggable>
    {/* ------------------------------ Draggable Tagline ------------------------------ */}
    <Draggable bounds="#parent">
      <h3
        onClick={(e) => handleElementChange(e, "currentElement", "tagline")}
      >
      {ad.tagline_text}
      </h3>
    </Draggable>
    {/* ------------------------------ Draggable Message ------------------------------ */}
    <Draggable bounds="#parent">
      <p
        onClick={(e) => handleElementChange(e, "currentElement", "message")}
      >
      {ad.message_text}
      </p>
    </Draggable>
    {/* ------------------------------ Draggable Button ------------------------------ */}
    <Draggable bounds="#parent">
      <button
        onClick={(e) => handleElementChange(e, "currentElement", "button")}
      >{ad.button_text}</button>
    </Draggable>
  </div>
  </HorizontalBannerContainer>
);

/* ------------------------------ Square Banner ------------------------------ */
export const SquareBanner = ({ ad, selected, handleElementChange }) => (
  <SquareBannerContainer
    ad={ad}
    target="_blank"
    rel="noopener noreferrer"
    selected={selected}
    id="parent"
  >
  <div>
    {/* ------------------------------ Draggable Headline ------------------------------ */}
    <Draggable bounds="#parent">
      <h1
        onClick={(e) => handleElementChange(e, "currentElement", "headline")}
      >
      {ad.headline_text}
      </h1>
    </Draggable>
    {/* ------------------------------ Draggable Tagline ------------------------------ */}
    <Draggable bounds="#parent">
      <h3
        onClick={(e) => handleElementChange(e, "currentElement", "tagline")}
      >
      {ad.tagline_text}
      </h3>
    </Draggable>
    {/* ------------------------------ Draggable Message ------------------------------ */}
    <Draggable bounds="#parent">
      <p
        onClick={(e) => handleElementChange(e, "currentElement", "message")}
      >
      {ad.message_text}
      </p>
    </Draggable>
    {/* ------------------------------ Draggable Button ------------------------------ */}
    <Draggable bounds="#parent">
      <button
        onClick={(e) => handleElementChange(e, "currentElement", "button")}
      >
      {ad.button_text}
      </button>
    </Draggable>
  </div>
  </SquareBannerContainer>
);

/* ------------------------------ Vertical Banner ------------------------------ */
export const VerticalBanner = ({ ad, selected, handleElementChange }) => (
  <VerticalBannerContainer
    ad={ad}
    target="_blank"
    rel="noopener noreferrer"
    selected={selected}
    id="parent"
  >
    <div>
      {/* ------------------------------ Draggable Headline ------------------------------ */}
      <Draggable bounds="#parent">
        <h1
          onClick={(e) => handleElementChange(e, "currentElement", "headline")}
        >
        {ad.headline_text}
        </h1>
      </Draggable>
      {/* ------------------------------ Draggable Tagline ------------------------------ */}
      <Draggable bounds="#parent">
        <h3
          onClick={(e) => handleElementChange(e, "currentElement", "tagline")}
        >
        {ad.tagline_text}
        </h3>
      </Draggable>
      {/* ------------------------------ Draggable Message ------------------------------ */}
      <Draggable bounds="#parent">
        <p
          onClick={(e) => handleElementChange(e, "currentElement", "message")}
        >
        {ad.message_text}
        </p>
      </Draggable>
      {/* ------------------------------ Draggable Button ------------------------------ */}
      <Draggable bounds="#parent">
        <button
          onClick={(e) => handleElementChange(e, "currentElement", "button")}
        >
        {ad.button_text}
        </button>
      </Draggable>
    </div>
  </VerticalBannerContainer>
);
