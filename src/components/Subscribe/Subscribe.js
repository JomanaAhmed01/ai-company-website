import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function Subscribe() {
  return (
    <Wrapper>
      <SecondColumn>
        <Header>SUBSCRIBE</Header>
        <Text>Sign up to receive Autono news and updates.</Text>

        <EmailWrapper>
          <Label>Email*</Label>
          <EmailInputWrapper>
            <Email></Email>
            <Button>Subscribe</Button>
          </EmailInputWrapper>
        </EmailWrapper>
      </SecondColumn>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  height: 535px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 100px;

  @media screen and (max-width: 930px) {
    flex-direction: column;
    padding-top: 100px;
    padding-left: 0px;
  }
`

export const SecondColumn = styled.div`
  @media screen and (max-width: 490px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Header = styled.p`
  color: #000000;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.04em;
  margin-bottom: 50px;

  @media screen and (max-width: 930px) {
    text-align: center;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.04em;
  margin-bottom: 50px;
  
  @media screen and (max-width: 930px) {
    text-align: center;
  }
`

export const EmailWrapper = styled.div`
  
`

export const Label = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.04em;
`

export const EmailInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Email = styled.input`
  border: 1px solid #000000;
  width: 264px;
  height: 40px;
  border-radius: 10px;
  padding-left: 20px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 490px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Button = styled.p`
  background-color: #000000;
  border: 1px solid #000000;
  color: #FFFFFF;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 12.5px;
  padding-bottom: 12.5px;
  border-radius: 10px;
  position: relative;
  right: 20px;
  text-align: center;
  transition: 0.3s ease-in-out;

  :hover {
    background-color: #FFFFFF;
    color: #000000;
    cursor: pointer;
  }
`

export default Subscribe;