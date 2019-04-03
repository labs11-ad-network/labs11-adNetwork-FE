import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. ",
  },
  {
    label: "Bird Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. ",
  },
  {
    label: "Bali, Indonesia Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. ",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. ",
  },
  {
    label: "Goč, Serbia Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quibusdam optio. ",
  }
];

const styles = theme => ({
  root: {
    maxWidth: '100vw',
    flexGrow: 1,
    background: '#F7F9FC'

  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  message: {
    textAlign: 'center',
    fontSize: '2rem',
    lineHeight: 1.25
  },
  customerStoriesContainer: {
    padding: '6% 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: '#F7F9FC'
  },
});

class AppScreenshotCarousel extends React.Component {
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
      <div className={classes.root} >
        <div >
          <div
            className={classes.customerStoriesContainer}>
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
                <div key={index}>
                  {
                    Math.abs(activeStep - index) <= 2
                      ? (<div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img alt='screenshots' src={step.img} />
                        </div>
                      </div>)
                      : null
                  }
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
        </div>
      </div>
    );
  }
}

AppScreenshotCarousel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  AppScreenshotCarousel
);
