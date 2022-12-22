/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { LINK_TYPES } from "../../Global/Data/Constants"
import HeaderList from "../../Global/Data/HeaderList"
import { CSSTransition, TransitionGroup } from "react-transition-group"


const ScrollProgressStyled = styled.div`
   position: fixed;
   top: calc(var(--header-top-height) + 2em);
   bottom: var(--header-top-height);
   width: 3em;
   left: 3em;
   display: flex;
   align-items: center;
   justify-content: center;

   @media (max-width: 768px) {
        top: initial;
        width: initial;
        bottom: .5em;
        left: 0;
        right: 0;
        height: 3em;
    }
`
const Indicator = styled.div`
    height: 100%;
    width: 1px;
    background-color: ${({ theme }) => theme.colors.primary_dark};
    position: relative;
    box-shadow: 0 0 3px 1px #00000050;

    @media (max-width: 768px) {
        height: 1px;
        width: 100%;
    }
`

const IndicatorProgress = styled.div.attrs(({ progress }) => ({
  style: {
    bottom: `${100 - progress}%`
  }
}))`
        position: absolute;
        display: block;
        width: 2px;
        background-color: ${({ theme }) => theme.colors.secondary_dark};
        top: 0;
        left: 0;
        transform: translate(-25%, 0);
        
        @media (max-width: 768px) {
            display: none;
        }
`

const IndicatorProgressMobile = styled.div.attrs(({ progress }) => ({
  style: {
    right: `${100 - progress}%`
  }
}))`        
        position: absolute;
        display: none;
        width: initial;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.secondary_dark};
        bottom: 0;
        top: 0;
        left: 0;
        transform: translate(0, -25%);
          
        @media (max-width: 768px) {
            display: block;
        }
  `

const IconWrapper = styled.button`
    cursor: pointer;
    position: absolute;
    top: calc(${({ top }) => top}%);
    left: 0;
    height: ${({ iconHeight }) => iconHeight}px;
    width: ${({ iconHeight }) => iconHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    background:  ${({ theme }) => theme.colors.background_dark};
    border-radius: 50%;
    border: ${({ theme, top, progress }) => progress <= top ? `1px solid ${theme.colors.primary_dark}` : `2px solid ${theme.colors.secondary_dark}`};
    transition: var(--transition);
    box-shadow: 0 0 3px 1px #00000050;

    svg {
        font-size: 18px;
        color: ${({ theme, top, progress }) => progress <= top ? theme.colors.primary_dark : theme.colors.secondary_dark};
        transition: var(--transition);
    }

    &:focus-visible {
        outline: 2px dashed ${({ theme }) => theme.colors.secondary};
        outline-offset: 3px;
    }
    &:focus:not(:focus-visible) {
        outline: none;
        outline-offset: 0px;
    } 

    @media (max-width: 768px) {
         left: calc(${({ top }) => top}%);
         top: initial;
    }
`

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [icons, setIcons] = useState()
  const iconsList = HeaderList.filter((item) => item.type === LINK_TYPES.LINK)
  const iconHeight = 50

  const onScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    setScrollPercentage((winScroll / height) * 100)
  }

  const mountIcons = () => {
    const iconsWithTop = iconsList.map((item, i) => {
      let totalThresold = iconHeight * (iconsList.length - 1)
      const el = document.getElementById(item.label.toLowerCase())
      if (!el) {
        return null
      }
      const distance = (el.offsetTop - el.scrollTop + el.clientTop) - (totalThresold - ((i + 1) * iconHeight))
      return {
        ...item,
        top: (distance / document.body.offsetHeight) * 100,
      }
    })

    setIcons(iconsWithTop)
  }

  const scrollToId = (item) => {
    const el = document.getElementById(item.label.toLowerCase())
    if (!el) {
      return
    }

    const yOffset = -100
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    setTimeout(() => {
      const isScrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight !== 0
      if (!isScrollable) {
        return
      }
      setIsMounted(true)
      mountIcons()
    }, 100)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <ScrollProgressStyled>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames={"sqeeze"} timeout={500}>
            <Indicator>
              <IndicatorProgress progress={scrollPercentage}/>
              <IndicatorProgressMobile progress={scrollPercentage}/>
              {icons?.length && (
                icons.map((icon) => (
                  icon && (
                    <IconWrapper iconHeight={iconHeight} onClick={() => scrollToId(icon)} key={icon.icon} top={icon.top} progress={scrollPercentage}>
                      <FontAwesomeIcon icon={icon.icon} />
                    </IconWrapper>
                  )
                ))
              )}
            </Indicator>
          </CSSTransition>
        )}
      </TransitionGroup>
    </ScrollProgressStyled>
  )
}

export default ScrollProgress