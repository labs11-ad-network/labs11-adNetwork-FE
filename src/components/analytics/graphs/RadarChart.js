import React, { PureComponent } from 'react'
import { RadarChart, Legend, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts'
import styled from 'styled-components'


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
      "Advertisement": "Health & Wellness",
      "CTR": 30,
      "fullMark": 100
    },
    {
      "Advertisement": "Leisure",
      "CTR": 32,
      "fullMark": 100
    },
    {
      "Advertisement": "Business",
      "CTR": 86,
      "fullMark": 100
    }
  ]

export default class ImpressionGraph extends PureComponent {
    componentDidMount() {
    /*
        if (this.props.currentUser.acct_type === "advertiser") {
        
          } else {
    
          }
    */
    }

    render() {
      return (
        <RadarChart 
            outerRadius={90} 
            width={300} 
            height={300} 
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="Advertisement" />
            <PolarRadiusAxis 
                angle={30} 
                domain={[0, 100]} />
            <Radar name="Click Through Rate" dataKey="CTR" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
      )
    }
}