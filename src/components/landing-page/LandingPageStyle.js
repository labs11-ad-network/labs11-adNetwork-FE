import styled from "styled-components";

import checks from "../../assets/checks.svg";

export const LandingPageStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");

  /* --------------- global landing info style --------------- */
  .container {
    max-width: 1100px;
    width: calc(100vw - 10vw);
    margin: 0 auto;
    @media (min-width: 940px) {
      width: calc(100vw - 5vw);
    }
  }
  .blue-subtitle {
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #0e4de3;
    text-align: center;
    font-size: 13px;
    @media (min-width: 481px) {
      font-size: 14px;
      text-align: left;
    }
    @media (min-width: 940px) {
      font-size: 18px;
    }
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
      text-align: initial;
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
      width: 550px;
    }
  }
  .landing-ptag {
    font-size: 0.8rem;
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
      &:hover {
        background: #007bff;
        box-shadow: 0 2px 4px 0 rgba(0, 25, 85, 0.4);
      }
    }
  }
  .costumer-blue-subtitle {
    text-align: center;
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

  footer {
    margin: 40vh 0;
  }
`;
