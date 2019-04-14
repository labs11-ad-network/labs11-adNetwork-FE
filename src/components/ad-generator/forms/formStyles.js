import styled from "styled-components";

export const TemplateSelectors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 10px 0;
`;

export const TemplateButton = styled.button`
  border-radius: 15px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  background: #F1F1F1;
  height: 110px;
  width: 110px;
  margin: 10px;
  transition: .2s;
  border: ${props => props.selected === props.value && "5px solid #16B7FF"};
  &:hover{
    cursor: pointer;
  }
  &:focus{
    outline: none;
  }
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 93%;
  height: 100%;
  margin : 0 auto 20px auto;
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
  height: 50px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);  
  &:hover{
    cursor: pointer;
  }
`;