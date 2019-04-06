import React from 'react';
import { Link } from "react-router-dom";

import {
    MobileHamburger,
    MobileCreate
} from "../../dashboardStyles.js";

const MobileMenuButtons = props => {
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
            {!props.location.pathname.includes("dashboard/") && (
            <MobileCreate>
                <Link to="/dashboard/create-ad">
                    <i className="fas fa-pencil-alt" />
                </Link>
            </MobileCreate>
            )}
        </div>
    )
}

export default MobileMenuButtons