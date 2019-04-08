import styled from "styled-components";

export const ContactStyle = styled.div`
  /* contact contents  */
  .contact-title {
    text-align: center;
    margin-bottom: 50px;
    p {
      line-height: 1.45;
      color: #62748a;
      max-width: 350px;
      margin: 0 auto;
      font-size: 0.9rem !important;
      text-align: center;
      @media (min-width: 481px) {
        font-size: 1rem;
        max-width: 400px;
      }

      @media (min-width: 940px) {
        font-size: 1.2rem !important;
        max-width: 600px;
      }
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0;
      font-weight: 500;
      line-height: 1.7;
      color: #333;
      letter-spacing: -0.01em;

      @media (min-width: 481px) {
        font-size: 2rem;
      }

      @media (min-width: 940px) {
        font-size: 2.3rem;
      }
    }
  }

  /* form inputs  */
  .form-flex {
    display: flex;
    flex-direction: column;
    @media (min-width: 481px) {
      justify-content: center;
    }
    @media (min-width: 940px) {
      flex-direction: row;
      justify-content: initial;
    }
    img {
      max-width: 100%;
      display: block;
      margin-right: 132px;
      width: 235px;
      height: 224px;
      margin: 0 auto;
      @media (min-width: 481px) {
        width: 251px;
        height: 251px;
      }
      @media (min-width: 940px) {
        width: 392px;
        height: 329px;
        margin-right: 132px;
      }
    }
  }
  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    @media (min-width: 481px) {
      flex-direction: row;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 481px) {
      flex-direction: column;
      flex: 1;
    }
    @media (min-width: 940px) {
      flex-direction: row;
      .form-group:first-child {
        margin-right: 20px;
      }
    }
  }
  .form-group {
    display: flex;
    width: 100%;
    margin: 10px 0;
    @media (min-width: 481px) {
      margin: 20px 0;
    }
  }
  .form-control {
    font-size: 13px;
    color: #929292;
    height: 44px;
    padding: 5px 30px;
    border-radius: 27px;
    border: 1px solid #dcdcdc;
    font-weight: 300;
    display: block;
    width: 100%;
    @media (min-width: 481px) {
      height: 54px;
      font-size: 16px;
    }

    &:focus {
      outline: none !important;
      color: #2f353c;
      background-color: #fff;
      box-shadow: none;
      border-color: #005bea;
    }
  }
  textarea.form-control {
    height: auto;
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
  .contact-btn {
    display: block;
  }
`;
