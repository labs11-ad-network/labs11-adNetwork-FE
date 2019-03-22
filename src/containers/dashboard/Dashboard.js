import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { getUserOffers } from '../../store/actions/offersAction.js';
import privateRoute from '../auth-HOC';
import DashboardLeft from '../../components/dashboard/dashboard-left/DashboardLeft.js';
import TopNav from '../../components/dashboard/dashboard-top/DashboardTop.js';
import ChatWidget from '../../components/chat-widget/ChatWidget.js';
import AdGenerator from './ad-generator/AdGenerator';
import Offers from './offers/Offers.js'


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
  state = {
    currentOffer: {},
  }

  componentDidMount() {
    //get user data from backend 

    this.props.getUserOffers();
  }

  render() {
    return (
      <DashboardContainer>
        <DashboardLeft />
        <div className="main-content">
          <TopNav {...this.props} />
          <Route exact path="/dashboard" render={props => <h1 {...props}>This is the dashboard view</h1>} />
          <Route path="/dashboard/offers" component={Offers} />
          <Route path="/dashboard/settings" render={props => <h1 {...props}>This is the settings view</h1>} />
          <Route path="/dashboard/create-ad" component={AdGenerator} />
          <ChatWidget />
        </div>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => {
  return{
    userOffers: state.offersReducer.userOffers
  }
}

export default connect(
  mapStateToProps,
  {
    getUserOffers
  }
)(privateRoute(Dashboard));