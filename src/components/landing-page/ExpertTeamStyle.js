import styled from "styled-components";

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
    padding: 20px 0;
    .social-item {
      margin: 0 5px;
      text-align: center;
      font-size: 14px;
      color: #c3c3c3;
      width: 30px;
      line-height: 28px;
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

  /* GLOBAL */
  .border {
    border: 1px solid #f6f6f6;
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
      font-size: 20px;
    }

    @media (min-width: 940px) {
      font-size: 22px;
    }
  }
  h3 {
    text-align: center;
    margin: -15px 0 15px 0;
    font-size: 1.5rem;
  }
`;
