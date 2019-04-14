import React from "react";

import { TemplateSelectors, TemplateButton } from "../forms/formStyles.js";

const TemplateSelector = props => {
  return (
    <TemplateSelectors>
      <TemplateButton value="horizontal_banner" name="size" onClick={props.handleChange} selected={props.selected}>
        Horizontal banner
        (670x100)
      </TemplateButton>

      <TemplateButton value="vertical_banner" name="size" onClick={props.handleChange} selected={props.selected}>
        Vertical banner
        (120x600)
      </TemplateButton>

      <TemplateButton value="square_banner" name="size" onClick={props.handleChange} selected={props.selected}>
        Square banner
        (250x250)
      </TemplateButton>

      <TemplateButton value="plain_horizontal" name="size" onClick={props.handleChange} selected={props.selected}>
        Plain Horizontal Banner
        (670x100)
      </TemplateButton>
      <TemplateButton value="plain_square" name="size" onClick={props.handleChange} selected={props.selected}>
        Plain Square Banner
        (250x250)
      </TemplateButton>

      <TemplateButton value="plain_vertical" name="size" onClick={props.handleChange} selected={props.selected}>
        Plain Vertical Banner
        (120x600)
      </TemplateButton>
    </TemplateSelectors>
  );
};

export default TemplateSelector;
