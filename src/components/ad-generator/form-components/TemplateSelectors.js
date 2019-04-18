import React from "react";

import { TemplateSelectors, TemplateButton } from "../forms/formStyles.js";

export const TemplateButtons = ({ handleChange, selected }) => (
  <TemplateSelectors data-btn='template-selectors'>
    {/* ------------------------------ Horizontal Selector ------------------------------ */}
    <TemplateButton 
      value="horizontal_banner" 
      name="size" 
      onClick={handleChange} 
      selected={selected === "horizontal_banner"}
    >
      Horizontal banner
      (670x100)
    </TemplateButton>

    {/* ------------------------------ Vertical Selector ------------------------------ */}
    <TemplateButton 
      value="vertical_banner" 
      name="size" 
      onClick={handleChange} 
      selected={selected === "vertical_banner"}
    >
      Vertical banner
      (120x600)
    </TemplateButton>

    {/* ------------------------------ Square Selector ------------------------------ */}
    <TemplateButton 
      value="square_banner" 
      name="size" 
      onClick={handleChange} 
      selected={selected === "square_banner"}
    >
      Square banner
      (250x250)
    </TemplateButton>

    {/* ------------------------------ Plain Horizontal Selector ------------------------------ */}
    <TemplateButton 
      value="plain_horizontal" 
      name="size" 
      onClick={handleChange} 
      selected={selected === "plain_horizontal"}
    >
      Plain Horizontal Banner
      (670x100)
    </TemplateButton>

    {/* ------------------------------ Plain Square Selector ------------------------------ */}
    <TemplateButton 
      value="plain_square" 
      name="size" 
      onClick={handleChange} 
      selected={selected === "plain_square"}
    >
      Plain Square Banner
      (250x250)
    </TemplateButton>

    {/* ------------------------------ Plain Vertical Selector ------------------------------ */}
    <TemplateButton 
      value="plain_vertical" 
      name="size" 
      onClick={handleChange} 
      selected={selected === "plain_vertical"}
    >
      Plain Vertical Banner
      (120x600)
    </TemplateButton>

  </TemplateSelectors>
);

export const TemplateSelect = ({ size, handleChange }) => (
  <select
    type="text"
    name="size"
    value={size}
    onChange={handleChange}
  >
    <option value="square_banner">Square Banner</option>
    <option value="vertical_banner">Vertical Banner</option>
    <option value="horizontal_banner">Horizontal Banner</option>
    <option value="plain_horizontal"> Plain (img/gif only) Horizontal Banner </option>
    <option value="plain_square"> Plain (img/gif only) Square Banner </option>
    <option value="plain_vertical"> Plain (img/gif only) Vertical Banner </option>
  </select>
);