import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/landing-page/navigation/Navigation.js";
import Header from "../../components/landing-page/heading/Header.js";
import styled from "styled-components";
import checks from "../../assets/checks.svg";
const LandingPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  /* ------------------------ landing-info section ------------------------ */
  .landing-info {
    background: #fff;
    width: 100%;
    margin: 0 auto;
    .container {
      padding-bottom: 1000px;
      width: 95%;
      margin: 0 auto;
    }
  }

  /* ----------------------- global landing info style ----------------------- */
  .blue-subtitle {
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    font-size: 18px;
    letter-spacing: normal;
    color: #0e4de3;
  }
  .landing-info-title {
    margin-top: 24px;
    color: #001955;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    font-size: 33px;
    line-height: 1.33;
  }
  .first-blue-subtitle {
    padding-top: 100px;
  }
  .image-box img {
    max-width: 100%;
    margin-top: 150px;
  }

  .landing-ptag {
    padding-left: 33px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.56;
    color: #62748a;
    position: relative;
    margin-top: 25px;

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
  .buttons_container {
    margin-top: 30px;
  }
  .buttons_container .btn_blue {
    transition: 0.3s ease;
    transition-property: background-color, box-shadow;
    font-family: Roboto, sans-serif;
    display: inline-block;
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

    &:hover {
      background: #007bff;
      box-shadow: 0 2px 4px 0 rgba(0, 25, 85, 0.4);
    }
  }

  .image-box {
    position: relative;
    .code_piio-image-third {
      position: relative;
      left: -5%;
      max-width: 555px;
      width: 100%;
      height: auto;
    }
    .code_piio {
      padding: 0 44px 20px 16px;
      position: absolute;
      left: 0;
      top: 82px;
      max-width: 414px;
    }
  }

  /* ----------------------- Landing Parent ----------------------- */
  .landing-parent {
    display: flex;
    justify-content: space-around;
  }
  .landing-item-left {
    max-width: 500px;
  }
  .landing-item-second {
    order: 1;
  }
`;
class LandingPage extends Component {
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
        <Header />
        <section className="landing-info">
          <div className="container">
            {/* -------------------------- first item -------------------------- */}
            <div className="landing-parent">
              <div className="landing-item-left">
                <h5 className="blue-subtitle first-blue-subtitle">
                  Lorem-ipsum
                </h5>
                <h3 className="landing-info-title">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  natus id ab vero, veniam fuga labore.
                </h3>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
                </p>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
                </p>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
                </p>
                <div className="buttons_container">
                  <a href="#" className="btn_blue">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="landing-item-right image-box">
                <img
                  src="https://pcdn.piiojs.com/i/piio/v,alpha-1.0.7,/https%3A%2F%2Fpiio.co%2Fimg%2FEcommerce_buyer.svg"
                  alt="girl pressing button"
                />
              </div>
            </div>
            {/* -------------------------- second item -------------------------- */}
            <div className="landing-parent">
              <div className="landing-item-left landing-item-second">
                <h5 className="blue-subtitle first-blue-subtitle">
                  Lorem-ipsum
                </h5>
                <h3 className="landing-info-title">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  natus id ab vero, veniam fuga labore.
                </h3>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
                </p>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
                </p>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
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
            {/* -------------------------- third item -------------------------- */}
            <div className="landing-parent">
              <div className="landing-item-left ">
                <h5 className="blue-subtitle first-blue-subtitle">
                  Lorem-ipsum
                </h5>
                <h3 className="landing-info-title">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  natus id ab vero, veniam fuga labore.
                </h3>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
                </p>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
                </p>
                <p className="landing-ptag">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  incidunt eligendi ea Autem incidunt eligendi.
                </p>
                <div className="buttons_container">
                  <a href="#" className="btn_blue">
                    Learn More
                  </a>
                </div>
              </div>

              <div className="landing-item-right image-box">
                <img
                  className="code_piio-image-third"
                  src="https://pcdn.piiojs.com/i/piio/v,alpha-1.0.7,/https%3A%2F%2Fpiio.co%2Fimg%2Fillustration-developers.svg"
                  alt="code piio in console"
                />
                <img
                  className="code_piio"
                  alt="console code piio"
                  src="https://pcdn.piiojs.com/i/piio/https%3A%2F%2Fpiio-web-v2.herokuapp.com%2Fimg%2Fcode-with-piio%402x.png"
                />
              </div>
            </div>
          </div>
        </section>

        <button
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
        </button>
      </LandingPageStyle>
    );
  }
}

LandingPage.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object
};

export default LandingPage;
