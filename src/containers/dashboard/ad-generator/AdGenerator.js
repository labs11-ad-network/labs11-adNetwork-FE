import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";

import {
  AdGeneratorContainer,
  LeftSection,
  RightSection,
  CreateAdButton,
  WidthNotSupported,
  NoOffersContent
} from "./containerStyles.js";
import { createAd } from "../../../store/actions/adAction.js";
import { getOffers } from "../../../store/actions/offersAction.js";
import { changeUserData } from "../../../store/actions/authAction.js";
import AdForm from "../../../components/ad-generator/forms/AdForm.js";
import { TemplateButtons, TemplateSelect } from "../../../components/ad-generator/form-components/TemplateSelectors.js";
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
      fileObject: "",
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

    let image;

    if (this.state.productData.size.includes("plain")) {
      image = this.state.productData.fileObject;
    } else {
      image = await this.generateSnapshot("advertisment");
    }

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
        fileObject: "",
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

  customizeElement = (e, name, value) => {
    e.stopPropagation();
    this.setState({
      ...this.state,
      productData: {
        ...this.state.productData,
        [this.state.currentElement]: {
          ...this.state.productData[this.state.currentElement],
          [e.target.name || name]: e.target.value || value
        }
      }
    });
  };

  toggleElementStyle = (e, name) => {
    this.setState({
      ...this.state,
      productData: {
        ...this.state.productData,
        [this.state.currentElement]: {
          ...this.state.productData[this.state.currentElement],
          [e.target.name || name]: !this.state.productData[this.state.currentElement][e.target.name || name]
        }
      }
    });
  };

  handleElementChange = (e, name, value) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name || name]: e.target.value || value
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
        file: URL.createObjectURL(e.target.files[0]),
        fileObject: e.target.files[0]
      }
    });
  };

  render() {
    const { offers, changeUserData, currentUser } = this.props;
    const { productData, currentElement } = this.state;

    return offers.length ? (
      <>
        <AdGeneratorContainer>
          <LeftSection>
            <div className="form">
              {/* ------------------------------ Template Selectors ------------------------------ */}
              <div className="template-selectors">
                <h1>Select Size</h1>
                <div className="template-buttons">
                  <TemplateButtons
                    handleChange={this.handleChange}
                    selected={productData.size}
                  />
                </div>
                <div className="template-select">
                  <TemplateSelect
                    size={productData.size}
                    handleChange={this.handleChange}
                  />
                </div>
              </div>
              {/* ------------------------------ Customization Form ------------------------------ */}              
              <div>
                <h1>Customize Your Ad</h1>
                <AdForm
                  handleChange={this.handleChange}
                  handleElementChange={this.handleElementChange}
                  handleFileChange={this.handleFileChange}
                  productData={productData}
                  offers={offers}
                  selected={currentElement}
                />
              </div>
            </div>
            {/* ------------------------------ Create Button Desktop ------------------------------ */}
            <CreateAdButton onClick={this.createAd} className="desktop-create-btn" >
              Create Ad
            </CreateAdButton>
          </LeftSection>
          <RightSection>
            {/* ------------------------------ Ad Preview ------------------------------ */}
            <div className="ad-preview">
              <div />
              <div className="ad-container">
                <div id="advertisment" data-btn='advertisement'>
                  <AdHoc
                    ad={productData}
                    handleElementChange={this.handleElementChange}
                    selected={currentElement}
                  />
                </div>
              </div>
              {/* ------------------------------ Customization Controls ------------------------------ */}
              <div className="controls">
                <Controls
                  customizeElement={this.customizeElement}
                  toggleElementStyle={this.toggleElementStyle}
                  sizeValue={productData[currentElement].size}
                  changeUserData={changeUserData}
                  currentUser={currentUser}
                />
              </div>
            </div>
            {/* ------------------------------ Create Button Mobile ------------------------------ */}
            <CreateAdButton onClick={this.createAd} className="tablet-create-btn">
              Create Ad
            </CreateAdButton>
          </RightSection>
        </AdGeneratorContainer>
        {/* ------------------------------ Message for Unsupported Widths ------------------------------ */}
        <WidthNotSupported>
          <h1>
            Your device width is not supported for our advertisement creator.
            Try to go into horizontal mode otherwise move to a bigger device.
          </h1>
          <Link to="/dashboard">Back to Dashboard</Link>
        </WidthNotSupported>
      </>
    ) : (
      /* ------------------------------ Message when user has no offers ------------------------------ */
      <NoOffersContent>
        <h1>You don't have any offers to attach the advertisement to.</h1>
        <Link to="/dashboard/offers">Create an Offer</Link>
      </NoOffersContent>
    );
  }
}

const mapStateToProps = state => {
  return {
    offers: state.offersReducer.offers,
    currentUser: state.authReducer.currentUser
  };
};

export default connect(
  mapStateToProps,
  {
    createAd,
    getOffers,
    changeUserData
  }
)(AdGenerator);
