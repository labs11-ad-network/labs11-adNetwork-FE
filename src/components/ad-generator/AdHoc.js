import React from "react";

import {
  HorizontalBanner,
  SquareBanner,
  VerticalBanner,
  PlainHorizontalBanner,
  PlainSquareBanner,
  PlainVerticalBanner
} from "./templates";

const AdHoc = props => {
  console.log(props.image);
  return (
    <>
      {props.ad.size &&
        (props.ad.size.includes("horizontal_banner") ? (
          <HorizontalBanner
            ad={props.ad}
            image={props.image}
            recordAction={props.recordAction}
          />
        ) : props.ad.size.includes("vertical_banner") ? (
          <VerticalBanner
            ad={props.ad}
            image={props.image}
            recordAction={props.recordAction}
          />
        ) : props.ad.size.includes("square_banner") ? (
          <SquareBanner
            ad={props.ad}
            image={props.image}
            recordAction={props.recordAction}
          />
        ) : props.ad.size.includes("plain_horizontal") ? (
          <PlainHorizontalBanner
            image={props.image}
            ad={props.ad}
            recordAction={props.recordAction}
          />
        ) : props.ad.size.includes("plain_square") ? (
          <PlainSquareBanner
            ad={props.ad}
            image={props.image}
            recordAction={props.recordAction}
          />
        ) : props.ad.size.includes("plain_vertical") ? (
          <PlainVerticalBanner
            image={props.image}
            ad={props.ad}
            recordAction={props.recordAction}
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
