import styled from 'styled-components';

export const HorizontalBannerContainer = styled.a`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 650px;
    height: 80px;
    padding: 10px;
    text-decoration: none;
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
    button{
        font-size: 1rem;
        border: unset;
        color: ${props => props.btn_text_color};
        text-decoration: none;
        background-color: ${props => props.btn_color || 'transparent'};
        padding: 8px 15px;
        border-radius: 3px;
        transition: .2s;
        &:hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
`;

export const SquareBannerContainer = styled.a`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 250px;
    height: 250px;
    padding: 10px;
    text-decoration: none;
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
    button{
        font-size: 1rem;
        border: unset;
        color: ${props => props.btn_text_color};
        text-decoration: none;
        background-color: ${props => props.btn_color || 'transparent'};
        padding: 8px 15px;
        border-radius: 3px;
        transition: .2s;
        &:hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
`;

export const VerticalBannerContainer = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 80px;
    height: 650px;
    padding: 10px;
    text-decoration: none;
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
    button{
        width: 100%;
        border: unset;
        font-size: 1rem;
        color: ${props => props.btn_text_color};
        text-decoration: none;
        background-color: ${props => props.btn_color || 'transparent'};
        padding: 8px 0;
        border-radius: 3px;
        transition: .2s;
        &:hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
`;

export const PlainHorizontalContainer = styled.a`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 650px;
    height: 80px;
    padding: 10px;
    text-decoration: none;
    color: ${props => props.text_color};
    background-color: black;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

export const PlainSquareContainer = styled.a`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 250px;
    height: 250px;
    padding: 10px;
    text-decoration: none;
    color: ${props => props.text_color};
    background-color: black;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;

export const PlainVerticalContainer = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 80px;
    height: 650px;
    padding: 10px;
    text-decoration: none;
    color: ${props => props.text_color};
    background-color: black;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
`;