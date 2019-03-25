import React, { Component } from 'react'

import ProfileCard from '../../../components/settings/ProfileCard/ProfileCard.js';

class Settings extends Component {
  render() {
    return (
      <div>
        <ProfileCard currentUser={this.props.currentUser}/>
      </div>
    )
  }
}

export default Settings
