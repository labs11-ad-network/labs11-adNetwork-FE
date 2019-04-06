import React, { Component } from "react";
import { ExpertTeamStyle } from "./ExpertTeamStyle";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ExpertTeamCard from "./ExpertTeamCard";
import teambg1 from "../../assets/teambg1.jpg";
import teambg2 from "../../assets/teambg2.jpg";
import teambg3 from "../../assets/teambg3.jpg";
import video2 from "../../assets/video2.png";
import CustomerStoriesCarousel from "./CustomerStoriesCarousel";
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
            <h2>Expert Member</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              mollitia similique nostrum!
            </p>
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
              <ExpertTeamCard teamBg={teambg1} />
            </div>

            <div className="item">
              <ExpertTeamCard teamBg={teambg2} />
            </div>
            <div className="item">
              <ExpertTeamCard teamBg={teambg3} />
            </div>
            <div className="item">
              <ExpertTeamCard teamBg={teambg1} />
            </div>
            <div className="item">
              <ExpertTeamCard teamBg={teambg2} />
            </div>
            <div className="item">
              <ExpertTeamCard teamBg={teambg3} />
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                officia deserunt! Placeat quos nihil dolores.
              </p>
            </div>
          </div>
        </section>

        <section className="costumer-stories">
          <CustomerStoriesCarousel />
        </section>
      </ExpertTeamStyle>
    );
  }
}

export default ExpertTeam;
