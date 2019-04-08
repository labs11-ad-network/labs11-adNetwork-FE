import React from "react";

import desktopGiff from "../../assets/desktopAds.gif";
import desktopGiff2 from "../../assets/desktopAds2.svg";
import desktopGiff3 from "../../assets/desktopAds3.svg";

const LandingContentSection = () => {
  return (
    <section className="landing-info container">
      {/* ------------ first item ------------ */}
      <div className="landing-parent">
        <div className="landing-item-left">
          <h5 className="blue-subtitle first-blue-subtitle">
            Customized and friendly Interstitial Ads
          </h5>
          <h3
            className="landing-info-title wow lightSpeedIn"
            data-wow-delay=".2s"
            data-wow-duration="2s"
          >
            Monetize with Interstitial Ads
          </h3>
          <p className="landing-ptag">
            Increase your revenue with keywords targeted Interstitial Ads
          </p>
          <p className="landing-ptag">
            Choose your desired Interstitial Ads size to fit your display style
          </p>
          <p className="landing-ptag">
            Maximize your revenue potential on high value impressions , and
            Customize for welcome Ad format or lightbox Interstitial Ads
          </p>
          <div className="buttons_container">
            <a href="#lad" className="btn_blue">
              Learn More
            </a>
          </div>
        </div>

        <div
          className="landing-item-right image-box  wow slideInRight"
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
            Monetize with unique and attractive Banner Ads
          </h5>
          <h3
            className="landing-info-title wow lightSpeedIn"
            data-wow-delay=".2s"
          >
            Display Attractive Banner Ads
          </h3>
          <p className="landing-ptag">
            Access high paying Banner Ads to maximize your revenue
          </p>
          <p className="landing-ptag">
            Choose the most converting banner Ads for higher eCPM
          </p>
          <p className="landing-ptag">
            Select your desired banner size to fit your space , and Display
            based on keywords to target the right people and increase your
            income
          </p>
          <div className="buttons_container">
            <a href="#lad" className="btn_blue">
              Learn More
            </a>
          </div>
        </div>

        <div
          className="landing-item-right image-box wow slideInLeft"
          data-wow-delay=".4s"
        >
          <img src={desktopGiff3} alt="graphic and person with balloons" />
        </div>
      </div>
      {/* ------------ third item ------------ */}
      <div className="landing-parent">
        <div className="landing-item-left ">
          <h5 className="blue-subtitle first-blue-subtitle">
            Earn even more with mobile and App traffic
          </h5>
          <h3
            className="landing-info-title wow lightSpeedIn"
            data-wow-delay=".2s"
            data-wow-duration="2s"
          >
            Mobile and In App Ads Amet natus id ab vero, veniam fuga labore.
          </h3>
          <p className="landing-ptag">
            Optimized to reach more audience across all mobile devices and
            Android Apps
          </p>
          <p className="landing-ptag">
            Each mobile and in App Ad impression that makes a difference on your
            income
          </p>
          <p className="landing-ptag">
            We support all your desired sizes to maintain your audience
            engagement, and Reach more mobile users and increase your revenue as
            a Publisher
          </p>
          <div className="buttons_container">
            <a href="#lad" className="btn_blue">
              Learn More
            </a>
          </div>
        </div>

        <div
          className="landing-item-right image-box image-box-third wow slideInRight"
          data-wow-delay=".5s"
          data-wow-duration="2s"
        >
          <img src={desktopGiff} alt="giff desktop" />
        </div>
      </div>
    </section>
  );
};

export default LandingContentSection;
