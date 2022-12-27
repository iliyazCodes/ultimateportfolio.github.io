/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useMemo, useRef, useState } from "react"
import styled from "styled-components"
import { SCROLL_DIRECTIONS } from "../../global/data/constants"
import useScrollDirection from "../../global/hooks/useScrollDirection"

const ParralaxGearSection = styled.div`
    overflow: hidden;
`
const GearsContainer = styled.div`
   display: flex;
   justify-content: space-between;

   .gears {
        svg {
            width: 50px;
            height: 50px;
            color: ${({ theme }) => theme.colors.secondary_dark};
            position: relative;
            z-index: 2;

            &.down {
                position: relative;
                top: 30px;
                rotate: 30deg;
            }
        }


        &.left-gear {
            svg {
                animation: ${({ isClosed }) => !isClosed ? "spin 1s reverse" : "spin-reverse 1s"};
                &.down {
                    animation: ${({ isClosed }) => isClosed ? "spin 1s reverse" : "spin-reverse 1s"};
                }
            }
        }
        
        &.right-gear {
            svg {
                animation: ${({ isClosed }) => isClosed ? "spin 1s reverse" : "spin-reverse 1s"};
                &.down {
                    animation: ${({ isClosed }) => !isClosed ? "spin 1s reverse" : "spin-reverse 1s"};
                }
            }
        }
   }
   
`
const ChainContainer = styled.div`
   height: ${({isClosed}) => isClosed ? "150px" : "600px"};
   transition: height 1s var(--easing);
   position: relative;
   border-bottom: 3px solid ${({ theme }) => theme.colors.primary_dark};


   &::before, &::after {
    content: "";
    width: 3px;
    position: absolute;
    top: -10px;
    bottom: 0;
    background-image: linear-gradient(${({ theme }) => theme.colors.primary_dark} 50%,rgba(255,255,255,0) 0%);
    background-position: right;
    background-size: 3px 30px;
    background-repeat: repeat-y;
    z-index: 1;
   }

   &::before {
    left: 24px;
   }

   &::after {
    right: 24px;
   }
`
const DragContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 1em 2em;
`

const ParralaxGearContainer = () => {
  const [isClosed, setIsClosed] = useState(false)
  const gearsRef = useRef(null)
  const scrollDirection = useScrollDirection(SCROLL_DIRECTIONS.UP)

  const onScroll = (e) => {
    const el = gearsRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const onTop = rect.top <= 250 && rect.top >= 100

    if (onTop && scrollDirection === SCROLL_DIRECTIONS.DOWN) {
      setIsClosed(true)
    } else if (onTop && scrollDirection === SCROLL_DIRECTIONS.UP) {
      setIsClosed(false)
    }
  } 


  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [scrollDirection])

  return (
    <ParralaxGearSection ref={gearsRef}>
      <GearsContainer isClosed={isClosed}>
        <div className="left-gear gears">
          <FontAwesomeIcon icon="gear" />
          <FontAwesomeIcon icon="gear" className="down" />
        </div>
        <div className="right-gear gears">
          <FontAwesomeIcon icon="gear" className="down" />
          <FontAwesomeIcon icon="gear" />
        </div>
      </GearsContainer>
      <ChainContainer isClosed={isClosed}></ChainContainer>
      <DragContainer>
        <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
      </DragContainer>
    </ParralaxGearSection>
  )
}

export default ParralaxGearContainer