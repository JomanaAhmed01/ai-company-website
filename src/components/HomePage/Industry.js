import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>


function Industry() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>INDUSTRY</HeaderText>
        <Header>Our Partners</Header>
        <Text>
          Click here to add your own content and customize the text.
          This is a great place to tell a story about your company and let your users know a little more about the company's history, the team's background, or any other information you'd like to share.
          Just click "Edit Text" to get started.
        </Text>
      </TextWrapper>

      <LogosWrapper>
        <FirstRow>
          <LogoNameWrapper>
            <FirstLogo src='./img/general-transport-logo.png' />
            <LogoName>GENERAL TRANSPORT</LogoName>
          </LogoNameWrapper>

          <LogoNameWrapper>
            <SecondLogo src='./img/idi-software-logo.png' />
            <LogoName>IDI SOFTWARE</LogoName>
          </LogoNameWrapper>
        </FirstRow>

        <SecondRow>
          <LogoNameWrapper>
            <ThirdLogo src='./img/imogen-cars-logo.png' />
            <LogoName>IMOGEN CARS</LogoName>
          </LogoNameWrapper>

          <LogoNameWrapper>
            <FourthLogo src='./img/tri-nex-logo.png' />
            <LogoName>TRI-NEX</LogoName>
          </LogoNameWrapper>
        </SecondRow>
      </LogosWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #000000;
  height: 540px;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #8c8c8c;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 950px;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid #8c8c8c;
  padding-left: 30px;
  margin-left: 150px;
  height: 450px;

  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 410px) {
    margin-left: 50px;
  }
`

export const HeaderText = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  line-height: 40px;
  width: 120px;
  border-left: 3px solid #FFFFFF;
  margin-left: -30px;
  margin-bottom: 40px;
  padding-left: 30px;

  @media screen and (max-width: 410px) {
    font-size: 18px;
  }
`

export const Text = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  line-height: 30px;
  letter-spacing: 0.08em;
  width: 330px;

  @media screen and (max-width: 410px) {
    font-size: 12px;
    width: 85%;
  }
`

export const LogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 500px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const SecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const LogoNameWrapper = styled.div`
  
`

export const FirstLogo = styled.img`
  
`

export const SecondLogo = styled.img`
  margin-top: 76px;
`

export const ThirdLogo = styled.img`
  
`

export const FourthLogo = styled.img`
  margin-top: 16px;

  @media screen and (max-width: 1024px) {
    margin-right: -20px;
  }
`

export const LogoName = styled.p`
  color: #FFFFFF;
`

export default Industry;