import React, { Component } from "react";
import styled from "styled-components";
import { scaleLinear } from "d3-scale"

import Graphs from "../../../components/analytics/graphs";
import Card from "../../../components/analytics/cards/Card.js";
import Table from "../../../components/analytics/tables/Table.js";
import MapChart from "../../../components/analytics/map/MapChart.js";

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
  componentDidMount(){
    this.props.getAnalytics(this.props.currentAnalyticId);
    this.analyticsInterval = setInterval(() => {
      this.props.getAnalytics(this.props.currentAnalyticId);
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.analyticsInterval);
  }

  getCTR = () => {
    const clicks = this.props.analytics.actionCount.clicks;
    const impressions = this.props.analytics.actionCount.impressions;

    const ctr = Math.round((clicks / impressions) * 100 * 100) / 100;

    return ctr || "0";
  };

  getCityData = () => {
    if(this.props.analytics.cities.length){
      const range = this.props.analytics.actionCount.clicks + this.props.analytics.actionCount.impressions;
      return{
        cities: this.props.analytics.cities.map(city => {
          return {
            name: city.city,
            coordinates: [Number(city.longitude), Number(city.latitude)],
            population: city.num 
          }
        }),
        cityScale: scaleLinear()
            .domain([0,range])
            .range([1,25])
      }
    }else{
      return{
        cities: [],
        cityScale: {}
      }
    }
  }

  render() {
    const { analytics } = this.props;
    return (
      <PageContainer>
        {analytics.length !== 0 && (
          <>
            <div className="card-container">
              <Card
                icon="fas fa-eye"
                dataType="Impressions"
                data={analytics.actionCount.impressions}
                actions={analytics.impressions}
                firstColor="#ffa726"
                secondColor="#fb8c00"
                growth={analytics.growth.impressions || 0}
              />
              <Card
                icon="fas fa-mouse-pointer"
                dataType="Clicks"
                data={analytics.actionCount.clicks}
                actions={analytics.clicks}
                firstColor="#66bb6a"
                secondColor="#43a047"
                growth={analytics.growth.clicks || 0}
              />
              <Card
                icon="fas fa-percentage"
                dataType="Click Through Rate"
                data={[...analytics.clicks, ...analytics.impressions].sort((first, second) => Date.parse(second.created_at) - Date.parse(first.created_at)).length}
                ctr={this.getCTR()}
                actions={[...analytics.clicks, ...analytics.impressions].sort((first, second) => Date.parse(second.created_at) - Date.parse(first.created_at))}
                firstColor="#ef5350"
                secondColor="#e53935"
              />
              <Card
                icon="fas fa-exchange-alt"
                dataType="Conversions"
                data={analytics.actionCount.conversions}
                actions={analytics.conversions}
                firstColor="#26c6da"
                secondColor="#00acc1"
                growth={analytics.growth.conversions || 0}
              />
            </div>
            <Graphs data={analytics.browserCount} />
            <div className="row-container">
              <Table 
                data={analytics.impressions}
                dataType="Impressions"
                growth={analytics.growth.impressions || 0}
              />
              <Table 
                data={analytics.clicks} 
                dataType="Clicks"
                growth={analytics.growth.clicks || 0}
              />
              <MapChart 
                data={this.getCityData()} 
              />
            </div>
          </>
        )}
      </PageContainer>
    );
  }
}

export default Analytics;
