import React from "react";
import Tour from "reactour";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import { changeUserData } from "../../store/actions/authAction.js";
import { TourWelcome } from "./tourStyles.js";

class SettingTour extends React.Component {
  state = {
    isOffersOpen: true,
    steps: [
      {
        userType: "both",
        selector: ".first-step",
        content: (props) => {
          return (
            <TourWelcome>
              <h2>Would you like to continue your tour?</h2>
              <div>
                <Button
                  color="primary"
                  onClick={() => {
                    props.goTo(2)
                  }}
                >
                  Yes
                </Button>
                <Button
                  color="primary"
                  onClick={() => {
                    this.props.changeUserData({
                      ...this.props.currentUser,
                      show_tour: false
                    });
                  }}
                >
                  No
                </Button>
              </div>
            </TourWelcome>
          );
        },
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "both",
        selector: "[data-btn='offer-list']",
        content: `${
          this.props.currentUser.acct_type === "affiliate"
            ? "This is where you can accept agreements from advertisers that you would like to display on your website, you can filter the table to see which offers suit you and once its accepted you can view the related ads."
            : "This is where you can view offers once you've created them, you can also enable/disable offers if you no longer want to have them displayed on our affiliates websites (This will send a notification to affiliates stating your offer has been disabled)"
        }`,
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "advertiser",
        selector: "[data-btn='create_offer-button']",
        content:
          "You can create an offer by clicking on this button and filling out the information about your offer/product.",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        },
        stepInteraction: false
      },
      {
        userType: "affiliate",
        selector: "[data-btn='offer-list']",
        content:
          "You can also enable/disable the agreement if you decide you no longer want to display these ads on your website by clicking the little blue switch attached to the table row once the agreement is accepted.",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "both",
        content: () => {
          return (
            <TourWelcome>
              <h2> Now lets go learn about the Settings page</h2>
              <Button
                color="primary"
                onClick={() => {
                  this.props.history.push("/dashboard/settings");
                }}
              >
                Lets Go
              </Button>
            </TourWelcome>
          );
        },
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
        steps={this.state.steps.filter(step => {
          return (
            step.userType.includes("both") ||
            step.userType.includes(this.props.currentUser.acct_type)
          );
        })}
        isOpen={this.state.isOffersOpen}
        onRequestClose={this.closeOffersTour}
        rounded={5}
        maskClassName="mask"
        className="helper"
      />
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

export default connect(
  mapStateToProps,
  {
    changeUserData
  }
)(SettingTour);
