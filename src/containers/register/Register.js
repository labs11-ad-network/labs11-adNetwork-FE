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
    acct_type: "admin",
    oauth_token: "",
    image_url: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { fbData } = this.props
    if (!prevProps.oAuthClicked) {
      this.setState({
        first_name: fbData.first_name,
        last_name: fbData.last_name,
        email: fbData.email,
        phone: "",
        acct_type: "",
        oauth_token: fbData.oauth_token,
        image_url: fbData.image_url,
      });
    }
  }



  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register = e => {
    e.preventDefault();
    console.log('this.state', this.state);
    this.props.registerUser(this.state);

    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      acct_type: "admin",
      oauth_token: "",
      image_url: "",
    })
  };


  render() {
    const { oAuthClicked } = this.props

    return (
      <div>
        <RegisterForm
          oAuthClicked={oAuthClicked}
          userInfo={this.state}
          handleChange={this.handleChange}
          register={this.register}
        />
      </div>
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