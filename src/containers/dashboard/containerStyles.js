import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  background-color: #f1f1f1;
  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    .dashboard-view {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
`;