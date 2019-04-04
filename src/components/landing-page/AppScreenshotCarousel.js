import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { autoPlay } from "react-swipeable-views-utils";

import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";


import screentshot1 from '../../assets/screenshot1.jpg'
import screentshot2 from '../../assets/screenshot2.jpg'
import screentshot3 from '../../assets/screenshot3.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    img: screentshot1
  },
  {
    img: screentshot2
  },
  {
    img: screentshot3
  },
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
