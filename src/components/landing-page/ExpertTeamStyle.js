import styled from "styled-components";

export const ExpertTeamStyle = styled.div`
  margin: 300px 0;
  /* team-content */

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
`;
