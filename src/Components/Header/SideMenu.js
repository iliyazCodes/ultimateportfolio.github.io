import { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { KEY_CODES, LINK_TYPES } from "../../global/data/constants"
import Hamburger from "./hamburger"
import HEADER_LIST from "../../global/content/headerList"
import { HashLink } from "react-router-hash-link"
import { scrollToEl } from "../../global/utils/scrollReveal"

const SideMenuStyled = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`
const SideBarStyled = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        height: 100vh;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        padding: 5em 1em;
        outline: 0;
        width: min(75vw, 400px);
        background-color: ${({ theme }) => theme.colors.background};
        box-shadow: -10px 0px 30px -15px #00000010;
        transform: translateX(${props => (props.isOpen ? 0 : -100)}vw);
        z-index: 9;
        visibility: ${props => (props.isOpen ? "visible" : "hidden")};
        transition: var(--transition);
        justify-content: center;
    }
`
const SideBarBackdrop = styled.div`
  @media (max-width: 768px) {
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${({ isOpen }) => isOpen ? "block" : "none"};
  }
`
const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
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

            &:hover {
                color: ${({ theme }) => theme.colors.secondary};
            }
            &:focus-visible {
                outline: 2px dashed ${({ theme }) => theme.colors.secondary};
                outline-offset: 3px;
            }
    }
`
const ResumeButton = styled.a`
   background-color: transparent;
   color: ${({ theme }) => theme.colors.secondary};
   border: 1px solid ${({ theme }) => theme.colors.secondary};
   cursor: pointer;
   margin-left: 1em;
   padding: .8em 1.2em;
   border-radius: var(--border-radius);
   transition: var(--transition);
   font-family: var(--font-family);
   margin-top: auto;
   text-decoration: none;

   &:focus, &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}25;
    outline: none;
   }
`

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const buttonRef = useRef(null)
  const navRef = useRef(null)
  let menuFocusables
  let firstFocusableEl
  let lastFocusableEl

  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from(navRef.current.childNodes)]
    firstFocusableEl = menuFocusables[0]
    lastFocusableEl = menuFocusables[menuFocusables.length - 1]
  }

  const handleBackwardTab = e => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault()
      lastFocusableEl.focus()
    }
  }

  const handleForwardTab = e => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault()
      firstFocusableEl.focus()
    }
  }

  const onKeyDown = e => {
    switch (e.key) {
    case KEY_CODES.ESCAPE:
    case KEY_CODES.ESCAPE_IE11: {
      setIsMenuOpen(false)
      break
    }

    case KEY_CODES.TAB: {
      if (e.shiftKey) {
        handleBackwardTab(e)
      } else {
        handleForwardTab(e)
      }
      break
    }

    default: {
      break
    }
    }
  }

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)

    setFocusables()
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <SideMenuStyled>
      <Helmet>
        <body className={isMenuOpen ? "blur" : ""} />
      </Helmet>
      <Hamburger hamburgerRef={buttonRef} isOpen={isMenuOpen} onClick={setIsMenuOpen} />
      <SideBarStyled isOpen={isMenuOpen}>
        <ListContainer>
          <ul ref={navRef}>
            {HEADER_LIST.map((item) => {
              return item.type === LINK_TYPES.LINK ? (
                <ListItem key={item.id}><HashLink onClick={() => setIsMenuOpen(false)} scroll={scrollToEl} to={`#${item.href}`}>{item.label}</HashLink></ListItem>
              ) : (
                <ResumeButton download key={item.id} href={item.href}>{item.label}</ResumeButton>
              )
            })}
          </ul>
        </ListContainer>
      </SideBarStyled>
      <SideBarBackdrop isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
      </SideBarBackdrop>
    </SideMenuStyled>
  )
}

export default SideMenu