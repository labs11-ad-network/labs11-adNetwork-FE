import styled from 'styled-components';

export const HorizontalBannerContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 650px;
    height: 80px;
    padding: 10px;
    color: ${props => props.text_color};
    background-color: black;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1{
            font-size: 2.3rem;
            margin-bottom: 5px;
        }
        h3{
            font-size: 1rem;
            margin-bottom: 2px;
        }
        p{
            font-size: 0.8rem;
        }
    }
    a{
        font-size: 1rem;
        color: ${props => props.btn_color};
        text-decoration: none;
        background-color: ${props => props.main_color};
        padding: 8px 15px;
        border-radius: 3px;
        transition: .2s;
        &:hover{
            opacity: 0.8;
        }
    }
`;

export const SquareBannerContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 250px;
    height: 250px;
    padding: 10px;
    color: ${props => props.text_color};
    background-color: black;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1{
            font-size: 2.3rem;
            margin-bottom: 5px;
        }
        h3{
            font-size: 1rem;
            margin-bottom: 2px;
        }
        p{
            font-size: 0.8rem;
        }
    }
    a{
        font-size: 1rem;
        color: ${props => props.btn_color};
        text-decoration: none;
        background-color: ${props => props.main_color};
        padding: 8px 15px;
        border-radius: 3px;
        transition: .2s;
        &:hover{
            opacity: 0.8;
        }
    }
`;

export const VerticalBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 80px;
    height: 650px;
    padding: 10px;
    color: ${props => props.text_color};
    background-color: black;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 25px;
        h1{
            font-size: 2.3rem;
            margin-bottom: 5px;
        }
        h3{
            font-size: 1rem;
            margin-bottom: 2px;
        }
        p{
            font-size: 0.8rem;
        }
    }
    a{
        width: 100%;
        font-size: 1rem;
        color: ${props => props.btn_color};
        text-decoration: none;
        background-color: ${props => props.main_color};
        padding: 8px 0;
        border-radius: 3px;
        transition: .2s;
        &:hover{
            opacity: 0.8;
        }
    }
`;