import React, { Component } from 'react'
import { connect } from 'react-redux';
import loading from '../../assets/loading.svg';

import { connectCustomer } from '../../store/actions/stripeAction.js';

export class StripeCallback extends Component {
  componentDidMount(){
    const urlParams = new URLSearchParams(window.location.search);
    this.props.connectCustomer(urlParams.get("code"))
  }

  render() {
    const style = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    }

    return (
      <div style={style}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default connect(
    null,
    {
        connectCustomer
    }
)(StripeCallback);
