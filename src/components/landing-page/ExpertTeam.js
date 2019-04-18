import React, { Component } from "react";
import { ExpertTeamStyle } from "./ExpertTeamStyle";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ExpertTeamCard from "./ExpertTeamCard";
import teambg1 from "../../assets/teambg1.jpg";
import teambg2 from "../../assets/teambg2.jpg";
import teambg3 from "../../assets/teambg3.jpg";
import jbmiranda from "../../assets/jbmiranda.jpg";
import kieranvieira from "../../assets/kieranvieira.jpg";
import mcferrenm from "../../assets/mcferrenm.jpeg";

import video2 from "../../assets/video2.png";
// import CustomerStoriesCarousel from "./CustomerStoriesCarousel";
let responsive = {
  0: {
    items: 1
  },
  481: {
    items: 2
  },
  939: {
    items: 3
  }
};

class ExpertTeam extends Component {
  render() {
    return (
      <ExpertTeamStyle>
        <div className="container">
          <div className="team-content">
            <h2
              className="wow fadeInUp"
              data-wow-delay=".2s"
              data-wow-duration="2s"
            >
              Meet the Team
            </h2>
            <p />
          </div>

          <OwlCarousel
            className="owl-theme"
            autoplay={true}
            loop
            margin={30}
            responsive={responsive}
            nav
          >
            <div className="item">
              <ExpertTeamCard
                name="Hamza Elkhoudiri"
                teamBg={teambg1}
                profilePic="https://ca.slack-edge.com/T4JUEB3ME-UDN3J2GAU-250848c689ed-512"
                links={{
                  github: "https://github.com/elkhoudh",
                  linkedin:
                    "https://www.linkedin.com/in/hamza-elkhoudiri-a606aa162/",
                  twitter: "",
                  website: "https://hamzaelk.com/"
                }}
              />
            </div>

            <div className="item">
              <ExpertTeamCard
                name="Kieran Vieira"
                teamBg={teambg2}
                profilePic={kieranvieira}
                links={{
                  github: "https://github.com/KieranVieira",
                  linkedin: "https://www.linkedin.com/in/kieran-vieira/",
                  twitter: "",
                  website: "https://kieranvieira.com/"
                }}
              />
            </div>
            <div className="item">
              <ExpertTeamCard
                name="Max McFerren"
                teamBg={mcferrenm}
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                links={{
                  github: "https://github.com/mcferrenm",
                  linkedin: "https://www.linkedin.com/in/max-mcferren",
                  twitter: "",
                  website: "https://maxmcferren.com"
                }}
              />
            </div>
            <div className="item">
              <ExpertTeamCard
                teamBg={teambg1}
                profilePic={jbmiranda}
                name="John Benedict Miranda"
                links={{
                  github: "https://github.com/john2796",
                  linkedin:
                    "https://www.linkedin.com/in/john-benedict-miranda-7b2357180/",
                  twitter: "",
                  website: "https://www.johnbenedictmiranda.com/"
                }}
              />
            </div>
            <div className="item">
              <ExpertTeamCard
                name="Jordan Marsaw"
                teamBg={teambg2}
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
                links={{
                  github: "",
                  linkedin: "",
                  twitter: "",
                  website: "a"
                }}
              />
            </div>
          </OwlCarousel>
        </div>
        {/* Added This Cosutmer Testimonial for cascading styles from Expert Team */}

        <section className="app-intro-video">
          <div className="video-flex">
            <div className="video-play">
              <a href="/" alt="youtube-button">
                <i className="fa fa-play" />
              </a>
            </div>

            <img src={video2} alt="video" className="wavy-blue" />

            <div className="video-content">
              <h2 className="center-me">Watch This App Intro</h2>
              <p className="center-me">
                Increase Traffic, Get Conversions, and Grow Revenue
              </p>
            </div>
          </div>
          {/* <------------- nav slide to reviews ---------------> */}
          <span id="reviews" />
        </section>

        {/* <section className="costumer-stories">
        //   <CustomerStoriesCarousel />
        // </section>
        */}
      </ExpertTeamStyle>
    );
  }
}

export default ExpertTeam;
