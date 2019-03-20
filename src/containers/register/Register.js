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

  register = async e => {
    e.preventDefault();

    this.props.registerUser(this.state);

    this.setState({
      first_name: "",
      last_name: "",
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

export default connect(
  null,
  {
    registerUser
  }
)(Register);