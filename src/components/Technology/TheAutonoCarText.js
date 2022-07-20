import React from 'react';
import styled from "styled-components"
<style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Raleway:wght@100&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>


function TheAutonoCarText() {
    return (
        <Wrapper>
            <TextOneWrapper>
                <HeaderOne>HUMAN-CENTERED DESIGN</HeaderOne>
                <TextOne>I'm a paragraph.
                    Click here to add your own text and edit me.
                    It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.
                </TextOne>
            </TextOneWrapper>

            <TextTwoWrapper>
                <HeaderTwo>​LOW EMISSIONS & EFFICIENCY</HeaderTwo>
                <TextTwo>I'm a paragraph.
                    Click here to add your own text and edit me.
                    It’s easy.
                    Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    I’m a great place for you to tell a story and let your users know a little more about you.</TextTwo>
            </TextTwoWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  background-color: #000000;
  height: 440px;
  margin-top: -70px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    height: 640px;
    align-items: center;
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  
`

export const TextOneWrapper = styled.div`
  
`

export const HeaderOne = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
`

export const TextOne = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  line-height: 30px;
  width: 335px;
`

export const TextTwoWrapper = styled.div`
  
`

export const HeaderTwo = styled.p`
  color: #FFFFFF;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
`

export const TextTwo = styled.p`
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.08em;
  line-height: 30px;
  width: 335px;
`

export default TheAutonoCarText;