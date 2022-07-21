import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>


function OurJourney() {
  return (
    <Wrapper>
      <CardsWrapper>
        <Header>Our Journey So Far</Header>
        <FirstCard>
          <CardNum>2013</CardNum>
          <Event>AUTONO IS FOUNDED</Event>
          <Text>I'm a paragraph.
            Click here to add your own text and edit me.
            It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </Text>
        </FirstCard>

        <SecondCard>
          <CardNum>2015</CardNum>
          <Event>GROUNDBREAKING SENSOR TECHNOLOGY LAUNCHED</Event>
          <Text>I'm a paragraph.
            Click here to add your own text and edit me.
            It’s easy.
            Just click “Edit Text” or double click me to add your own content and make changes to the font.
          </Text>
        </SecondCard>
      </CardsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 150px;
`

export const Header = styled.p`
  color: #000000;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
`

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 680px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const FirstCard = styled.div`
  width: 540px;
  height: 280px;
  border: 1px solid #000000;
  border-radius: 15px;
  padding-left: 50px;
  margin-top: 50px;
  margin-left: -420px;

  @media screen and (max-width: 1060px) {
    margin-left: 0px;
  }

  @media screen and (max-width: 680px) {
    width: 80%;
    height: auto;
  }
`

export const CardNum = styled.p`
  color: #E15F09;
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  border-bottom: 1px solid #000000;
  width: 90px;
  padding-bottom: 20px;

  @media screen and (max-width: 680px) {
    font-size: 32px;
  }
`

export const Event = styled.p`
  color: #000000;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.16em;

  @media screen and (max-width: 680px) {
    font-size: 12px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  line-height: 30px;
  width: 540px;

  @media screen and (max-width: 680px) {
    width: 90%;
    font-size: 14px;
  }
`

export const SecondCard = styled.div`
  width: 540px;
  height: 280px;
  border: 1px solid #000000;
  border-radius: 15px;
  padding-left: 50px;
  margin-top: 50px;
  margin-right: -420px;

  @media screen and (max-width: 1060px) {
    margin-right: 0px;
  }

  @media screen and (max-width: 680px) {
    width: 80%;
    height: auto;
  }
`

export default OurJourney;