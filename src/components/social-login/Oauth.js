import React, { Component } from 'react';

import { connect } from 'react-redux'
import { facebookUserData } from '../../store/actions/authAction'

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class oauth extends Component {
  responseGoogle = (res) => {
    console.log("-- google --", res);
    // const user = {
    //   first_name: "",
    //   last_name: "",
    //   email: "",
    //   phone: "",
    //   acct_type: "",
    //   oauth_token: "",
    //   image_url: "",
    // }

  }

  responseFacebook = (res) => {
    console.log('--- facebook ---- ', res);

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
          autoLoad={true}
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

const mapStateToProps = state => ({
  stateName: state.stateName
});


export default connect(
  mapStateToProps,
  { facebookUserData }
)(oauth);