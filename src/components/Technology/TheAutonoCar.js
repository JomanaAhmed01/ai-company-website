import React from "react"
import styled from "styled-components"
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function TheAutonoCar() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>THE AUTONO CAR</HeaderText>
        <Header>
          Using groundbreaking perception-enabled sensor technology, the Autono
          car is a fully driverless vehicle engineered to the highest degree of
          precision and safety. It’s autonomous driving reimagined.
        </Header>
      </TextWrapper>

      <ImageWrapper>
        <Image src="./img/car-5.png" />
      </ImageWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-color: #000000;
  border: 1px solid transparent;
  height: 850px;
  width: 100%;
  padding-bottom: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 1350px;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid rgb(180, 180, 180);
  padding-left: 50px;
  margin-left: 50px;
  height: 400px;

  @media screen and (max-width: 1024px) {
    margin-top: 150px;
    height: 350px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    margin-left: 20px;
  }
`

export const HeaderText = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.08em;
`

export const Header = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-family: "Raleway", sans-serif;
  line-height: 1.8em;
  letter-spacing: 0.08em;
  width: 375px;
  border-left: 3px solid #ffffff;
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

export const ImageWrapper = styled.div``

export const Image = styled.img`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export default TheAutonoCar
