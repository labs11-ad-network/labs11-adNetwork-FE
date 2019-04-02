import styled from 'styled-components';
import heroWave from '../../assets/hero-wave.png'
import desktopPhone from '../../assets/phone1.png'
import mobilePhone from '../../assets/phone2.png'
export const AppDownloadStyle = styled.div`
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500");
  font-family: "Roboto", sans-serif;
  
/* app background with big wavy blue background */
  .app-download-flex{
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    z-index: 1;
    &:before {
    background: url(${heroWave});
    background-repeat: no-repeat;
    background-position: right center;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    }
  }
  .hero-moc {
    background: url(${desktopPhone});
    background-position: bottom right;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    width: 500px;
    height: 600px;
    vertical-align: middle;
    bottom: 0;
    right: 50px;

  }
  .app-download-item {
    h3 {
      font-size: 4rem;
      font-weight:500;
      max-width:500px;
    }
    p {
      font-size:1.1rem;
      line-height:1.25;
      color: #848484;
      margin: 20px 0;
      max-width:400px;
    }
  }
 /* promo section  three icon column*/
.promo-section {
    border: 1px solid red;
    bottom: 0;
  }
.promo-col {
  border: 1px solid red;
}
.promo-icon {
      background-image: linear-gradient(-45deg, #2b18dd 0%, #1151d3 50%, #1151d3 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      margin-bottom: 10px;
      font-size: 50px;
    }
`

