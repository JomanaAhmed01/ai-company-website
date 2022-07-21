import React from 'react';
import styled from "styled-components"
import Navbar from '../components/About/Navbar'
import Header from '../components/About/Header'
import OurMission from '../components/About/OurMission'
import OurJourney from '../components/About/OurJourney'
import FoundersBg from '../components/About/FoundersBg'
import News from '../components/About/News'
import Footer from '../components/About/Footer'

function AboutPageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>

      <OurMission />
      <OurJourney />
      <FoundersBg />
      <News />
      <Footer />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  
`

export default AboutPageCompound;