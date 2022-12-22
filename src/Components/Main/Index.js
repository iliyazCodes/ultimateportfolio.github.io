import styled from "styled-components"
import HeroBanner from "../Hero"

const MainStyled = styled.main`
   padding: 0 calc(var(--lg-space-size) * 3);

   @media (max-width: 1080px) {
        padding: 0 calc(var(--lg-space-size) * 1);
    }
    @media (max-width: 768px) {
        padding: 0 var(--xs-space-size);
    }
`
const Main = () => {
  return (
    <MainStyled id="content">
      <HeroBanner />
    </MainStyled>
  )
}

export default Main