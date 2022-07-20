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
  height: 1060px;
`

export default TechnologyPageCompound;