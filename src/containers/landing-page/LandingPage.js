import React, { PureComponent } from "react";
import { LandingPageStyle } from "../../components/landing-page/LandingPageStyle";
import PropTypes from "prop-types";
import WOW from "wowjs";

import Header from "../../components/landing-page/heading/Header.js";
import ExpertTeam from "../../components/landing-page/ExpertTeam";
import Contact from "../../components/landing-page/Contact";
import LandingContentSection from "../../components/landing-page/LandingContentSection";
import AppDownload from "../../components/landing-page/AppDownload";

class LandingPage extends PureComponent {
  login = () => {
    this.props.auth.login();
  };
  logout = () => {
    this.props.auth.logout();
  };
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <LandingPageStyle>
        {/* <-------- Header Component styles ---------------> */}
        <Header
          login={this.login}
          logout={this.logout}
          history={this.props.history}
        />
        {/* <-------- LandingContentSection section ---------------> */}
        <LandingContentSection />
        {/* <-------- app-download section ---------------> */}
        <section className="app-download">
          <AppDownload />
        </section>
        {/* <-------- expert-team section ---------------> */}
        <section className="expert-team">
          <ExpertTeam />
        </section>
        {/* <-------- Contact section ---------------> */}
        <section className="contact">
          <Contact />
        </section>
        {/* <-------- footer section ---------------> */}
        <footer>
          <div className="container footer-wrapper">
            <div className="footer-lad">
              <p className="footer-ptag">
                © Lad Network, 2019 All rights reserved.
              </p>
            </div>

            <div className="status-privacy_contact footer-flex">
              <p>Status</p>
              <p>Privacy & Terms</p>
              <p>Contact Us</p>
            </div>

            <div className="footer-socials footer-flex">
              <a href="/#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="/#">
                <i className="fab fa-twitter" />
              </a>
              <a href="/#">
                <i className="fab fa-youtube" />
              </a>
              <a href="/#">
                <i className="fab fa-google-plus-g" />
              </a>
            </div>
          </div>
        </footer>
      </LandingPageStyle>
    );
  }
}

LandingPage.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object
};

export default LandingPage;
