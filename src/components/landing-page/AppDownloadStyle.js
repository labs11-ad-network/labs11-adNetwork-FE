import styled from "styled-components";

import heroWave from "../../assets/hero-wave.png";
import desktopPhone from "../../assets/phone1.png";
import mobilePhone from "../../assets/phone2.png";

export const AppDownloadStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");

  font-family: "Roboto", sans-serif;

  /* app background with big wavy blue background Desktop First */

  .app-download-flex {
    max-width: 1200px;
    margin: 100px 0;
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 73vh;
    display: flex;
    align-items: center;
    z-index: 1;

    &:before {
      background: url(${heroWave});
      background-repeat: no-repeat;
      background-position: center;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
    }

    @media (min-width: 940px) {
      &:before {
        background-position: right center;
      }
    }
  }

  .hero-moc {
    display: none;

    @media (min-width: 940px) {
      display: block;
      background-position: bottom right;
      background-repeat: no-repeat;
      content: "";
      position: absolute;
      width: 500px;
      height: 600px;
      vertical-align: middle;
      bottom: 0;
      right: 50px;
      animation-name: animationimg;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      .lad-phone-image {
        width: 368px;
        max-width: 100%;
        display: block;
      }
    }
  }

  @keyframes animationimg {
    0% {
      transform: translateY(-35px);
    }

    50% {
      transform: translateY(-25px);
    }

    100% {
      transform: translateY(-35px);
    }
  }

  .app-download-item {
    h3 {
      font-size: 2rem;
      font-weight: 500;
      max-width: 200px;
    }

    p {
      margin: 10px 0;
      max-width: 300px;
    }

    @media (min-width: 481px) {
      h3 {
        font-size: 3rem;
        max-width: 800px;
      }

      p {
        margin: 20px 0;
        max-width: 400px;
      }
    }

    @media (min-width: 940px) {
      h3 {
        font-size: 4rem;
        max-width: 500px;
      }

      p {
        margin: 20px 0;
        max-width: 400px;
      }
    }
  }

  .app-store-img {
    height: 37px;
    margin: 9px 15px 0 0;

    @media (min-width: 940px) {
      height: 52px;
      margin: 9px 15px 0 0;
    }
  }

  /* promo section  three icon column*/
  .promo-section {
    @media (min-width: 481px) {
      margin: -70px 0 57px 0;
    }
    @media (min-width: 940px) {
      margin: 0;
      padding: 80px 0;
    }
  }

  .promo-row {
    display: flex;
    text-align: center;
    flex-direction: column;
    @media (min-width: 481px) {
      flex-direction: row;
    }
  }

  .promo-col {
    h2 {
      font-size: 1.2rem;
      margin: 10px 0 0 0;
    }
    p {
      margin: 20px 0;
      max-width: 300px;
      margin: 10px auto 25px auto;
    }
    @media (min-width: 481px) {
      h2 {
        font-size: 1.3rem;
        margin: 8px 0 0 0;
      }
      p {
        margin: 20px 0;
        max-width: 430px;
      }
    }
    @media (min-width: 940px) {
      margin-right: 60px;
      h2 {
        font-size: 1.5rem;
        margin: 10px 0 0 0;
      }
      p {
        margin: 20px 0;
        max-width: 400px;
      }
    }
  }

  .promo-icon {
    background-image: linear-gradient(
      -45deg,
      #2b18dd 0%,
      #1151d3 50%,
      #1151d3 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 50px;
  }

  /* work content
   section  */
  .work-content-section {
    margin: 70px 0;

    @media (min-width: 481px) {
      padding: 50px 0;
      margin: 0;
    }

    @media (min-width: 940px) {
      padding: 100px 0;
      margin: 0;
    }
  }

  .work-content-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    @media (min-width: 481px) {
      flex-direction: row;
      margin-right: -15px;
      margin-left: -15px;
    }
  }

  .content-mockups {
    display: none;

    @media (min-width: 481px) {
      display: block;
      position: relative;
      .mockup-back {
        display: none;
      }
      .mockup-front {
        background-image: url(${mobilePhone});
        background-repeat: no-repeat;
        background-position: center center;
        content: "";
        position: absolute;
        width: 300px;
        height: 400px;
        left: 11px;
        top: 109px;
      }
    }
    @media (min-width: 940px) {
      position: relative;
      .mockup-back {
        display: block;
        background-image: url(${mobilePhone});
        background-repeat: no-repeat;
        background-position: center center;
        content: "";
        position: absolute;
        width: 500px;
        height: 500px;
        left: 80px;
        top: 0;
      }

      .mockup-front {
        background-image: url(${desktopPhone});
        background-position: bottom right;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        width: 450px;
        height: 600px;
        left: 0;
        top: -100px;
      }
    }
  }

  .work-content-col-first_child {
    @media (min-width: 481px) {
      max-width: 50%;
      flex: 0 0 50%;
    }
  }

  .work-content-second_child {
    p {
      margin-bottom: 15px;
    }
    @media (min-width: 481px) {
      margin-bottom: 40px;
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  .work-content-lists {
    .work-list-item {
      display: flex;
      align-items: center;
      p {
        margin-bottom: 35px;
      }
    }
    img {
      display: inline-block;
      max-width: 100%;
      margin: 10px;
    }
  }

  /* feature section  */
  .feature-section {
    margin: 100px 0;
    h2 {
      text-align: center;
      margin-bottom: 10px;
    }

    p {
      text-align: center;
      line-height: 1.45;
      max-width: 250px;
      margin: 0 auto;
    }
    @media (min-width: 481px) {
      h2 {
        text-align: center;
      }

      p {
        text-align: center;
        max-width: 100%;
      }
    }
  }

  .feature-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0;
  }

  .feature-col {
    flex: 100%;
    max-width: 100%;
    margin: 10px;
    background-color: #eff4ff;
    padding: 15px 0 50px 0;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    text-align: center;

    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-in-out;
    }
    @media (min-width: 481px) {
      flex: 0 0 50.333333%;
      padding: 55px 30px;
      max-width: 33.333333%;
    }
    @media (min-width: 940px) {
      flex: 0 0 24.333333%;
      padding: 55px 30px;
      max-width: 33.333333%;
    }
    .feature-icon {
      margin: 16px auto;
      display: inline-block;
    }
  }

  /* Screenshot section & white phone */

  .swiper-wrapper-flex {
    /* width: 100vw; */
  }
  .swiper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    p {
      text-align: center;
      margin: 10px;
      margin-bottom: -52px;

      @media (min-width: 481px) {
        margin-bottom: 0;
      }
    }
    @media (min-width: 481px) {
      min-height: 10vh;
      padding: 0;
    }
    @media (min-width: 940px) {
      padding: 3.58rem 0 7rem 0;
      min-height: 50vh;
      p {
        text-align: center;
        margin: 10px;
      }
    }
  }

  .placeholder-white-iphone {
    display: none;
    @media (min-width: 940px) {
      width: 202px;
      position: absolute;
      top: 262px;
      height: 343px;
      max-width: 100%;
      z-index: 22;
      display: block !important;
    }
  }

  /* swiper inifinite carousel  */
  /* -------------- global ------------------*/
  p {
    line-height: 1.35;
    color: #62748a;
    font-size: 0.8rem !important;

    @media (min-width: 481px) {
      font-size: 1rem !important;
    }

    @media (min-width: 940px) {
      font-size: 1.2rem !important;
    }
  }

  .bg-gray {
    background-color: #eff4ff;
  }

  .padding {
    padding: 100px 0;
  }

  .main-icon-style {
    background-image: linear-gradient(
      -45deg,
      #2b18dd 0%,
      #1151d3 50%,
      #1151d3 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 40px;
    margin-right: 30px;
  }

  .main-heading-three {
    font-size: 17px;
    margin-bottom: 0;
    font-weight: 400;
    line-height: 1.7;
    color: #333;
    letter-spacing: -0.01em;
    @media (min-width: 481px) {
      font-size: 20px;
    }

    @media (min-width: 940px) {
      font-size: 22px;
    }
  }

  .space-left {
    margin-left: 25px;
  }

  .main-title {
    font-size: 20px;
    color: #333;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.04em;
    @media (min-width: 481px) {
      font-size: 30px;
    }

    @media (min-width: 940px) {
      font-size: 36px;
    }
  }
`;
