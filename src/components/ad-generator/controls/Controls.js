import React from "react";
import Slider from "./Slider";

import {
  TopSection,
  SliderLabels,
  BottomSection,
  BottomLeft,
  BottomMiddle,
  BottomRight
} from "./controlStyles.js"

const Controls = props => {
  return (
    <div>
      <TopSection>
        <div>
          <Slider
            customizeElementSize={props.customizeElementSize}
            sizeValue={props.sizeValue}
            />
          <SliderLabels>
            <h3>0px</h3>
            <h3 className="text-label">Text Size</h3>
            <h3>100px</h3>
          </SliderLabels>
        </div>
      </TopSection>
      <BottomSection>
        <BottomLeft>
          left
        </BottomLeft>
        <BottomMiddle>
          <button name="bold" onClick={props.toggleElementStyle}>
            <i className="fas fa-bold" />
          </button>
          <button name="italic" onClick={props.toggleElementStyle}>
            <i className="fas fa-italic" />
          </button>
          <button name="align" value="left" onClick={props.customizeElement}>
            <i className="fas fa-align-left" />
          </button>
          <button name="align" value="center" onClick={props.customizeElement}>
            <i className="fas fa-align-center" />
          </button>
          <button name="align" value="right" onClick={props.customizeElement}>
            <i className="fas fa-align-right" />
          </button>
        </BottomMiddle>
        <BottomRight>
          <div>
            <input type="color" name="color" onChange={props.customizeElement} />
            <h3>Text</h3>
          </div>
          <div>
            <input type="color" name="bg_color" onChange={props.customizeElement} />
            <h3>Background</h3>
          </div>
        </BottomRight>
      </BottomSection>
    </div>
  );
};

export default Controls;
