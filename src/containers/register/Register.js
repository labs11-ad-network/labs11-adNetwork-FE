import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../../store/actions/authAction.js';
import { RegisterForm } from '../../components/authentication/forms';

class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    acct_type: "admin"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register = e => {
    const { oAuthClicked, fbData } = this.props

    if (oAuthClicked) {
      this.state = {
        first_name: fbData.first_name,
        last_name: fbData.last_name,
        email: fbData.email,
        phone: "",
        acct_type: "",
        oauth_token: fbData.oauth_token,
        image_url: fbData.image_url,
      }
    }

    e.preventDefault();


    this.props.registerUser(this.state);

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      acctType: "",
    })
  };

  render() {

    return (
      <RegisterForm
        userInfo={this.state}
        handleChange={this.handleChange}
        register={this.register}
      />
    );
  }
}


const mapStateToProps = state => ({
  fbData: state.authReducer.fbData,
  oAuthClicked: state.authReducer.oAuthClicked,
});


export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);