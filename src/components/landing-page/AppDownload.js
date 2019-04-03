import React, { Component } from 'react';
import { AppDownloadStyle } from './AppDownloadStyle'

import appStore from '../../assets/appstore.png'
import googlePlay from '../../assets/playstore.png'
import phoneTesting from '../../assets/phone-img.png'
import AppScreenshotCarousel from './AppScreenshotCarousel';





class AppDownload extends Component {
  render() {
    const options = {
      items: 1,
      nav: true,
      rewind: true,
      autoplay: true
    };
    return (
      <>
        <AppDownloadStyle>
          <section className="app-download-flex =">
            <div className="container">
              <div className="app-download-item">
                <p>#Lad Download </p>
                <h3>The Best Lad Network</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <img src={appStore} alt="app store" className="app-store-img" />
                <img src={googlePlay} alt="google play" className="app-store-img" />
              </div>

              <div className="hero-moc">
                <img className="lad-phone-image" src={phoneTesting} alt="test" />
              </div>
            </div>
          </section>
          <section className="promo-section">
            <div className="promo-row container">


              <div className="promo-col">
                <i className="fas fa-shield-alt promo-icon"></i>
                <h2>Highly Secured</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae perferendis ipsum perspiciatis.</p>
              </div>

              <div className="promo-col">
                <i className="fas fa-layer-group promo-icon"></i> <h2>Highly Secured</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae perferendis ipsum perspiciatis</p>
              </div>

              <div className="promo-col">
                <i className="fas fa-chart-bar promo-icon"></i>   <h2>Highly Secured</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam recusandae perferendis ipsum perspiciatis</p>
              </div>

            </div>
          </section>
          <section className="work-content-section padding bg-gray">
            <div className="container">

              <div className="work-content-row">

                <div className="work-content-col work-content-col-first_child">
                  <div className="content-mockups">
                    <div className="mockup-back">
                    </div>
                    <div className="mockup-front">
                    </div>
                  </div>
                </div>


                <div className="work-content-col work-content-second_child">
                  <h2 className="main-title">How does this App Work?</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                    Porro, fugit?</p>

                  <div className="work-content-lists">

                    <div className="work-list-item">
                      <i className='main-icon-style'>O</i>
                      <div className="work-list-content">
                        <h3 className="main-heading-three">Lorem Ipsum Dolor</h3>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Voluptates, rerum ipsum!     </p>
                      </div>
                    </div>
                    <div className="work-list-item">
                      <i className='main-icon-style'>O</i>
                      <div className="work-list-content">
                        <h3 className="main-heading-three">Lorem Ipsum Dolor</h3>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Voluptates, rerum ipsum!     </p>
                      </div>
                    </div>
                    <div className="work-list-item">
                      <i className='main-icon-style'>O</i>
                      <div className="work-list-content">
                        <h3 className="main-heading-three">Lorem Ipsum Dolor</h3>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Voluptates, rerum ipsum!     </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </section>1

          <section className="feature-section">
            <div className="container">
              <h2 className="main-title">Advanced Features</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing  elit. <br /> Dicta, reprehenderit?</p>
              <div className="feature-row">

                <div className="feature-col">
                  <i className='main-icon-style feature-icon '>O</i>
                  <h3 className="main-heading-three">Powerfull System</h3>
                  <p>Lorem ipsum dolor sit amet adipisicing of more of sedis do more eiusmod tempor incididunt.</p>
                </div>
                <div className="feature-col">
                  <i className='main-icon-style feature-icon '>O</i>
                  <h3 className="main-heading-three">Powerfull System</h3>
                  <p>Lorem ipsum dolor sit amet adipisicing of more of sedis do more eiusmod tempor incididunt.</p>
                </div>
                <div className="feature-col">
                  <i className='main-icon-style feature-icon '>O</i>
                  <h3 className="main-heading-three">Powerfull System</h3>
                  <p>Lorem ipsum dolor sit amet adipisicing of more of sedis do more eiusmod tempor incididunt.</p>
                </div>
                <div className="feature-col">
                  <i className='main-icon-style feature-icon '>O</i>
                  <h3 className="main-heading-three">Powerfull System</h3>
                  <p>Lorem ipsum dolor sit amet adipisicing of more of sedis do more eiusmod tempor incididunt.</p>
                </div>
                <div className="feature-col">
                  <i className='main-icon-style feature-icon '>O</i>
                  <h3 className="main-heading-three">Powerfull System</h3>
                  <p>Lorem ipsum dolor sit amet adipisicing of more of sedis do more eiusmod tempor incididunt.</p>
                </div>
                <div className="feature-col">
                  <i className='main-icon-style feature-icon '>O</i>
                  <h3 className="main-heading-three">Powerfull System</h3>
                  <p>Lorem ipsum dolor sit amet adipisicing of more of sedis do more eiusmod tempor incididunt.</p>
                </div>

              </div>
            </div>

          </section>

          <section className="screenshot-section padding bg-gray">
            <div className="swiper-container swiper-container-horizontal container">
              <h2 className="main-title">Advanced Features</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing  elit. <br /> Dicta, reprehenderit?</p>


              <div className="mobile-mock">
                <div className="screen"></div>
                <div className="circle"></div>
              </div>

              <div className="swiper-wrapper-flex">
                <AppScreenshotCarousel />
                {/* <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={screenshot1} alt="screenshot" />
                  </div>
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={screenshot2} alt="screenshot" />
                  </div>
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={screenshot3} alt="screenshot" />
                  </div>
                </div> */}


              </div>

            </div>
          </section>


        </AppDownloadStyle>

      </>
    );
  }
}

export default AppDownload;