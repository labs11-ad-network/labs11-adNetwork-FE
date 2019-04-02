import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/landing-page/navigation/Navigation.js";
import Header from "../../components/landing-page/heading/Header.js";
import styled from "styled-components";
import checks from "../../assets/checks.svg";
import desktopGiff from "../../assets/desktopAds.gif";
import CustomerStoriesCarousel from "../../components/landing-page/CustomerStoriesCarousel.js";
const LandingPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");

  /* --------------- global landing info style --------------- */
  .container {
    max-width: 1100px;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 481px) {
      width: 80%;
    }
    @media (min-width: 940px) {
      width: 98%;
    }
  }
  .blue-subtitle {
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    font-size: 18px;
    letter-spacing: normal;
    color: #0e4de3;
    text-align: center;
  }
  .landing-info-title {
    margin-top: 24px;
    color: #001955;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    font-size: 1.5rem;
    line-height: 1.33;
    text-align: center;
    @media (min-width: 481px) {
      font-size: 1.8rem;
    }
    @media (min-width: 940px) {
      font-size: 2.2rem;
      text-align: initial;
    }
  }
  .first-blue-subtitle {
    padding-top: 10%;
    @media (min-width: 940px) {
      text-align: initial;
      padding-top: 15%;
    }
  }
  .image-box img {
    max-width: 100%;
    display: block;
    margin: 20px auto;
  }
  @media (min-width: 940px) {
    .image-box-third {
      margin: 50px 0 0 0;
    }
  }
  .landing-ptag {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.56;
    color: #62748a;
    position: relative;
    margin: 25px 0 0 0;
    padding: 0 0 0 33px;
    @media (min-width: 481px) {
      font-size: 1.1rem;
    }
    @media (min-width: 940px) {
      font-size: 1.2rem;
    }

    &:before {
      content: url(${checks});
      width: 24px;
      height: 24px;
      display: inline-block;
      background: url(${checks}) no-repeat 0 0;
      background-size: 24px auto;
      position: absolute;
      left: 0;
      top: 1px;
    }
  }
  .buttons_container .btn_blue {
    display: block;
    max-width: 279px;
    margin: 30px auto 0 auto;
    transition: 0.3s ease;
    transition-property: background-color, box-shadow;
    font-family: Roboto, sans-serif;
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    padding: 15px 20.5px 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
    outline: 0;
    border: 0;
    -webkit-apparience: none;
    cursor: pointer;
    background-color: #0e4de3;
    box-shadow: 0 2px 4px 0 rgba(0, 25, 85, 0.1);
    text-decoration: none;
    @media (min-width: 940px) {
      margin: 7% 0;
      max-width: 150px;
      padding: 19px 20.5px;
    }

    &:hover {
      background: #007bff;
      box-shadow: 0 2px 4px 0 rgba(0, 25, 85, 0.4);
    }
  }
  /* --------------- Landing Parent --------------- */
  .landing-parent {
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 940px) {
      justify-content: space-between;
      flex-direction: row;
    }
  }
  @media (min-width: 940px) {
    .landing-parent:nth-child(2) {
      flex-direction: row-reverse;
    }
    .landing-item-left {
      max-width: 500px;
    }
  }
  .costumer-stories {
    margin-bottom: 100vh;
  }
  .costumer-subtitle {
    padding: 20px 0 0 0;
    margin-top:100px;
  }
`;
class LandingPage extends Component {
  login = () => { this.props.auth.login(); }
  logout = () => { this.props.auth.logout(); }
  componentDidMount() {
    const {
      auth: { renewSession }
    } = this.props;
    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { history, auth } = this.props;
    console.log("history", history);

    return (
      <LandingPageStyle>
        {/* <Navigation
          login={() => auth.login()}
          logout={() => auth.logout()}
          history={history}
        /> */}
        <Header
          login={this.login} logout={this.logout} history={this.props.history}
        />
        <section className="landing-info container">
          {/* ------------ first item ------------ */}
          <div className="landing-parent">
            <div className="landing-item-left">
              <h5 className="blue-subtitle first-blue-subtitle">
                Customized and friendly Interstitial Ads
              </h5>
              <h3 className="landing-info-title">
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
                <a href="#" className="btn_blue">
                  Learn More
                </a>
              </div>
            </div>

            <div className="landing-item-right image-box ">
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
              <h3 className="landing-info-title">
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
                <a href="#" className="btn_blue">
                  Learn More
                </a>
              </div>
            </div>

            <div className="landing-item-right image-box">
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
              <h3 className="landing-info-title">
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
                <a href="#" className="btn_blue">
                  Learn More
                </a>
              </div>
            </div>

            <div className="landing-item-right image-box image-box-third">
              <img src={desktopGiff} alt="giff desktop" />
            </div>
          </div>
        </section>
        <section className="costumer-stories">
          <CustomerStoriesCarousel />
        </section>

        {/* <button
          type="button"
          onClick={() => {
            localStorage.setItem("acct_type", "advertiser");
          }}
        >
          Advertiser
        </button>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("acct_type", "affiliate");
          }}
        >
          Affiliate
        </button> */}
      </LandingPageStyle>
    );
  }
}

LandingPage.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object
};

export default LandingPage;
