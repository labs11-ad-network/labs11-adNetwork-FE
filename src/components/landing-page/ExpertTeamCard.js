import React from "react";

const ExpertTeamCard = ({ teamBg, profilePic, name }) => {
  return (
    <div className="team-card">
      <img src={teamBg} alt="team background" />

      <div className="border">
        <img
          src={profilePic}
          alt="profile pic"
          className="team-profile_picture"
        />
        <h3>{name}</h3>
        <p className="team-sub_title">Web Developer</p>
        <p>
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          quis debitis officia. */}
        </p>

        <div className="team-socials">
          <span className="social-item">
            <i className="fab fa-github" />
          </span>
          <span className="social-item">
            <i className="fab fa-linkedin-in" />
          </span>
          <span className="social-item">
            <i className="fab fa-github" />
          </span>
          <span className="social-item">
            <i className="fab fa-linkedin-in" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeamCard;
