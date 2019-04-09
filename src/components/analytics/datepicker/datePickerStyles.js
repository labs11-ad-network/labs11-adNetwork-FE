import styled from 'styled-components';

export const DatePickerContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 11px 15px 0 10px;
`;

export const DatePickerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    transition: 0.2s;
    label{
        font-size: 0.7rem;
        font-weight: 500;
        margin-bottom: 2px;
        color: rgba(103,103,103,0.8);
        &:hover{
            cursor: pointer
        }
    }
    input{
        min-height: 26px;
        padding: 1px 5px;
        max-width: 130px;
        border: 1px solid rgba(103,103,103,0.2);
        border-radius: 4px;        
        transition: 0.2s;
        &:hover{
            cursor: pointer
        }
    }
    &:hover{
        cursor: pointer;
        input{
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
        }
    }
`;

export const DateFilterButton = styled.button`
    height: 30px;
    margin-left: 8px;
    padding: 3px 15px;
    max-width: 100px;
    border: unset;
    border-radius: 4px;
    color: white;
    background-color: #0A88DC;
    transition: 0.2s;
`;