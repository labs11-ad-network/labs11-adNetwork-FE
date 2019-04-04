import styled from "styled-components";

export const ExpertTeamStyle = styled.div`
  .owl-dots {
    width: 100%;
    float: left;
    text-align: center;
    margin-top: 70px;
  }
  .owl-carousel button.owl-dot {
    background: 0 0;
    color: inherit;
    border: none;
    padding: 0 !important;
    font: inherit;
  }
  .owl-dots .owl-dot.active span {
    width: 28px;
    background: #005bea !important;
  }
  .owl-dots .owl-dot span {
    width: 20px;
    height: 10px;
    border-radius: 5px;
    background: #c2c2c2;
    display: inline-block;
    margin: 0 6px;
  }
`;
