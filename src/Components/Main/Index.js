import styled from "styled-components"
import HeroBanner from "../Hero"
import ScrollProgress from "../ScrollProgress"
import ContainerIdMapper from "../../Global/Hoc/ContainerIdMapper"
import HeaderList from "../../Global/Data/HeaderList"
import { LINK_TYPES } from "../../Global/Data/Constants"

const MainStyled = styled.main`
   overflow: hidden;
   padding: 0 calc(var(--lg-space-size) * 3);
   max-width: 1600px;
   margin: auto;

   .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5em;

    div {
      flex: 0 0 30%;
      aspect-ratio: 1/1;
      text-align: justify;
      margin-bottom: 3em;
      background-color: ${({ theme }) => theme.colors.background};
      border: 1px solid ${({ theme }) => theme.colors.background_dark};
      border-radius: 10px;
      box-shadow: 0 0 5px 3px #00000010;
      position: relative;

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.background_dark}10;
      }

      &::after, &::before {
        content: "";
        position: absolute;
        left: 1em;
        right: 1em;
        height: 2em;
        /* background-image: linear-gradient(to right ${({ theme }) => theme.colors.background_dark}, ${({ theme }) => theme.colors.background}); */
        background-image: linear-gradient(to right, ${({ theme }) => theme.colors.background_dark}, ${({ theme }) => theme.colors.background}90);
        background-color: ${({ theme }) => theme.colors.background_dark};
        border-radius: 5px;
        box-shadow: 0 2em 0 0 ${({ theme }) => theme.colors.background}, 0 4em 0 0 ${({ theme }) => theme.colors.primary_dark}10;
      }

      &::after {
        top: 4em;
      }

      &::before {
        top: 12em;
      }
    }
   }
   @media (max-width: 1080px) {
        padding: 0 calc(var(--lg-space-size) * 2);
        .wrapper {
          div {flex: 0 0 45%}
        }
    }
    @media (max-width: 768px) {
        padding: 0 var(--xs-space-size);
        .wrapper {
          div {flex: 0 0 90%}
        }
    }
`
const Main = () => {
  return (
    <MainStyled id="content">
      <HeroBanner />
      {
        HeaderList
          .filter((item) => item.type === LINK_TYPES.LINK && item.component)
          .map(({href, component: Component, title, icon, scrollToReveal}) => (
            <ContainerIdMapper key={href} id={href} title={title} showInProgress={!!icon} scrollToReveal={scrollToReveal}>
              <Component />
            </ContainerIdMapper>
          ))
      }
      <ScrollProgress />
    </MainStyled>
  )
}

export default Main