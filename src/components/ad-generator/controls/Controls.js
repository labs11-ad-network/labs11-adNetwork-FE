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
    <div data-btn='ad-controls'>
      <TopSection>
        <div>
          <Slider
            customizeElement={props.customizeElement}
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
          <button 
            data-btn='toggle-ad-tour' 
            onClick={() => {
              props.changeUserData({
                ...props.currentUser,
                show_ad_tour: !props.currentUser.show_ad_tour
              });
            }}
          >
            <i className="fas fa-info-circle"/>
          </button>
        </BottomLeft>
        <BottomMiddle>
          <button name="bold" onClick={(e) => props.toggleElementStyle(e, "bold")}>
            <i className="fas fa-bold" onClick={(e) => props.toggleElementStyle(e, "bold")}/>
          </button>
          <button name="italic" onClick={(e) => props.toggleElementStyle(e, "italic")}>
            <i className="fas fa-italic" onClick={(e) => props.toggleElementStyle(e, "italic")}/>
          </button>
          <button name="align" value="left" onClick={e => props.customizeElement(e, "align", "left")}>
            <i className="fas fa-align-left" onClick={e => props.customizeElement(e, "align", "left")} />
          </button>
          <button name="align" value="center" onClick={e => props.customizeElement(e, "align", "center")}>
            <i className="fas fa-align-center" onClick={e => props.customizeElement(e, "align", "center")} />
          </button>
          <button name="align" value="right" onClick={e => props.customizeElement(e, "align", "right")}>
            <i className="fas fa-align-right" onClick={e => props.customizeElement(e, "align", "right")} />
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
