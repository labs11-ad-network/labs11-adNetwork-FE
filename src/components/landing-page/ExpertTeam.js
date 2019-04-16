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
          <div className="team-content" id="team">
            <h2
              className="wow fadeInUp"
              data-wow-delay=".2s"
              data-wow-duration="2s"
            >
              Expert Member
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
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
              />
            </div>

            <div className="item">
              <ExpertTeamCard
                name="Kieran Vieira"
                teamBg={teambg2}
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
              />
            </div>
            <div className="item">
              <ExpertTeamCard
                name="Max McFerren"
                teamBg={teambg3}
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
              />
            </div>
            <div className="item">
              <ExpertTeamCard
                teamBg={teambg1}
                profilePic={jbmiranda}
                name="John Benedict Miranda"
              />
            </div>
            <div className="item">
              <ExpertTeamCard
                name="Jordan Marsaw"
                teamBg={teambg2}
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
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
        </section>

        <section className="costumer-stories">
          <CustomerStoriesCarousel />
        </section>
      </ExpertTeamStyle>
    );
  }
}

export default ExpertTeam;
