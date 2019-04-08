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
        <Header
          login={this.login}
          logout={this.logout}
          history={this.props.history}
        />
        <LandingContentSection />
        <section className="app-download">
          <AppDownload />
        </section>

        <section className="expert-team">
          <ExpertTeam />
        </section>

        <section className="contact">
          <Contact />
        </section>

        <footer>
          <p className="footer-ptag">
            © Lad Network, 2019 All rights reserved.
          </p>

          <div className="status-privacy_conatc">
            <p>Status</p>
            <p>Privacy & Terms</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-socials">
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
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
