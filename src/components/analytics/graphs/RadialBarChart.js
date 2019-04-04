import React, { PureComponent } from 'react'
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";
import styled from "styled-components";

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
"name": "18-24",
"uv": 31.47,
"pv": 2400,
"fill": "#0088FE"
},
{
"name": "25-34",
"uv": 26.69,
"pv": 4567,
"fill": "#00C49F"
},
{
"name": "35-43",
"uv": -15.69,
"pv": 1398,
"fill": "#FFBB28"
},
{
"name": "44-60",
"uv": 8.22,
"pv": 9800,
"fill": "#FF8042"
},
{
"name": "60+",
"uv": -8.63,
"pv": 3908,
"fill": "#686868"
}]

export default class DemographicBarChart extends PureComponent {
  componentDidMount() {
    console.log('rendered')
  }

  render() {
    return(
    <GraphContainer>
      <RadialBarChart
        width={450}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={360}
        endAngle={0}
      >
        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
        <Tooltip />
      </RadialBarChart>
    </GraphContainer>
  )}
}
