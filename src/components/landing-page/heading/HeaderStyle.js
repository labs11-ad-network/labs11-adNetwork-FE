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
  padding: 10px 0 315px 0;




  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  /* --------------- Hero Content --------------- */
  .hero-content h1 {
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.33;
    color: #fff;
    text-align: center;
    margin: 0 auto 30px auto;
  
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
  /* ---------------  phone & Bird style --------------- */
  .container_illustration {
    position: relative;
    .illustration {
    position: absolute;
    left: 50%;
    top: 179%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    z-index: 1;
    max-width: 100%;
    width: 627px;
}
    }
    .bird-wrapper {
     display: flex;
    justify-content: center;
    z-index:2;
      .piio_float_left {
        margin: 0 35px 0 0;
      }
    }
  }

  /* --------------- nav ----------------- */
  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: top 0.6s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    box-shadow: 0 0 15px rgba(0,0,0,.05);
    -moz-box-shadow: 0 0 15px rgba(0,0,0,.05);
    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.05);
    color:#fff;
    border: 1px solid red;
    background:inherit;
    padding: 13px 0;
    a {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
  .nav-styling {
    background:red ;
  }
  .navbar--hidden {
    top: -100px;
 }

  /* ---------------global button --------------- */
  .button{
    max-width:80%;
    margin: 0 auto;
  }
  .hero-content .btn_blue {
    max-width:100%;
    background:red;
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
    &::hover {
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
    height: 105px;
    position: absolute;
    bottom: -2px;
    background: url(${borderBottom}) repeat top;
    background-size: 1440px auto;
    margin-bottom: -20px;
  }
`;
