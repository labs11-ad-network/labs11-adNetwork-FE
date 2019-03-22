import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { getUserOffers } from '../../store/actions/offersAction.js';
import { getUserData } from '../../store/actions/authAction.js'
import privateRoute from '../auth-HOC';
import DashboardLeft from '../../components/dashboard/dashboard-left/DashboardLeft.js';
import TopNav from '../../components/dashboard/dashboard-top/DashboardTop.js';
import ChatWidget from '../../components/chat-widget/ChatWidget.js';
import Analytics from './analytics/Analytics.js'
import AdGenerator from './ad-generator/AdGenerator.js';
import Offers from './offers/Offers.js'


const DashboardContainer = styled.div`
  display: flex;
  .main-content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    .dashboard-view{
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
`;

class Dashboard extends Component {
  state = {
    currentOffer: {},
  }

  componentDidMount() {
    this.props.getUserData()
    this.props.getUserOffers();
  }

  handleOfferSelect = e => {
    this.setState({
      currentOffer: e.target.value
    })
  }

  render() {
    return (
      <DashboardContainer>
        <DashboardLeft />
        <div className="main-content">
          <TopNav {...this.props} handleOfferSelect={this.handleOfferSelect}/>
          <div className="dashboard-view">
            <Route exact path="/" render={props => <Analytics {...props} currentOffer={this.state.currentOffer}/>} />
            <Route path="/offers" component={Offers} />
            <Route path="/settings" render={props => <h1 {...props}>This is the settings view</h1>} />
            <Route path="/create-ad" component={AdGenerator} />
            <ChatWidget />
          </div>
        </div>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => {
  return{
    userOffers: state.offersReducer.userOffers,
    currentUser: state.authReducer.currentUser
  }
}

export default connect(
  mapStateToProps,
  {
    getUserOffers,
    getUserData
  }
)(privateRoute(Dashboard));