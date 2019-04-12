import React from "react";
import styled from "styled-components";

import notFound from "../../assets/page-not-found-404.svg";

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

const NotFound = () => {
  return <Img src={notFound} alt="404 not found" />;
};

export default NotFound;
