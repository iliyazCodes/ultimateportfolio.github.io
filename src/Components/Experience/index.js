import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { screenRevealConfig } from "../../global/data/constants"
import scrollReveal from "../../global/utils/scrollReveal"
import JobsStepper from "./jobsStepper"
import SkillsChart from "./skillsChart"

const ExperienceContainer = styled.section`
   margin-top: 8em;
   margin-bottom: 20em;

   @media (max-width: 768px) {
    margin-top: 3em;
    margin-bottom: 10em;
  }
`
const SkillsChartContainer = styled.div`
   max-width: 750px;
`
const JobsStepperContainer = styled.div`
   margin-top: 5em;
   max-width: 750px;
   margin-left: auto;
`

const Experience = () => {
  const [isRevealed, setIsRevealed] = useState(false)
  const skillsRef = useRef(null)
  const jobsRef = useRef(null)

  useEffect(() => {
    scrollReveal.reveal(skillsRef.current, { ...screenRevealConfig(200), afterReveal: () => setIsRevealed(true) })
    scrollReveal.reveal(jobsRef.current, screenRevealConfig(200))
  }, [])


  return (
    <ExperienceContainer>
      <SkillsChartContainer ref={skillsRef} >
        <SkillsChart isRevealed={isRevealed} />
      </SkillsChartContainer>
      <JobsStepperContainer ref={jobsRef}>
        <JobsStepper />
      </JobsStepperContainer>
    </ExperienceContainer>
  )
}

export default Experience