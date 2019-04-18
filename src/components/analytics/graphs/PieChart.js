import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";

import { GraphContainer, GraphHeader } from './graphStyles.js';

const PieLabels = styled.div`
    display: flex;
    margin: 10px;
    .label {
      display: flex;
      align-items: center;
      margin-right: 10px;
      .circle {
        width: 10px;
        height: 10px;
        border-radius: 5px;
      }
      .chrome {
        background-color: #0088fe;
      }
      .firefox {
        background-color: #ffbb28;
      }
      .safari {
        background-color: #00c49f;
      }
      .edge {
        background-color: #ff8042;
      }
      .other {
        background-color: gray;
      }
      .no-data{
        background-color: #ECEFF1;
      }
      p {
        margin-left: 5px;
        font-size: 0.7rem;
      }
    }
`;

export const BrowserInfo = props => {
  const data = Object.keys(props.data).filter(key => props.data[key] > 0).length ? [
    { name: "Chrome", value: props.data.chrome },
    { name: "Safari", value: props.data.safari },
    { name: "Firefox", value: props.data.firefox },
    { name: "Edge", value: props.data.edge },
    { name: "Other", value: props.data.other }
  ] : [ 
    { name: "Chrome", value: props.data.chrome },
    { name: "Safari", value: props.data.safari },
    { name: "Firefox", value: props.data.firefox },
    { name: "Edge", value: props.data.edge },
    { name: "Other", value: props.data.other },
    { name: "No Data Yet", value: 1 }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#686868", "#ECEFF1"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <GraphContainer>
      <GraphHeader  bottomBorder>
        <div>
          <h2>Browsers</h2>
          <h3>based on clicks and impressions</h3>
        </div>
      </GraphHeader>
      <PieChart width={225} height={225}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <PieLabels>
        {data.length === 5 ? 
        <>
          <div className="label">
            <div className="circle chrome" />
            <p>Chrome</p>
          </div>
          <div className="label">
            <div className="circle firefox" />
            <p>Firefox</p>
          </div>
          <div className="label">
            <div className="circle safari" />
            <p>Safari</p>
          </div>
          <div className="label">
            <div className="circle edge" />
            <p>Edge</p>
          </div>
          <div className="label">
            <div className="circle other" />
            <p>Other</p>
          </div>
        </> :
        <div className="label">
          <div className="circle no-data" />
          <p>No Data Yet</p>
        </div>
        }
      </PieLabels>
    </GraphContainer>
  );
};
