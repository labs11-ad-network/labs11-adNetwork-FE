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
  padding: 10px 0 380px 0;
  overflow: hidden;

  .container {
    max-width: 1200px;
    width: 95%;
    border: 1px solid red;
    margin: 0 auto;
  }
  .container_illustration {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .container_illustration .big_svg {
    position: absolute;
    top: 400px;
    z-index: 1;
    width: 600px;
    left: -43px;
    top: 699px;
}
  }
  .container_illustration .bg_cloud_window {
    position: absolute;
    top: 1px;
  }

  /* --------------- Bird style --------------- */
  .piio_float_left{
    margin: 0 15px 0 0;
  }
  /* --------------- Hero Content --------------- */
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

  /* --------------- nav ----------------- */
  nav {
    display: flex;
    justify-content: space-between;
    align-items:center;
    
    a {
      text-decoration:none;
      color:#fff;
      text-transform:uppercase;
      font-size:16px;
    }
  }
  /* ---------------global button --------------- */
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
    &:hover {
      background-color: #ffc107;
    }
  }
  /*--------------- bottom wave  ---------------*/
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
