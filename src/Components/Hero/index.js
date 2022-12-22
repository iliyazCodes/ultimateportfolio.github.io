import { useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import HERO_DATA from "../../Global/Data/Hero"

const HeroBannerStyled = styled.div`
    --container-width: 650px;
    --unit: 10px;

    .col.size-2 { --size: 2; }
    .col.size-3 { --size: 3; }
    .col.size-4 { --size: 4; }
    .col.size-5 { --size: 5; }
    .col.size-6 { --size: 6; }
    .col.size-7 { --size: 7; }
    .col.size-8 { --size: 8; }
    .col.size-9 { --size: 9; }
    .col.size-10 { --size: 10; }
    .col.size-11 { --size: 11; }
    .col.size-12 { --size: 12; }
    .col.size-13 { --size: 13; }
    .col.size-14 { --size: 14; }
    .col.size-16 { --size: 16; }
    .col.size-18 { --size: 18; }
    .col.size-20 { --size: 20; }
    

    position: relative;
    width: var(--container-width);
    height: var(--container-width);
    display: flex;
    flex-direction: column;
    gap: var(--unit);
    overflow: hidden;
    margin: auto;
    cursor: pointer;
    pointer-events: none;
    margin-top: calc(var(--container-width) / 5);

    &:has(div.slide-enter-done) {
        pointer-events: initial;
    }

    @media (max-width: 768px) {
        --container-width: calc(100vw - 2em);
        --unit: 1.2vw;
    }
`
const HeroBannerRow = styled.div`
    height: var(--unit);
    max-height: 10px;
    display: flex;
    justify-content: center;
    gap: var(--unit);
    translate: 0;

    &:nth-child(1) { --delay: 1; --offset: 150px }
    &:nth-child(2) { --delay: 2; --offset: -100px }
    &:nth-child(3) { --delay: 8; --offset: 200px }
    &:nth-child(4) { --delay: 4; --offset: -100px }
    &:nth-child(5) { --delay: 9; --offset: 200px }
    &:nth-child(6) { --delay: 6; --offset: -50px }
    &:nth-child(7) { --delay: 7; --offset: 150px }
    &:nth-child(8) { --delay: 8; --offset: -100px }
    &:nth-child(9) { --delay: 15; --offset: 50px }
    &:nth-child(10) { --delay: 10; --offset: -150px }
    &:nth-child(11) { --delay: 11; --offset: 150px }
    &:nth-child(12) { --delay: 12; --offset: 250px }
    &:nth-child(13) { --delay: 13; --offset: -250px }
    &:nth-child(14) { --delay: 21; --offset: -150px }
    &:nth-child(15) { --delay: 15; --offset: 250px }
    &:nth-child(16) { --delay: 16; --offset: -170px }
    &:nth-child(17) { --delay: 5; --offset: 140px }
    &:nth-child(18) { --delay: 18; --offset: -200px }
    &:nth-child(19) { --delay: 19; --offset: -300px }
    &:nth-child(20) { --delay: 20; --offset: 310px }
    &:nth-child(21) { --delay: 8; --offset: -100px }
    &:nth-child(22) { --delay: 17; --offset: -250px }
    &:nth-child(23) { --delay: 16; --offset: 250px }
    &:nth-child(24) { --delay: 12; --offset: -120px }
    &:nth-child(25) { --delay: 6; --offset: -300px }
    &:nth-child(26) { --delay: 18; --offset: 210px }
    &:nth-child(27) { --delay: 11; --offset: 100px }

    &:nth-child(2n) { --direction: -1 }
`
const HeroBannerCol = styled.div`
    height: 100%;
    width: calc(var(--size, 2) * var(--unit));
    background-color: ${({theme, color}) => theme.colors[color]};
    border-radius: 1000px;
`

const HeroBanner = () => {
  const [isMounted, setIsMounted] = useState(false)
  const timeout = 4000
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, 1000)
  }, [])

  const reloadAnimation = () => {
    setIsMounted(false)
    setTimeout(() => {
      setIsMounted(true)
    }, timeout / 2)
  }
  
  return (
    <HeroBannerStyled onClick={reloadAnimation}>
      <TransitionGroup component={null}>
        {
          HERO_DATA.map((row, i) => {
            return (
              isMounted && <CSSTransition classNames={"slide"} key={i} timeout={timeout}>
                <HeroBannerRow>
                  {row.map((col, j) => <HeroBannerCol className={`col size-${col.size}`} key={i + "" + j} color={col.color}></HeroBannerCol>)}
                </HeroBannerRow>
              </CSSTransition>
            )
          })
        }
      </TransitionGroup>

    </HeroBannerStyled>
  )
}

export default HeroBanner