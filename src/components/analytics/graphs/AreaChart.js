import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import moment from "moment";
import styled from "styled-components";

import { GraphContainer, GraphHeader } from "./graphStyles.js";

const Chart = styled.div`
  height: 300px;
  width: 99%;
  @media (max-width: 780px) {
    height: 200px;
  }
`;

class RevenueChart extends React.Component {
  render() {
    const { growth } = this.props;
    const data = this.props.data.length ? this.props.data : [ { created: "no data yet", amount: "no data yet" } ];

    return (
      <GraphContainer>
        {/* ------------------------------  Graph Header ------------------------------ */}
        <GraphHeader bottomBorder>
          <div>
            <h2>Revenue</h2>
            <h3>growth over time</h3>
          </div>
          <div>
            <h2 className="percentage">
              +{growth}%
              <i className="fas fa-arrow-circle-up" />
            </h2>
          </div>
        </GraphHeader>
        {/* ------------------------------ Chart ------------------------------ */}
        <Chart>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 50,
                left: 0,
                bottom: 0
              }}
            >
              <XAxis
                dataKey={"created"}
                tickFormatter={date => {
                  const time = moment.unix(date).format("MM/DD/YYYY");
                  return time.includes("Invalid date") ? "No Data Yet" : time;
                }}
              />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="amount"
                stackId="1"
                stroke="#8884d8"
                fill="#2C7AFC"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Chart>
      </GraphContainer>
    );
  }
}

export default RevenueChart;
