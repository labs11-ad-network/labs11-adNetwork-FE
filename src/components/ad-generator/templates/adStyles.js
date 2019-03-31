import styled from "styled-components";

export const HorizontalBannerContainer = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 650px;
  height: 80px;
  padding: 10px;
  text-decoration: none;
  background-color: #F1F1F1;
  background-image: url(${props => props.ad.file || props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: ${props => props.ad.headline.size ? `${props.ad.headline.size}px` : "2.3rem"};
      margin-bottom: 5px;
      color: ${props => props.ad.headline.color};
      background-color: ${props => props.ad.headline.bg_color};
      font-weight: ${props => props.ad.headline.bold && "bold"};
      font-style: ${props => props.ad.headline.italic && "italic"};
      text-align: ${props => props.ad.headline.align};
    }
    h3 {
      font-size: ${props => props.ad.tagline.size ? `${props.ad.tagline.size}px` : "1rem"};
      margin-bottom: 2px;
      color: ${props => props.ad.tagline.color};
      background-color: ${props => props.ad.tagline.bg_color};
      font-weight: ${props => props.ad.tagline.bold && "bold"};
      font-style: ${props => props.ad.tagline.italic && "italic"};
      text-align: ${props => props.ad.tagline.align};
    }
    p {
      font-size: ${props => props.ad.message.size ? `${props.ad.message.size}px` : "0.8rem" };
      color: ${props => props.ad.message.color};
      background-color: ${props => props.ad.message.bg_color};
      font-weight: ${props => props.ad.message.bold && "bold"};
      font-style: ${props => props.ad.message.italic && "italic"};
      text-align: ${props => props.ad.message.align};
    }
  }
  button {
    font-size: ${props => `${props.ad.button.size}px` || "1rem"};
    border: unset;
    color: ${props => props.ad.button.color};
    text-decoration: none;
    background-color: ${props => props.ad.button.bg_color|| "transparent"};
    font-weight: ${props => props.ad.button.bold && "bold"};
    font-style: ${props => props.ad.button.italic && "italic"};
    text-align: ${props => props.ad.button.align};
    padding: 8px 15px;
    border-radius: 3px;
  }
`;

export const SquareBannerContainer = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  padding: 10px;
  text-decoration: none;
  background-color: #F1F1F1;
  background-image: url(${props => props.ad.file || props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: ${props => props.ad.headline.size ? `${props.ad.headline.size}px` : "2.3rem"};
      margin-bottom: 5px;
      color: ${props => props.ad.headline.color};
      background-color: ${props => props.ad.headline.bg_color};
      font-weight: ${props => props.ad.headline.bold && "bold"};
      font-style: ${props => props.ad.headline.italic && "italic"};
      text-align: ${props => props.ad.headline.align};
    }
    h3 {
      font-size: ${props => props.ad.tagline.size ? `${props.ad.tagline.size}px` : "1rem"};
      margin-bottom: 2px;
      color: ${props => props.ad.tagline.color};
      background-color: ${props => props.ad.tagline.bg_color};
      font-weight: ${props => props.ad.tagline.bold && "bold"};
      font-style: ${props => props.ad.tagline.italic && "italic"};
      text-align: ${props => props.ad.tagline.align};
    }
    p {
      font-size: ${props => props.ad.message.size ? `${props.ad.message.size}px` : "0.8rem" };
      color: ${props => props.ad.message.color};
      background-color: ${props => props.ad.message.bg_color};
      font-weight: ${props => props.ad.message.bold && "bold"};
      font-style: ${props => props.ad.message.italic && "italic"};
      text-align: ${props => props.ad.message.align};
    }
  }
  button {
    font-size: ${props => `${props.ad.button.size}px` || "1rem"};
    border: unset;
    color: ${props => props.ad.button.color};
    text-decoration: none;
    background-color: ${props => props.ad.button.bg_color|| "transparent"};
    font-weight: ${props => props.ad.button.bold && "bold"};
    font-style: ${props => props.ad.button.italic && "italic"};
    text-align: ${props => props.ad.button.align};
    padding: 8px 15px;
    border-radius: 3px;
  }
`;

export const VerticalBannerContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 80px;
  height: 650px;
  padding: 10px;
  text-decoration: none;
  background-color: #F1F1F1;
  background-image: url(${props => props.ad.file || props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 25px;
    h1 {
      font-size: ${props => props.ad.headline.size ? `${props.ad.headline.size}px` : "2.3rem"};
      margin-bottom: 5px;
      color: ${props => props.ad.headline.color};
      background-color: ${props => props.ad.headline.bg_color};
      font-weight: ${props => props.ad.headline.bold && "bold"};
      font-style: ${props => props.ad.headline.italic && "italic"};
      text-align: ${props => props.ad.headline.align};
    }
    h3 {
      font-size: ${props => props.ad.tagline.size ? `${props.ad.tagline.size}px` : "1rem"};
      margin-bottom: 2px;
      color: ${props => props.ad.tagline.color};
      background-color: ${props => props.ad.tagline.bg_color};
      font-weight: ${props => props.ad.tagline.bold && "bold"};
      font-style: ${props => props.ad.tagline.italic && "italic"};
      text-align: ${props => props.ad.tagline.align};
    }
    p {
      font-size: ${props => props.ad.message.size ? `${props.ad.message.size}px` : "0.8rem" };
      color: ${props => props.ad.message.color};
      background-color: ${props => props.ad.message.bg_color};
      font-weight: ${props => props.ad.message.bold && "bold"};
      font-style: ${props => props.ad.message.italic && "italic"};
      text-align: ${props => props.ad.message.align};
    }
  }
  button {
    width: 100%;
    border: unset;
    font-size: ${props => `${props.ad.button.size}px` || "1rem"};
    color: ${props => props.ad.button.color};
    text-decoration: none;
    background-color: ${props => props.ad.button.bg_color|| "transparent"};
    font-weight: ${props => props.ad.button.bold && "bold"};
    font-style: ${props => props.ad.button.italic && "italic"};
    text-align: ${props => props.ad.button.align};
    padding: 8px 0;
    border-radius: 3px;
  }
`;

export const PlainHorizontalContainer = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 650px;
  height: 80px;
  padding: 10px;
  text-decoration: none;
  background-color: #F1F1F1;
  background-image: url(${props => props.ad.file || props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

export const PlainSquareContainer = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  padding: 10px;
  text-decoration: none;
  background-color: #F1F1F1;
  background-image: url(${props => props.ad.file || props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

export const PlainVerticalContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 80px;
  height: 650px;
  padding: 10px;
  text-decoration: none;
  background-color: #F1F1F1;
  background-image: url(${props => props.ad.file || props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;
