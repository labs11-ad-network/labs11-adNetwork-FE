import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import html2canvas from "html2canvas";

import { CreateAdButton } from '../../../components/ad-generator/forms/formStyles.js';
import { createAd } from "../../../store/actions/adAction.js";
import { getOffers } from "../../../store/actions/offersAction.js";
import AdForm from "../../../components/ad-generator/forms/AdForm.js";
import TemplateSelectors from "../../../components/ad-generator/form-components/TemplateSelectors.js";
import Controls from "../../../components/ad-generator/controls/Controls.js";
import AdHoc from "../../../components/ad-generator/AdHoc.js";

const AdGeneratorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .preview-section {
    width: 50%;
    .template-selector {
      display: flex;
      background-color: #ffffff;
      margin: 15px;
      padding: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
      border-radius: 15px;
      justify-content: center;
    }
    .ad-preview {
      display: flex;
      background-color: #ffffff;
      margin: 15px;
      min-height: 670px;
      padding: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
      border-radius: 15px;
      padding: 25px;
      justify-content: center;
      align-items: center;
    }
  }
  .ad-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    margin: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
    border-radius: 15px;
    width: 50%;
  }
`;

export class AdGenerator extends Component {
  state = {
    currentElement: "headline",
    productData: {
      offer_id: "",
      headline_text: "",
      tagline_text: "",
      message_text: "",
      button_text: "",
      destination_url: "",
      file: "",
      size: "square_banner",
      headline: {
        size: "",
        color: "",
        bg_color: "",
        align: "left",
        bold: false,
        italic: false
      },
      tagline: {
        size: "",
        color: "",
        bg_color: "",
        align: "left",
        bold: false,
        italic: false
      },
      message: {
        size: "",
        color: "",
        bg_color: "",
        align: "left",
        bold: false,
        italic: false
      },
      button: {
        size: "",
        color: "",
        bg_color: "",
        align: "left",
        bold: false,
        italic: false
      }
    }
  };

  componentDidMount() {
    this.props.getUserOffers();
  }

  createAd = async e => {
    e.preventDefault();
    const image = await this.generateSnapshot("advertisment");
    await this.props.createAd(
      {
        offer_id: this.state.productData.offer_id,
        image,
        name: this.state.productData.headline_text,
        size: this.state.productData.size,
        destination_url: this.state.productData.destination_url
      },
      this.props
    );

    this.setState({
      currentElement: "headline",
      productData: {
        offer_id: "",
        headline_text: "",
        tagline_text: "",
        message_text: "",
        button_text: "",
        destination_url: "",
        file: "",
        size: "square_banner",
        headline: {
          size: "",
          color: "",
          bg_color: "",
          align: "left",
          bold: false,
          italic: false
        },
        tagline: {
          size: "",
          color: "",
          bg_color: "",
          align: "left",
          bold: false,
          italic: false
        },
        message: {
          size: "",
          color: "",
          bg_color: "",
          align: "left",
          bold: false,
          italic: false
        },
        button: {
          size: "",
          color: "",
          bg_color: "",
          align: "left",
          bold: false,
          italic: false
        }
      }
    });
  };

  handleChange = e => {
    this.setState({
      productData: {
        ...this.state.productData,
        [e.target.name]: e.target.value
      }
    });
  };

  customizeElement = e => {
    this.setState({
      ...this.state,
      productData: {
        ...this.state.productData,
        [this.state.currentElement]: {
          ...this.state.productData[this.state.currentElement],
          [e.target.name]: e.target.value
        }
      }
    });
  };

  customizeElementSize = (e, value) => {
    this.setState({
      ...this.state,
      productData: {
        ...this.state.productData,
        [this.state.currentElement]: {
          ...this.state.productData[this.state.currentElement],
          size: value
        }
      }
    });
  };

  toggleElementStyle = e => {
    this.setState({
      ...this.state,
      productData: {
        ...this.state.productData,
        [this.state.currentElement]: {
          ...this.state.productData[this.state.currentElement],
          [e.target.name]: !this.state.productData[this.state.currentElement][
            e.target.name
          ]
        }
      }
    });
  };

  handleElementChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  generateSnapshot = async id => {
    const ad = document.getElementById(id);
    const canvas = await html2canvas(ad);
    return canvas.toDataURL();
  };

  handleFileChange = e => {
    this.setState({
      productData: {
        ...this.state.productData,
        file: URL.createObjectURL(e.target.files[0])
      }
    });
  };

  render() {
    return this.props.userOffers.length ? (
      <AdGeneratorContainer>
        <div className="ad-form">
          <AdForm
            handleChange={this.handleChange}
            handleElementChange={this.handleElementChange}
            handleTextChange={this.handleTextChange}
            handleFileChange={this.handleFileChange}
            productData={this.state.productData}
            offers={this.props.offers}
            selected={this.state.currentElement}
          />
          <Controls
            customizeElement={this.customizeElement}
            toggleElementStyle={this.toggleElementStyle}
            customizeElementSize={this.customizeElementSize}
            sizeValue={this.state.productData[this.state.currentElement].size}
          />
        </div>
        <div className="preview-section">
          <div className="template-selector">
            <TemplateSelectors handleChange={this.handleChange} />
          </div>
          <div className="ad-preview">
            <div id="advertisment">
              <AdHoc ad={this.state.productData} />
            </div>
          </div>
          <CreateAdButton onClick={this.createAd}>
            Create Ad
          </CreateAdButton>
        </div>
      </AdGeneratorContainer>
    ) : (
      <h1>Create an offer before you create an ad.</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    offers: state.offersReducer.offers
  };
};

export default connect(
  mapStateToProps,
  {
    createAd,
    getOffers
  }
)(AdGenerator);
