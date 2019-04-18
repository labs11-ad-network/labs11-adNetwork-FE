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

const Controls = ({ 
  customizeElement, 
  sizeValue, 
  changeUserData, 
  currentUser,
  toggleElementStyle
}) => (
    <div data-btn='ad-controls'>
      <TopSection>
        {/* ------------------------------ Text Size Slider ------------------------------ */}
        <div>
          <Slider
            customizeElement={customizeElement}
            sizeValue={sizeValue}
          />
          <SliderLabels>
            <h3>0px</h3>
            <h3 className="text-label">Text Size</h3>
            <h3>100px</h3>
          </SliderLabels>
        </div>
      </TopSection>
      <BottomSection>
        {/* ------------------------------ Info Button ------------------------------ */}
        <BottomLeft>
          <button 
            data-btn='toggle-ad-tour' 
            onClick={() => {
              changeUserData({
                ...currentUser,
                show_ad_tour: !currentUser.show_ad_tour
              });
            }}
          >
            <i className="fas fa-info-circle"/>
          </button>
        </BottomLeft>
        {/* ------------------------------ Styling Controls ------------------------------ */}
        <BottomMiddle>
          <button name="bold" onClick={(e) => toggleElementStyle(e, "bold")}>
            <i className="fas fa-bold" onClick={(e) => toggleElementStyle(e, "bold")}/>
          </button>
          <button name="italic" onClick={(e) => toggleElementStyle(e, "italic")}>
            <i className="fas fa-italic" onClick={(e) => toggleElementStyle(e, "italic")}/>
          </button>
          <button name="align" value="left" onClick={e => customizeElement(e, "align", "left")}>
            <i className="fas fa-align-left" onClick={e => customizeElement(e, "align", "left")} />
          </button>
          <button name="align" value="center" onClick={e => customizeElement(e, "align", "center")}>
            <i className="fas fa-align-center" onClick={e => customizeElement(e, "align", "center")} />
          </button>
          <button name="align" value="right" onClick={e => customizeElement(e, "align", "right")}>
            <i className="fas fa-align-right" onClick={e => customizeElement(e, "align", "right")} />
          </button>
        </BottomMiddle>
        {/* ------------------------------ Color Controls ------------------------------ */}
        <BottomRight>
          <div>
            <input type="color" name="color" onChange={customizeElement} />
            <h3>Text</h3>
          </div>
          <div>
            <input type="color" name="bg_color" onChange={customizeElement} />
            <h3>Background</h3>
          </div>
        </BottomRight>
      </BottomSection>
    </div>
  );

export default Controls;
