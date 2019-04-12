import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer 
} from "recharts";
import { GraphContainer, GraphHeader } from "./GraphStyles.js";

const RadarChartContainer = props => {

  const getData = () => {
    if(props.data.length){
      return props.data.map((offer, i) => {
        return { device: offer.device, actions: offer.count, fullMark: 100 };
      });
    }
    else{
      return [
        {actions: 0, fullMark: 100 },
        {actions: 0, fullMark: 100 },
        {actions: 0, fullMark: 100 },
        {actions: 0, fullMark: 100 },
      ]
    }
  }

  const data = getData();

  return (
    <GraphContainer>
      <GraphHeader bottomBorder>
        <div>
          <h2>Devices</h2>
          <h3>based on all actions</h3>
        </div>
      </GraphHeader>
      <ResponsiveContainer width="100%" height="90%">
        <RadarChart
          outerRadius={160}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="device" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="actions"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export default RadarChartContainer;
