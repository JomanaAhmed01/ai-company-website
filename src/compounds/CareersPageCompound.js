import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Careers/Navbar'
import Header from '../components/Careers/Header'
import Location from '../components/Careers/Location'

function CareersPageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>

      <Location />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  
`

export default CareersPageCompound;