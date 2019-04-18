import React from "react";

import {
  HorizontalBanner,
  SquareBanner,
  VerticalBanner,
  PlainHorizontalBanner,
  PlainSquareBanner,
  PlainVerticalBanner
} from "./templates";

const AdHoc = ({ ad, image, handleElementChange, selected }) => {
  return (
    <>
      {ad.size &&
        (ad.size.includes("horizontal_banner") ? (
          <HorizontalBanner
            ad={ad}
            image={image}
            handleElementChange={handleElementChange}
            selected={selected}
          />
        ) : ad.size.includes("vertical_banner") ? (
          <VerticalBanner
            ad={ad}
            image={image}
            handleElementChange={handleElementChange}
            selected={selected}
          />
        ) : ad.size.includes("square_banner") ? (
          <SquareBanner
            ad={ad}
            image={image}
            handleElementChange={handleElementChange}
            selected={selected}
          />
        ) : ad.size.includes("plain_horizontal") ? (
          <PlainHorizontalBanner
            image={image}
            ad={ad}
          />
        ) : ad.size.includes("plain_square") ? (
          <PlainSquareBanner
            ad={ad}
            image={image}
          />
        ) : ad.size.includes("plain_vertical") ? (
          <PlainVerticalBanner
            image={image}
            ad={ad}
          />
        ) : (
          <h1>
            Ad size not valid, please contact a site administrator or create a
            new ad
          </h1>
        ))}
    </>
  );
};

export default AdHoc;
