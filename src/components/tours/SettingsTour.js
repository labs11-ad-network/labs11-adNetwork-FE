import React from "react";
import Tour from "reactour";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import { changeUserData } from "../../store/actions/authAction.js";
import { TourWelcome } from "./tourStyles.js";

class SettingTour extends React.Component {
  state = {
    isSettingsOpen: true,
    steps: [
      {
        userType: "both",
        selector: ".first-step",
        content: (props) => {
          return (
            <TourWelcome>
              <h2>Would you like to continue the tour?</h2>
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
        selector: "[data-btn='snippet']",
        content:
          `${this.props.currentUser.acct_type === "affiliate" ?
            "This is your code snippet that you can paste into your site to display advertisements based on the agreements you have accepted" :
            "This is your code snippet that you can paste in your site to track analytics"}`,
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "both",
        selector: "[data-btn='billing-card']",
        content:
          `${this.props.currentUser.acct_type === "affiliate" ?
          "You can get paid the balance you see here here by linking your bank account to stripe and then clicking the button to withdraw funds once you are all linked up." :
          "You can pay your balance here, if you don't have a payment method on file, you can add one here."}`,
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "both",
        selector: "[data-btn='edit_profile-tab']",
        content: "You can edit your profile here.",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "both",
        selector: "[data-btn='view_payments-tab']",
        content: "You can view a list of payments here",
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
              <h1>This is the end of the tour, to finish and stop seeing the tour popups, click the button below.</h1>
              <Button
                color="primary"
                onClick={() => {
                  this.props.changeUserData({
                    ...this.props.currentUser,
                    show_tour: false
                  });
                }}
              >
                Finish Tour
              </Button>
            </TourWelcome>
          );
        },
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
    ]
  };

  closeSettingsTour = () => {
    this.setState({ isSettingsOpen: false });
  };
  render() {
    return (
      <Tour
        steps={
          this.state.steps.filter(step => {
            return ((step.userType.includes("both")) || (step.userType.includes(this.props.currentUser.acct_type)));
          })
        }
        isOpen={this.state.isSettingsOpen}
        onRequestClose={this.closeSettingsTour}
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
  mapStateToProps,{
    changeUserData
  }
)(SettingTour);
