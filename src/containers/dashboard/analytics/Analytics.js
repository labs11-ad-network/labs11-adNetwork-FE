import React, { Component } from 'react'
import styled from 'styled-components';

import { BrowserInfo } from '../../../components/analytics/graphs';
import Card from '../../../components/analytics/cards/Card.js';;

const PageContainer = styled.div`
  .card-container{
    display: flex;
  }
`;

class Analytics extends Component {
  render() {
    return (
      <PageContainer>
        <div className="card-container">
          <Card
            icon="fas fa-eye"
            dataType="Impressions"
            data={
              this.props.offerAnalytics.filter(offer => {
                return offer.action === "impression"
              }).length
            }
            firstColor="#ffa726"
            secondColor="#fb8c00"

          />
          <Card
            icon="fas fa-mouse-pointer"
            dataType="Clicks"
            data={
              this.props.offerAnalytics.filter(offer => {
                return offer.action === "click"
              }).length
            }
            firstColor="#66bb6a"
            secondColor="#43a047"
          />
          <Card
            icon="fas fa-exchange-alt"
            dataType="Conversions"
            data="131"
            firstColor="#ef5350"
            secondColor="#e53935"
          />
        </div>
        <BrowserInfo/>
        
      </PageContainer>
    )
  }
}


export default Analytics;
