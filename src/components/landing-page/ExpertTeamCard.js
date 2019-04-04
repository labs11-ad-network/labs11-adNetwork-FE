import React from "react";

const ExpertTeamCard = ({ teamBg }) => {
  return (
    <div className="team-card">
      <img src={teamBg} alt="team background" />

      <div className="border">
        <h3>Name Here</h3>
        <p>Web Developer</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          quis debitis officia optio.
        </p>
      </div>
    </div>
  );
};

export default ExpertTeamCard;
