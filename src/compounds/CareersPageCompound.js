import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Careers/Navbar'
import Header from '../components/Careers/Header'

function CareersPageCompound() {
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
  
`

export default CareersPageCompound;