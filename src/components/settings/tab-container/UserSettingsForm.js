import React, { Component } from "react";
import { connect } from "react-redux";

import { changeUserData } from "../../../store/actions/authAction.js";
import { Form } from "../settingsStyles.js";

class UserSettingsForm extends Component {
  state = {
    userData: {
      name: "",
      email: "",
      image_url: "",
      nickname: "",
      phone: "",
      user_img: ""
    }
  };

  componentDidMount() {
    const { name, email, image_url, nickname, phone } = this.props.currentUser;
    this.setState({
      userData: {
        name,
        email,
        image_url,
        nickname,
        phone
      }
    });
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleFileChange = e => {
    this.setState({
      userData:{
        ...this.state.userData,
      user_img: e.target.files[0]
      }
    })
  }

  changeUserData = e => {
    e.preventDefault();
    this.props.changeUserData(this.state.userData);
  };
  render() {
    const { name, email, image_url, nickname, phone } = this.state.userData;
    return (
      <Form onSubmit={this.changeUserData}>
        <div>
          <label htmlFor="name" />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="email" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="image_url" />
          <input
            type="text"
            placeholder="Image Url"
            name="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
          <label htmlFor="nickname" />
          <input
            type="text"
            placeholder="Nickname"
            name="nickname"
            value={nickname}
            onChange={this.handleChange}
          />
          <label htmlFor="phone" />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          {/* --------------------- image upload --------------------- */}
          <input
            accept="image/*"
            type="file"
            placeholder="Avatar"
            name="user_img"
            multiple
            onChange={this.handleFileChange}
          />
          {/* --------------------- image upload --------------------- */}
          <button type="submit">Save Changes</button>
        </div>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

export default connect(
  mapStateToProps,
  { changeUserData }
)(UserSettingsForm);
