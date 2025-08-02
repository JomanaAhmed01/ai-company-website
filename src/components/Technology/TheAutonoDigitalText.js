import React from "react"
import styled from "styled-components"
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function TheAutonoDigitalText() {
  return (
    <Wrapper>
      <TextOneWrapper>
        <HeaderOne>ADVANCED CYBER SECURITY</HeaderOne>
        <TextOne>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </TextOne>
      </TextOneWrapper>

      <TextTwoWrapper>
        <HeaderTwo>REAL-TIME INFORMATION</HeaderTwo>
        <TextTwo>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </TextTwo>
      </TextTwoWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  height: 440px;
  margin-top: -100px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #000000;

  @media screen and (max-width: 768px) {
    height: 640px;
    align-items: center;
    flex-direction: column;
  }
`

export const TextWrapper = styled.div``

export const TextOneWrapper = styled.div``

export const HeaderOne = styled.p`
  color: #000000;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;
`

export const TextOne = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;
  line-height: 30px;
  width: 335px;
`

export const TextTwoWrapper = styled.div`
  /* margin-top: -100px; */
`

export const HeaderTwo = styled.p`
  color: #000000;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;
`

export const TextTwo = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;
  line-height: 30px;
  width: 335px;
`

export default TheAutonoDigitalText
