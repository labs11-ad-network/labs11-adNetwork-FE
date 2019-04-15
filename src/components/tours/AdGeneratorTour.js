import React from "react";
import Tour from "reactour";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { changeUserData } from "../../store/actions/authAction.js";
import { TourWelcome } from "./tourStyles.js";

class AdGeneratorTour extends React.Component {
    state = {
      isDashboardOpen: true,
      steps: [
        {
          userType: "advertiser",
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
            lineHeight: 1.5,
          }
        },
        {
          userType: "advertiser",
          content:
            "You can get a detailed report of your analytics by date, simply pick the start and end date and click filter",
          style: {
            fontSize: 15,
            lineHeight: 1.5
          },
          stepInteraction: false,
        },
        {
          userType: "advertiser",
          content: () => {
            return (
              <TourWelcome>
                <h2> Now lets go learn about the settings page</h2>
                <Button
                  color="primary"
                  onClick={() => {
                    this.props.history.push('/dashboard/settings')
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
  
    closeAdGeneratorTour = () => {
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
            onRequestClose={this.closeAdGeneratorTour}
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
  )(AdGeneratorTour);
  