import React, { Component } from "react";
import { HeroHome } from "./HeaderStyle";
import { ElasticReverse } from "react-burgers";
import { TwoPersonSvg, BirdSvg } from "./HeaderSvg";
import classnames from "classnames";

class Header extends Component {
  state = {
    isOpen: false,
    prevScrollpos: window.pageYOffset,
    visible: true
  };
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    console.log("prevScrollpos", prevScrollpos);

    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    let colorChange = this.state.prevScrollpos > 200 ? "navWhite" : "navBar";
    return (
      <>
        <HeroHome>
          <div className="container">
            <nav
              className={classnames(`${colorChange}`, {
                "navbar--hidden": !this.state.visible
              })}
            >
              <a href="/#logoHERE" className="logo">
                LOGO
              </a>
              <div className="middle-anchors desktop-anchor">
                <a href="/#">Team</a>
                <a href="/#">Contact</a>
                <a href="/#">About</a>
                <a href="/#">Dashboard</a>
              </div>

              <div className="desktop-anchor">
                <a href="/#">Login</a>
                <a href="/#">Signup</a>
              </div>

              <ElasticReverse
                className="hamburger"
                color={this.state.prevScrollpos > 200 ? "#203561" : "#fff"}
                lineHeight={2}
                width={28}
                onClick={this.toggleDrawer}
                active={this.state.isOpen}
              />
            </nav>
            <div className="desktop-hero-container">
              <div className="hero-content">
                {/* ----------------- Mobile nav  ----------------- */}
                <p className="hero-sub-title">
                  #Lad Network #faster websites #improve SEO
                </p>
                <h1>
                  <span>Creepy Ads</span> <br /> We are a non creepy ad network
                  that presents itself as actually very creepy.
                </h1>
                <div className="button">
                  <a className="btn_scroll btn_blue" href="/#" alt="button">
                    Start a Free Trial
                  </a>
                  <a
                    alt="button"
                    className="btn_scroll btn_blue yellow-btn"
                    href="/#"
                  >
                    Start a Free Trial
                  </a>
                </div>
              </div>
              <div className="container_illustration">
                {/* <div className="animation" /> */}
                <div className="bird-wrapper">
                  <BirdSvg style1="piio_float_left" style2="piio_float_right" />
                </div>
                <TwoPersonSvg className="illustration" />
              </div>
            </div>
          </div>
          <span className="border_bottom" />
        </HeroHome>
      </>
    );
  }
}

export default Header;
