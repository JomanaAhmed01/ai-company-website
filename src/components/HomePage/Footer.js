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
          <PhoneNum>Tel: 123-456-7890</PhoneNum>
        </FirstRow>

        <SecondRow>
          <EmailAddress>Email: info@mysite.com</EmailAddress>
        </SecondRow>

        <ThirdRow>
          <Address>500 Terry Francois St San Francisco, CA 94158</Address>
        </ThirdRow>
      </FirstColumn>

      <SecondColumn>
        <Text>Sign up to receive Autono news and updates.</Text>

        <EmailWrapper>
          <Label>Email*</Label>
          <EmailInputWrapper>
            <Email placeholder="Enter your email"></Email>
            <Button>Subscribe</Button>
          </EmailInputWrapper>
        </EmailWrapper>
      </SecondColumn>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  padding-bottom: 50px;
  gap: 200px;

  @media screen and (max-width: 1060px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`

export const FirstColumn = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; */
  height: auto;
  margin-left: -43px;

  @media screen and (max-width: 490px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const LogoWrapper = styled.div`
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
  }
`

export const FirstRow = styled.div`
  /* width: 450px;
  display: flex;
  justify-content: space-around; */
`

export const PhoneNum = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
`

export const SecondRow = styled.div`
  /* width: 450px;
  display: flex;
  justify-content: space-around; */
`

export const EmailAddress = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
`

export const ThirdRow = styled.div`
  /* width: 450px;
  display: flex;
  justify-content: space-around; */
`

export const Address = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  line-height: 30px;
`

export const SecondColumn = styled.div`
  @media screen and (max-width: 490px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
`

export const EmailWrapper = styled.div``

export const Label = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.04em;
  margin-bottom: -5px;
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

  @media screen and (max-width: 420px) {
    padding-top: 14.5px;
    padding-bottom: 13.5px;
  }
`

export default Footer
