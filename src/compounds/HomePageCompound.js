import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import Header from '../components/HomePage/Header'

function HomePageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>
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