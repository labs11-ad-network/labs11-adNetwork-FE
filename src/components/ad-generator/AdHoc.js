import React from 'react';

import {
    HorizontalBanner,
    SquareBanner,
    VerticalBanner,
    PlainImage
  } from "./templates";

const AdHoc = (props) => {
  return (
    <>
        {props.ad.size && (
        props.ad.size.includes('horizontal_banner') ?
            <HorizontalBanner 
                ad={props.ad}
                recordAction={props.recordAction}
            /> :
            props.ad.size.includes('vertical_banner') ?
            <VerticalBanner 
                ad={props.ad}
                recordAction={props.recordAction}
            /> :
            props.ad.size.includes('square_banner') ?
            <SquareBanner 
                ad={props.ad}
                recordAction={props.recordAction}
            /> :
            <PlainImage 
                ad={props.ad}
                recordAction={props.recordAction}
            />
        )}
    </>
  )
}

export default AdHoc;