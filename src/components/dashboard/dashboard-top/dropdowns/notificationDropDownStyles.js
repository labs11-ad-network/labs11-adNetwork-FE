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
    min-width: 49px;
  }

  .notif-list-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    i {
      font-size: 0.8rem;
      color: #6f6f6f;
      margin: 0 4px 0 15px;
    }
  }

  .notif-time {
    /* font-size: 0.7rem; */
  }
  @media (max-width: 560px) {
    /* width: 200px; */
  }
`;
