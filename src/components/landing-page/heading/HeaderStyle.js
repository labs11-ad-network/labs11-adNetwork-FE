import styled from "styled-components";
import borderBottom from "../../../assets/border_botom.svg";
import bgStars from "../../../assets/bg_stars.svg";

export const HeroHome = styled.section`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  font-family: "Roboto", sans-serif;
  position: relative;
  background-image: url(${bgStars}),
    linear-gradient(181deg, #001a57, #001b59 59%, #00267f);
  background-repeat: repeat-x, no-repeat;
  background-position: center 70px, 50%;
  background-size: 1440px auto, 100% auto;
  padding: 10px 0 300px 0;
  overflow: hidden;

  .container {
    max-width: 1200px;
    width: 95%;
    border: 1px solid red;
    margin: 0 auto;
  }
  .container_illustration {
    width: 100%;
    display: block;
  }
  .container_illustration .big_svg {
    position: absolute;
    top: 400px;
    right: -142px;
    z-index: 1;
  }
  .container_illustration .bg_cloud_window {
    position: absolute;
    top: 1px;
  }
  .container_illustration .animation {
    position: relative;
    .piio_float_left {
      position: absolute;
      right: 252px;
      top: 69px;
    }

    .piio_float_right {
      position: absolute;
      top: 135px;
      z-index: 2;
      right: 26px;
    }
  }
  /* --------------------- Hero Content ---------------------------- */
  .hero-content {
    min-width: 500px;
  }
  .hero-content h1 {
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.33;
    color: #fff;
    text-align: center;
    span {
      font-weight: 500;
      font-size: 2.2rem;
    }
  }

  .hero-sub-title {
    color: #fdba5f;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    padding: 50px 0 20px 0;
  }

  /* -------------------------------------- nav -------------------------------------- */
  /* nav {
    max-width: 1200px;
    width: 95%;
    border: 1px solid red;
    display: flex;
    margin: 0 auto;
    margin-top: -100px;
    padding: 15px 0;
    justify-content: space-between;
    position: relative;
    z-index: 999;
    a {
      text-decoration: none;
      margin: 0 0 0 15px;
      color: #fff;
      font-size: 1.1rem;
      transition: 0.3s ease;
      &:hover {
        color: #99a6c8;
      }
    }
    .middle-anchors a {
      margin-right: 25px;
    }
  } */
  nav {
    display: flex;
    justify-content: space-between;
  }
  /* --------------------------------global button -------------------------------- */
  .hero-content .button {
    margin: 40px auto 0;
  }
  .hero-content .btn_blue {
    max-width: 279px;
    margin: 30px auto;
    display: block;
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    padding: 18px 20.5px;
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
    transition-property: background-color, box-shadow;
    &:hover {
      background: #007bff;
    }
  }
  .hero-content .yellow-btn {
    background-color: #fdba5f;
    color: #001759;
  }
  /* -------------------------------- bottom wave  -------------------------------- */
  .border_bottom {
    display: block;
    width: 100%;
    height: 85px;
    position: absolute;
    bottom: -2px;
    background: url(${borderBottom}) repeat top;
    background-size: 1440px auto;
  }
`;
