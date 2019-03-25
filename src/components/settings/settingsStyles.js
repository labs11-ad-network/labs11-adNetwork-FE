import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 400px;
    padding: 15px;
    margin: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);    
`;

export const ProfileCardTop = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    img{
        background-color: #0A88DC;
        width: 120px;
        height: 120px;
        margin: 0 15px 10px 0;
        border-radius: 70px;
        border: 1px solid rgba(0, 0, 0, 0.1)
    }
    div{
        h1{
            font-size: 1rem;
            font-weight: 600;
            margin-top: 5px;
        }
        h2{
            font-size: 1rem;
            font-weight: 500;
            margin-top: 8px;
            color: #7A7A7A;
        }
        h3{
            font-size: 1.2rem;
            margin-top: 4px;
        }
    }
`;

export const ProfileCardBottom = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    div{
        margin-top: 5px;
        h1{
            font-size: 1.3rem;
            margin: 8px;
        }
        h2{
            font-size: 0.8rem;
        }
    }

`;