import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  @media (max-width: 1350px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (max-width: 1200px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
  .main-tables-container {
    width: 100%;
    display: flex;
    @media (max-width: 1200px) {
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
    }
  }

  .tables-container {
    display: flex;
    width: 100%;
    @media (max-width: 1200px) {
      box-sizing: border-box;
      flex-direction: column;
    }
  }

  .browser-chart {
    display: flex;
    width: 50%;
    @media (max-width: 1200px) {
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
    }
  }

  .top-offers-row {
    display: flex;
    width: 100%;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }

  @media (max-width: 1200px) {
    box-sizing: border-box;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
  }
`;