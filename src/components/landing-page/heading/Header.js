import React, { Component } from "react";
import { HeroHome } from "./HeaderStyle";
import { ElasticReverse } from "react-burgers";
import { TwoPersonSvg, BirdSvg, SkyCloudSvg } from "./HeaderSvg";
import classnames from "classnames";

class Header extends Component {
  state = {
    isOpen: false,
    prevScrollpos: window.pageYOffset,
    visible: true,
    clickedAff: false,
    clickedAdver: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.clickedAdver !== this.state.clickedAdver ||
      prevState.clickedAff !== this.state.clickedAff
    ) {
      this.props.login();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  setAccType = (state, type) => () => {
    localStorage.setItem("acct_type", type);
    this.setState(prevState => ({
      [state]: !prevState[state]
    }));
  };

  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { login, history } = this.props;
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
                <a href="/#" onClick={() => history.push("/dashboard")}>
                  Dashboard
                </a>
              </div>
              <div className="desktop-anchor nav-button">
                <button onClick={() => login()}>Login</button>
                <button onClick={() => login()}>Signup</button>
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
                {/*  Mobile nav   */}
                <p className="hero-sub-title">
                  #Lad Network #faster websites #improve SEO
                </p>
                <h1>
                  <span>Creepy Ads</span> <br /> We are a non creepy ad network
                  that presents itself as actually very creepy.
                </h1>

                <div className="button">
                  <button
                    className="btn_scroll btn_blue"
                    onClick={this.setAccType("clickedAdver", "advertiser")}
                  >
                    become advertiser
                  </button>

                  <button
                    className="btn_scroll btn_blue yellow-btn"
                    onClick={this.setAccType("clickedAff", "affiliate")}
                  >
                    become affiliate
                  </button>
                </div>
              </div>
              <div className="container_illustration">
                <SkyCloudSvg className="desktop-cloud" />
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
