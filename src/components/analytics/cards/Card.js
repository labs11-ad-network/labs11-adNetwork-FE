import React from "react";
import styled from "styled-components";
import moment from "moment";

const CardContainer = styled.div`
  width: 400px;
  margin: 40px 15px 15px 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 25px 0;
  margin: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .left-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin-top: -25px;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    background: ${props =>
      `linear-gradient(60deg, ${props.firstColor}, ${props.secondColor})`};
    i {
      color: #ffffff;
      font-size: 2.5rem;
    }
  }
  .right-section {
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-top: 10px;
    h2 {
      color: #7a7a7a;
      font-weight: 100;
      font-size: 1.2rem;
    }
    h1 {
      color: #3c4858;
      font-size: 1.5rem;
      margin-top: 10px;
    }
  }
`;

const Bottom = styled.div`
  padding: 0 15px 15px 15px;
  h1 {
    font-size: 0.8rem;
    color: #6f6f6f;
    i {
      margin-right: 4px;
    }
  }
`;

export const Card = props => {
  if (!props.data.length) {
    return <h1>NO DATA</h1>;
  }
  return (
    <CardContainer>
      <div>
        <Top firstColor={props.firstColor} secondColor={props.secondColor}>
          <div className="left-section">
            <i className={props.icon} />
          </div>
          <div className="right-section">
            <h2>{props.dataType}</h2>
            <h1>{props.data.length}</h1>
          </div>
        </Top>
        <Bottom>
          <h1>
            <i className="far fa-clock" />

            {`Last ${props.data.pop().action} ${moment(
              props.data.pop().created_at,
              "YYYY-MM-DO, hh:mm:ss Z"
            ).fromNow()}`}
          </h1>
        </Bottom>
      </div>
    </CardContainer>
  );
};

export default Card;
