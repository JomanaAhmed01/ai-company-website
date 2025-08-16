import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import Navbar from "../components/Subscribe/Navbar"
import Subscribe from "../components/Subscribe/Subscribe"

function SubscribePageCompound() {
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
            <TechnologyOption
              onClick={() => history.push("/TechnologyPageCompound")}
            >
              Technology
            </TechnologyOption>
            <AboutOption onClick={() => history.push("/AboutPageCompound")}>
              About
            </AboutOption>
            <CareersOption onClick={() => history.push("/CareersPageCompound")}>
              Careers
            </CareersOption>
            <SubscribeOption
              onClick={() => history.push("/SubscribePageCompound")}
            >
              Subscribe
            </SubscribeOption>
          </ItemsWrapper>
        </BannerWrapper>
      )}

      <Navbar toggleBanner={toggleBanner} />
      <Subscribe />
    </Wrapper>
  )
}

export const Wrapper = styled.div``

export const HeaderWrapper = styled.div``

export const BannerWrapper = styled.div`
  /* position: fixed;
  top: 0;
  left: 0; */
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
  color: #000000;
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
  color: #ffffff;
  background-color: #000000;
  padding: 10px 20px;
  border-radius: 7px;
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

export default SubscribePageCompound
