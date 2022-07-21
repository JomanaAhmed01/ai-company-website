import React from 'react';
import styled from "styled-components"
import Navbar from '../components/About/Navbar'
import Header from '../components/About/Header'
import OurMission from '../components/About/OurMission'
import OurJourney from '../components/About/OurJourney'

function AboutPageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>

      <OurMission />
      <OurJourney />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  
`

export default AboutPageCompound;