import React from 'react';
import styled from "styled-components"
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>


function Cards() {
  return (
    <Wrapper>
      <AllCardsWrapper>
        <CardsWrapper>
          <BorderWrapper>
            <HeaderSecond>ELECTRICAL ENGINEER</HeaderSecond>
            <HeaderTextSecond>San Francisco, CA</HeaderTextSecond>
            <TextSecond>I'm a paragraph.
              Click here to add your own text and edit me.
              It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </TextSecond>

            <ButtonWrapper>
              <Button>Apply Now</Button>
              <Arrow />
            </ButtonWrapper>
          </BorderWrapper>
        </CardsWrapper>

        <CardsWrapper>
          <BorderWrapper>
            <HeaderSecond>DATA SCIENTIST</HeaderSecond>
            <HeaderTextSecond>San Francisco, CA</HeaderTextSecond>
            <TextSecond>I'm a paragraph.
              Click here to add your own text and edit me.
              It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </TextSecond>

            <ButtonWrapper>
              <Button>Apply Now</Button>
              <Arrow />
            </ButtonWrapper>
          </BorderWrapper>
        </CardsWrapper>

        <CardsWrapper>
          <BorderWrapper>
            <HeaderSecond>ARTIFICIAL INTELLIGENCE RESEARCHER</HeaderSecond>
            <HeaderTextSecond>San Francisco, CA</HeaderTextSecond>
            <TextSecond>I'm a paragraph.
              Click here to add your own text and edit me.
              It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </TextSecond>

            <ButtonWrapper>
              <Button>Apply Now</Button>
              <Arrow />
            </ButtonWrapper>
          </BorderWrapper>
        </CardsWrapper>

        <CardsWrapper>
          <BorderWrapper>
            <HeaderSecond>DATA SCIENTIST</HeaderSecond>
            <HeaderTextSecond>San Francisco, CA</HeaderTextSecond>
            <TextSecond>I'm a paragraph.
              Click here to add your own text and edit me.
              It’s easy.
              Just click “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </TextSecond>

            <ButtonWrapper>
              <Button>Apply Now</Button>
              <Arrow />
            </ButtonWrapper>
          </BorderWrapper>
        </CardsWrapper>

        <CvWrapper>
          <BorderWrapper>
            <CvHeader>Didn't find the position you're looking for? Send us your CV</CvHeader>

            <CvButtonWrapper>
              <CvButton>Submit</CvButton>
              <CvArrow />
            </CvButtonWrapper>
          </BorderWrapper>
        </CvWrapper>
      </AllCardsWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #000000;
  height: auto;
  padding-bottom: 50px;

  @media screen and (max-width: 1070px) {
    flex-direction: column;
    height: auto;
  }
`

export const AllCardsWrapper = styled.div`
  width: 90%;
  height: auto;
  padding-bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
`


export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  border: 1px solid #FFFFFF;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 50px;
`

export const Button = styled.p`
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  letter-spacing: 0.05em;
  padding-right: 30px;
`

export const Arrow = styled(ArrowRight)`
  color: #FFFFFF;
  width: 30px;
  height: 30px;
`

export const CardsWrapper = styled.div`
  background-color: #000000;
  border: 1px solid #8c8c8c;
  border-radius: 20px;
  padding-top: 20px;
  padding-left: 50px;
  margin-right: 50px;
  margin-bottom: 150px;
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

export const BorderWrapper = styled.div`
  
`

export const HeaderSecond = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
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
  color: #B4B4B4;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.08em;
`

export const TextSecond = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
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

export const CvWrapper = styled.div`
  background-color: #FFFFFF;
  width: 420px;
  height: 350px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  @media screen and (max-width: 640px) {
    width: 80%;
    padding-left: 30px;
  }

  @media screen and (max-width: 430px) {
    
  }
`

export const CvButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
  border: 1px solid #000000;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 50px;
`

export const CvButton = styled.p`
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  letter-spacing: 0.05em;
  padding-right: 30px;
`

export const CvArrow = styled(ArrowRight)`
  color: #000000;
  width: 30px;
  height: 30px;
`

export const CvHeader = styled.p`
  color: #000000;
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
  line-height: 1.8em;
  letter-spacing: 0.08em;
  width: 325px;
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

export default Cards;