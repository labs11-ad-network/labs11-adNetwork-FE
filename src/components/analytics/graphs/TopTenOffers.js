import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import styled from "styled-components";

import { GraphContainer, GraphHeader } from "./graphStyles.js";

const Chart = styled.div`
  height: 350px;
  width: 99%;
  @media (max-width: 780px) {
    height: 250px;
  }
`;

const TopTenOffers = props => {
  let data;
  if (props.data.length) {
    props.data.length = 10;

    data = props.data.map(offer => {
      return { name: offer.name, ctr: offer.ctr };
    });
  } else {
    data = [
      { name: "No Data Yet", ctr: 0 }
    ];
  }

  return (
    <GraphContainer>
      <GraphHeader bottomBorder>
        <div>
          <h2>Top Ranking Offers</h2>
          <h3>based on click through rate</h3>
        </div>
      </GraphHeader>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            height={250}
            data={data}
            margin={{
              right: 50
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="ctr" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Chart>
    </GraphContainer>
  );
};

export default TopTenOffers;
