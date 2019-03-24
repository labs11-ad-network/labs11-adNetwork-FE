import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "hamzae.auth0.com",
    clientID: "EdBum1KPuo377EbcxcRTLUpwKNDeyYGu",
    redirectUri: "http://localhost:3000/dashboard",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
