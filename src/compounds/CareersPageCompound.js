import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Careers/Navbar'
import Header from '../components/Careers/Header'
import Location from '../components/Careers/Location'
import JobOpenings from '../components/Careers/JobOpenings'
import Cards from '../components/Careers/Cards'

function CareersPageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>

      <Location />
      <JobOpenings />
      <Cards />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  
`

export default CareersPageCompound;