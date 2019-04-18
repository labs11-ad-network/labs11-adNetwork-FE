import React from 'react';

import {
  ProfileCardContainer,
  ProfileCardTop,
  ProfileCardBottom,
} from '../settingsStyles.js';

import Checkout from '../../checkout/Checkout.js';

const ProfileCard = ({ currentUser }) => {
  
  const { 
    offers, 
    ads, 
    agreements,
    name, 
    acct_type, 
    email, 
    image_url, 
    stripe_payout_id 
  } = currentUser;

  if (currentUser) {
    return (
      <ProfileCardContainer>
        {/* ------------------------------ User Info Section ------------------------------ */}        
        <ProfileCardTop>
          <img src={image_url} alt="" />
          <div>
            <h1>{name}</h1>
            <h2>{acct_type}</h2>
            <h3>{email}</h3>
            {currentUser.acct_type === 'advertiser' ?
              <Checkout
                btn_text='Change Payment Info'
              /> :
              <a
                href={`https://connect.stripe.com/express/oauth/authorize?client_id=ca_Eq3JPTMy0ZrHBcEaY2cQLuaIeCGQNUR9&stripe_user[email]=${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>{stripe_payout_id ? "Change Stripe Account" : "Connect Stripe"}</button>
              </a>
            }
          </div>
        </ProfileCardTop>
        {/* ------------------------------ User Profile Details ------------------------------ */}
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
  }else{
    return <></>
  }
};

export default ProfileCard;
