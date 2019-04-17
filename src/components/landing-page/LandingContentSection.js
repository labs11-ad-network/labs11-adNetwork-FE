import React from "react";

import desktopGiff from "../../assets/desktopAds.svg";
import desktopGiff2 from "../../assets/desktopAds2.svg";
import desktopGiff3 from "../../assets/desktopAds3.svg";

const LandingContentSection = () => {
  return (
    <section className="landing-info container">
      {/* ------------ first item ------------ */}
      <div className="landing-parent">
        <div className="landing-item-left">
          <h5 className="blue-subtitle first-blue-subtitle">
            Customized and friendly interstitial ads
          </h5>
          <h3
            className="landing-info-title wow fadeInUp"
            data-wow-delay=".2s"
            data-wow-duration="2s"
          >
            Monetize with interstitial ads
          </h3>
          <p className="landing-ptag">
            Increase your revenue with interstitial ads
          </p>

          <p className="landing-ptag">
            Maximize your revenue potential on high value impressions, and
            optimize for high ROI ads.
          </p>
          <div className="buttons_container">
            <a href="#lad" className="btn_blue">
              Learn More
            </a>
          </div>
        </div>

        <div
          className="landing-item-right image-box  wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="2s"
        >
          <img src={desktopGiff2} alt="girl pressing button" />
        </div>
      </div>
      {/* ------------ second item ------------ */}
      <div className="landing-parent">
        <div className="landing-item-left landing-item-second">
          <h5 className="blue-subtitle first-blue-subtitle">
            Monetize with unique and attractive banner ads
          </h5>
          <h3 className="landing-info-title wow fadeInUp" data-wow-delay=".2s">
            Display highly converting banner ads
          </h3>

          <p className="landing-ptag">
            Choose the most converting banner Ads for higher eCPM or CPC
          </p>
          <p className="landing-ptag">
            Select your desired banner size to fit your space, and display your
            chosen ads and increase your revenue.
          </p>
          <div className="buttons_container">
            <a href="#lad" className="btn_blue">
              Learn More
            </a>
          </div>
        </div>

        <div
          className="landing-item-right image-box wow fadeInUp"
          data-wow-delay=".3s"
        >
          <img src={desktopGiff3} alt="graphic and person with balloons" />
        </div>
      </div>
      {/* ------------ third item ------------ */}
      <div className="landing-parent">
        <div className="landing-item-left ">
          <h5 className="blue-subtitle first-blue-subtitle">
            Earn even more with mobile and app traffic
          </h5>
          <h3
            className="landing-info-title wow fadeInUp"
            data-wow-delay=".2s"
            data-wow-duration="2s"
          >
            Mobile and In App.
          </h3>
          <p className="landing-ptag">
            Optimized to reach more audience across all mobile devices and
            Android apps.
          </p>

          <p className="landing-ptag">
            We support all your desired sizes to maintain your audience
            engagement, and reach more mobile users and increase your revenue as
            a publisher.
          </p>
          <div className="buttons_container">
            <a href="#lad" className="btn_blue">
              Learn More
            </a>
          </div>
        </div>

        <div
          className="landing-item-right image-box image-box-third wow fadeInUp"
          data-wow-delay=".3s"
          data-wow-duration="2s"
        >
          <img src={desktopGiff} alt="giff desktop" />
        </div>
      </div>
    </section>
  );
};

export default LandingContentSection;
