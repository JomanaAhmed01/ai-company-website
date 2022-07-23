import React from 'react';
import styled from "styled-components"
import Navbar from '../components/Subscribe/Navbar'
import Subscribe from '../components/Subscribe/Subscribe';

function SubscribePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Subscribe />
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  
`

export default SubscribePageCompound;