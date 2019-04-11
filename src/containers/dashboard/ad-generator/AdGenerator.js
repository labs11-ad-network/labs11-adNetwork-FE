import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";

import { AdGeneratorContainer, LeftSection, RightSection, CreateAdButton, NoOffersContent } from "./containerStyles.js";
import { createAd } from "../../../store/actions/adAction.js";
import { getOffers } from "../../../store/actions/offersAction.js";
import AdForm from "../../../components/ad-generator/forms/AdForm.js";
import TemplateSelectors from "../../../components/ad-generator/form-components/TemplateSelectors.js";
import Controls from "../../../components/ad-generator/controls/Controls.js";
import AdHoc from "../../../components/ad-generator/AdHoc.js";

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
    this.props.getOffers();
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

    const { offers } = this.props;
    const { productData, currentElement } = this.state; 

    return this.props.offers.length ? (
      <AdGeneratorContainer>
        <LeftSection>
          <AdForm
            handleChange={this.handleChange}
            handleElementChange={this.handleElementChange}
            handleTextChange={this.handleTextChange}
            handleFileChange={this.handleFileChange}
            productData={productData}
            offers={offers}
            selected={currentElement}
          />
          <Controls
            customizeElement={this.customizeElement}
            toggleElementStyle={this.toggleElementStyle}
            customizeElementSize={this.customizeElementSize}
            sizeValue={productData[currentElement].size}
          />
        </LeftSection>
        <RightSection>
          <div className="template-selector">
            <TemplateSelectors handleChange={this.handleChange} />
          </div>
          <div className="ad-preview">
            <div id="advertisment">
              <AdHoc ad={productData} />
            </div>
          </div>
          <CreateAdButton onClick={this.createAd}>
            Create Ad
          </CreateAdButton>
        </RightSection>
      </AdGeneratorContainer>
    ) : (
      <NoOffersContent>
        <h1>You don't have any offers to attach the advertisement to.</h1>
        <Link to="/dashboard/offers">Create an Offer</Link>
      </NoOffersContent>
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
