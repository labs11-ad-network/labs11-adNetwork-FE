import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getAd } from '../../store/actions/adAction.js';

import {
  HorizontalBanner,
  SquareBanner,
  VerticalBanner
} from '../../components/ad-generator/templates';

class AdServer extends Component {
  componentDidMount(){
    this.props.getAd(this.props.match.params.id)
  }

  render() {
    return (
      <>
        {this.props.ad &&
        <>
          <HorizontalBanner //this needs to render either a horizontal, square, or vertical banner based on the size of the ad
              ad={this.props.ad}
          />
        </>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return{
    ad: state.adReducer.servedAd
  }
}

export default connect(
   mapStateToProps,
  {
    getAd
  }
)(AdServer)
