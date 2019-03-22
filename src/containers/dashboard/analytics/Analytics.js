import React, { Component } from 'react'

class Analytics extends Component {
  render() {
    return (
      <div>
        <h1>{Object.entries(this.props.currentOffer).length && this.props.currentOffer}</h1>
      </div>
    )
  }
}

export default Analytics
