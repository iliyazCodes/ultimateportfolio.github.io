/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { skills_chart } from "../../Global/Content"

const SkillsChartContainer = styled.div`
  flex: 0 0 45%;

  @media (max-width: 1080px) {
    flex: 0 0 45%;
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    justify-content: space-evenly;
    margin-bottom: 2em;
  }
`

const Label = styled.span`
    flex: 0 0 100%;
    font-size: var(--font-size-2);
    color: ${({theme}) => theme.colors.primary};
    font-weight: 600;
    margin-bottom: .5em;
    margin-left: .5em;
`

const SkillWrapper = styled.div`
   display: flex;
   margin-bottom: 2em;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;

   svg {
    color: ${({ color }) => color};
    font-size: var(--font-size-3);
    width: var(--font-size-3);
   }
`


const SkillProgress = styled.div`
   width: calc(100% - var(--font-size-3) - var(--font-size-3));
   height: 2px;
   background-color: ${({ theme }) => theme.colors.primary_dark}50;
   margin-left: 1em;
   position: relative;

   &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ score }) => score}%;
    background-color: ${({ color }) => color};
    transition: var(--transition);
    transition-delay: ${({delay}) => delay}ms;
    transition-duration: 1s;
    border-radius: 5px 0 0 5px;
   }
`

const SkillsChart = ({ isRevealed }) => {
  return (
    <SkillsChartContainer>
      {skills_chart.map((skill) => {
        return (
          <SkillWrapper key={skill.id} color={skill.color}>
            <Label>{skill.skill}</Label>
            <FontAwesomeIcon icon={`fa-brands fa-${skill.icon}`} />
            <SkillProgress delay={skill.delay} score={isRevealed ? skill.score : 0} color={skill.color} />
          </SkillWrapper>
        )
      })}
    </SkillsChartContainer>
  )
}

export default SkillsChart