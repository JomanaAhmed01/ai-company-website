import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function AutonomousDriving() {
  const history = useHistory()

  return (
    <Wrapper>
      <TextWrapper>
        <Header>AUTONOMOUS DRIVING</Header>
        <Text>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </Text>
        <ButtonWrapper onClick={() => history.push("/TechnologyPageCompound")}>
          <Button>Read More</Button>
          <Arrow />
        </ButtonWrapper>
      </TextWrapper>

      <ImageWrapper>
        <Image src="./img/car-2.png" />
      </ImageWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 120px;
  max-width: 2300px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  margin-top: -100px;
  margin-left: 150px;

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`

export const Header = styled.p`
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  letter-spacing: 0.08em;
  line-height: 60px;
  width: 340px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

export const Text = styled.p`
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  letter-spacing: 0.05em;
  line-height: 30px;
  width: 355px;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  border: 1px solid #000000;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 50px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`

export const Button = styled.p`
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  letter-spacing: 0.05em;
  padding-right: 20px;
`

export const Arrow = styled(ArrowRight)`
  width: 30px;
  height: 30px;
`

export const ImageWrapper = styled.div``

export const Image = styled.img`
  width: 100%;

  @media screen and (max-width: 1024px) {
  }
`

export default AutonomousDriving
