import { useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { jobs_content } from "../../Global/Content"

const JobsStepperContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 0 2em;
  .step-wrapper {
        padding-bottom: 1em;
    }
  .step-wrapper:last-child {
    .joining-line:last-child {
        &::after {
            content: none;
        }
     }
  }

  @media (max-width: 768px) {
    padding: 0 1em;

    .step-wrapper:last-child {
        button {
            padding-bottom: 1em;
        }
    }
    .step-wrapper:first-child {
        button {
            padding-top: 1em;
        }
    }
  }
`
const StepWrapper = styled.div`
`
const StepHeader = styled.div`
   button {
    background-color: transparent;
    border: 0;
    width: 100%;
    text-align: left;
    padding: 2em 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;


    &:hover, &:focus-visible {
        outline: 0;
        border: 0;
        .step-name {
            color: ${({ theme }) => theme.colors.secondary_dark};
        }
    }

    &:focus:not(:focus-visible) {
        outline: 0;
        border: 0;
    }  

    .step-btn {
        font-size: var(--font-size-2);
        margin-left: 4.5em;
        position: relative;
        color: ${({ theme }) => theme.colors.primary};

        &::after {
            content: "";
            position: absolute;
            background-color: ${({ theme }) => theme.colors.primary};
            height: 1px;
            left: -3em;
            width: 2.5em;
            top: 50%;
        }
    }

    .step-name {
        color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: 600;
        font-size: var(--font-size-3);
        transition: var(--transition);

        @media (max-width: 768px) {
            font-size: calc(var(--font-size-2) * 1.2);
        }
    }

   }
 
`
const StepContent = styled.div`
  padding-left: calc(var(--lg-space-size) * 1.8);
  color: ${({ theme }) => theme.colors.primary_dark};

  @media (max-width: 768px) {
    padding-left: calc(var(--md-space-size));
  }
`
const JoiningLine = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    bottom: 0;
    left: var(--md-space-size);
    width: 1px;
    background-color: ${({ theme }) => theme.colors.primary_dark};
    min-height: 2.5em;

    @media (max-width: 768px) {
        left: 0.5em;
    }
  }
`
const ResponsibilitiesList = styled.ul`
   list-style: none;
   padding: 0;
   margin-bottom: 1.5em;

    li {
        margin-bottom: 0.8em;
        position: relative;

    &::before {
        content: "▹";
        color: ${({ theme }) => theme.colors.secondary};
        left: -2em;
        top: 0;
        position: absolute;
    }

    @media (max-width: 768px) {
        margin-left: 0;

        &::before {
            left: -1em;
        }
    }
   }
`
const TechList = styled.ul`
   list-style: none;
   padding: 0;
   margin-bottom: 1em;
   /* width: 60%; */
   margin: auto;

    li {
        margin-bottom: 0.8em;
        position: relative;
        display: inline-block;
        /* width: 50%; */
        padding: .5em 1em;
        border-radius: 100px;
        background-color: ${({ theme }) => theme.colors.secondary_dark};
        color: ${({ theme }) => theme.colors.primary};
        margin-right: .5em;

    /* &::before {
        content: "▹";
        color: ${({ theme }) => theme.colors.secondary};
        left: -30px;
        top: 0;
        position: absolute;
    } */
   }
`

const JobsStepper = () => {
  const [activeStep, setActiveStep] = useState(0)

  const onStepClick = (i) => {
    if (i === activeStep) {
      setActiveStep(-1)
      return
    }

    setActiveStep(i)
  }
  return (
    <JobsStepperContainer>
      {jobs_content.map((job, i) => (
        <StepWrapper key={job.year} className="step-wrapper">
          <StepHeader>
            <button onClick={() => onStepClick(i)}>
              <span className="step-name">
                {job.name}
              </span>
              <span className="step-btn">
                {job.year}
              </span>
            </button>
          </StepHeader>
          <JoiningLine className="joining-line">
            <TransitionGroup component={null}>
              {i === activeStep && (
                <CSSTransition timeout={1000} classNames="slide-up">
                  <StepContent>
                    <ResponsibilitiesList>
                      {job.responsibilities.map((responsibility, i) => {
                        return (
                          <li key={i}>{responsibility}</li>
                        )
                      })}
                    </ResponsibilitiesList>
                    <TechList>
                      {job.technology.map((tech, i) => {
                        return (
                          <li key={i}>{tech}</li>
                        )
                      })}
                    </TechList>
                  </StepContent>
                </CSSTransition>
              )}
            </TransitionGroup>
          </JoiningLine>
        </StepWrapper>
      ))}
    </JobsStepperContainer>
  )
}

export default JobsStepper