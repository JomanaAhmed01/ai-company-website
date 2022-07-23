import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Careers/Navbar'
import Header from '../components/Careers/Header'
import Location from '../components/Careers/Location'
import JobOpenings from '../components/Careers/JobOpenings'
import Cards from '../components/Careers/Cards'
import Footer from '../components/Careers/Footer'

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
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  
`

export default CareersPageCompound;