import styled from 'styled-components';

export const TourWelcome = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    .tour-header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 0;
        margin: 10px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        img{
            width: 75px;
            height: 75px;
        }
        h1{
            margin: 5px;
            font-size: 1.3rem;
        }
    }
    h2{
        font-size: 0.9rem;
        margin: 10px 0;
    }
    button{
        font-size: 0.9rem;
    }
`;