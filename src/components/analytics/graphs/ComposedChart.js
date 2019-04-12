import React, { PureComponent } from 'react';
import { XAxis,
         YAxis, 
         ComposedChart,
         CartesianGrid, 
         Legend, 
         Tooltip, 
         Area, 
         Line, 
         Bar,
         ResponsiveContainer 
        } from 'recharts'

import { GraphContainer, GraphHeader } from "./GraphStyles.js";

export default class ComposedOfferChart extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      console.log(this.props)

      const data = [
          {
              "name": "Offer A",
              "impressions": `${this.props.impressions}`,
              "clicks": `${this.props.clicks}`,
              "profit": `${this.props.payouts - this.props.payments}`
          }
      ]
    } 

    render() {
        return(     
            <GraphContainer>
                <GraphHeader>
                    <div>
                    <h2>Offer Value Over Time</h2>
                    </div>
                </GraphHeader>
                <ResponsiveContainer>
                <ComposedChart width={730} height={250} data={this.data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="profit" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="clicks" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="impressions" stroke="#ff7300" />
              </ComposedChart>
              </ResponsiveContainer>
            </GraphContainer>   
        )
    }
}