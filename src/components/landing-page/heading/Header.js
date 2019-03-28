import React from 'react'
import styled from 'styled-components';
import Graphs from '../../../assets/graphs.png';

const HeaderContainer = styled.div`
    background-color: #0A88DC;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LeftSection = styled.div`
    color: #FFFFFF;
    width: 35%;
    h1{
        font-size: 5.5rem;
        font-weight: 800;
    }
    p{
        margin-top: 10px;
        font-size: 1.6rem;
        font-weight: 100;
        line-height: 30px;
    }
    div{
        width: 65%;
        height: 2px;
        margin-top: 10px;
        background-color: #FFFFFF
    }
`;

const RightSection = styled.div`
    img{
        margin-top: 130px;
    }
`;

const Header = () => {
  return (
    <HeaderContainer>
        <LeftSection>
            <h1>Creepy Ads</h1>
            <p>We are a non creepy ad network that presents itself as actually very creepy.</p>
            <div/>
        </LeftSection>
        <RightSection>
            <img src={Graphs} alt="" draggable={false}/>
        </RightSection>
    </HeaderContainer>
  )
}

export default Header