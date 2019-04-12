import React, { Component } from "react";
import { AppDownloadStyle } from "./AppDownloadStyle";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

import appStore from "../../assets/appstore.png";
import googlePlay from "../../assets/playstore.png";
import phoneTesting from "../../assets/phone-img.png";
import screenshot1 from "../../assets/screenshot1.jpg";
import screenshot2 from "../../assets/screenshot2.jpg";
import screenshot3 from "../../assets/screenshot3.jpg";
import placeholder3 from "../../assets/placeholder3.png";
import tool1 from "../../assets/tool1.png";
import tool2 from "../../assets/tool2.png";
import tool3 from "../../assets/tool3.png";
import tool4 from "../../assets/tool4.png";
import tool5 from "../../assets/tool5.png";
import tool6 from "../../assets/tool6.png";
import tool7 from "../../assets/tool7.png";
import tool8 from "../../assets/tool8.png";

class AppDownload extends Component {
  render() {
    return (
      <>
        <AppDownloadStyle>
          <section className="app-download-flex">
            <div className="container">
              <div
                className="app-download-item wow fadeInUp"
                data-wow-delay=".1s"
                data-wow-duration="2s"
              >
                <p>#Lad Download </p>
                <h3 id="lad">The Best Lad Network</h3>
                <p>
                  One of the largest and perhaps the best known display
                  advertising network.
                </p>
                <img src={appStore} alt="app store" className="app-store-img" />
                <img
                  src={googlePlay}
                  alt="google play"
                  className="app-store-img"
                />
              </div>

              <div className="hero-moc">
                <img
                  className="lad-phone-image wow fadeInUp"
                  data-wow-delay=".3s"
                  data-wow-duration="2s"
                  src={phoneTesting}
                  alt="test"
                />
              </div>
            </div>
          </section>
          <section className="promo-section">
            <div className="promo-row container">
              <div
                className="promo-col wow fadeIn"
                data-wow-delay=".1s"
                data-wow-duration="2s"
              >
                <i className="fas fa-shield-alt promo-icon" />
                <h2>Highly Secured</h2>
                <p>
                  Protect critical access systems while generating revenue with
                  a powerful user-targeted advertising engine.
                </p>
              </div>

              <div
                className="promo-col wow fadeIn"
                data-wow-delay=".2s"
                data-wow-duration="2s"
              >
                <i className="fas fa-layer-group promo-icon" />{" "}
                <h2>Ad Server</h2>
                <p>
                  Our Ad Server will automatically choose the ads that perform
                  best for your website, and many other parameters.
                </p>
              </div>

              <div
                className="promo-col wow fadeIn"
                data-wow-delay=".3s"
                data-wow-duration="2s"
              >
                <i className="fas fa-chart-bar promo-icon" /> <h2>Marketing</h2>
                <p>
                  This platform allows publishers to monetize standard display
                  ads, mobile and video, and search results as well.
                </p>
              </div>
            </div>
          </section>

          <section className="work-content-section padding bg-gray">
            <div className="container">
              <div className="work-content-row">
                <div className="work-content-col work-content-col-first_child">
                  <div
                    className="content-mockups wow fadeInUp"
                    data-wow-delay=".1s"
                    data-wow-duration="2s"
                  >
                    <div className="mockup-back" />
                    <div className="mockup-front" />
                  </div>
                </div>

                <div className="work-content-col work-content-second_child">
                  <h2
                    className="main-title wow fadeInUp"
                    data-wow-delay=".2s"
                    data-wow-duration="2s"
                  >
                    How does this App Work?
                  </h2>
                  <p>Simple Setup and Customization</p>

                  <div className="work-content-lists">
                    <div className="work-list-item">
                      <img src={tool1} alt="icon" />
                      <div className="work-list-content">
                        <h3 className="main-heading-three">
                          Choose an Ad Network
                        </h3>
                        <p>
                          Choose your desired Interstitial Ads size to fit your
                          display style
                        </p>
                      </div>
                    </div>

                    <div className="work-list-item">
                      <img src={tool2} alt="icon" />
                      <div className="work-list-content">
                        <h3 className="main-heading-three">
                          Select the Right In-App Ad Format
                        </h3>
                        <p>
                          Access high paying Banner Ads to maximize your revenue
                        </p>
                      </div>
                    </div>

                    <div className="work-list-item">
                      <img src={tool5} alt="icon" />
                      <div className="work-list-content">
                        <h3 className="main-heading-three">Banner Ads</h3>
                        <p>
                          Also called display advertising, is perhaps the ad
                          type most familiar to users. These are typically text
                          and/or images displayed at the top or bottom,
                          alongside the app content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="feature-section">
            <div className="container">
              <h2
                className="main-title wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration="2s"
              >
                Advanced Features
              </h2>
              <p>
                Lorem ipsum dolior sit amet consectetur adipisicing elit. <br />
                Dicta, reprehenderit?
              </p>

              <div className="feature-row">
                <div
                  className="feature-col wow fadeInUp"
                  data-wow-delay=".1s"
                  data-wow-duration="2s"
                >
                  <img src={tool3} alt="icon" />
                  <h3 className="main-heading-three">Performance</h3>
                  <p>
                    Maximize your profits with our Network by using custom
                    developed ads you can only find on Lad Network.
                  </p>
                </div>

                <div
                  className="feature-col wow fadeInUp"
                  data-wow-delay=".1s"
                  data-wow-duration="2s"
                >
                  <img src={tool4} alt="icon" />
                  <h3 className="main-heading-three">Powerfull System</h3>
                  <p>
                    Instant access to thousands of display and mobile offers
                    including exclusive and premium offers.
                  </p>
                </div>

                <div
                  className="feature-col wow fadeInUp"
                  data-wow-delay=".1s"
                  data-wow-duration="2s"
                >
                  <img src={tool5} alt="icon" />
                  <h3 className="main-heading-three">Payment</h3>
                  <p>
                    Competitive prepaid payment terms with instant payments on
                    Lad Mastercard (available for all Affiliates).
                  </p>
                </div>

                <div
                  className="feature-col wow fadeInUp"
                  data-wow-delay=".1s"
                  data-wow-duration="2s"
                >
                  <img src={tool6} alt="icon" />
                  <h3 className="main-heading-three">Support</h3>
                  <p>Dedicated account managers support 24/7</p>
                </div>

                <div
                  className="feature-col wow fadeInUp"
                  data-wow-delay=".1s"
                  data-wow-duration="2s"
                >
                  <img src={tool7} alt="icon" />
                  <h3 className="main-heading-three">Powerfull System</h3>
                  <p>
                    Get results and run performance-based campaigns (CPC, CPM
                    and CPA/CPI).
                  </p>
                </div>

                <div
                  className="feature-col wow fadeInUp"
                  data-wow-delay=".1s"
                  data-wow-duration="2s"
                >
                  <img src={tool8} alt="icon" />
                  <h3 className="main-heading-three">Statistics</h3>
                  <p>
                    Detailed Statistics and advanced Conversion Tracking System.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="screenshot-section padding bg-gray">
            <div className="swiper-container swiper-container-horizontal container">
              <h2
                className="main-title wow fadeInUp"
                id="screenshots"
                data-wow-delay=".1s"
                data-wow-duration="2s"
              >
                Screenshots
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Dicta, reprehenderit?
              </p>
              <img
                className="placeholder-white-iphone"
                src={placeholder3}
                alt="phone placeholder"
              />

              <div className="swiper-wrapper-flex">
                <StyleRoot>
                  <Coverflow
                    displayQuantityOfSide={2}
                    navigation
                    infiniteScroll={true}
                    enableHeading={false}
                    enableScroll={false}
                    currentFigureScale={0.9}
                    otherFigureScale={0.71}
                    media={{
                      "@media (max-width: 479px)": {
                        width: "100vw",
                        maxWidth: "1200px",
                        height: "300px",
                        backgroundColor: "inherit",
                        zIndex: 2,
                        outline: 0
                      },
                      "@media (min-width: 481px)": {
                        width: "100vw",
                        maxWidth: "1200px",
                        height: "450px",
                        backgroundColor: "inherit",
                        zIndex: 2,
                        outline: 0
                      },
                      "@media (min-width: 940px)": {
                        width: "100vw",
                        maxWidth: "1000px",
                        height: "600px",
                        backgroundColor: "inherit",
                        zIndex: 2,
                        outline: 0
                      }
                    }}
                  >
                    <img src={screenshot1} alt="screenshot appq`" />
                    <img src={screenshot2} alt="screenshot appq`" />
                    <img src={screenshot3} alt="screenshot appq`" />
                    <img src={screenshot1} alt="screenshot appq`" />
                    <img src={screenshot2} alt="screenshot appq`" />
                    <img src={screenshot3} alt="screenshot appq`" />
                  </Coverflow>
                </StyleRoot>
              </div>
            </div>
          </section>
        </AppDownloadStyle>
      </>
    );
  }
}

export default AppDownload;
