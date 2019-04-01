import styled from "styled-components";

export const TemplateSelectors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 15px;
  h2 {
    color: #6f6f6f;
    text-align: center;
    font-size: 1.5rem;
    margin: 10px 0;
  }
  button {
    border-radius: 15px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    background: #F1F1F1;
    height: 110px;
    width: 110px;
    margin: 10px;
    transition: .2s;
    &:hover{
      cursor: pointer;
    }
    &:focus{
      outline: none;
      border: 5px solid #16B7FF;
    }
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 93%;
  height: 100%;
  margin : 25px auto;
  h2{
    font-size: 1.4rem;
    text-align: center;
  }
  .form-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  input, select{
    font-size: 1rem;
    font-weight: 100;
    width: 100%;
    padding: 15px 10px;
    margin-top: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
    &::placeholder {
      color: #999999;
    }
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 5px 0 12px;
    h3{
      margin-bottom: 2px;
      font-size: .7rem;
    }
    button{
      width: 30px;
      height: 30px;
      border: unset;
      border-radius: 4px;
      background-color: ${props => props.select ? "#0A88DC" : "#7A7A7A"};
      transition: .2s;
      &:hover{
        cursor: pointer;
        background-color: #086FB3;
      }
    } 
  }
`;

export const ImageUpload = styled.input`
  height: 20%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);  
  &:hover{
    cursor: pointer;
  }
`;


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