import React, { Component } from 'react';


class MainApp extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  renewToken() {
    const { renewSession } = this.props.auth;
    renewSession();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <div >
          <div>
            <div>
              <a onClick={this.goTo.bind(this, 'home')}>Auth0 - React</a>
            </div>
            <button
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </button>
            {!isAuthenticated() &&
              <button
                id="qsLoginBtn"
                onClick={this.login.bind(this)}
              >
                Log In
              </button>}
            {isAuthenticated() &&
              <button
                onClick={this.goTo.bind(this, 'profile')}
              >
                Profile
              </button>}
            {isAuthenticated() &&
              <button
                onClick={this.renewToken.bind(this)}
              >
                Renew Token
              </button>}
            {isAuthenticated() &&
              <button
                id="qsLogoutBtn"
                onClick={this.logout.bind(this)}
              >
                Log Out
              </button>}
          </div>
        </div>
      </div>
    );
  }
}

export default MainApp;
