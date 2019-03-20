import React from 'react'
import { NavLink } from 'react-router-dom';

import {
  NavButtonContainer
} from '../dashboardStyles.js';

const NavButton = (props) => {
  return (
      <NavButtonContainer>
        <NavLink exact to={props.pathExtension}>
          <i className={props.iconClass} />
        </NavLink>
      </NavButtonContainer>
  )
}

export default NavButton;