import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Technology/Navbar'
import Header from '../components/Technology/Header'
import HeaderText from '../components/Technology/HeaderText'
import TheAutonoCar from '../components/Technology/TheAutonoCar'
import TheAutonoCarText from '../components/Technology/TheAutonoCarText'
import TheAutonoDigitalProducts from '../components/Technology/TheAutonoDigitalProducts'

function TechnologyPageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>

      <HeaderText />
      <TheAutonoCar />
      <TheAutonoCarText />
      <TheAutonoDigitalProducts />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  background-image: url('./img/car-4.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 1060px;

  @media screen and (max-width: 650px) {
    height: 850px;
  }

  @media screen and (max-width: 505px) {
    height: 700px;
  }
`

export default TechnologyPageCompound;