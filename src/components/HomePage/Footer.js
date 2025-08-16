import React from "react"
import styled from "styled-components"
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function Footer() {
  return (
    <Wrapper>
      <FirstColumn>
        <LogoWrapper>
          <Logo>AUTONO</Logo>
        </LogoWrapper>

        <FirstRow>
          <Tech>Technology</Tech>
          <PhoneNum>Tel: 123-456-7890</PhoneNum>
        </FirstRow>

        <SecondRow>
          <About>About</About>
          <EmailAddress>Email: info@mysite.com</EmailAddress>
        </SecondRow>

        <ThirdRow>
          <Careers>Careers</Careers>
          <Address>500 Terry Francois St San Francisco, CA 94158</Address>
        </ThirdRow>
      </FirstColumn>

      <SecondColumn>
        <Header>SUBSCRIBE</Header>
        <Text>Sign up to receive Autono news and updates.</Text>

        <EmailWrapper>
          <Label>Email*</Label>
          <EmailInputWrapper>
            <Email></Email>
            <Button>Subscribe</Button>
          </EmailInputWrapper>
        </EmailWrapper>
      </SecondColumn>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  height: 535px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 100px;

  @media screen and (max-width: 930px) {
    flex-direction: column;
  }
`

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (max-width: 490px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const LogoWrapper = styled.div`
  position: relative;
  bottom: 100px;
  left: 50px;

  @media screen and (max-width: 930px) {
    bottom: 50px;
    left: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Logo = styled.p`
  color: #000000;
  font-size: 20px;
  font-family: "Anton", sans-serif;
  font-weight: bold;
  letter-spacing: 0.3em;

  @media screen and (max-width: 490px) {
    font-size: 18px;
    text-align: center;
  }
`

export const FirstRow = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 490px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Tech = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
`

export const PhoneNum = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  margin-right: 50px;
`

export const SecondRow = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 490px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const About = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  margin-right: 20px;
`

export const EmailAddress = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  margin-left: 12px;
`

export const ThirdRow = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 490px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Careers = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  margin-right: 23px;
`

export const Address = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  line-height: 30px;
  width: 200px;
  margin-right: -11px;
`

export const SecondColumn = styled.div`
  @media screen and (max-width: 930px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 490px) {
    width: 75%;
    margin-left: 0px;
  }
`

export const Header = styled.p`
  color: #000000;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  margin-bottom: 50px;
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  margin-bottom: 50px;
`

export const EmailWrapper = styled.div``

export const Label = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
`

export const EmailInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Email = styled.input`
  border: 1px solid #000000;
  width: 264px;
  height: 40px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding-left: 20px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 490px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Button = styled.p`
  background-color: #000000;
  border: 1px solid #000000;
  color: #ffffff;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 11.5px;
  padding-bottom: 12.5px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  right: 20px;
  text-align: center;
  transition: 0.3s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      background: white;
      color: black;
    }
  }

  @media screen and (max-width: 430px) {
    padding-top: 13.5px;
    padding-bottom: 15.5px;
  }
`

export default Footer
