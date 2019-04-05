import React from "react";

const ExpertTeamCard = ({ teamBg }) => {
  return (
    <div className="team-card">
      <img src={teamBg} alt="team background" />

      <div className="border">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ"
          alt="profile pic"
          className="team-profile_picture"
        />
        <h3>Name Here</h3>
        <p className="team-sub_title">Web Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          quis debitis officia optio.
        </p>

        <div className="team-socials">
          <span className="social-item">
            <i class="fab fa-github" />
          </span>
          <span className="social-item">
            <i class="fab fa-linkedin-in" />
          </span>
          <span className="social-item">
            <i class="fab fa-github" />
          </span>
          <span className="social-item">
            <i class="fab fa-linkedin-in" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeamCard;
