import React, { Component } from "react";
import { HeroHome } from "./HeaderStyle";
import { ElasticReverse } from "react-burgers";
import { TwoPersonSvg, BirdSvg, SkyCloudSvg } from "./HeaderSvg";

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
      left: false,
      top: false
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // <---------- scroll event for navbar --------->
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ visible: false });
  }
  // <---------------  if clickedAdff and clickedAdver changed to true invoke login   --------------->
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.clickedAdver !== this.state.clickedAdver ||
      prevState.clickedAff !== this.state.clickedAff
    ) {
      this.props.login();
    }
  }
  // <---------- remove eventlistener --------->
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

  // <---------- two buttons on header set to localStorage onClick either affiliate or advertiser --------->
  setAccType = (state, type) => () => {
    localStorage.setItem("acct_type", type);
    this.setState(prevState => ({
      [state]: !prevState[state]
    }));
  };
  // <---------- toggle mobile nav --------->
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
  // <---------- scroll to top --------->
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  render() {
    const { left, visible } = this.state;
    const { login, logout, history } = this.props;
    let colorChange = this.state.prevScrollpos > 200 ? "navWhite" : "navBar";
    let goUpBtn =
      window.pageYOffset > 1000 && !visible
        ? "scroll-to-top"
        : "scroll-to-top-hidden";
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
                logout={logout}
                login={login}
                hidden
                history={history}
                left={left}
                toggleDrawer={this.toggleDrawer}
                visible={visible}
              />
              <div className="desktop-anchor nav-button">
                {!localStorage.id_token ? (
                  <button onClick={() => login()}>Login</button>
                ) : (
                  <button onClick={() => logout()}>Logout</button>
                )}
              </div>
              {/* <---------- Tablet Hamburger ---------> */}
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
              {/* <---------- Header Content ---------> */}

              <div className="hero-content">
                {/*  Mobile nav   */}
                <p className="hero-sub-title">
                  #Lad Network #faster websites #improve SEO
                </p>
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  <span>Ads Network</span>
                  <br /> We are a non creepy ad network that presents itself as
                  actually very creepy.
                </h1>
                {/* <---------- Two buttons on header  Advertiser and Affiliate ---------> */}
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
              {/* <---------- SVG ---------> */}

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
          {/* <---------- Scroll To Top Button ---------> */}
          <div
            className="container"
            hidden={window.pageYOffset > 1000 ? false : true}
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
