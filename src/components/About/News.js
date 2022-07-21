import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>


function News() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>NEWS</HeaderText>
        <Header>Autono In The Press</Header>
      </TextWrapper>

      <LogosWrapper>
        <Logo src='./img/rcr-logo.png' />
        <Logo src='./img/tb-review-logo.png' />
        <Logo src='./img/finance-logo.png' />
        <Logo src='./img/palo-alto-logo.png' />
        <Logo src='./img/london-post-logo.png' />
      </LogosWrapper>

      <LogosWrapperResponsive>
        <FirstRow>
          <Logo src='./img/rcr-logo.png' />
          <Logo src='./img/tb-review-logo.png' />
        </FirstRow>

        <SecondRow>
          <Logo src='./img/finance-logo.png' />
          <Logo src='./img/palo-alto-logo.png' />
        </SecondRow>

        <ThirdRow>
          <Logo src='./img/london-post-logo.png' />
        </ThirdRow>
      </LogosWrapperResponsive>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  height: 640px;
  background-color: #000000;
  padding-top: 50px;

  @media screen and (max-width: 1024px) {
    height: 840px;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid rgb(180,180,180);
  padding-left: 50px;
  margin-left: 100px;
  margin-top: 100px;
  height: 83px;

  @media screen and (max-width: 1024px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 20px;
    margin-top: 0px;
  }
`

export const HeaderText = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.08em;
  margin-bottom: 40px;
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
  line-height: 1.8em;
  letter-spacing: 0.08em;
  width: 280px;
  border-left: 3px solid #FFFFFF;
  margin-left: -50px;
  padding-left: 50px;
  margin-bottom: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 18px;
    width: 90%;
  }
`

export const LogosWrapper = styled.div`
  margin-top: 240px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    display: none;

  }
`

export const Logo = styled.img`
  
`

export const LogosWrapperResponsive = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const FirstRow = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
  }
`

export const SecondRow = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
  }
`

export const ThirdRow = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    padding-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
  }
`

export default News;