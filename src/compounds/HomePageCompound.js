import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
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
  const [showBanner, setShowBanner] = React.useState(false)

  const toggleBanner = () => {
    setShowBanner(!showBanner)
  }

  const history = useHistory()

  return (
    <Wrapper>
      {showBanner && (
        <BannerWrapper>
          <ItemsWrapper>
            <CloseButton onClick={toggleBanner}>×</CloseButton>
            <TechnologyOption onClick={() => history.push("/")}>
              Technology
            </TechnologyOption>
            <AboutOption onClick={() => history.push("/")}>About</AboutOption>
            <CareersOption onClick={() => history.push("/")}>
              Careers
            </CareersOption>
            <SubscribeOption onClick={() => history.push("/")}>
              Subscribe
            </SubscribeOption>
          </ItemsWrapper>
        </BannerWrapper>
      )}

      <HeaderWrapper>
        <Navbar toggleBanner={toggleBanner} />
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
  max-width: 100%;
  box-sizing: border-box;
  transform: translateZ(0);
  will-change: transform;
`

export const HeaderWrapper = styled.div`
  background-image: url("./img/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 840px;
`

export const BannerWrapper = styled.div`
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  width: 100vw;
  height: 100vh;
  font-family: "Anton", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const ItemsWrapper = styled.p`
  height: 400px;
  background-color: #ffffff;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const TechnologyOption = styled.p`
  font-size: 20px;
  border: 1px solid #ffffff;
  color: #ffffff;
  background-color: #000000;
  padding: 10px 20px;
  border-radius: 7px;
  -webkit-tap-highlight-color: transparent;
`

export const AboutOption = styled.p`
  font-size: 20px;
  border: 1px solid #ffffff;
  color: #000000;
  -webkit-tap-highlight-color: transparent;
`

export const CareersOption = styled.p`
  font-size: 20px;
  border: 1px solid #ffffff;
  color: #000000;
  -webkit-tap-highlight-color: transparent;
`

export const SubscribeOption = styled.p`
  font-size: 20px;
  border: 1px solid #ffffff;
  color: #000000;
  -webkit-tap-highlight-color: transparent;
`

const CloseButton = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
`

export default HomePageCompound
