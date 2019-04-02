import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { 
    Nav,
    HomeButton, 
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
          <HomeButton>
            <Link to="/">
                <i className="fas fa-home"/>
            </Link>
          </HomeButton>
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
