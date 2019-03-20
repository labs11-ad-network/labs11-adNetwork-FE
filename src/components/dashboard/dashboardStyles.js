import styled from 'styled-components';
// Left navigation styles

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    width: 65px;
    height: 100vh;
    background-color: #0A88DC;
`;

export const HamburgerButton = styled.button`
    width: 65px;
    height: 65px;
    border: unset;
    background-color: #0B6FB2;
    color: white;
    font-size: 1.7rem;
    transition: .2s;
    &:hover{
        cursor: pointer;
        background-color: #0B67A4;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 35px;
`;

export const NavButtonContainer = styled.div`
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 65px;
        height: 50px;
        margin: 10px 0;
        color: rgba(255, 255, 255, 0.70);
        transition: .3s;
        i{
            font-size: 1.8rem;  
        }
        &:hover{
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.1)
        }
    }
    .active{
        width: 62px;
        color: white;
        border-left: 3px solid white;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

// Top Nav Styles

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    select{
        color:  rgba(103, 103, 103, 0.5);
        width: 250px;
        padding: 8px 5px;
        border: 1px solid rgba(103, 103, 103, 0.5);
        border-radius: 8px;
        font-size: 0.9rem;
    }
    a{
        color: white;
        background-color: #0A88DC;
        padding: 8px 25px;
        margin: 0 15px;
        border: 1px solid rgba(103, 103, 103, 0.5);
        border-radius: 8px; 
        font-size: 0.9rem;
        text-decoration: none;
        transition: .2s;
        &:hover{
            background-color: #097AC6;
        }
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    i{
        color: #6F6F6F;
        font-size: 1.4rem;
        &:hover{
            cursor: pointer;
        }
    }
    div{
        display: flex;
        align-items: center;
        margin: 0 20px;
        img{
            background-color: #7A7A7A;
            height: 40px;
            width: 40px;
            margin-right: 8px;
            border: 1px solid rgba(103, 103, 103, 0.25);
            border-radius: 25px;
        }
        h2{
            color: #6F6F6F;
            margin: unset;
            font-size: 1.1rem;
            font-weight: 100;
        }
    }
`;

export const Header = styled.h1`
    color: #7A7A7A;
    margin: 0 20px;
    font-size: 1.3rem;
    font-weight: 500;
    i{
        margin-right: 5px;
    }
`;