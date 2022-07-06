import './App.css';

function HomePageCompound() {
  return (
    <Wrapper>
      <HeaderWrapper>
        
      </HeaderWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  
`

export const HeaderWrapper = styled.div`
  background-image: url('./img/bg.png');
  width: 1349px;
  height: 1081px;
  object-fit: cover;
  object-position: 50% 100%;
`

export default HomePageCompound;