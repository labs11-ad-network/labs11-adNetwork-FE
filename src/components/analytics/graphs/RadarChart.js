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
      return props.data.map((c, i) => {
        return { category: c.category, actions: c.count, fullMark: 100 };
      });
    }
    else{
      return [
        {category: 0, fullMark: 100 },
        {category: 0, fullMark: 100 },
        {category: 0, fullMark: 100 },
        {category: 0, fullMark: 100 },
      ]
    }
  }

  const data = getData();

  return (
    <GraphContainer>
      <GraphHeader bottomBorder>
        <div>
          <h2>Best Categories</h2>
          <h3>based on all actions</h3>
        </div>
      </GraphHeader>
      <ResponsiveContainer width="90%" height="90%">
        <RadarChart
          outerRadius={160}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
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
