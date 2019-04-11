import React from 'react';

import { Link } from "react-router-dom";
import { ElasticReverse } from "react-burgers";

import {
  MobileHamburger,
  MobileCreate
} from "../../dashboardStyles.js";

const MobileMenuButtons = props => {
<<<<<<< HEAD
  return (
    <div>
      <MobileHamburger>
        <ElasticReverse
          className="td"
          color="#fff"
          lineHeight={4}
          width={28}
            onClick={e => {
            e.preventDefault();
            props.toggleNav();
          }}
          active={props.movileNavOpen}
        />
        {/* <i className="fas fa-bars" /> */}

      </MobileHamburger>


      {!props.location.pathname.includes("dashboard/") && (
        <MobileCreate>
          <Link to="/dashboard/create-ad">
            <i className="fas fa-pencil-alt" />
          </Link>
        </MobileCreate>
      )}
    </div>
  )
=======
    return(
        <div>
            <MobileHamburger>
                <a
                    href="hamburger"
                    onClick={e => {
                        e.preventDefault();
                        props.toggleNav();
                    }}
                >
                    <i className="fas fa-bars" />
                </a>
            </MobileHamburger>
            {(!props.location.pathname.includes("dashboard/") && props.currentUser.acct_type === "advertiser") && (
            <MobileCreate>
                <Link to="/dashboard/create-ad">
                    <i className="fas fa-pencil-alt" />
                </Link>
            </MobileCreate>
            )}
        </div>
    )
>>>>>>> master
}

export default MobileMenuButtons