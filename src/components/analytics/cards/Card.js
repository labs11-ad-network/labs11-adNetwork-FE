import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 400px;
  margin: 40px 15px 15px 15px;
  border-radius: 8px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 25px 0;
  margin: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .left-section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin-top: -25px;
    border-radius: 3px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    background: ${props => `linear-gradient(60deg, ${props.firstColor}, ${props.secondColor})`};
    i{
      color: #FFFFFF;
      font-size: 2.5rem;
    }
  }
  .right-section{
    display: flex;
    flex-direction: column;
    text-align: end;
    margin-top: 10px;
    h2{
      color: #7A7A7A;
      font-weight: 100;
      font-size: 1.2rem;
    }
    h1{
      color: #3C4858;
      font-size: 1.5rem;
      margin-top: 10px;
    }
  }
`;

const Bottom = styled.div`
  padding: 0 15px 15px 15px;
  h1{
    font-size: 0.8rem;
    color: #6F6F6F;
    i{
      margin-right: 4px;
    }
  }
`;

export const Card = props => {
  return (
    <CardContainer>
      <div>
        <Top firstColor={props.firstColor} secondColor={props.secondColor}>
          <div className="left-section">
            <i className={props.icon}/>
          </div>
          <div className="right-section">
            <h2>{props.dataType}</h2>
            <h1>{props.data}</h1>
          </div>
        </Top>
        <Bottom>
          <h1><i className="far fa-clock"/>updated 5 minutes ago</h1>
        </Bottom>
      </div>
    </CardContainer>
  )
}

export default Card;