import React from 'react';
import styled from "styled-components"
import Navbar from '../components/About/Navbar'
import Header from '../components/About/Header'

function AboutPageCompound() {
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
  height: 1060px;

  @media screen and (max-width: 650px) {
    height: 850px;
  }

  @media screen and (max-width: 505px) {
    height: 700px;
  }
`

export default AboutPageCompound;