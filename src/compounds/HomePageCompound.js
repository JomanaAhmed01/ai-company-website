import React from "react"
import styled from "styled-components"
import Navbar from "../components/HomePage/Navbar"
import Header from "../components/HomePage/Header"
import Vision from "../components/HomePage/Vision"
import Services from "../components/HomePage/Services"
import AutonomousDriving from "../components/HomePage/AutonomousDriving"
import RealTimeInfo from "../components/HomePage/RealTimeInfo"
import PercepEnabled from "../components/HomePage/PercepEnabled"
import WhyAutono from "../components/HomePage/WhyAutono"
import AutonoInNums from "../components/HomePage/AutonoInNums"
import Industry from "../components/HomePage/Industry"
import Careers from "../components/HomePage/Careers"
import Footer from "../components/HomePage/Footer"

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
  )
}

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%; /* not 100vw */
  box-sizing: border-box;
  transform: translateZ(0); /* triggers GPU layer */
  will-change: transform;
`

export const HeaderWrapper = styled.div`
  background-image: url("./img/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 840px;
`

// export const Vision = styled.div`
//   border: 3px solid red;
// `

// export const Services = styled.div`
//   border: 3px solid red;
// `

// export const AutonomousDriving = styled.div`
//   border: 3px solid red;
// `

// export const RealTimeInfo = styled.div`
//   border: 3px solid red;
// `

// export const PercepEnabled = styled.div`
//   border: 3px solid red;
// `

// export const WhyAutono = styled.div`
//   border: 3px solid red;
// `

// export const AutonoInNums = styled.div`
//   border: 3px solid red;
// `

// export const Industry = styled.div`
//   border: 3px solid red;
// `

// export const Careers = styled.div`
//   border: 3px solid red;
// `

// export const Footer = styled.div`
//   border: 3px solid red;
// `

export default HomePageCompound
