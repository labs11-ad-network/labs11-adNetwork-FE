import React, { Component } from 'react';

import { connect } from 'react-redux'
import { facebookUserData, loginUser, googleUserData } from '../../store/actions/authAction'

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router-dom';

class Oauth extends Component {
  responseGoogle = (res) => {
    console.log("-- google --", res);
    const user = {
      first_name: res.profileObj.givenName,
      last_name: res.profileObj.familyName,
      email: res.profileObj.email,
      phone: "",
      acct_type: "",
      oauth_token: res.googleId,
      image_url: res.profileObj.imageUrl,
    }
    this.props.googleUserData(user)
    if (this.props.location.pathname === "/login") {
      this.props.loginUser({
        email: res.profileObj.email,
        oauth_token: res.googleId,
      }, this.props.history)
    }

  }

  responseFacebook = (res) => {
    console.log('--- facebook ---- ', res);
    const user = {
      first_name: res.name.split(" ")[0],
      last_name: res.name.split(" ")[1],
      email: res.email,
      phone: "",
      acct_type: "",
      oauth_token: res.userID,
      image_url: res.picture.data.url,
    }

    this.props.facebookUserData(user)
    if (this.props.location.pathname === "/login") {
      this.props.loginUser({
        email: res.email,
        oauth_token: res.userID,
      }, this.props.history)
    }
  }


  fbclicked = () => {
    console.log("fbclicked");
  }


  render() {
    return (
      <React.Fragment>
        <FacebookLogin
          appId="2303023946606812"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.fbclicked}
          callback={this.responseFacebook} />

        <GoogleLogin
          clientId="97076790782-9s1eft44733v5tv8pcmukem41fr8ceuq.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </React.Fragment>
    );
  }
}


export default connect(
  null,
  { loginUser, facebookUserData, googleUserData }
)(withRouter(Oauth));

