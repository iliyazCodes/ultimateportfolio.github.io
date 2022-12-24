import { useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import PropTypes from "prop-types"
import { HashLink } from "react-router-hash-link"
import Logo from "./../../assets/images/logo.png"
import HEADER_LIST from "../../Global/Content/HeaderList"
import { LINK_TYPES, SCROLL_DIRECTIONS } from "../../Global/Data/Constants"
import useScrollDirection from "../../Global/Hooks/useScrollDirection"
import SideMenu from "./SideMenu"
import { scrollToEl } from "../../Global/Utils/ScrollReveal"

const HeaderContainer = styled.header`
    position: fixed;
    height: var(--header-top-height);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    padding: 0 var(--lg-space-size);
    left: 0;
    right: 0;
    top: 0;
    backdrop-filter: blur(10px);
    z-index: 8;

    @media (max-width: 1080px) {
        padding: 0 var(--md-space-size);
    }
    @media (max-width: 768px) {
        padding: 0 var(--xs-space-size);
    }

    ${props =>
    props.scrollDirection === SCROLL_DIRECTIONS.DOWN &&
        !props.scrolledToTop &&
        css`
        height: var(--header-scroll-height);;
        transform: translateY(calc(70px * -1));
        box-shadow: var(--header-box-shadow);
      `};
    ${props =>
    props.scrollDirection === SCROLL_DIRECTIONS.UP &&
        !props.scrolledToTop &&
        css`
            height: var(--header-scroll-height);
            transform: translateY(0px);
            background-color: ${({ theme }) => theme.colors.background_dark}85;
            box-shadow: var(--header-box-shadow);
      `};
`
const Nav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: flex;
        &:focus-visible {
            outline: 2px dashed ${({ theme }) => theme.colors.secondary};
            outline-offset: 3px;
        }
        &:focus:not(:focus-visible) {
            outline: none;
            outline-offset: 0px;
        }   
    }
`
const LogoStyled = styled.img`
    width: 60px;
    aspect-ratio: 1 / 1;
`
const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 768px) {
        display: none;
    }
`
const ListItem = styled.li`
    margin: 0 .5em;
    a{
        display: inline-block;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        transition: var(--transition);
        padding: 0.5em 0.8em;
        font-size: var(--font-size-2);

            &:hover {
                color: ${({ theme }) => theme.colors.secondary};
            }
            &:focus-visible {
                outline: 2px dashed ${({ theme }) => theme.colors.secondary};
                outline-offset: 3px;
            }
    }
`
const ResumeButton = styled.button`
   background-color: transparent;
   color: ${({ theme }) => theme.colors.secondary};
   border: 1px solid ${({ theme }) => theme.colors.secondary};
   cursor: pointer;
   margin-left: 1em;
   padding: .8em 1.2em;
   border-radius: var(--border-radius);
   transition: var(--transition);
   font-family: var(--font-family);

   &:focus, &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}25;
    outline: none;
   }
`
const Header = ({ home = true }) => {
  const scrollDirection = useScrollDirection(SCROLL_DIRECTIONS.UP)
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const headerButtonClickHandler = (type) => {
    switch (type) {
    case "Resume":
      downloadResume()
      return
    }
  }

  const downloadResume = () => {
    console.log("downloaded")
  }

  const timeout = home ? 2000 : 0
  const fadeClass = home ? "fade" : ""
  const fadeDownClass = home ? "fadedown" : ""

  return (
    <HeaderContainer scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Nav>
        <ListContainer>
          <ul>
            <TransitionGroup component={null}>
              {HEADER_LIST.map((item, i) => {
                const listItem =  item.type === LINK_TYPES.LINK ? (
                  <ListItem style={{ transitionDelay: `${home ? i * 100 : 0}ms`}} key={item.id}>
                    <HashLink to={`#${item.href}`} scroll={scrollToEl}>{item.label}</HashLink>
                  </ListItem>
                ) : (
                  <ResumeButton
                    style={{ transitionDelay: `${home ? i * 100 : 0}ms`}}
                    key={item.id} onClick={() => headerButtonClickHandler(item.label)}>
                    {item.label}
                  </ResumeButton>
                )

                return isMounted ? (
                  <CSSTransition key={item.id} classNames={fadeDownClass} timeout={timeout}>
                    { listItem }
                  </CSSTransition>
                ) : null
              })}
            </TransitionGroup>
          </ul>
        </ListContainer>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <SideMenu />
            </CSSTransition>
          )}
        </TransitionGroup>
        
        <LogoContainer>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <HashLink to={"#"}  scroll={scrollToEl}>
                  <LogoStyled src={Logo} alt="logo" />
                </HashLink>
              </CSSTransition>
            )}
          </TransitionGroup>
        </LogoContainer>
      </Nav>
    </HeaderContainer>
  )
}
Header.propTypes = {
  home: PropTypes.bool
}

export default Header