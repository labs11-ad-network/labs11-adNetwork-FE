import React, { Component } from 'react'

import AdForm from '../../../components/ad-generator/forms/AdForm.js';
import { HorizontalBanner } from '../../../components/ad-generator/templates';

export class AdGenerator extends Component {
  state = {
    productData: {
        headline: "",
        tagline: "",
        message: "",
        cta_button: "",
        destination_url: "",
        back_img: "",
        size: ""
    }
  }

  createAd = () => {
      
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
      <>
        <AdForm
          createAd={this.createAd}
          handleChange={this.handleChange}
          productData={this.state.productData}
        />
        <HorizontalBanner 
          ad={this.state.productData}
        />
      </>
    )
  }
}

export default AdGenerator
