import React from "react"
import styled from "styled-components"
;<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function AutonoInNums() {
  return (
    <Wrapper>
      <TextWrapper>
        <Header>Autono In Numbers</Header>

        <RowOne>
          <ItemWrapper>
            <Number>200</Number>
            <Item>EMPLOYEES</Item>
          </ItemWrapper>

          <ItemWrapper>
            <Number>5</Number>
            <Item>CORE TEAMS</Item>
          </ItemWrapper>
        </RowOne>

        <RowTwo>
          <ItemWrapper>
            <Number>200M$</Number>
            <Item>CAPITAL</Item>
          </ItemWrapper>

          <ItemWrapper>
            <Number>326</Number>
            <Item>PARTNERS</Item>
          </ItemWrapper>
        </RowTwo>
      </TextWrapper>

      <ImageWrapper>
        <Image src="./img/machine.png" />
      </ImageWrapper>
    </Wrapper>
  )
}

export const Wrapper = styled.div`
  background-image: url("./img/machine.png");
  background-repeat: no-repeat;
  height: 790px;
  display: flex;
  justify-content: flex-end;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1100px) {
    background-image: none;
    flex-direction: column;
    height: 1300px;
  }

  @media screen and (max-width: 590px) {
    height: 1000px;
  }
  
  @media screen and (max-width: 495px) {
    height: 900px;
  }
`

export const TextWrapper = styled.div`
  float: right;
  margin-top: 50px;
  margin-right: 50px;

  @media screen and (max-width: 1100px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 590px) {
    width: 100%;
    margin-top: 0px;
  }
`

export const Header = styled.p`
  color: #000000;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;

  @media screen and (max-width: 590px) {
    text-align: center;
  }
`

export const RowOne = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-width: 590px) {
    width: 100%;
    justify-content: space-around;
  }
`

export const RowTwo = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-width: 590px) {
    width: 100%;
    justify-content: space-around;
  }
`

export const ItemWrapper = styled.div``

export const Number = styled.p`
  color: #000000;
  font-size: 40px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;
  border-bottom: 3px solid #000000;
  width: 25px;
  padding-bottom: 10px;

  @media screen and (max-width: 590px) {
    font-size: 27px;
    padding-bottom: 20px;
  }
`

export const Item = styled.p`
  color: #000000;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.08em;
  border-top: 1px solid #8c8c8c;
  width: 200px;
  margin-top: -40px;
  padding-top: 20px;

  @media screen and (max-width: 590px) {
    width: 150px;
  }
`

export const ImageWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1100px) {
    display: initial;
  }
`

export const Image = styled.img`
  @media screen and (max-width: 590px) {
    width: 90%;
  }
`

export default AutonoInNums
