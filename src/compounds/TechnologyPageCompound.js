import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Technology/Navbar';

function TechnologyPageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  background-image: url('./img/bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 840px;
`

export default TechnologyPageCompound;