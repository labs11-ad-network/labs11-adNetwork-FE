import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { 
    Nav,
    HamburgerButton, 
    ButtonContainer
} from '../dashboardStyles.js';
import NavButton from './NavButton.js';

export class DashboardNav extends Component {
  state={
      navOpen: false
  }

  render() {
    return (
      <>
        <Nav>
          <HamburgerButton>
            <Link to="/">
                <i className="fas fa-home"/>
            </Link>
          </HamburgerButton>
          <ButtonContainer>
              <NavButton 
                  iconClass="fas fa-chart-line" 
                  pathExtension="/dashboard"
              />
              <NavButton 
                  iconClass="fas fa-list" 
                  pathExtension="/dashboard/offers"
              />
              <NavButton 
                  iconClass="fas fa-cog"
                  pathExtension="/dashboard/settings"
              />
          </ButtonContainer>   
        </Nav>
      </>
    )
  }
}

export default DashboardNav
