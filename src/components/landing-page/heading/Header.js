import React from 'react'
import styled from 'styled-components';
import Graphs from '../../../assets/graphs.png';
import Curve from '../../../assets/curve.svg'

const HeaderContainer = styled.div`
    background-color: #0A88DC;
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 85vh;
        margin: 0 auto;
    }
`;

const CurveComponent = styled.img`
    width: 100%;
    height: auto;    
    margin-top: -1px;
`;

const LeftSection = styled.div`
    color: #FFFFFF;
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
        width: 110%;
        height: auto
    }
`;

const Header = () => {
  return (
    <>
        <HeaderContainer>
            <div className="main">
                <LeftSection>
                    <h1>Creepy Ads</h1>
                    <p>We are a non creepy ad network that presents itself as actually very creepy.</p>
                    <div/>
                </LeftSection>
                <RightSection>
                    <img src={Graphs} alt="" draggable={false}/>
                </RightSection>
            </div>
        </HeaderContainer>
        <CurveComponent src={Curve} alt="" draggable={false} className="curve"/>
    </>
  )
}

export default Header