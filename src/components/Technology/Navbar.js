import React from 'react';
import styled from "styled-components"
import { MenuAlt4 } from '@styled-icons/heroicons-outline/MenuAlt4'
<style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function Navbar() {
    return (
        <Wrapper>
            <LogoWrapper>
                <Logo>AUTONO</Logo>
            </LogoWrapper>

            <BtnsWrapper>
                <FirstLink>Technology</FirstLink>
                <Link>About</Link>
                <Link>Careers</Link>
                <Button>Subscribe</Button>
                <MenuIcon />
            </BtnsWrapper>
        </Wrapper>
    );
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 88%;

  @media screen and (max-width: 768px) {
    background-color: #FFFFFF;
    width: 100%;
    padding-left: 70px;
  }

  @media screen and (max-width: 580px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 490px) {
    align-items: center;
  }
`

export const LogoWrapper = styled.div`
  
`

export const Logo = styled.p`
  color: #000000;
  font-size: 25px;
  font-family: 'Anton', sans-serif;
  font-weight: bold;
  letter-spacing: 0.25em;

  @media screen and (max-width: 490px) {
    font-size: 18px;
  }
`

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 450px;

  @media screen and (max-width: 768px) {
    width: 220px;
    padding-right: 130px;
  }

  @media screen and (max-width: 580px) {
    padding-right: 40px;
  }

  @media screen and (max-width: 490px) {
    width: 180px;
  }
`

export const FirstLink = styled.p`
  color: #707070;
  font-family: 'Anton', sans-serif;
  letter-spacing: 2px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    color: #C45308;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Link = styled.p`
  font-family: 'Anton', sans-serif;
  letter-spacing: 2px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    color: #C45308;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled(MenuAlt4)`
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
    color: #000000;
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 490px) {
    width: 30px;
    height: 30px;
  }
`

export const Button = styled.p`
  color: #FFFFFF;
  background-color: #000000;
  font-family: 'Anton', sans-serif;
  letter-spacing: 2px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 7px; 
  padding-bottom: 7px;
  border-radius: 10px;
  border: 1px solid #000000;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    color: #000000;
    background-color: #FFFFFF;
  }

  @media screen and (max-width: 490px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`

export default Navbar;