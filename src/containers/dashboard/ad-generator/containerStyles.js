import styled from 'styled-components';

export const AdGeneratorContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin: 15px;
  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    margin-bottom: 15px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
    border-radius: 15px;
    h1{
      text-align: center;
      font-size: 1.5rem;
      margin: 15px 0;
    }
  }
`

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 700px;
    .ad-preview {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #ffffff;
      margin: 15px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
      border-radius: 15px;
      .ad-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 650px;
      }
      .controls{
        display: flex;
        flex-direction: column;
        justify-self: flex-end;
        width: 100%;
      }
    }
`

export const CreateAdButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  margin: 10px 0 0 0;
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