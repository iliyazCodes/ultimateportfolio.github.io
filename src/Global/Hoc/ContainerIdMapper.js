import styled from "styled-components"
import PropTypes from "prop-types"
import { useProgressIconContext } from "../contexts/scrollProgressIconMapper"
import { useEffect, useRef } from "react"
import scrollReveal from "../utils/scrollReveal"
import { screenRevealConfig } from "../data/constants"

const Container = styled.div`
    margin-bottom: 5em;
    width: 100%;
    max-width: 1000px;
    margin: auto;


    &:nth-child(2n) .title{
      flex-direction: row;

      &::after {
            margin-left: 1em;
        }
    }
`

const ContainerTitle = styled.h3`
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0px 40px;
    width: 100%;
    font-size: var(--font-heading);
    white-space: nowrap;
    flex-direction: row-reverse;
    padding: 0;

    &::after {
            content: "";
            display: block;
            position: relative;
            top: calc(50% - 1px);
            width: 100%;
            height: 1px;
            margin-right: 1em;
            background-color: ${({ theme }) => theme.colors.secondary_dark};
        }

    @media (max-width: 768px) {
        margin-left: 0;
        font-size: var(--font-size-3);
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
      {title && <ContainerTitle className="title">{title}</ContainerTitle>}
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