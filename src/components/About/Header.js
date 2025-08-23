import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function Header() {
  return (
    <Wrapper>
      <TheHeader>OUR JOURNEY</TheHeader>
      <HeaderText>I'm a paragraph.
        Click here to add your own text and edit me.
        It’s easy.
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
        I’m a great place for you to tell a story and let your users know a little more about you.
      </HeaderText>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin-top: 70px;
  border-bottom: 1px solid #000000;
  padding-bottom: 50px;
`

export const TheHeader = styled.p`
  color: #000000;
  font-size: 64px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  width: 675px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  @media screen and (max-width: 660px) {
    width: 90%;
    font-size: 36px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 45px;
  }
`

export const HeaderText = styled.p`
  color: #000000;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  line-height: 40px;
  text-align: center;
  width: 705px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 660px) {
    width: 90%;
    font-size: 18px;
    line-height: 32px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
  }
`

export default Header;