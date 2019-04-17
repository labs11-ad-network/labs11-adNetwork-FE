import React from "react";

const ExpertTeamCard = ({ teamBg, profilePic, name, links }) => {
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
          {links.github &&
          <span className="social-item">
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
          </span>}
          {links.linkedin &&
          <span className="social-item">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
          </span>}
          {links.twitter &&
          <span className="social-item">
            <a href={links.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
          </span>}
          {links.website &&
          <span className="social-item">
            <a href={links.website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link" />
            </a>
          </span>}
        </div>
      </div>
    </div>
  );
};

export default ExpertTeamCard;
