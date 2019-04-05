import React, { Component } from "react";
import { ExpertTeamStyle } from "./ExpertTeamStyle";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class ExpertTeam extends Component {
  render() {
    return (
      <ExpertTeamStyle>
        <div className="team-content">
          <h2>Expert Member</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            mollitia similique nostrum!
          </p>
        </div>

        <OwlCarousel className="owl-theme" autoplay={true} loop margin={10} nav>
          <div className="item">
            <h4>1</h4>
          </div>

          <div className="item">
            <h4>2</h4>
          </div>
          <div className="item">
            <h4>3</h4>
          </div>
          <div className="item">
            <h4>4</h4>
          </div>
          <div className="item">
            <h4>5</h4>
          </div>
          <div className="item">
            <h4>6</h4>
          </div>
          <div className="item">
            <h4>7</h4>
          </div>
          <div className="item">
            <h4>8</h4>
          </div>
          <div className="item">
            <h4>9</h4>
          </div>
          <div className="item">
            <h4>10</h4>
          </div>
          <div className="item">
            <h4>11</h4>
          </div>
          <div className="item">
            <h4>12</h4>
          </div>
        </OwlCarousel>
      </ExpertTeamStyle>
    );
  }
}

export default ExpertTeam;
