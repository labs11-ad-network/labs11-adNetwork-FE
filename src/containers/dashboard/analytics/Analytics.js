import React, { Component } from "react";
import styled from "styled-components";
import { scaleLinear } from "d3-scale";
import { connect } from "react-redux";
import moment from "moment";

import { getAnalytics } from "../../../store/actions/analyticsAction.js";
import DatePicker from "../../../components/analytics/datepicker/DatePicker.js";
import { BrowserInfo } from "../../../components/analytics/graphs/PieChart";
import RevenueChart from "../../../components/analytics/graphs/AreaChart";
import Card from "../../../components/analytics/cards/Card.js";
import Table from "../../../components/analytics/tables/Table.js";
import MapChart from "../../../components/analytics/map/MapChart.js";
import TopTenOffers from "../../../components/analytics/graphs/TopTenOffers.js";
import RadarChart from "../../../components/analytics/graphs/RadarChart.js";
import DeviceChart from "../../../components/analytics/graphs/DeviceChart.js";

const CardContainer = styled.div`
  display: flex;
  @media (max-width: 1350px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (max-width: 1200px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  .main-tables-container {
    width: 100%;
    display: flex;
    @media (max-width: 1200px) {
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
    }
  }

  .tables-container {
    display: flex;
    width: 100%;
    @media (max-width: 1200px) {
      box-sizing: border-box;
      flex-direction: column;
    }
  }

  .browser-chart {
    display: flex;
    width: 50%;
    @media (max-width: 1200px) {
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
    }
  }

  .top-offers-row {
    display: flex;
    width: 100%;
    height: 500px;
    @media (max-width: 1200px) {
      width: 100%;
      height: unset;
      box-sizing: border-box;
      flex-direction: column;
    }
  }
  @media (max-width: 1200px) {
    box-sizing: border-box;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
  }
`;

class Analytics extends Component {
  state = {
    started_at: "",
    ended_at: ""
  };

  componentDidMount() {
    this.props.getAnalytics(this.props.currentAnalyticId);
    this.analyticsInterval = setInterval(() => {
      this.props.getAnalytics(
        this.props.currentAnalyticId,
        this.getQueryString()
      );
    }, 15000);
  }

  componentWillUnmount() {
    clearInterval(this.analyticsInterval);
  }

  getFilteredAnalytics = () => {
    this.props.getAnalytics(
      this.props.currentAnalyticId,
      this.getQueryString()
    );
  };

  getQueryString = () => {
    if (this.state.started_at && this.state.ended_at) {
      const started = `${moment(this.state.started_at).format(
        "YYYY-MM-DD"
      )}T00:00:00Z`;
      const ended = `${moment(this.state.ended_at).format(
        "YYYY-MM-DD"
      )}T23:59:00Z`;
      return `?started_at=${started}&ended_at=${ended}`;
    } else {
      return "";
    }
  };

  handleDateChange = (date, name) => {
    this.setState({ [name]: date });
  };

  getCTR = () => {
    const clicks = this.props.analytics.actionCount.clicks;
    const impressions = this.props.analytics.actionCount.impressions;

    const ctr = Math.round((clicks / impressions) * 100 * 100) / 100;

    return ctr || "0";
  };

  getCityData = () => {
    if (this.props.analytics.cities.length) {
      const range =
        this.props.analytics.actionCount.clicks +
        this.props.analytics.actionCount.impressions;
      return {
        cities: this.props.analytics.cities.map(city => {
          return {
            name: city.city,
            coordinates: [Number(city.longitude), Number(city.latitude)],
            population: city.num
          };
        }),
        cityScale: scaleLinear()
          .domain([0, range])
          .range([1, 25])
      };
    } else {
      return {
        cities: [],
        cityScale: {}
      };
    }
  };

  render() {
    const { analytics } = this.props;

    const { started_at, ended_at } = this.state;

    return (
      <>
        {analytics.length !== 0 && (
          <>
            <DatePicker
              startedAt={started_at}
              endedAt={ended_at}
              getFilteredAnalytics={this.getFilteredAnalytics}
              handleDateChange={this.handleDateChange}
            />
            <CardContainer>
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
                data={
                  [...analytics.clicks, ...analytics.impressions].sort(
                    (first, second) =>
                      Date.parse(second.created_at) -
                      Date.parse(first.created_at)
                  ).length
                }
                ctr={this.getCTR()}
                actions={[...analytics.clicks, ...analytics.impressions].sort(
                  (first, second) =>
                    Date.parse(second.created_at) - Date.parse(first.created_at)
                )}
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
            </CardContainer>
            <RowContainer>
              <RevenueChart
                data={
                  analytics.payments
                    ? analytics.payments
                    : analytics.payouts
                    ? analytics.payouts
                    : []
                }
                growth={analytics.stripeGrowth}
              />
              <div className="browser-chart">
                <BrowserInfo data={analytics.browserCount} />
              </div>
            </RowContainer>
            <RowContainer>
              <div className="main-tables-container">
                <div className="tables-container">
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
                </div>
                <MapChart data={this.getCityData()} />
              </div>
            </RowContainer>

            <RowContainer>
              <div className="top-offers-row">
                <TopTenOffers data={analytics.offersRanking} />
                <RadarChart data={analytics.categories} />
                <DeviceChart data={analytics.devices} />
              </div>
            </RowContainer>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  analytics: state.analyticsReducer.analytics
});

export default connect(
  mapStateToProps,
  {
    getAnalytics
  }
)(Analytics);
