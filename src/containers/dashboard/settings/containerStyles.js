import styled from "styled-components";

export const SettingsContainer = styled.div`
    display: flex;
    margin: 10px;
    .mobile-snippet{
        display: none;
    }
    @media (max-width: 1170px) {
        flex-direction: column;
        margin: unset;
        width: 95%;
        margin: 0 auto;
        .desktop-snippet{
            display: none;
        }
        .mobile-snippet{
            display: flex;
        }
    }
`;

export const BillingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 15px;
    @media (max-width: 1170px) {
        width: 100%;
        margin: 0 auto;
    }
`;