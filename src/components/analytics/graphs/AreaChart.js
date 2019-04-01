import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getPayouts } from "../../../store/actions/stripeAction";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import styled from "styled-components";
import moment from "moment";

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: auto;
  border-radius: 8px;
  margin: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  .labels {
    display: flex;
    margin: 10px;
    .label {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }
`;

const data = [
  {
    name: "Mon",
    uv: 4000
  },
  {
    name: "Tue",
    uv: 3000
  },
  {
    name: "Wed",
    uv: 2000
  },
  {
    name: "Thur",
    uv: 2780
  },
  {
    name: "Fri",
    uv: 1890
  },
  {
    name: "Sat",
    uv: 2390
  },
  {
    name: "Sun",
    uv: 3490
  }
];

class RevenueChart extends PureComponent {
  componentDidMount = () => {
    this.props.getPayouts();
  };
  render() {
    console.log(this.props);
    return (
      <GraphContainer>
        <AreaChart
          width={1300}
          height={300}
          data={this.props.payouts}
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
              console.log(date);
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
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#48F39F"
          />
        </AreaChart>
      </GraphContainer>
    );
  }
}

const mapStateToProps = state => ({
  payouts: state.stripeReducer.payouts
});

export default connect(
  mapStateToProps,
  {
    getPayouts
  }
)(RevenueChart);
