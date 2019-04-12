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

import { GraphContainer, GraphHeader } from "./GraphStyles.js";

const TopTenOffers = props => {
  const data = props.data.map((offer, i) => {
    if (i <= 10) {
      return { name: offer.name, ctr: offer.ctr };
    }
    return null;
  });
  return (
    <GraphContainer>
      <GraphHeader bottomBorder>
        <div>
          <h2>Top Ranking Offers</h2>
          <h3>based on click through rate</h3>
        </div>
      </GraphHeader>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={400}
          height={250}
          data={data}
          margin={{
            right: 50,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ctr" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default TopTenOffers;
