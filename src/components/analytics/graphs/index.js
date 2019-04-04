import React from "react";
import { BrowserInfo } from "./PieChart";
import RevenueChart from "./AreaChart";
import styled from "styled-components";
import ImpressionGraph from "./RadarChart";
import DemographicBarChart from "./RadialBarChart";
import AdvertisementChart from "./ScatterChart";

const RowContainer = styled.div`
  display: flex;
`;

const Graphs = props => {
  return (
    <>
    <RowContainer>
      <RevenueChart />
      <BrowserInfo data={props.data} />
    </RowContainer>
   
    <RowContainer>
      <ImpressionGraph />
      <DemographicBarChart />
      <AdvertisementChart />
    </RowContainer>
    </>
  );
};

export default Graphs;
