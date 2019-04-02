import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, Top, Bottom } from './cardStyles.js';

export const Card = ({
  firstColor,
  secondColor,
  icon,
  dataType,
  ctr,
  data,
}) => (
  <CardContainer>
    <div>
      <Top firstColor={firstColor} secondColor={secondColor}>
        <div className="left-section">
          <i className={icon} />
        </div>
        <div className="right-section">
          <h2>{dataType}</h2>
          <h1>{ctr ? `${ctr}%` : data || 0}</h1>
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

Card.propTypes = {
  firstColor: PropTypes.string,
  secondColor: PropTypes.string,
  icon: PropTypes.string,
  dataType: PropTypes.string,
  ctr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
};

export default Card;
