import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getOffers,
  createOffer,
  updateOffer
} from "../../../store/actions/offersAction.js";
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
    return (
      <div>
        <OffersList
          offers={this.props.offers}
          agreements={this.props.userAgreements}
          toggleModal={this.toggleModal}
        />
        {(this.props.currentUser.acct_type === "advertiser" && this.state.modalIsOpen) && (
          <OfferModal
            offerData={this.state.offerData}
            handleChange={this.handleChange}
            createOffer={this.createOffer}
            updateOffer={this.updateOffer}
            toggleModal={this.toggleModal}
            isUpdatingOffer={this.props.isUpdatingOffer}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
    updateOffer
  }
)(Offers);
