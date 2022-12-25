import { useEffect, useRef } from "react"
import styled from "styled-components"
import { about } from "../../global/content"
import { screenRevealConfig } from "../../global/data/constants"
import scrollReveal from "../../global/utils/scrollReveal"
import Img from "../../assets/images/my_image.jpg"

const AboutContainer = styled.section`
   margin-top: 8em;
   margin-bottom: 20em;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   color: ${({theme}) => theme.colors.primary_dark};

   h4 {
    font-size: var(--font-size-3);
    margin: 0;
    margin-bottom: 1em;

    span.accent {
      font-size: var(--font-size-3);
      color: ${({theme}) => theme.colors.secondary};
    }
   }

   p {
    margin-bottom: 15px;
    margin-top: 0;
    font-family: var(--font-size-1);
    color: ${({theme}) => theme.colors.primary_dark};
    
    span.accent {
      color: ${({theme}) => theme.colors.secondary};
    }
   }

   @media (max-width: 768px) {
    justify-content: space-evenly;
    margin-top: 3em;
    margin-bottom: 10em;

    h4 {
      margin-bottom: 0.5em;
    }
  }
`
const Content = styled.div`
  flex: 0 0 55%;

  @media (max-width: 1080px) {
    flex: 0 0 55%;
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    justify-content: space-evenly;
    margin-bottom: 2em;
  }
`
const Aside = styled.div`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
      --s: 15px;  /* size of the frame */
      --b: 1px;   /* border thickness */
      --w: 320px;
      --c: ${({theme}) => theme.colors.secondary_dark};
      
      width: var(--w);
      aspect-ratio: 1;
      object-fit: cover;
      padding: calc(2*var(--s));
      --_g: var(--c) var(--b),#0000 0 calc(100% - var(--b)),var(--c) 0;
      background:
        linear-gradient(      var(--_g)) 50%/100% var(--_i,100%) no-repeat,
        linear-gradient(90deg,var(--_g)) 50%/var(--_i,100%) 100% no-repeat;
      outline: calc(var(--w)/2) solid ${({theme}) => theme.colors.background}95;
      outline-offset: calc(var(--w)/-2.4 - 2*var(--s));
      transition: .4s;
      cursor: pointer;

      @media (max-width: 1080px) {
          outline-offset: calc(var(--w)/-2 - 2*var(--s));
          --w: 280px;
      }

      @media (max-width: 768px) {
        --w: 360px;
        outline-offset: calc(var(--w)/-2.4 - 2*var(--s));
      }
    }
    img:hover {
      outline: var(--b) solid var(--c);
      outline-offset: calc(var(--s)/-2);
      --_i: calc(100% - 2*var(--s));
    }

  @media (max-width: 1080px) {
      width: 40%;
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 16px);
    justify-content: space-evenly;
  }
`

const About = () => {
  const contentRef = useRef(null)
  const asideRef = useRef(null)

  useEffect(() => {
    scrollReveal.reveal(contentRef.current, screenRevealConfig(200))
    scrollReveal.reveal(asideRef.current, screenRevealConfig(400))
  }, [])

  return (
    <AboutContainer>
      <Content ref={contentRef}>
        {about}
      </Content>
      <Aside ref={asideRef}>
        <img src={Img} alt="Display Picture" />
      </Aside>
    </AboutContainer>
  )
}

export default About