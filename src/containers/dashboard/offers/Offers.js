import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getUserOffers,
  createOffer
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
    this.props.getUserOffers();
  }

  createOffer = async e => {
    e.preventDefault();

    this.props.createOffer(this.state.offerData);

    this.setState({
      hidden: true,
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

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
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
          offers={this.props.userOffers}
          agreements={this.props.userAgreements}
          toggleModal={this.toggleModal}
        />
        {(this.props.currentUser.acct_type === "advertiser" && this.state.modalIsOpen) && (
          <OfferModal
            offerData={this.state.offerData}
            handleChange={this.handleChange}
            createOffer={this.createOffer}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userOffers: state.offersReducer.userOffers,
  };
};

export default connect(
  mapStateToProps,
  {
    getUserOffers,
    createOffer
  }
)(Offers);
