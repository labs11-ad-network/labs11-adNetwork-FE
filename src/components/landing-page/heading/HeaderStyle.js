import styled from "styled-components";
import borderBottom from "../../../assets/border_botom.svg";
import bgStars from "../../../assets/bg_stars.svg";

export const HeroHome = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  font-family: "Roboto", sans-serif;
  position: relative;
  /* background-image: url(${bgStars}),
    linear-gradient(181deg, #0A88DC, #0A88DC 59%, #0A88DC); */

  background-image: url(${bgStars}),
    linear-gradient(181deg, #001a57, #001b59 59%, #00267f);
  background-repeat: repeat-x, no-repeat;
  background-position: center 70px, 50%;
  background-size: 1440px auto, 100% auto;
  padding: 10px 0 174px 0;

  @media (min-width: 481px) {
    padding: 10px 0 224px 0;
  }
  .container {
    max-width: 1100px;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 940px) {
      max-width: 98%;
    }
  }
  /* desktop view text content  */
  @media (min-width: 940px) {
    .desktop-hero-container {
      display: flex;
    }
  }

  /* --------------- Hero Content --------------- */
  .hero-content h1 {
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.33;
    color: #fff;
    text-align: center;
    margin: 0 auto 30px auto;
    @media (min-width: 481px) {
      font-size: 2.5rem;
      width: 90%;
    }
    @media (min-width: 940px) {
      font-size: 2.8rem;
      text-align: inherit;
      max-width: 600px;
      margin: 0 0 5% 0;
    }
    span {
      font-weight: 500;
      font-size: 2.2rem;
      @media (min-width: 481px) {
        font-size: 2.7rem;
      }
      @media (min-width: 940px) {
        font-size: 3rem;
      }
    }
  }
  .hero-sub-title {
    color: #fdba5f;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    padding: 50px 0 20px 0;
    @media (min-width: 940px) {
      text-align: inherit;
    }
  }
  /* ---------------  phone & Bird style --------------- */
  .container_illustration {
    position: relative;
    @media (min-width: 940px) {
      .illustration-container {
        overflow: hidden;
        border: 1px solid red;
      }
    }
    .illustration {
      position: absolute;
      left: 50%;
      top: 133%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      z-index: 1;
      max-width: 100%;
      width: 627px;
      @media (min-width: 481px) {
        top: 120%;
      }
      @media (min-width: 940px) {
        max-width: 795px;
        width: 795px;
        left: 125px;
        top: 99%;
      }
    }
  }

  .bird-wrapper {
    display: flex;
    justify-content: center;
    z-index: 2;

    @media (min-width: 940px) {
      z-index: 2;
      position: relative;
      top: 39%;
      left: -19%;
    }
    .piio_float_left {
      margin: 0 35px 31% 0;
      animation: float 6s ease-in-out infinite;
      @media (min-width: 481px) {
        margin: 10% 35px 22% 0;
      }
      svg {
        width: 100px;
        @media (min-width: 481px) {
          width: 151px;
        }
      }
    }
    @keyframes float {
      0% {
        transform: translatey(0);
      }
      50% {
        transform: translate(5px, 5px);
      }
      100% {
        transform: translate(0);
      }
    }

    .piio_float_right {
      animation: float_reverse 5s ease-in-out infinite;
      svg {
        width: 120px;
        @media (min-width: 481px) {
          width: 188px;
        }
      }
    }
    @keyframes float_reverse {
      0% {
        transform: translatey(0);
      }
      50% {
        transform: translate(8px, 8px);
      }
      100% {
        transform: translate(0);
      }
    }
  }
  .desktop-cloud {
    display: none;
  }
  @media (min-width: 940px) {
    .desktop-cloud {
      display: block;
      position: absolute;
      right: -140px;
      top: -15%;
      height: 621px;
      left: -97%;
    }
  }
  /* --------------- nav ----------------- */
  .desktop-anchor {
    display: none;
  }
  .navBar {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    @media (min-width: 940px) {
      padding: 20px 0;
      position: relative;
      top: 0;
      z-index: 1111;
      .desktop-anchor {
        display: block;
      }
      .hamburger {
        display: none;
      }
    }
    a {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-size: 16px;
      cursor: pointer;
      @media (min-width: 940px) {
        font-size:14px;
        margin-right: 25px;
      }
    }
  }
  .navWhite {
    z-index: 9999;
    box-shadow: 0px 4px 7px #777;
    transition: top 0.6s;
    position: fixed;
    top: 3%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 13px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    background-color: #fff;
    @media (min-width: 940px) {
      padding: 33px 0;
      .desktop-anchor {
        display: block;
      }
      .hamburger {
        display: none;
      }
    }

    a {
      text-decoration: none;
      margin: 0 2%;
      color: black;
      text-transform: uppercase;
      font-size: 14px;
      cursor: pointer;
      @media (min-width: 940px) {
        font-size:14px;
        font-weight:500;
        margin-right: 25px;
      }
    }
  }
  .navbar--hidden {
    top: -100px;
  }
  /* ---------------global button --------------- */
  .button {
    max-width: 80%;
    margin: 0 auto;
    @media (min-width: 481px) {
      display: flex;
      justify-content: center;
    }
    @media (min-width: 940px) {
      margin: 0;
      display: inline-flex;
    }
  }
  .hero-content .btn_blue {
    max-width: 100%;
    background: red;
    margin: 30px auto;
    display: block;
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    padding: 16px 20.5px;
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
    line-height: 1rem;
    text-decoration: none;
    transition: 0.3s ease;
    @media (min-width: 481px) {
      margin: 15px 10px;
    }
    &:hover {
      background: #007bff;
    }
    @media (min-width: 940px) {
      margin-left: 0;
      margin-right: 15px;
    }
  }
  .hero-content .yellow-btn {
    background-color: #fdba5f;
    color: #001759;
    z-index:12;
    &:hover {
      background-color: #ffc107;
    }
  }
  /*--------------- bottom wave  ---------------*/
  .border_bottom {
    display: block;
    width: 100%;
    height: 105px;
    position: absolute;
    bottom: -2px;
    background: url(${borderBottom}) repeat top;
    background-size: 1440px auto;
    margin-bottom: -20px;
  }
`;
