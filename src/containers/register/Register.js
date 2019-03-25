import React, { Component } from "react";
import { connect } from "react-redux";

import { registerUser } from "../../store/actions/authAction.js";
import { RegisterForm } from "../../components/authentication/forms";
import { withRouter } from "react-router-dom";

class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    acct_type: "admin",
    oauth_token: "",
    image_url: ""
  };

  componentDidUpdate(prevProps, prevState) {
    const {
      fbData,
      googleData,
      fbClicked,
      googleClicked,
      location
    } = this.props;
    if (location.pathname === "/register") {
      console.log("------ register ---------");

      if (prevProps.googleClicked !== googleClicked && !fbClicked) {
        this.setState({
          first_name: googleData.first_name,
          last_name: googleData.last_name,
          email: googleData.email,
          phone: this.state.phone,
          acct_type: this.state.acct_type,
          oauth_token: googleData.oauth_token,
          image_url: googleData.image_url
        });
      }
      if (prevProps.fbClicked !== fbClicked && !googleClicked) {
        this.setState((prevState, props) => ({
          first_name: fbData.first_name,
          last_name: fbData.last_name,
          email: fbData.email,
          phone: this.state.phone,
          acct_type: this.state.acct_type,
          oauth_token: fbData.oauth_token,
          image_url: fbData.image_url
        }));
      }
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register = e => {
    e.preventDefault();
    this.props.registerUser(this.state, this.props.history);

    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      acct_type: "admin",
      oauth_token: "",
      image_url: ""
    });
  };

  goToLogin = () => {
    window.location.href = "/login";
  };

  render() {
    const { fbClicked, googleClicked } = this.props;
    return (
      <div>
        <RegisterForm
          goToLogin={this.goToLogin}
          googleClicked={googleClicked}
          fbClicked={fbClicked}
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
  fbClicked: state.authReducer.fbClicked,
  googleClicked: state.authReducer.googleClicked,
  googleData: state.authReducer.googleData
});

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(withRouter(Register));
