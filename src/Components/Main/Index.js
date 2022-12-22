import styled from "styled-components"
import HeroBanner from "../Hero"
import ScrollProgress from "../ScrollProgress"
import HeaderList from "../../Global/Data/HeaderList"
import { LINK_TYPES } from "../../Global/Data/Constants"

const MainStyled = styled.main`
   padding: 0 calc(var(--lg-space-size) * 3);
   .mock {
    height: 100vh;
   }

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
      <ScrollProgress />
      {HeaderList.filter(item => item.type === LINK_TYPES.LINK).map((item, i) => {
        return (
          <div key={i} className="mock" id={item.label.toLowerCase()}>{item.label}</div>
        )
      })}
    </MainStyled>
  )
}

export default Main