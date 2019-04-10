import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import moment from "moment";
import styled from 'styled-components';

import { GraphContainer, GraphHeader } from './GraphStyles.js';

const Chart = styled.div`
  height: 300px;
  width: 100%;
`;

class RevenueChart extends React.Component {
  render() {
    return (
      <GraphContainer>
          <GraphHeader>
            <div>
              <h2>Revenue</h2>
              <h3>growth over time</h3>
            </div>
            <div>
              <h2 className="percentage">+50%<i className="fas fa-arrow-circle-up"/></h2>
            </div>
          </GraphHeader>
          <Chart>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={this.props.data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                  }}
                >
                  <XAxis
                    dataKey={"created"}
                    tickFormatter={date => {
                      return moment.unix(date).format("MM/DD/YYYY");
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
                  {/* <Area
                    type="monotone"
                    dataKey="pv"
                    stackId="1"
                    stroke="#82ca9d"
                    fill="#48F39F"
                  /> */}
                </AreaChart>
            </ResponsiveContainer>
          </Chart>
      </GraphContainer>
    );
  }
}

export default RevenueChart;
