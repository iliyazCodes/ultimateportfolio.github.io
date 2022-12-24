import styled from "styled-components"
import Logo from "../../assets/images/logo.png"
import { useLoaderContext } from "../../Global/Contexts/LoarderContext"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { LOADER_TIME } from "../../Global/Data/Constants"

const LoaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LeftDoor = styled.div`
  position: fixed;
  left: 0;
  right: 50%;
  top: 0;
  bottom: 0;
  z-index: 12;
  background-color: ${({theme}) => theme.colors.background};
`

const RightDoor = styled.div`
  position: fixed;
  left: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 12;
  background-color: ${({theme}) => theme.colors.background};
`

const LoaderImg = styled.img`
    width: 120px;
    height: 120px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`

const ImageContainer = styled.div`
    z-index: 13;
    width: 120px;
    height: 120px;
    position: relative;
    animation: rotate-animation 2s var(--easing) infinite both;

    span.left {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 50%;
        overflow: hidden;
    }

    span.right {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 50%;
        overflow: hidden;

        img {
          transform: translateX(-50%);
        }
    }
`

const Loader = () => {
  const { isLoading } = useLoaderContext()

  return (
    <TransitionGroup component={null}>
      {isLoading && (
        <CSSTransition classNames={"loader-animation"} timeout={LOADER_TIME / 2}>
          <LoaderContainer>
            <LeftDoor className="left-door"/>
            <RightDoor className="right-door"/>
            <ImageContainer className="image-container">
              <span className="left">
                <LoaderImg src={Logo} alt="loading"/>
              </span>
              <span className="right">
                <LoaderImg src={Logo} alt="loading"/>
              </span>
            </ImageContainer>
          </LoaderContainer>

        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

Loader.propTypes = { }

export default Loader