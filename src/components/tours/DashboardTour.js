import React from "react";
import Tour from "reactour";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Logo from "../../assets/256x256.png";

import { changeUserData } from "../../store/actions/authAction.js";
import { TourWelcome } from "./tourStyles.js";

class DashboardTour extends React.Component {
  state = {
    isDashboardOpen: true,
    steps: [
      {
        userType: "both",
        selector: ".first-step",
        content: () => {
          return (
            <TourWelcome>
              <div>
                <img src={Logo} alt=""/>
                <h1>Welcome to the LAD Network</h1>
              </div>
              <Button
                color="primary"
                onClick={() => {
                  this.props.changeUserData({
                    ...this.props.currentUser,
                    show_tour: false
                  });
                }}
              >
                Stop Seeing This
              </Button>
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
        selector: "[data-btn='dashboard-button']",
        content:
          "This is the dashboard where you can find and filter all of your analytics.",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        },
        stepInteraction: false,
      },
      {
        userType: "both",
        selector: "[data-btn='offers-button']",
        content:
          `${this.props.currentUser.acct_type === "affiliate" ? 
          "This is the Offers List page where you can view offers created by advertisers and decide whether you want to accept them and display the ads on your website." : 
          "This is the Offers page where you can create offers and activate/deactivate old ones."
          }`,

        style: {
          fontSize: 15,
          lineHeight: 1.5
        },
        stepInteraction: false,
      },
      {
        userType: "both",
        selector: "[data-btn='settings-button']",
        content:
          `${this.props.currentUser.acct_type === "affiliate" ? 
          "This is the settings page. You can edit your profile, pay and change payment method, as well as get your code snippet to display ads on your website" :
          "This is the settings page. You can edit your profile, pay and change payment method, as well as get your tracking code snippet."
          }`,
        style: {
          fontSize: 15,
          lineHeight: 1.5
        },
        stepInteraction: false,
      },
      {
        userType: "both",
        selector: "[data-btn='user_menu-button']",
        content:
          "This is the user menu. you can logout or navigate to your profile",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "both",
        selector: "[data-btn='notifications_menu-button']",
        content:
          "This is the notifications menu where you can see a list of updates and messages",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "both",
        selector: "[data-btn='offers_dropdown-button']",
        content:
          `${this.props.currentUser.acct_type === "affiliate" ? 
          "This is the agreements dropdown menu where you can see a list of agreements and filter your analytics report by an agreement" :
          "This is the offers dropdown menu where you can see a list of offers and filter your analytics report by an offer"
          }`,
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      },
      {
        userType: "advertiser",
        selector: "[data-btn='create_ad-button']",
        content:
          "When you have an offer created, you can easily go to your ad generator here to create and customize your ad",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        },
        stepInteraction: false,
      },
      {
        userType: "both",
        selector: "[data-btn='report_filter-button']",
        content:
          "You can get a detailed report of your analytics by date, simply pick the start and end date and click filter",
        style: {
          fontSize: 15,
          lineHeight: 1.5
        },
        stepInteraction: false,
      },
      {
        userType: "both",
        content: () => {
          return (
            <>
              <h2> Now lets go learn about the Offers page</h2>
              <Button
                color="primary"
                onClick={() => {
                  this.props.history.push('/dashboard/offers')
                }}
              >
                Lets Go
              </Button>
            </>
          );
        },
        style: {
          fontSize: 15,
          lineHeight: 1.5
        }
      }
    ]
  };

  closeDashboardTour = () => {
    this.setState({ isDashboardOpen: false });
  };

  render() {
    return (
      <>
        <Tour
          steps={
            this.state.steps.filter(step => {
              return ((step.userType.includes("both")) || (step.userType.includes(this.props.currentUser.acct_type)));
            })
          }
          isOpen={this.state.isDashboardOpen}
          onRequestClose={this.closeDashboardTour}
          rounded={4}
          maskClassName="mask"
          className="helper"
        />
      </>
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
)(DashboardTour);
