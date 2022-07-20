import React from 'react';
import styled from "styled-components"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Dancing+Script:wght@500;700&family=Montserrat:wght@200;300;400&family=Poppins&family=Questrial&family=Quicksand:wght@300&family=Roboto:wght@300&family=Suez+One&display=swap');
</style>

function HeaderText() {
  return (
    <Wrapper>
      <Text>Click here to edit this paragraph and add your own content.
        This is a great place to expand on the title and any relevant details or information.
      </Text>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-top: -70px;
  }
`

export const Text = styled.p`
  color: #000000;
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.05em;
  line-height: 40px;
  width: 730px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 610px) {
    font-size: 20px;
  }
`

export default HeaderText;