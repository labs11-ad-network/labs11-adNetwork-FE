import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import history from '../history';

export default class Auth {
  accessToken;
  idToken;
  expiresAt;
  userProfile;
  tokenRenewalTimeout;


  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getExpiryDate = this.getExpiryDate.bind(this);
    this.scheduleRenewal();
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace('/dashboard');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }



  getAccessToken() {
    return this.accessToken;
  }
  getIdToken() {
    return this.idToken;
  }
  setSession(authResult) {

    // Set the time that the access token will expire at
    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    // schedule a token renewal
    this.scheduleRenewal();

    // navigate to the home route
    history.replace('/dashboard');
  }

  renewSession() {
    // this.auth0.checkSession({}, (err, authResult) => {
    //   if (authResult && authResult.accessToken && authResult.idToken) {
    //     this.setSession(authResult);
    //   } else if (err) {
    //     this.logout();
    //     console.log(err);
    //     alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
    //   }
    // });
    this.auth0.checkSession({},
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          this.localLogin(result);
        }
      }
    );
  }

  localLogin = (authResult) => {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    this.expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.scheduleRenewal();
  }










  getProfile(cb) {
    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove user profile
    this.userProfile = null;

    // Clear token renewal
    clearTimeout(this.tokenRenewalTimeout);

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }

  scheduleRenewal() {

    let expiresAt = this.expiresAt;
    const timeout = expiresAt - Date.now();
    if (timeout > 0) {
      this.tokenRenewalTimeout = setTimeout(() => {
        this.renewSession();
      }, timeout);
    }
  }

  getExpiryDate() {
    return JSON.stringify(new Date(this.expiresAt));
  }
}
