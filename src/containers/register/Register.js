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
    const { fbData } = this.props

    console.log('fbData', fbData);

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
  fbData: state.authReducer.fbData
});


export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);