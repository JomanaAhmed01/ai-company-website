import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import Header from '../components/HomePage/Header'
import Vision from '../components/HomePage/Vision'

function HomePageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>
      
      <Vision />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  background-image: url('./img/bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 840px;
`

export default HomePageCompound;