import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { social_media } from "../../Global/Content"

const ContactContainer = styled.div`
   max-width: 600px;
   margin: auto;
   margin-top: 8em;
   text-align: center;
   color: ${({theme}) => theme.colors.primary_dark};

   @media (max-width: 768px) {
    margin-top: 3em;
  }
`

const ButtonsWrapper = styled.div`
   display: flex;
   justify-content: space-evenly;
   margin-top: 5em;
   margin-bottom: 15em;

   @media (max-width: 768px) {
    margin-bottom: 10em;
    margin-top: 3em;
  }
`

const EmailButton = styled.a`
   background-color: transparent;
   color: ${({ theme }) => theme.colors.secondary};
   border: 1px solid ${({ theme }) => theme.colors.secondary};
   cursor: pointer;
   margin-left: 1em;
   padding: .8em 1.2em;
   border-radius: var(--border-radius);
   transition: var(--transition);
   font-family: var(--font-family);
   display: inline-block;
   text-decoration: none;

   svg {
    margin-right: 1em;
   }

   &:focus, &:hover {
    background-color: ${({ theme }) => theme.colors.secondary}25;
    outline: none;
   }
`

const Title = styled.p`
   text-align: center;
`

const SocialMediaWrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 1em;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      left: calc(-100% - 1em);
      height: 1px;
      background-color: ${({ theme }) => theme.colors.primary_dark};
      top: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      right: calc(-100% - 1em);
      height: 1px;
      background-color: ${({ theme }) => theme.colors.primary_dark};
      top: 50%;
    }

  @media (max-width: 768px) {
    margin-bottom: 8em;
  }
`

const SocialMediaLink = styled.a`
  svg {
    font-size: var(--font-size-4);
    color: ${({color}) => color};
  }
`

const Contact = () => {
  return (
    <ContactContainer>
      <Title>I create beautiful websites your users will love. I work with you from start to finish to make sure your goals are reached and you are happy.</Title>
      <Title>Contact me by clicking the button below and lets build something awesome together.</Title>
      <ButtonsWrapper>
        <EmailButton href="tel:+919441067519"><FontAwesomeIcon icon="fa-solid fa-phone" />Call Me!</EmailButton>
        <EmailButton href="mailto:iliyaz.syed@icloud.com"><FontAwesomeIcon icon="fa-solid fa-envelope"/>Email Me!</EmailButton>
      </ButtonsWrapper>
      <SocialMediaWrapper>
        {social_media.map((item) => {
          return (
            <SocialMediaLink target="_blank" color={item.color} key={item.link} href={item.link}><FontAwesomeIcon icon={`fa-brands fa-${item.icon}`}/></SocialMediaLink>
          )
        })}
      </SocialMediaWrapper>
    </ContactContainer>
  )
}

export default Contact