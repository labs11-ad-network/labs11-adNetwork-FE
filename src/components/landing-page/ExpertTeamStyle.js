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
      margin: 5px 0 25px 0;
    }
  }

  /* team style ( Card ) */
  .team-card {
    width: 95%;
    margin: 0 auto;
  }

  /* GLOBAL */
  .border {
    border: 1px solid #f6f6f6;
    border-radius: 5px;
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
    margin: 20px 0;
  }
`;
