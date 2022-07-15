import React from 'react';
import styled from "styled-components"
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight'

function WhyAutono() {
    return (
        <Wrapper>
            <TextWrapper>
                <BorderWrapper>
                    <HeaderText>WHY AUTONO</HeaderText>
                    <Header>A different approach, using a new method of manufacturing.</Header>
                    <Text>I'm a paragraph.
                        Click here to add your own text and edit me.
                        It’s easy.
                        Just click “Edit Text” or double click me to add your own content and make changes to the font.
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </Text>

                    <ButtonWrapper>
                        <Button>Read More</Button>
                        <Arrow />
                    </ButtonWrapper>
                </BorderWrapper>
            </TextWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  background-image: url('./img/factory.png');
  background-attachment: fixed;
  height: 880px;
`

export const TextWrapper = styled.div`
  background-color: #000000;
  border-radius: 20px;
  position: relative;
  top: 110px;
  padding-left: 50px;
  padding-top: 100px;
  margin-left: 50px;
  width: 490px;
  height: 660px;

  @media screen and (max-width: 640px) {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
`

export const BorderWrapper = styled.div`
  border-left: 1px solid rgb(180,180,180);
  padding-left: 50px;
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
  width: 280px;
  border-left: 3px solid #FFFFFF;
  margin-left: -50px;
  padding-left: 50px;
  margin-bottom: 80px;

  @media screen and (max-width: 640px) {
    width: 90%;
    font-size: 20px;
  }
`

export const Text = styled.p`
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
  padding-right: 20px;
`

export const Arrow = styled(ArrowRight)`
  color: #FFFFFF;
  width: 30px;
  height: 30px;
`


export default WhyAutono;