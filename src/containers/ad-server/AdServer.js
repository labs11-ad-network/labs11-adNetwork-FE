import React, { Component } from 'react'
import { connect } from 'react-redux';

import { getAd } from '../../store/actions/adAction.js';

import {
  HorizontalBanner,
  SquareBanner,
  VerticalBanner
} from '../../components/ad-generator/templates';

class AdServer extends Component {
  state = {
      ad: {}
  }

  componentDidMount(){
    this.props.getAd(this.props.match.params.id)
  }

  render() {
    return (
      <>
        {this.state.ad &&
          <HorizontalBanner
              ad={this.props.ad}
          />
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
