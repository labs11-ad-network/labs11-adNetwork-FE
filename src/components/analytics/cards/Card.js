import React from "react";
import moment from "moment";

import { 
  CardContainer,
  Top,
  Bottom
} from './cardStyles.js';

export const Card = props => {
  return (
    <CardContainer>
      <div>
        <Top firstColor={props.firstColor} secondColor={props.secondColor}>
          <div className="left-section">
            <i className={props.icon} />
          </div>
          <div className="right-section">
            <h2>{props.dataType}</h2>
            <h1>{props.ctr ? `${props.ctr}%` : props.data || 0}</h1>
          </div>
        </Top>
        <Bottom>
          <h1>
            <i className="far fa-clock" />
            {/* {props.data ?
            `Last ${props.data.pop().action} ${moment(
              props.data.pop().created_at,
              "YYYY-MM-DO, hh:mm:ss Z"
            ).fromNow()}`:
              'No data yet :('
            } */}
          </h1>
        </Bottom>
      </div>
    </CardContainer>
  );
};

export default Card;
