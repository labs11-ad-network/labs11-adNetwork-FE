import React, { Component } from "react";
import { HeroHome } from "./HeaderStyle";
import { ElasticReverse } from "react-burgers";
import { TwoPersonSvg, BirdSvg, SkyCloudSvg } from "./HeaderSvg";
import WOW from "wowjs";
import classnames from "classnames";

import NavList from "../NavList";
import NavDrawer from "../NavDrawer";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      prevScrollpos: window.pageYOffset,
      visible: true,
      clickedAff: false,
      clickedAdver: false,
      left: false
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ visible: false });
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
    const visible = prevScrollpos < currentScrollPos;
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

  state = {
    top: false
  };

  toggleNavDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  toggleDrawer = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      left: !this.state.left
    });
  };
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  render() {
    const { left, visible } = this.state;

    const { login, history } = this.props;
    let colorChange = this.state.prevScrollpos > 200 ? "navWhite" : "navBar";
    let goUpBtn =
      window.pageYOffset > 1000 ? "scroll-to-top" : "scroll-to-top-hidden";
    return (
      <>
        <HeroHome>
          <div className="container">
            <nav
              className={classnames(`${colorChange}`, {
                "navbar--hidden": this.state.visible
              })}
              ref={this.myRef}
            >
              <a name="header" href="/" className="logo">
                LOGO
              </a>

              <NavList history={history} />
              <NavDrawer
                hidden
                history={history}
                left={left}
                toggleDrawer={this.toggleDrawer}
                visible={visible}
              />
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
                  <span className="wow fadeIn">Creepy Ads</span> <br /> We are a
                  non creepy ad network that presents itself as actually very
                  creepy.
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

          <div
            className="container"
            onClick={() => {
              this.scrollToMyRef(this.myRef);
            }}
            id={goUpBtn}
          >
            <i className="fas fa-chevron-up" />
          </div>
        </HeroHome>
      </>
    );
  }
}

export default Header;
