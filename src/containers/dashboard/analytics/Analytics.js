import React, { Component } from "react";
import styled from "styled-components";

import Graphs from "../../../components/analytics/graphs";
import Card from "../../../components/analytics/cards/Card.js";

const PageContainer = styled.div`
  .card-container {
    display: flex;
    @media (max-width: 1370px) {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;

class Analytics extends Component {
  getCTR = () => {
    const clicks = this.props.offerAnalytics.actionCount.clicks;
    const impressions = this.props.offerAnalytics.actionCount.impressions;

    const ctr = Math.round((clicks / impressions) * 100 * 100) / 100;

    return ctr || "0";
  };

  render() {
    const { offerAnalytics } = this.props;
    return (
      <PageContainer>
        {offerAnalytics.length !== 0 && (
          <>
            <div className="card-container">
              <Card
                icon="fas fa-eye"
                dataType="Impressions"
                data={offerAnalytics.actionCount.impressions}
                firstColor="#ffa726"
                secondColor="#fb8c00"
              />
              <Card
                icon="fas fa-mouse-pointer"
                dataType="Clicks"
                data={offerAnalytics.actionCount.clicks}
                firstColor="#66bb6a"
                secondColor="#43a047"
              />
              <Card
                icon="fas fa-percentage"
                dataType="Click Through Rate"
                data={offerAnalytics}
                ctr={this.getCTR()}
                firstColor="#ef5350"
                secondColor="#e53935"
              />
              <Card
                icon="fas fa-exchange-alt"
                dataType="Conversions"
                data={offerAnalytics.actionCount.conversions}
                firstColor="#26c6da"
                secondColor="#00acc1"
              />
            </div>
            <Graphs data={offerAnalytics.browserCount} />
          </>
        )}
      </PageContainer>
    );
  }
}

export default Analytics;
