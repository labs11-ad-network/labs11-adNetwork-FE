import styled from "styled-components";

export const ContactStyle = styled.div`
  .form-flex {
    display: flex;
    img {
      max-width: 100%;
      display: block;
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid red;
  }
  .row {
    display: flex;
  }
  .form-control {
    font-size: 16px;
    color: #929292;
    height: 54px;
    border-radius: 27px;
    border: 1px solid #dcdcdc;
    padding: 5px 30px;
    font-weight: 300;
    display: block;
    width: 100%;
  }
  .form-control #email {
    flex: 1;
  }
  .contact-btn {
    display: block;
  }
  textarea.form-control {
    height: auto;
  }
  .form-group {
    flex: auto;
  }
  textarea {
    overflow: auto;
    resize: vertical;
    flex-direction: column;
    cursor: text;
    -webkit-appearance: textarea;
    -webkit-rtl-ordering: logical;
    font: 400 11px system-ui;
    text-align: start;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    letter-spacing: normal;
    text-rendering: auto;
  }
`;
