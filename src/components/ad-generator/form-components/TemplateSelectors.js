import React from "react";

import { TemplateSelectors } from "../forms/formStyles.js";

const TemplateSelector = props => {
  return (
    <TemplateSelectors>
      <button
        value="horizontal_banner"
        name="size"
        onClick={props.handleChange}
      >
        Horizontal banner
        (670x100)
      </button>

      <button value="vertical_banner" name="size" onClick={props.handleChange}>
        Vertical banner
        (120x600)
      </button>

      <button value="square_banner" name="size" onClick={props.handleChange}>
        Square banner
        (250x250)
      </button>

      <button value="plain_horizontal" name="size" onClick={props.handleChange}>
        Plain Horizontal Banner
        (670x100)
      </button>
      <button value="plain_square" name="size" onClick={props.handleChange}>
        Plain Square Banner
        (250x250)
      </button>

      <button value="plain_vertical" name="size" onClick={props.handleChange}>
        Plain Vertical Banner
        (120x600)
      </button>
    </TemplateSelectors>
  );
};

export default TemplateSelector;
