import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getOfferAnalytics } from '../../../store/actions/analyticsAction.js';

class Analytics extends Component {
  componentDidMount(){
    this.props.getOfferAnalytics(this.props.currentOffer)
  }

  render() {
    return (
      <div>
        <h1>{Object.entries(this.props.currentOffer).length && this.props.currentOffer}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    offerAnalytics: state.analyticsReducer.offerAnalytics
  }
}

export default connect(
  mapStateToProps,
  {
    getOfferAnalytics
  }
)(Analytics);
