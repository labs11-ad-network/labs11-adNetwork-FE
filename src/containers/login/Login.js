import React, { Component } from "react";
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/authAction.js";
import { LoginForm } from "../../components/authentication/forms";
import { ContentContainer, LeftSection } from "./loginStyles.js";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = async e => {
    e.preventDefault();

    this.props.loginUser(this.state, this.props, this.props.history);

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {

    return (
      <ContentContainer>
        <LeftSection />
        <LoginForm
          userInfo={this.state}
          handleChange={this.handleChange}
          login={this.login}
        />
      </ContentContainer>
    );
  }
}

export default connect(
  null,
  {
    loginUser
  }
)(Login);
