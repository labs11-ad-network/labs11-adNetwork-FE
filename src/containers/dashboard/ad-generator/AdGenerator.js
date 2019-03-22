import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createAd } from '../../../store/actions/adAction.js';
import { getUserOffers } from '../../../store/actions/offersAction.js';
import AdForm from '../../../components/ad-generator/forms/AdForm.js';
import { 
  HorizontalBanner,
  SquareBanner,
  VerticalBanner,
  PlainImage
} from '../../../components/ad-generator/templates';

const AdGeneratorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class AdGenerator extends Component {
  state = {
    productData: {
      offer_id: "",
      headline: "",
      tagline: "",
      message: "",
      cta_button: "",
      destination_url: "",
      back_img: "",
      text_color: "",
      btn_color: "",
      btn_text_color: "",
      size: "square_banner"
    }
  }

  componentDidMount(){
    this.props.getUserOffers();
  }

  createAd = e => {
    e.preventDefault();

    this.props.createAd(this.state.productData)

    this.setState({
      productData: {
        offer_id: "",
        headline: "",
        tagline: "",
        message: "",
        cta_button: "",
        destination_url: "",
        back_img: "",
        text_color: "",
        btn_color: "",
        btn_text_color: "",
        size: "horizontal_banner"
      }
    })
  }

  handleChange = e => {
    this.setState({
      productData:{
        ...this.state.productData,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      this.props.userOffers.length ?
      <AdGeneratorContainer>
        <AdForm
          createAd={this.createAd}
          handleChange={this.handleChange}
          productData={this.state.productData}
          offers={this.props.userOffers}
        />
        {this.state.productData.size.includes('horizontal_banner') ?
          <HorizontalBanner 
            ad={this.state.productData}
          /> :
          this.state.productData.size.includes('vertical_banner') ?
          <VerticalBanner 
            ad={this.state.productData}
          /> :
          this.state.productData.size.includes('square_banner') ?
          <SquareBanner 
            ad={this.state.productData}
          /> :
          <PlainImage 
            ad={this.state.productData}
          />
        }
      </AdGeneratorContainer> :
      <h1>Create an offer before you create an ad.</h1>
    )
  }
}

const mapStateToProps = state => {
  return{
    userOffers: state.offersReducer.userOffers
  }
}

export default connect(
  mapStateToProps,
  {
    createAd,
    getUserOffers
  }
)(AdGenerator)
