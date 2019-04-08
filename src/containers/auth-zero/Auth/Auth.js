import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";
import history from "../history";
import jwtDecode from "jwt-decode";
import axios from "axios";

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
    responseType: "token id_token",
    scope: "openid profile email offline_access",
    sso: false
  });

  login = () => {
    this.auth0.authorize();
  };
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log({
          authResult
        });
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("access_token", authResult.accessToken);
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
        history.replace("/");
      }
    });
  };
  getAccessToken = () => {
    return this.accessToken;
  };
  getIdToken = () => {
    return this.idToken;
  };

  setSession = authResult => {
    // Set the time that the access token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);

    // schedule a token renewal
    const decoded = jwtDecode(localStorage.id_token && localStorage.id_token);
    const user = {
      name: decoded.name,
      email: decoded.email,
      image_url: decoded.picture,
      nickname: decoded.nickname,
      sub: decoded.sub,
      acct_type: localStorage.getItem("acct_type") || "advertiser"
    };
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.id_token}`
      }
    };

    axios
      .post(`https://lad-network.herokuapp.com/api/auth/register`, user, config)
      .then(res => {
        // console.log('--- hit response -- ', res.data)
      })
      .catch(err => history.replace("/"));
    history.replace("/dashboard");
  };
  logout = () => {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove user profile
    this.userProfile = null;

    // Clear token renewal
    clearTimeout(this.tokenRenewalTimeout);

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");

    // navigate to the home route
    history.replace("/");
  };
}
