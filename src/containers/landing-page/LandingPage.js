import React, { Component } from 'react';

import Navigation from '../../components/landing-page/navigation/Navigation.js';
import Header from '../../components/landing-page/heading/Header.js';

class LandingPage extends Component {
  // login = () => {
  //   this.props.auth.login();
  // };

  // logout = () => {
  //   this.props.auth.logout();
  // };

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { history, auth } = this.props;

    return (
      <div>
        <Navigation
          login={() => auth.login()}
          logout={() => auth.logout()}
          history={history}
        />
        <Header />
        <button
          type="button"
          onClick={() => {
            localStorage.setItem('acct_type', 'advertiser');
          }}
        >
          Advertiser
        </button>

        <button
          type="button"
          onClick={() => {
            localStorage.setItem('acct_type', 'affiliate');
          }}
        >
          Affiliate
        </button>
      </div>
    );
  }
}

export default LandingPage;
