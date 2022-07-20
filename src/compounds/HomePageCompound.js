import React from 'react';
import styled from "styled-components"
import Navbar from '../components/HomePage/Navbar'
import Header from '../components/HomePage/Header'
import Vision from '../components/HomePage/Vision'
import Services from '../components/HomePage/Services'
import AutonomousDriving from '../components/HomePage/AutonomousDriving'
import RealTimeInfo from '../components/HomePage/RealTimeInfo'
import PercepEnabled from '../components/HomePage/PercepEnabled'
import WhyAutono from '../components/HomePage/WhyAutono'
import AutonoInNums from '../components/HomePage/AutonoInNums'
import Industry from '../components/HomePage/Industry'
import Careers from '../components/HomePage/Careers'
import Footer from '../components/HomePage/Footer'

function HomePageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
        <Header />
      </HeaderWrapper>
      
      <Vision />
      <Services />
      <AutonomousDriving />
      <RealTimeInfo />
      <PercepEnabled />
      <WhyAutono />
      <AutonoInNums />
      <Industry />
      <Careers />
      <Footer />
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