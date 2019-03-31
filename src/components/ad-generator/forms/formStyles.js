import styled from "styled-components";

export const TemplateSelectors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: #6f6f6f;
    text-align: center;
    font-size: 1.5rem;
    margin: 10px 0;
  }
  div {
    button {
      border-radius: 15px;
      background: #ffffff;
      border: 6px solid #f1f1f1;
      height: 140px;
      width: 140px;
      margin: 10px;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
`;

export const Form = styled.form`
  padding: 15px 35px;
  div {
    margin: 0 auto;
    button {
      display: block;
    }
    input,
    button,
    select {
      font-size: 1rem;
      font-weight: 100;
      padding: 5px;
      margin-top: 10px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
      &::placeholder {
        color: #999999;
      }
    }
    label {
      font-size: 1.2rem;
    }
    button {
      color: #ffffff;
      background-color: #0a88dc;
      margin-top: 15px;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        background-color: #086fb3;
      }
    }
  }
`;
