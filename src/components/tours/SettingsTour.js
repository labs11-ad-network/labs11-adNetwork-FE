import React from "react";
import Tour from "reactour";
import Button from "@material-ui/core/Button";

class SettingTour extends React.Component {
  state = {
    isSettingsOpen: true,
    settingSteps: [
      {
        selector: "[data-btn='conversion-snippet']",
        content:
          "This is your code snippet that you can paste in your site to track analytics",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='amount_due-card']",
        content:
          "You can pay your balance here, if you don't have a payment method on file, you can add one here.",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='edit_profile-tab]",
        content: "You can edit your profile here",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='view_payments-tab']",
        content: "You can view a list of payments here",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      }
    ]
  };

  closeSettingsTour = () => {
    this.setState({ isSettingsOpen: false });
  };
  render() {
    return (
      <Tour
        steps={this.state.settingSteps}
        isOpen={this.state.isSettingsOpen}
        onRequestClose={this.closeSettingsTour}
        rounded={5}
        maskClassName="mask"
        className="helper"
      />
    );
  }
}

export default SettingTour;
