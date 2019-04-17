import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 420px;
  min-height: 200px;
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  @media (max-width: 1170px) {
    box-sizing: border-box;
    width: 100%;
    margin: 20px auto;
  }
`;

export const ProfileCardTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 900px) {
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 0 20px 0;
  }
  img {
    background-color: #0a88dc;
    width: 110px;
    height: 110px;
    margin: 0 15px 10px 0;
    border-radius: 70px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    object-fit: cover;
    @media (max-width: 900px) {
      margin: 10px auto;
    }
  }
  div {
    margin: auto 0;
    h1 {
      font-size: 1rem;
      font-weight: 600;
    }
    h2 {
      font-size: 1rem;
      font-weight: 500;
      margin-top: 8px;
      color: #7a7a7a;
    }
    h3 {
      font-size: 1.2rem;
      margin-top: 4px;
    }
    button {
      font-size: 0.8rem;
      width: 100%;
      margin-top: 10px;
      padding: 5px 0;
      background-color: #0a88dc;
      color: #ffffff;
      border: unset;
      border-radius: 3px;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        background-color: #097ac6;
      }
    }
  }
`;

export const ProfileCardBottom = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  div {
    margin-top: 5px;
    h1 {
      font-size: 1.3rem;
      margin: 8px;
    }
    h2 {
      font-size: 0.8rem;
    }
  }
`;

export const MainTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  min-height: 85vh;
  margin: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  @media (max-width: 1170px) {
    width: 100%;
    margin: 20px auto;
    min-height: 500px;
  }
  @media (max-width: 655px){
    .tab{
      width: 50%;
      margin-top: 0;
    }
  }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 35px;
    div{
        display: flex;
        flex-direction: column;
        width: 450px;
        margin: 0 auto;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        h2{
            color: #6F6F6F;
            text-align: center;
            font-size: 1.5rem;
            margin: 10px 0;
        }
        input, select, button{
            font-size: 1.1rem;
            font-weight: 100;
            padding: 8px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
            &::placeholder{
                color: #999999;
                font-weight: 100;
            }
        }
        button{
          color: #FFFFFF;
          background-color: #0A88DC;
          margin-top: 15px;
          transition: .2s;
          &:hover{
            cursor: pointer;
            background-color: #0B6FB2;
          }
        }
        label{
            font-size: 0.9rem;
            margin: 10px 8px 4px 0px;
            span{
                font-size: 0.6rem;
            }
        }
        @media (max-width: 655px){
            width: 100%;
        }
    }
    @media (max-width: 655px){
      width: 85%;
      padding: unset;
      margin: 15px auto;
    }
`;

export const BillingCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 41.5%;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  div {
    width: 100%;
    h1 {
      font-size: 0.9rem;
      font-weight: 100;
    }
    h2 {
      color: #0a88dc;
      font-size: 2rem;
      font-weight: 100;
      margin: 5px 0;
    }
    button {
      font-size: 0.8rem;
      width: 100%;
      padding: 5px 0;
      background-color: #0a88dc;
      color: #ffffff;
      border: unset;
      border-radius: 3px;
      transition: 0.2s;
      &:hover {
        cursor: pointer;
        background-color: #097ac6;
      }
    }
  }
  @media (max-width: 1170px) {
    width: 45%;
  }
  @media (max-width: 750px) {
    width: 42%;
  }
  @media (max-width: 470px) {
    width: 40%;
  }
`;

export const SnippetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 420px;
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  @media (max-width: 1170px) {
    box-sizing: border-box;
    width: 100%;
    margin: 0 0 15px 0;
  }
`;

export const Snippet = styled.div`
  margin: 5px 0;
  h1 {
    font-size: 0.9rem;
    font-weight: 100;
  }
  textarea {
    display: flex;
    overflow-y: hidden;
    resize: none;
    width: 390px;
    height: ${props => props.height || "50px"};
    margin: 7px auto;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 0.9rem;
    background-color: #f1f1f1;
  }
  @media (max-width: 1170px) {
    textarea {
      width: 92%;
      margin: 15px auto;
    }
  }
`;

export const TimelineItem = styled.div`
  padding: 0 0 25px 20px;
  margin: 0 0 -5px 95px;
  font-family: "Roboto", sans-serif;
  border-left: 4px solid #0a88dc;
  div {
    display: flex;
    align-items: center;
    margin-left: -119px;
    h2 {
      color: #ffffff;
      background-color: #0a88dc;
      text-align: center;
      width: 55px;
      padding: 5px 10px;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 100;
    }
    h1 {
      display: flex;
      font-size: 1.3rem;
      font-weight: 300;
      margin-bottom: 5px;
      div {
        width: 25px;
        height: 25px;
        margin: 0 10px;
        border-radius: 50px;
        background-color: #0a88dc;
        color: #ffffff;
      }
    }
  }
  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  p {
    font-size: 1rem;
    line-height: 1.2rem;
    margin: 5px 0;
    @media (max-width: 665px) {
      font-size: 0.9rem;
    }
  }
`;

export const TimelineContainerComponent = styled.div`
  margin: 20px;
`;

export const ToggleTour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  button {
    width: 450px;
    font-size: 1.1rem;
    font-weight: 100;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
    color: #ffffff;
    background-color: #0a88dc;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      background-color: #086fb3;
    }
    @media (max-width: 665px) {
      width: 85%;
    }
  }
`;
