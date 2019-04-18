import styled from "styled-components";
// Notification Dropdown

export const Container = styled.div`
  padding: 10px;
  .see-more-link {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
  }

  .button-margin-fix {
    margin-right: 0;
    padding-right: 0;
    padding-left: 0;
    min-width: 0px;
  }

  .notif-list-item {
    display: flex;
    flex-direction: column;
    height: 35px;
    align-items: flex-start;
  }

  .notif-time {
    font-size: 0.6rem;
    i {
      font-size: 0.6rem;
      color: #6f6f6f;
      margin-right: 5px;
    }
  }
  @media (max-width: 560px) {
    /* width: 200px; */
  }
`;
