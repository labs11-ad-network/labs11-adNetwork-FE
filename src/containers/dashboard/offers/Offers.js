import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getOffers,
  createOffer,
  updateOffer
} from "../../../store/actions/offersAction.js";
import { getUserData } from "../../../store/actions/authAction.js";
import OffersList from "../../../components/offers/OffersList.js";
import OfferModal from "../../../components/offers/OfferModal.js";

class Offers extends Component {
  state = {
    modalIsOpen: false,
    offerData: {
      budget: "",
      price_per_click: "",
      price_per_impression: "",
      name: "",
      description: "",
      category: "",
      currency: "",
      status: true
    }
  };

  componentDidMount() {
    this.props.getOffers();
    this.props.getUserData();
  }

  createOffer = async e => {
    e.preventDefault();

    this.props.createOffer(this.state.offerData);

    this.setState({
      modalIsOpen: false,
      offerData: {
        budget: "",
        price_per_click: "",
        price_per_impression: "",
        name: "",
        description: "",
        category: "",
        currency: "",
        status: true
      }
    });
  };

  updateOffer = async e => {
    e.preventDefault();

    this.props.updateOffer(this.state.offerData);

    this.setState({
      modalIsOpen: false,
      offerData: {
        budget: "",
        price_per_click: "",
        price_per_impression: "",
        name: "",
        description: "",
        category: "",
        currency: "",
        status: true
      }
    });
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })

    this.props.isUpdatingOffer && this.setState({
      offerData: this.props.updatingOffer
    })
  }

  handleChange = e => {
    this.setState({
      offerData: {
        ...this.state.offerData,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { offers, userAgreements, isUpdatingOffer, currentUser } = this.props;

    const { modalIsOpen, offerData } = this.state;

    return (
      <div>
        {/* ------------------------------ Offer List Component ------------------------------ */}
        <OffersList
          offers={offers}
          agreements={userAgreements}
          toggleModal={this.toggleModal}
        />
        {/* ------------------------------ Create Offer Modal Component ------------------------------ */}
        {(currentUser.acct_type === "advertiser" && modalIsOpen) && (
          <OfferModal
            offerData={offerData}
            handleChange={this.handleChange}
            createOffer={this.createOffer}
            updateOffer={this.updateOffer}
            toggleModal={this.toggleModal}
            isUpdatingOffer={isUpdatingOffer}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.authReducer.currentUser,
    offers: state.offersReducer.offers,
    isUpdatingOffer: state.offersReducer.isUpdatingOffer,
    updatingOffer: state.offersReducer.updatingOffer
  };
};

export default connect(
  mapStateToProps,
  {
    getOffers,
    createOffer,
    updateOffer,
    getUserData
  }
)(Offers);
