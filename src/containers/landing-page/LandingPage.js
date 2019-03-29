import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "../../components/landing-page/navigation/Navigation.js";
import Header from "../../components/landing-page/heading/Header.js";
import styled from "styled-components";

const LandingPageStyle = styled.div`
  /* ------------------------ landing-info section ------------------------ */
  .landing-info {
    border: 1px solid red;
    background: #fff;
    padding-bottom: 1000px;
  }
`;

class LandingPage extends Component {
  componentDidMount() {
    const {
      auth: { renewSession }
    } = this.props;
    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { history, auth } = this.props;
    console.log("history", history);

    return (
      <LandingPageStyle>
        {/* <Navigation
          login={() => auth.login()}
          logout={() => auth.logout()}
          history={history}
        /> */}
        <Header />
        <section className="landing-info">
          <div className="ecommerce">
            <h2>testing</h2>
          </div>
        </section>

        <button
          type="button"
          onClick={() => {
            localStorage.setItem("acct_type", "advertiser");
          }}
        >
          Advertiser
        </button>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem("acct_type", "affiliate");
          }}
        >
          Affiliate
        </button>
      </LandingPageStyle>
    );
  }
}

LandingPage.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object
};

export default LandingPage;
