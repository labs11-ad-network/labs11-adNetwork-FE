import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 24%;
  margin: 40px 15px 15px 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  @media (max-width: 1370px){
    width: 47%;
  }
  @media (max-width: 1083px){
    width: 46%;
  }
  @media (max-width: 800px){
    width: 100%;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 25px 0;
  margin: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .left-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95px;
    height: 95x;
    margin-top: -35px;
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

export const Bottom = styled.div`
  padding: 0 15px 15px 15px;
  h1 {
    font-size: 0.8rem;
    color: #6f6f6f;
    i {
      margin-right: 4px;
    }
  }
`;