import React from "react"
import styled from "styled-components"
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function Vision() {
  return (
    <Wrapper>
      <TextWrapper>
        <HeaderText>VISION</HeaderText>
        <Header>We’re Changing the Way the World Thinks About Cars</Header>
        <Text>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </Text>
      </TextWrapper>

      <ImageWrapper>
        <Image src="./img/car-1.png" />
      </ImageWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-color: #000000;
  border: 1px solid transparent;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 3px solid red; */

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: left;
    /* height: 1250px; */
    padding-right: 20px;
  }
`

export const TextWrapper = styled.div`
  border-left: 1px solid rgb(180, 180, 180);
  padding-left: 50px;
  margin-left: 30px;
  height: 420px;
  /* border: 3px solid red; */
  padding-left: 40px;

  @media screen and (max-width: 1024px) {
    margin-top: 50px;
    width: 100%;
    border-left: none;
  }

  @media screen and (max-width: 660px) {
    margin-left: 30px;
  }
`

export const HeaderText = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.08em;
`

export const Header = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-family: "Raleway", sans-serif;
  line-height: 1.8em;
  letter-spacing: 0.08em;
  width: 280px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    width: 90%;
  }
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.08em;
  width: 335px;
  line-height: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    width: 50%;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 90%;
  }
`

export const ImageWrapper = styled.div``

export const Image = styled.img`
  width: 100%;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: -160px;
  }
`

export default Vision
