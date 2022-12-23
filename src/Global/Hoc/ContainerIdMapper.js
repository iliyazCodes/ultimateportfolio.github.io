/* eslint-disable no-unused-vars */
import styled from "styled-components"
import PropTypes from "prop-types"
import { useProgressIconContext } from "../Contexts/ScrollProgressIconMapper"
import { useEffect, useRef } from "react"
import scrollReveal from "../Utils/ScrollReveal"
import { screenRevealConfig } from "../Data/Constants"

const Container = styled.div`
    margin-bottom: 5em;
    width: 100%;
`

const ContainerTitle = styled.h3`
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: var(--font-heading);
    white-space: nowrap;
    margin-left: 6em;
    padding: 0;


    &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 9em;
        left: -10em;
        background-color: ${({ theme }) => theme.colors.secondary};
        top: calc(50% - 1px);
    }

    @media (max-width: 1080px) {
        margin-left: 3em;

        &::before {
            width: 4.5em;
            left: -5em;
        }
    }

    @media (max-width: 768px) {
        margin-left: 0;
        font-size: var(--font-size-3);

        &::before {
            content: none
        }

        &::after {
            content: "";
            display: block;
            position: relative;
            top: calc(50% - 1px);
            width: 100%;
            height: 1px;
            margin-left: .5em;
            background-color: ${({ theme }) => theme.colors.secondary};
        }
    }
`

const ContainerIdMapper = ({ children, id, title, showInProgress, scrollToReveal = true }) => {
  const { updateIconRefs } = useProgressIconContext()
  const containerRef = useRef(null)

  useEffect(() => {
    if (showInProgress) {
      updateIconRefs(containerRef, id)
    }

    if (scrollToReveal) {
      scrollReveal.reveal(containerRef.current, screenRevealConfig())
    }
  }, [])
  return (
    <Container id={id} ref={containerRef} key={id}>
      {title && <ContainerTitle>{title}</ContainerTitle>}
      {children}
    </Container>
  )
}

ContainerIdMapper.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  showInProgress: PropTypes.bool,
  scrollToReveal: PropTypes.bool,
}

export default ContainerIdMapper