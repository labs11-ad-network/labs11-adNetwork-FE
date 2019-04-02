import React from "react";
import { BrowserInfo } from "./PieChart";
import RevenueChart from "./AreaChart";
import styled from "styled-components";

const RowContainer = styled.div`
  display: flex;
`;

const Graphs = props => {
  return (
    <RowContainer>
      <RevenueChart />
      <BrowserInfo data={props.data} />
    </RowContainer>
  );
};

export default Graphs;
