import React from 'react'

import { TemplateSelectors } from "../forms/formStyles.js"

const TemplateSelector = props => {
  return (
    <TemplateSelectors>
        <div>
        <button
            value="horizontal_banner"
            name="size"
            onClick={props.handleChange}
        >
            Horizontal banner
        </button>

        <button
            value="vertical_banner"
            name="size"
            onClick={props.handleChange}
        >
            Vertical banner
        </button>

        <button
            value="square_banner"
            name="size"
            onClick={props.handleChange}
        >
            Square banner
        </button>
        </div>
        <div>
        <button
            value="plain_horizontal"
            name="size"
            onClick={props.handleChange}
        >
            Plain Horizontal Banner
        </button>
        <button value="plain_square" name="size" onClick={props.handleChange}>
            Plain Square Banner
        </button>

        <button
            value="plain_vertical"
            name="size"
            onClick={props.handleChange}
        >
            Plain Vertical Banner
        </button>
        </div>
    </TemplateSelectors>
  )
}

export default TemplateSelector;