import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../components/landing-page/navigation/Navigation.js';
import Header from '../../components/landing-page/heading/Header.js';

class LandingPage extends Component {
  componentDidMount() {
    const {
      auth: { renewSession },
    } = this.props;
    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { history, auth } = this.props;
    console.log('history', history);

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

LandingPage.propTypes = {
  history: PropTypes.object,
  auth: PropTypes.object,
};

export default LandingPage;
