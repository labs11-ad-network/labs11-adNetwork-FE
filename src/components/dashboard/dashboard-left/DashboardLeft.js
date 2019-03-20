import React, { Component } from 'react'

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
            <HamburgerButton onClick={() => this.setState({
                navOpen: !this.state.navOpen
            })}>
                <i className="fas fa-bars"/>
            </HamburgerButton>
            <ButtonContainer>
                <NavButton 
                    iconClass="fas fa-chart-line" 
                    pathExtension="/dashboard"
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
