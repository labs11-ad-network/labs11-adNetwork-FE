import React from "react";
import Tour from "reactour";
import Button from "@material-ui/core/Button";

class DashboardTour extends React.Component {
  state = {
    isDashboardOpen: true,
    dashboardSteps: [
      {
        selector: ".first-step",
        content: () => {
          return (
            <>
              <h1>Welcome to the LAD Network</h1>
              <h2>Would you like a tour of the app?</h2>
              <Button color="primary">Yes</Button>
              <Button color="primary">No</Button>
            </>
          );
        },
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='dashboard-button']",
        content:
          "This is the dashboard where you can find and filter all of your analytics.",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='offers-button']",
        content:
          "This is the Offers page where you can create offers and activate/deactivate old ones.",

        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='settings-button']",
        content:
          "This is the settings page. You can edit your profile, pay and change payment method, as well as get your tracking code snippet.",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='user_menu-button']",
        content:
          "This is the user menu. you can logout or navigate to your profile",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='notifications_menu-button']",
        content:
          "This is the notifications menu. you can see a list of updates and messages",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='offers_dropdown-button']",
        content:
          "This is the offers dropdown menu. you can see a list of offers and filter all of your dashboard by an offer",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='create_ad-button']",
        content:
          "When you have an offer created, you can easily go to your ad generator here to create and customize your ad",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        selector: "[data-btn='report_filter-button']",
        content:
          "You can get a detailed report of your analytics by date, simply pick the start and end date and click filter",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      }
      // ...
    ]
  };

  closeDashboardTour = () => {
    this.setState({ isDashboardOpen: false });
  };

  render() {
    return (
      <>
        <Tour
          steps={this.state.dashboardSteps}
          isOpen={this.state.isDashboardOpen}
          onRequestClose={this.closeDashboardTour}
          rounded={5}
          maskClassName="mask"
          className="helper"
        />
      </>
    );
  }
}

export default DashboardTour;
