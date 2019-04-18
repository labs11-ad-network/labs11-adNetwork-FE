import React, { Component } from "react";
import { connect } from "react-redux";

import { changeUserData } from "../../../../store/actions/authAction.js";
import { Form, ToggleTour } from "../../settingsStyles.js";

class UserSettingsForm extends Component {
  state = {
    userData: {}
  };
  
  componentDidMount() {
    this.setState({
      userData: this.props.currentUser
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        userData: this.props.currentUser
      });
    }
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
      userData: {
        ...this.state.userData,
        user_img: e.target.files[0]
      }
    });
  };

  submitChanges = e => {
    e.preventDefault();
    this.props.changeUserData({
      ...this.props.currentUser,
      ...this.state.userData
    });
  };

  render() {
    const { name, nickname, phone } = this.state.userData;
    const { history, currentUser, changeUserData } = this.props;

    return (
      <>
        <Form onSubmit={this.submitChanges}>
          <div>
            {/* ------------------------------ Full Name Input ------------------------------ */} 
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name || ""}
              onChange={this.handleChange}
            />
            {/* ------------------------------ Username Input ------------------------------ */}
            <label htmlFor="nickname">Username</label>
            <input
              type="text"
              placeholder="Nickname"
              name="nickname"
              value={nickname || ""}
              onChange={this.handleChange}
            />
            {/* ------------------------------ Phone Number ------------------------------ */}
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              value={phone || ""}
              onChange={this.handleChange}
            />
            {/* ------------------------------ Image Upload Input ------------------------------ */}
            <label htmlFor="user_img">Profile Picture</label>
            <input
              accept="image/*"
              type="file"
              placeholder="Avatar"
              name="user_img"
              multiple
              onChange={this.handleFileChange}
            />
            {/* ------------------------------ Submit Button ------------------------------ */}
            <button type="submit">Save Changes</button>
          </div>
        </Form>
        {/* ------------------------------ Toggle Tour ------------------------------ */}
        <ToggleTour>
          <button
            onClick={async () => {
              if (!currentUser.show_tour) {
                await history.push("/dashboard");
              }
              changeUserData({ ...currentUser, show_tour: !currentUser.show_tour });
            }}
            data-btn="toggle-tour"
          >
            Toggle Tour
          </button>
        </ToggleTour>
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

export default connect(
  mapStateToProps,
  {
    changeUserData
  }
)(UserSettingsForm);
