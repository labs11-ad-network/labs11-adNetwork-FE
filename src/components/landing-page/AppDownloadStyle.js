import styled from 'styled-components';


import heroWave from '../../assets/hero-wave.png'
import desktopPhone from '../../assets/phone1.png'
import mobilePhone from '../../assets/phone2.png'



export const AppDownloadStyle = styled.div`
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");

  font-family: "Roboto", sans-serif;



/* app background with big wavy blue background Desktop First */

.app-download-flex {
  max-width:1200px;
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
    content: "" ;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
   }
   @media (min-width:940px){
    &:before {
    background-position: right center;
    }
  }
}
  

  .hero-moc {
    display: none;

    @media (min-width:940px){
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
      font-weight:500;
      max-width:200px;

    }
    p {
      margin: 10px 0;
      max-width:300px;

    }

  @media (min-width:940px){
    h3 {
      font-size: 4rem;
      max-width:500px;
    }
    p {
      margin: 20px 0;
      max-width:400px;
    }
  }
}

 .app-store-img {
    height: 37px;
    margin: 9px 15px 0 0;
   @media (min-width:940px){
    height: 52px;
    margin: 9px 15px 0 0;
     }
   }
 

 
 
 
 /* promo section  three icon column*/
.promo-section {
    padding:80px 0;
  }
.promo-row {
  display: flex;
  text-align:center;
}
.promo-col {
  margin-right:60px;
  
  h2 {
    font-size:1.5rem;
    margin: 10px 0 0 0;
  }
  p {
      margin: 20px 0;
      max-width:400px;
    }
}
.promo-icon {
      background-image: linear-gradient(-45deg, #2b18dd 0%, #1151d3 50%, #1151d3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 50px;
    }


/* work content section  */
.work-content-section {
  padding: 100px 0;

}
.work-content-row { 
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.content-mockups {
  position:relative;
  .mockup-back {
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
.work-content-col-first_child{
  max-width: 50%;
  flex: 0 0 50%;
}
.work-content-second_child {
  margin-bottom: 40px;
  flex: 0 0 50%;
  max-width: 50%;
 p {
  font-size: 15px;
    margin-bottom: 15px;
 }
}
.work-content-lists {

  .work-list-item {
  display: flex;
  align-items: center;
    p {
      margin-bottom:35px
    }
  }
}


/* feature section  */
.feature-section {
  margin:100px 0;
  h2 {
    text-align:center;
  }
  p {text-align:center}
}
.feature-row {
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  margin: 30px 0;
}
.feature-col { 
    flex: 0 0 24.333333%;
    max-width: 33.333333%;
    margin: 10px;
    background-color: #eff4ff;
    padding: 55px 30px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    text-align: center;
    &:hover {
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
     transition: all 0.3s ease-in-out;
    }
    .feature-icon {
      margin: 16px auto;
     display: inline-block;
    }
}

/* Screenshot section & white phone */
.swiper-container {
  padding: 3.58rem 0 7rem 0;
    display: flex;
    flex-direction:column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    min-height:50vh;
}

.placeholder-white-iphone {
  position: absolute;
    width: 550px;
    top: 180px;
}

/* swiper inifinite carousel  */

  /* -------------- global ------------------*/
  p {
    line-height:1.35;
    color: #62748a;
    font-size:0.8rem !important;
    @media (min-width: 491px){
      font-size:1.1rem !important;
    }
    @media (min-width: 940px){
      font-size:1.2rem !important;
    }
  }
  
  .bg-gray {
    background-color:#eff4ff;
  }
  .padding {
    padding: 100px 0;
  }
  
  .main-icon-style {
    background-image: linear-gradient(-45deg, #2b18dd 0%, #1151d3 50%, #1151d3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 40px;
    margin-right:30px;
    }

  .main-heading-three {
        font-size:22px;
        margin-bottom: 0;
        font-weight: 400;
        line-height: 1.7;
        color: #333;
        letter-spacing: -0.01em;
  }
  .main-title {
    font-size: 36px;
      color: #333;
      margin: 0 0 10px;
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: -0.04em;
  }
  `



