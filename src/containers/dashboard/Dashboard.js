import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { } from '../../store/actions/authAction.js';
import privateRoute from '../auth-HOC';
import DashboardLeft from '../../components/dashboard/dashboard-left/DashboardLeft.js';
import TopNav from '../../components/dashboard/dashboard-top/DashboardTop.js';

const DashboardContainer = styled.div`
  display: flex;
  .main-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

class Dashboard extends Component {
  componentDidMount(){
    //get user data from backend 
  }

  render() {
    return (
      <DashboardContainer>
        <DashboardLeft/>
        <div className="main-content">
          <TopNav {...this.props}/>
          <Route exact path="/dashboard" render={props => <h1 {...props}>This is the dashboard view</h1>}/>
          <Route path="/dashboard/settings" render={props => <h1 {...props}>This is the settings view</h1>}/>
          <Route path="/dashboard/create-ad" render={props => <h1 {...props}>This is the ad creation view</h1>}/>
        </div>
      </DashboardContainer>
    );
  }
}

export default connect(
  null,
  {

  }
)(privateRoute(Dashboard));