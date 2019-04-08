import React, { PureComponent } from "react";
import { LandingPageStyle } from "../../components/landing-page/LandingPageStyle";
import PropTypes from "prop-types";
import WOW from "wowjs";

import desktopGiff from "../../assets/desktopAds.gif";
import Header from "../../components/landing-page/heading/Header.js";
import AppDownload from "../../components/landing-page/AppDownload.js";
import ExpertTeam from "../../components/landing-page/ExpertTeam";
import Contact from "../../components/landing-page/Contact";

class LandingPage extends PureComponent {
  login = () => {
    this.props.auth.login();
  };
  logout = () => {
    this.props.auth.logout();
  };

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <LandingPageStyle>
        <Header
          login={this.login}
          logout={this.logout}
          history={this.props.history}
        />
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
                Choose your desired Interstitial Ads size to fit your display
                style
              </p>
              <p className="landing-ptag">
                Maximize your revenue potential on high value impressions , and
                Customize for welcome Ad format or lightbox Interstitial Ads
              </p>
              <div className="buttons_container">
                <a href="/#" className="btn_blue">
                  Learn More
                </a>
              </div>
            </div>

            <div
              className="landing-item-right image-box  wow slideInRight"
              data-wow-delay=".3s"
              data-wow-duration="2s"
            >
              <img
                src="https://pcdn.piiojs.com/i/piio/v,alpha-1.0.7,/https%3A%2F%2Fpiio.co%2Fimg%2FEcommerce_buyer.svg"
                alt="girl pressing button"
              />
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
                <a href="/#" className="btn_blue">
                  Learn More
                </a>
              </div>
            </div>

            <div
              className="landing-item-right image-box wow slideInLeft"
              data-wow-delay=".4s"
            >
              <img
                src="https://pcdn.piiojs.com/i/piio/v,alpha-1.0.7,/https%3A%2F%2Fpiio.co%2Fimg%2Fillustration-marketing.svg"
                alt="graphic and person with balloons"
              />
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
                Each mobile and in App Ad impression that makes a difference on
                your income
              </p>
              <p className="landing-ptag">
                We support all your desired sizes to maintain your audience
                engagement, and Reach more mobile users and increase your
                revenue as a Publisher
              </p>
              <div className="buttons_container">
                <a href="/#" className="btn_blue">
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
        <section className="app-download">
          <AppDownload />
        </section>

        <section className="expert-team">
          <ExpertTeam />
        </section>

        <section className="contact">
          <Contact />
        </section>

        <footer>
          <p className="footer-ptag">Copyright © 2019 All Rights Reserved.</p>
        </footer>
      </LandingPageStyle>
    );
  }
}

LandingPage.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object
};

export default LandingPage;
