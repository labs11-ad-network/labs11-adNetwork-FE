import styled from 'styled-components';

export const AdGeneratorContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    margin: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
    border-radius: 15px;
    width: 50%;
`

export const RightSection = styled.div`
    width: 50%;
    .template-selector {
      display: flex;
      background-color: #ffffff;
      margin: 15px;
      padding: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
      border-radius: 15px;
      justify-content: center;
    }
    .ad-preview {
      display: flex;
      background-color: #ffffff;
      margin: 15px;
      min-height: 670px;
      padding: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
      border-radius: 15px;
      padding: 25px;
      justify-content: center;
      align-items: center;
    }
`

export const CreateAdButton = styled.button`
  display: flex;
  justify-content: center;
  width: 96.5%;
  margin:  0 15px 15px 15px;
  padding: 20px 0;
  border-radius: 8px;
  border: unset;
  font-size: 1.2rem;
  font-weight: 100;
  color: #ffffff;
  background-color: #0a88dc;
  transition: 0.2s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  &:hover {
    cursor: pointer;
    background-color: #086fb3;
  }
`;

export const NoOffersContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  height: 100%;
  margin: auto;
  font-size: 2.2rem;
  font-weight: 100;
  line-height: 2.8rem;
  a{
    margin: 15px;
    padding: 5px 25px;
    border: unset;
    border-radius: 4px;
    font-size: 1.1rem;
    font-weight: 100;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4); 
    color: #FFFFFF;
    background-color: #0A88DC; 
    transition: .2s;
    &:hover{
      cursor: pointer;
      background-color: #0B6FB1;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2); 
    }
  }
`;