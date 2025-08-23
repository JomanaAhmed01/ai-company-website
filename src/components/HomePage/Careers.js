import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight"
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function Careers() {
  const history = useHistory()

  return (
    <Wrapper>
      <SecondWrapper>
        <TextWrapper>
          <HeaderText>CAREERS</HeaderText>
          <Header>
            We’re looking for innovative talent to join our team. See all
            positions and submit your CV.
          </Header>
          <ButtonWrapper onClick={() => history.push("/CareersPageCompound")}>
            <Button>Openings</Button>
            <Arrow />
          </ButtonWrapper>
        </TextWrapper>

        <TextWrapperSecond>
          <BorderWrapper>
            <HeaderSecond>ARTIFICIAL INTELLIGENCE RESEARCHER</HeaderSecond>
            <HeaderTextSecond>San Francisco, CA</HeaderTextSecond>
            <TextSecond>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </TextSecond>

            <ButtonWrapper
              onClick={() => history.push("/SubscribePageCompound")}
            >
              <Button>Apply Now</Button>
              <Arrow />
            </ButtonWrapper>
          </BorderWrapper>
        </TextWrapperSecond>
      </SecondWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-color: #000000;
  height: 740px;

  @media screen and (max-width: 1070px) {
    flex-direction: column;
    height: 1200px;
  }
`

export const SecondWrapper = styled.div`
  max-width: 1800px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1070px) {
    flex-direction: column;
    height: 1050px;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid #8c8c8c;
  padding-left: 30px;
  margin-left: 100px;
  height: 350px;
  max-width: 1000px;

  @media screen and (max-width: 660px) {
    margin-left: 20px;
    margin-right: 20px;
    padding-left: 20px;
  }

  @media screen and (max-width: 1070px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 540px) {
    margin-left: 50px;
  }
`

export const HeaderText = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;
`

export const Header = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;
  line-height: 40px;
  width: 365px;
  margin-bottom: 40px;

  @media screen and (max-width: 540px) {
    font-size: 16px;
    width: 90%;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 50px;
  cursor: pointer;
`

export const Button = styled.p`
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  letter-spacing: 0.05em;
  padding-right: 30px;
`

export const Arrow = styled(ArrowRight)`
  color: #ffffff;
  width: 30px;
  height: 30px;
`

export const TextWrapperSecond = styled.div`
  background-color: #000000;
  border: 1px solid #8c8c8c;
  border-radius: 20px;
  padding-top: 50px;
  padding-left: 50px;
  margin-right: 50px;
  width: 420px;
  height: 530px;

  @media screen and (max-width: 1070px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 640px) {
    width: 70%;
    height: 590px;
  }

  @media screen and (max-width: 430px) {
    height: 540px;
    padding-bottom: 50px;
  }
`

export const BorderWrapper = styled.div``

export const HeaderSecond = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-family: "Raleway", sans-serif;
  line-height: 1.8em;
  letter-spacing: 0.08em;
  width: 380px;
  margin-left: -50px;
  padding-bottom: 20px;
  padding-left: 50px;

  @media screen and (max-width: 640px) {
    width: 90%;
    font-size: 20px;
  }

  @media screen and (max-width: 430px) {
    width: 90%;
    font-size: 18px;
  }
`

export const HeaderTextSecond = styled.p`
  color: #b4b4b4;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.08em;
`

export const TextSecond = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.08em;
  width: 335px;
  line-height: 30px;

  @media screen and (max-width: 640px) {
    width: 80%;
    font-size: 14px;
  }

  @media screen and (max-width: 430px) {
    width: 90%;
    font-size: 12px;
  }
`

export default Careers
