import React, { Component } from "react";
import styled from "styled-components";

import { BrowserInfo } from "../../../components/analytics/graphs";
import Card from "../../../components/analytics/cards/Card.js";

const PageContainer = styled.div`
  .card-container {
    display: flex;
    @media (max-width: 1370px){
      flex-wrap: wrap;
      justify-content: space-between
    }
  }
`;

class Analytics extends Component {

  getCTR = () => {
    const clicks = this.props.offerAnalytics.filter(offer => {
      return offer.action === "click";
    }).length;
    const impressions = this.props.offerAnalytics.filter(offer => {
      return offer.action === "impression";
    }).length;

    return Math.round((clicks / impressions * 100) * 100) / 100
  }

  render() {
    return (
      <PageContainer>
        <div className="card-container">
          <Card
            icon="fas fa-eye"
            dataType="Impressions"
            data={this.props.offerAnalytics.filter(offer => {
              return offer.action === "impression";
            })}
            firstColor="#ffa726"
            secondColor="#fb8c00"
          />
          <Card
            icon="fas fa-mouse-pointer"
            dataType="Clicks"
            data={this.props.offerAnalytics.filter(offer => {
              return offer.action === "click";
            })}
            firstColor="#66bb6a"
            secondColor="#43a047"
          />
          <Card
            icon="fas fa-percentage"
            dataType="Click Through Rate"
            data={this.props.offerAnalytics}
            ctr={this.getCTR()}
            firstColor="#ef5350"
            secondColor="#e53935"
          />
          <Card
            icon="fas fa-exchange-alt"
            dataType="Conversions"
            data={this.props.offerAnalytics.filter(offer => {
              return offer.action === "conversions";
            })}
            firstColor="#26c6da"
            secondColor="#00acc1"
          />
        </div>
        <BrowserInfo data={this.props.offerAnalytics}/>
      </PageContainer>
    );
  }
}

export default Analytics;
