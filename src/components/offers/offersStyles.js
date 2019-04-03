import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 35px;
    div{
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 0 auto;
        h2{
            color: #6F6F6F;
            text-align: center;
            font-size: 1.5rem;
            margin: 10px 0;
        }
        input, button, select{
            font-size: 1.3rem;
            font-weight: 100;
            padding: 15px;
            margin-top: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
            &::placeholder{
                color: #999999;
            }
        }
        label{
            font-size: 1.2rem;
        }
        button{
            color: #FFFFFF;
            background-color: #0A88DC;
            margin-top: 15px;
            transition: .2s;
            &:hover{
                cursor: pointer;
                background-color: #086FB3;
            }
        }
        @media (max-width: 655px){
            width: 130%;
        }
    }
`;

export const OfferButton = styled.button`
    background-color: ${props => props.color};
    color: #FFFFFF;
    border: unset;
    padding: 5px 10px;
    margin-right: ${props => props.accepted && "5px"};
    border-radius: 4px;
    transition: .3s;
    &:hover{
        cursor: pointer;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
    }
`

export const OfferModalContainer = styled.div`
    position: absolute;
    top:0;
    left:0;
    z-index: 9999999999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
`;

export const OfferModalContent = styled.div`
    position: absolute;
    z-index: 99999999999;
    background-color: #FFFFFF;
    padding: 15px 10px;
    border-radius: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
    h1{
        font-size: 1.6rem;
        text-align: center;
        margin: 10px 0;
    }
`;

export const OfferModalButton = styled.button`
    background-color: #086FB3;
    color: #ffffff;
    font-size: 1rem;
    padding: 5px 25px;
    border: unset;
    transition: .2s;
    &:hover{
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

export const TabButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;