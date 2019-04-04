import React, { Component } from "react";
import styled from "styled-components";

import Graphs from "../../../components/analytics/graphs";
import Card from "../../../components/analytics/cards/Card.js";
import Table from "../../../components/analytics/tables/Table.js";

const PageContainer = styled.div`
  .card-container {
    display: flex;
    @media (max-width: 1370px) {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .row-container{
    display: flex;
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
                actions={offerAnalytics.impressions}
                firstColor="#ffa726"
                secondColor="#fb8c00"
              />
              <Card
                icon="fas fa-mouse-pointer"
                dataType="Clicks"
                data={offerAnalytics.actionCount.clicks}
                actions={offerAnalytics.clicks}
                firstColor="#66bb6a"
                secondColor="#43a047"
              />
              <Card
                icon="fas fa-percentage"
                dataType="Click Through Rate"
                data={[...offerAnalytics.clicks, ...offerAnalytics.impressions].sort((first, second) => Date.parse(second.created_at) - Date.parse(first.created_at)).length}
                ctr={this.getCTR()}
                actions={[...offerAnalytics.clicks, ...offerAnalytics.impressions].sort((first, second) => Date.parse(second.created_at) - Date.parse(first.created_at))}
                firstColor="#ef5350"
                secondColor="#e53935"
              />
              <Card
                icon="fas fa-exchange-alt"
                dataType="Conversions"
                data={offerAnalytics.actionCount.conversions}
                actions={offerAnalytics.conversions}
                firstColor="#26c6da"
                secondColor="#00acc1"
              />
            </div>
            <Graphs data={offerAnalytics.browserCount} />
            <div className="row-container">
              <Table data={offerAnalytics.impressions} dataType="Impressions"/>
              <Table data={offerAnalytics.clicks} dataType="Clicks"/>
            </div>
          </>
        )}
      </PageContainer>
    );
  }
}

export default Analytics;
