import styled from 'styled-components';

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: rgb(10, 136, 220, 0.18);
    div{
        margin-bottom: 5px;
    }
`;

export const SliderLabels = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -20px;
    color: #0A88DC;
    font-size: 0.7rem;
    .text-label{
        font-size: 0.8rem;
        margin-top: 5px;
    }
`

export const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #0A88DC;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const BottomMiddle = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    height: 50%;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        margin: 0 3px;
        border-radius: 25px;
        background-color: unset;
        border: unset;
        color: #FFFFFF;
        font-size: 1.8rem;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.34);
        transition: .2s;
        &:hover{
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.34) 
        }
    }
`;

export const BottomRight = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 25%;
    margin: 10px;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        font-size: 0.7rem;
        margin-left: 15px;
        input{
            background-color: unset; 
            height: 45px;
            width: 40px;
            padding: unset;
            border: unset;
            border-radius: 4px;
        }
    }
`;

export const BottomLeft = styled.div`
    display: flex;
    width: 25%;
    button{
        width: 90px;
        height: 100px;
        border-bottom-left-radius: 15px;
        font-size: 2rem;
        background-color: #097AC6;        
        border: unset;
        color: #FFFFFF;
        transition: .2s;
        &:hover{
            cursor: pointer;
            background-color: #086FB3;
        }
    }
`;