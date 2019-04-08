import React, { PureComponent, Suspense } from "react";
import { LandingPageStyle } from "../../components/landing-page/LandingPageStyle";
import PropTypes from "prop-types";
import WOW from "wowjs";

import Header from "../../components/landing-page/heading/Header.js";
import AppDownload from "../../components/landing-page/AppDownload.js";
import ExpertTeam from "../../components/landing-page/ExpertTeam";
import Contact from "../../components/landing-page/Contact";
import Callback from "../auth-zero/Callback/Callback";
import LandingContentSection from "../../components/landing-page/LandingContentSection";

//  <-----------------Lazy loaded Components -------------->
// const LandingContentSection = React.lazy(() => import)

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
        {/* <Suspense fallback={<Callback />}>
        </Suspense> */}

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
          <p className="footer-ptag">Copyright © 2019 All Rights Reserved.</p>
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
