import React, { PureComponent } from 'react'
import { Scatter, ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend} from 'recharts'
import styled from 'styled-components' 

const data01 = [
    {
      "x": 100,
      "y": 200,
      "z": 200
    },
    {
      "x": 120,
      "y": 100,
      "z": 260
    },
    {
      "x": 170,
      "y": 300,
      "z": 400
    },
    {
      "x": 140,
      "y": 250,
      "z": 280
    },
    {
      "x": 150,
      "y": 400,
      "z": 500
    },
    {
      "x": 110,
      "y": 280,
      "z": 200
    }
  ];
  const data02 = [
    {
      "x": 200,
      "y": 260,
      "z": 240
    },
    {
      "x": 240,
      "y": 290,
      "z": 220
    },
    {
      "x": 190,
      "y": 290,
      "z": 250
    },
    {
      "x": 198,
      "y": 250,
      "z": 210
    },
    {
      "x": 180,
      "y": 280,
      "z": 260
    },
    {
      "x": 210,
      "y": 220,
      "z": 230
    }
  ];

export default class AdvertisementChart extends PureComponent {
    componentDidMount() {

    }

    render() {
        return(
            <ScatterChart 
                width={600} 
                height={250}
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" range={[0, 100]} name="CTR" unit="%" />
                    <YAxis dataKey="y" name="Impressions" unit="" />
                    <ZAxis dataKey="z" name="Clicks" unit="" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="Advertisement A" data={data01} fill="#8884d8" />
                <Scatter name="Advertisement B" data={data02} fill="#82ca9d" />
            </ScatterChart>
        )
    }
}
