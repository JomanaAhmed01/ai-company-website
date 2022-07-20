import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>


function OurMission() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>OUR MISSION</HeaderText>
        <Header>Redefining the Way We Move</Header>
        <Text>I'm a paragraph.
          Click here to add your own text and edit me.
          It’s easy.
          Just click “Edit Text” or double click me to add your own content and make changes to the font.
          I’m a great place for you to tell a story and let your users know a little more about you.
        </Text>

        <Text>This is a great space to write a long text about your company and your services.
          You can use this space to go into a little more detail about your company.
          Talk about your team and what services you provide.
        </Text>
      </TextWrapper>

      <ImageWrapper>
        <Image src='./img/founder.png' />
      </ImageWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  height: 850px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  border: 1px solid #000000;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    height: 1350px;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid rgb(180,180,180);
  padding-left: 50px;
  margin-left: 50px;
  height: auto;

  @media screen and (max-width: 1024px) {
    margin-top: 150px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 20px;
    margin-top: 0px;
  }
`

export const HeaderText = styled.p`
  color: #000000;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.08em;
`

export const Header = styled.p`
  color: #000000;
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
  line-height: 1.8em;
  letter-spacing: 0.08em;
  width: 280px;
  border-left: 3px solid #000000;
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

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.08em;
  width: 335px;
  line-height: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 90%;
  }
`

export const ImageWrapper = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 400px;
  height: 616px;
  border-radius: 20px;

  @media screen and (max-width: 480px) {
    width: 80%;
    height: auto;
  }
`

export default OurMission;