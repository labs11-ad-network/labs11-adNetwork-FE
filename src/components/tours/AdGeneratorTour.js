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
          selector: "[data-btn='toggle-ad-tour']",
          content: (props) => {
            return (
              <TourWelcome>
                <h2>Would you like a tour of the Ad Generator? If not you can always re enable it by clicking the help icon here.</h2>
                <div>
                  <Button
                    color="primary"
                    onClick={() => {
                      props.goTo(1)
                    }}
                  >
                    Yes
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => {
                      this.props.changeUserData({
                        ...this.props.currentUser,
                        show_ad_tour: false
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
          content:`This is where you select the size of your advertisement, the sizes marked "plain" support plain images and gifs, the other sizes make use of our robust ad creation tools.`,
          selector: "[data-btn='template-selectors']",
          style: {
            fontSize: 15,
            lineHeight: 1.5
          },
          stepInteraction: false,
        },
        {
          content:`Here you must select one of your active offers which the advertisement will be applied to.`,
          selector: "[data-btn='select-offer']",
          style: {
            fontSize: 15,
            lineHeight: 1.5
          },
          stepInteraction: false,
        },
        {
          content:`With these inputs you can create text fields, buttons, and a background image to customize your advertisement to its full potential.`,
          selector: "[data-btn='ad-form-inputs']",
          style: {
            fontSize: 15,
            lineHeight: 1.5
          },
          stepInteraction: false,
        },
        {
          content:`These controls will allow you to adjust the size, styling, colors, and alignment of the currently selected element.`,
          selector: "[data-btn='ad-controls']",
          style: {
            fontSize: 15,
            lineHeight: 1.5
          },
          stepInteraction: false,
        },
        {
          content:`When you have an element created, you can easily adjust its positioning by dragging and dropping within the bounds of the advertisement. When clicking an element it will become the newly selected element.`,
          selector: "[data-btn='advertisement']",
          style: {
            fontSize: 15,
            lineHeight: 1.5
          },
          stepInteraction: false,
        },
        {
          content:`The selected element will display along side the input its attached to as well as have an outline around it in the preview`,
          selector: "[data-btn='selected-element']",
          style: {
            fontSize: 15,
            lineHeight: 1.5
          },
          stepInteraction: false,
        },
        {
          content: () => {
            return (
              <TourWelcome>
                <h2>This is the end of the Ad Generator tour</h2>
                <Button
                  color="primary"
                  onClick={() => {
                    this.closeAdGeneratorTour();
                  }}
                >
                  Finish
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
            steps={this.state.steps}
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
  