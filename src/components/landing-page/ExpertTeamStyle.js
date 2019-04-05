import styled from "styled-components";
import video1 from "../../assets/video1.jpg";

export const ExpertTeamStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");

  /* margin: 300px 0; */
  padding: 100px 0 70px 0;
  /* team-content */

  .owl-nav {
    display: none;
  }
  .owl-dots {
    width: 100%;
    float: left;
    text-align: center;
    margin-top: 70px;
    :focus {
      outline: -webkit-focus-ring-color auto 5px;
    }
    button.owl-dot {
      background: 0 0;
      color: inherit;
      border: none;
      padding: 0 !important;
      font: inherit;
    }
    .owl-dot.active span {
      width: 28px !important;
      background: #005bea !important;
      outline: 0 !important;
    }
    .owl-dot span {
      width: 20px !important;
      height: 10px;
      border-radius: 5px;
      background: #c2c2c2;
      display: inline-block;
      margin: 0 6px;
    }
  }

  /* team content title and subtitle */
  .owl-theme {
  }
  .team-content {
    text-align: center;
    p {
      margin: 5px auto 25px auto;
    }
  }

  /* team style ( Card ) */
  .team-card {
    width: 95%;
    margin: 0 auto;
  }
  .team-sub_title {
    margin: -15px auto 20px auto;
  }
  .team-socials {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    .social-item {
      margin: 0 5px;
      text-align: center;
      font-size: 14px;
      color: #cadce2;
      width: 30px;
      line-height: 30px;
      border: 1px solid #f6f6f6;
      border-radius: 2px;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: #005bea;
        border-color: #005bea;
      }
    }
  }

  /* App intro Video */
  .app-intro-video {
    margin: 136px 0 20px 0;
    height: 100%;
    margin: 10vh calc(-50vw + 50%);
    margin-top: 150px;
    @media (min-width: 481px) {
      margin-top: 130px;
    }
  }
  .video-flex {
    display: flex;
    width: 100%;
    height: 420px;
    justify-content: space-evenly;
    flex-direction: column;
    @media (min-width: 481px) {
      flex-direction: row-reverse;
    }
    @media (min-width: 940px) {
      flex-direction: row;
    }
  }
  .wavy-blue {
    display: none;
    @media (min-width: 940px) {
      display: block;
      margin-left: -81px;
    }
  }

  .video-play {
    background: url(${video1}) no-repeat left center;
    height: auto;
    background-size: cover;
    object-fit: cover;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 45px 0px;

    @media (min-width: 481px) {
      padding: initial;
      width: 50%;
    }

    @keyframes youtubeBTN {
      0% {
        transform: rotate(0);
        opacity: 0.5;
      }
      50% {
        transform: rotate(0) scale(1.7);
        opacity: 1;
      }
      70% {
        transform: rotate(0) scale(1.5);
        opacity: 0;
      }
    }
    a {
      position: relative;
      &:after {
        content: "";
        background: #ffffff36;
        position: absolute;
        width: 97px;
        height: 90px;
        top: 6%;
        left: 7%;
        border-radius: 50%;
        -webkit-animation: youtubeBTN 1.5s infinite 0s
          cubic-bezier(0.26, 0.24, 0.62, 0.71);
        animation: youtubeBTN 1.5s infinite 0s
          cubic-bezier(0.26, 0.24, 0.62, 0.71);
      }
    }

    .fa {
      background: #fff;
      line-height: 76px;
      border: 12px solid #dde5f1;
      border-radius: 50%;
      width: 86px;
      text-align: center;
      font-size: 24px;
      color: #005bea;
      position: relative;
      z-index: 6;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      &:hover {
        background: #005bea;
        color: #fff;
      }
    }
  }

  .video-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #005bea;
    width: 100%;
    height: 100%;
    text-align: left;
    margin: 0 auto;
    @media (min-width: 481px) {
      width: 50%;
    }

    h2 {
      color: #fff;
      font-weight: 500;
      width: 100%;
    }
    p {
      color: #fff;
      text-align: left;
    }
  }

  /* GLOBAL */
  .border {
    border: 1px solid #cadce2;
    border-top: none;
    border-radius: 0 0 8px 8px;
    text-align: center;
    background: #fff;
    padding: 0 15px 25px;
    margin-top: -23px;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: #005bea;
    }
  }
  .team-profile_picture {
    border: 5px solid #fff;
    position: relative;
    border-radius: 50%;
    max-width: 80px;
    height: 81px;
    left: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 25px;
  }
  p {
    line-height: 1.45;
    color: #62748a;
    max-width: 350px;
    margin: 0 auto;
    font-size: 0.9rem !important;
    text-align: center;
    @media (min-width: 481px) {
      font-size: 1rem !important;
      max-width: 400px;
    }

    @media (min-width: 940px) {
      font-size: 1.2rem !important;
    }
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    font-weight: 500;
    line-height: 1.7;
    color: #333;
    letter-spacing: -0.01em;
    @media (min-width: 481px) {
      font-size: 2rem;
    }

    @media (min-width: 940px) {
      font-size: 2.3rem;
    }
  }
  h3 {
    text-align: center;
    margin: -15px 0 15px 0;
    font-size: 1.5rem;
  }

  .team-card {
    animation-delay: 1s;
    animation-name: fadeInUp;
    animation-duration: 1s;
    animation-fill-mode: both;
    will-change: transform;
    transform: perspective(300px) rotateX(0deg) rotateY(0deg);
  }
  .center-me {
    max-width: 341px;
  }
`;
