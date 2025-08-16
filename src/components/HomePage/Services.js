import React from "react"
import styled from "styled-components"

function Services() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>SERVICES</HeaderText>
        <Header>
          We Deliver Exceptional Products and Services Around the World
        </Header>
      </TextWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  margin-top: 120px;
  padding-left: 50px;
  max-width: 1570px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 510px) {
    display: flex;
    padding-left: 0px;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid rgb(180, 180, 180);
  padding-left: 50px;
  margin-left: 50px;
`

export const HeaderText = styled.p`
  color: #000000;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.08em;
`

export const Header = styled.p`
  color: #000000;
  font-size: 24px;
  font-family: "Raleway", sans-serif;
  line-height: 1.8em;
  letter-spacing: 0.08em;
  width: 320px;
  border-left: 3px solid #000000;
  margin-left: -50px;
  padding-left: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    width: 90%;
  }
`

export default Services
