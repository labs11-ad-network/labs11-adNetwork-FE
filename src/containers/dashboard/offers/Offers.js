import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUserOffers } from '../../../store/actions/offersAction.js'

export class Offers extends Component {
  state = {
    offers: []
  }

  componentDidMount(){
    this.props.getUserOffers();
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(
  null,
  {
    getUserOffers
  }
)(Offers)