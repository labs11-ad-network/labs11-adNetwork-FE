import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
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
      <GraphHeader>
        <div>
          <h2>Top Ranking Offers</h2>
          <h3>based on click through rate</h3>
        </div>
        <div>
          <h2 className="percentage">
            +23%
            <i className="fas fa-arrow-circle-up" />
          </h2>
        </div>
      </GraphHeader>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ctr" fill="#82ca9d" />
      </BarChart>
    </GraphContainer>
  );
};

export default TopTenOffers;
