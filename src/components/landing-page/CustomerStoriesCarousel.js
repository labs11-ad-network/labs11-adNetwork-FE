import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label:
      "San Francisco – Oakland Bay Bridge, United States Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. "
  },
  {
    label:
      "Bird Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. "
  },
  {
    label:
      "Bali, Indonesia Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. "
  },
  {
    label:
      "NeONBRAND Digital Marketing, Las Vegas, United States Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. "
  },
  {
    label:
      "Goč, Serbia Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. "
  }
];

const styles = theme => ({
  root: {
    maxWidth: "100vw",
    flexGrow: 1,
    background: "#F7F9FC"
  },
  message: {
    textAlign: "center",
    fontSize: "1.2rem",
    lineHeight: 1.35,
    maxHeight: 400,
    maxWidth: 500,
    margin: "0 auto"
  },
  customerStoriesContainer: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#F7F9FC"
  },
  mobileStepper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F7F9FC",
    paddingBottom: "25px"
  },
  user: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "20px 0"
  },
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%"
  },
  infopTag: {
    fontSize: "1rem",
    maxWidth: "90%",
    margin: "0 auto",
    textAlign: "center",
    lineHeight: 1.25
  },
  heading4: {
    padding: "10px 0",
    fontSize: "1.5rem"
  }
});

class CustomerStoriesCarousel extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <div className="container">
          <h5 className="blue-subtitle costumer-subtitle costumer-blue-subtitle">
            Customer Stories
          </h5>
          <div className={classes.customerStoriesContainer}>
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <h2 className={classes.message}>{step.label}</h2>
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          </div>

          <div className={classes.user}>
            <img
              className={classes.avatar}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
              alt="avatar-testing"
            />

            <h4 className={classes.heading4}>Test</h4>
            <p className={classes.infopTag}>
              Managing Director at Herld (Google Partner Agency)
            </p>
          </div>

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
          />
        </div>
      </div>
    );
  }
}

CustomerStoriesCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(CustomerStoriesCarousel);
