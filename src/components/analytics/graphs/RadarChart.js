import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { GraphContainer, GraphHeader } from "./GraphStyles.js";

const RadarChartContainer = props => {
  const data = props.data.map((offer, i) => {
    return { device: offer.device, actions: offer.count, fullMark: 100 };
  });

  return (
    <GraphContainer>
      <GraphHeader>
        <div>
          <h2>Devices</h2>
          <h3>based on all actions</h3>
        </div>
        <div>
          <h2 className="percentage">
            +23%
            <i className="fas fa-arrow-circle-up" />
          </h2>
        </div>
      </GraphHeader>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
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
    </GraphContainer>
  );
};

export default RadarChartContainer;
