import styled from "styled-components"
import ParralaxGearContainer from "./parralaxGearContainer"

const WorkContainer = styled.section`
   margin-top: 8em;
   margin-bottom: 20em;

   @media (max-width: 768px) {
    margin-top: 3em;
    margin-bottom: 10em;
  }
`

const Work = () => {
  return (
    <WorkContainer>
      <ParralaxGearContainer />
    </WorkContainer>
  )
}

export default Work