import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 35px;
    div{
        display: flex;
        flex-direction: column;
        width: 350px;
        margin: 0 auto;
        h2{
            color: #6F6F6F;
            text-align: center;
            font-size: 1.5rem;
            margin: 10px 0;
        }
        input, select{
            font-size: 1.1rem;
            font-weight: 100;
            padding: 8px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
            &::placeholder{
                color: #999999;
            }
        }
        label{
            font-size: 0.9rem;
            margin: 10px 8px 4px 0px;
            span{
                font-size: 0.6rem;
            }
        }
        @media (max-width: 655px){
            width: 100%;
        }
    }
`;

export const OfferButton = styled.button`
    background-color: ${props => props.color};
    color: #FFFFFF;
    border: unset;
    padding: 5px 10px;
    margin-right: ${props => props.first && "5px"};
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
    background-color: rgba(0,0,0,0.5);
`;

export const OfferModalContent = styled.div`
    position: absolute;
    z-index: 99999999999;
    background-color: #FFFFFF;
    margin: unset;
    border-radius: 4px;
    box-shadow: 0 2px 50px rgba(0, 0, 0, 0.35);
    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-size: 2.125rem;
        font-weight: 400;
        margin: unset;
        height: 110px;
        color: #FFFFFF;
        background-color: #0A88DC;
        text-align: center;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 15px 30px 10px 0;
    button{
        margin-right: 10px;
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