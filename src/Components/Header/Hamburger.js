import styled, { css } from "styled-components"
import PropTypes from "prop-types"

const HamburgerStyled = styled.button`
    display: flex;
    flex-direction: column;
    width: 45px;
    cursor: pointer;
    position: relative;
    z-index: 10;
    background-color: transparent;
    border: 0;
    padding: 0;
    
    &:focus-visible {
        outline: 2px dashed ${({ theme }) => theme.colors.secondary};
        outline-offset: 3px;
    }
    &:focus:not(:focus-visible) {
        outline: none;
        outline-offset: 0px;
    } 

    span {
      background: ${({ theme }) => theme.colors.secondary};
      border-radius: 10px;
      height: 4px;
      margin: 4px 0;
      transition: var(--transition);

      &:nth-of-type(1) {
        width: 50%;
      }

      &:nth-of-type(2) {
        width: 100%;
      }

      &:nth-of-type(3) {
        width: 75%;
      }
    }

    input[type="checkbox"]{
      display:none;
    }

    ${({isOpen}) => isOpen && css`
        span:nth-of-type(1){
            transform-origin:bottom;
            transform: rotatez(45deg) translate(6px, 0px);
        }

        span:nth-of-type(2){
            transform-origin: top;
            transform: rotatez(-45deg)
        }


        span:nth-of-type(3){
            transform-origin: bottom;
            width: 55%;
            transform: translate(17px,-6px) rotatez(45deg);
        }
    `}
`
const Hamburger = ({ onClick, isOpen, hamburgerRef }) => {
  return (
    <HamburgerStyled ref={hamburgerRef} htmlFor="hamburger" onClick={() => onClick(!isOpen)} isOpen={isOpen}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerStyled>
  )
}

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  hamburgerRef: PropTypes.any.isRequired,
}

export default Hamburger