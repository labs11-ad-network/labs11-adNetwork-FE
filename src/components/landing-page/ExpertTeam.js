import React, { Component } from "react";
import { ExpertTeamStyle } from "./ExpertTeamStyle";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ExpertTeamCard from "./ExpertTeamCard";
import teambg1 from "../../assets/teambg1.jpg";
import teambg2 from "../../assets/teambg2.jpg";
import teambg3 from "../../assets/teambg3.jpg";

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
            // items={1}
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
      </ExpertTeamStyle>
    );
  }
}

export default ExpertTeam;
