import React, { Component } from 'react'

import { AdForm } from '../../../components/ad-generator/forms';

export class AdGenerator extends Component {
  state = {
    productData: {
        headline: "",
        tagline: "",
        message: "",
        cta_button: "",
        destination_url: "",
        back_img: ""
    }
  }

  createAd = () => {
      
  }

  handleChange = e => {
    this.setState({
        productData:{
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
      </>
    )
  }
}

export default AdGenerator
