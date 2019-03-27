import React from "react";

import {
  ProfileCardContainer,
  ProfileCardTop,
  ProfileCardBottom
} from "../settingsStyles.js";

const ProfileCard = props => {
  const { currentUser } = props;
  const { offers, ads, agreements } = props.currentUser;
  if (!currentUser) {
    return <h1>No User Found</h1>;
  }
  return (
    <ProfileCardContainer>
      <ProfileCardTop>
        <img src={currentUser.image_url} alt="" />
        <div>
          <h1>{currentUser.name}</h1>
          <h2>{currentUser.acct_type}</h2>
          <h3>{currentUser.email}</h3>
        </div>
      </ProfileCardTop>
      <ProfileCardBottom>
        <div>
          <h1>{offers}</h1>
          <h2>Offers</h2>
        </div>
        <div>
          <h1>{ads}</h1>
          <h2>Advertisements</h2>
        </div>
        <div>
          <h1>{agreements}</h1>
          <h2>Agreements</h2>
        </div>
      </ProfileCardBottom>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
