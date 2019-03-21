import React, { Component } from 'react';

import { connect } from 'react-redux'
import { facebookUserData, googleUserData } from '../../store/actions/authAction'

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Oauth extends Component {
  responseGoogle = (res) => {
    console.log("-- google --", res);
    const user = {
      first_name: res.profileObj.givenName,
      last_name: res.profileObj.familyName,
      email: res.profileObj.email,
      phone: "",
      acct_type: "",
      oauth_token: res.accessToken,
      image_url: res.profileObj.imageUrl,
    }
    this.props.googleUserData(user)
  }

  responseFacebook = (res) => {
    // console.log('--- facebook ---- ', res);
    const user = {
      first_name: res.name.split(" ")[0],
      last_name: res.name.split(" ")[1],
      email: res.email,
      phone: "",
      acct_type: "",
      oauth_token: res.accessToken,
      image_url: res.picture.data.url,
    }
    this.props.facebookUserData(user)
  }

  componentClicked = () => {
    console.log("clicked");
  }

  render() {
    return (
      <React.Fragment>
        <FacebookLogin
          appId="2303023946606812"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
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
  { facebookUserData, googleUserData }
)(Oauth);

