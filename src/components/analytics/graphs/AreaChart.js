import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import moment from "moment";

import { GraphContainer, GraphHeader } from './GraphStyles.js';
import { getPayouts, getPayments } from "../../../store/actions/stripeAction";

class RevenueChart extends PureComponent {
  componentDidMount = () => {
    if (this.props.currentUser.acct_type === "advertiser") {
      this.props.getPayments();
    } else {
      this.props.getPayouts();
    }
  };
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
        <AreaChart
          width={1250}
          height={300}
          data={
            this.props.currentUser.acct_type === "advertiser"
              ? this.props.payments
              : this.props.payouts
          }
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
  payouts: state.stripeReducer.payouts,
  payments: state.stripeReducer.payments,
  currentUser: state.authReducer.currentUser
});

export default connect(
  mapStateToProps,
  {
    getPayouts,
    getPayments
  }
)(RevenueChart);
