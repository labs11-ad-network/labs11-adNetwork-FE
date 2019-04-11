import React from "react";
import Tour from "reactour";
import Button from "@material-ui/core/Button";

class SettingTour extends React.Component {
  state = {
    isOffersOpen: true,
    offerSteps: [
      {
        selector: "[data-btn='create_offer-button']",
        content:
          "This is where you can create your offer and choose what you want to pay site owners to bring you leads",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      }
    ]
  };

  closeOffersTour = () => {
    this.setState({ isOffersOpen: false });
  };

  render() {
    return (
      <Tour
        steps={this.state.offerSteps}
        isOpen={this.state.isOffersOpen}
        onRequestClose={this.closeOffersTour}
        rounded={5}
        maskClassName="mask"
        className="helper"
      />
    );
  }
}

export default SettingTour;
