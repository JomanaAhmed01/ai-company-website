import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>


function JobOpenings() {
    return (
        <Wrapper>
            <TextWrapper>
                <HeaderText>JOB OPENINGS</HeaderText>
                <Header>Changing the future of transportation means thinking differently.</Header>
                <Text>I'm a paragraph.
                    Click here to add your own text and edit me.
                    It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </Text>
            </TextWrapper>

            <ImageWrapper>
                <Image src='./img/glowy-road.png' />
            </ImageWrapper>
        </Wrapper>
    );
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
    height: 1150px;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid rgb(180,180,180);
  padding-left: 50px;
  margin-left: 50px;
  height: auto;

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
  color: #FFFFFF;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 0.08em;
`

export const Header = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-family: 'Raleway', sans-serif;
  line-height: 1.8em;
  letter-spacing: 0.08em;
  width: 375px;
  border-left: 3px solid #FFFFFF;
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

export const Text = styled.p`
  color: #FFFFFF;
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
  
`

export const Image = styled.img`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`

export default JobOpenings;