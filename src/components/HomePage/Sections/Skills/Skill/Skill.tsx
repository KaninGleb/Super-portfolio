import styled from 'styled-components'
import { theme } from '../../../../../styles/Theme.tsx'
import { StyledHr } from './StyledHr/StyledHr.tsx'

type SkillPropsType = {
  order?: number
  title: string
  description: string[]
  maxWidth?: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill order={props.order} maxWidth={props.maxWidth}>
      <SkillTitle>{props.title}</SkillTitle>
      <StyledHr />
      <SkillDescription>
        {props.description.map((desc, index) => (
          <FlexItem key={index}>{desc}</FlexItem>
        ))}
      </SkillDescription>
    </StyledSkill>
  )
}

const StyledSkill = styled.div<{ order?: number; maxWidth?: string }>`
  order: ${(props) => props.order};
  outline: 1px solid ${theme.colors.primaryOutline};
  padding: 8px;
  max-width: ${(props) => props.maxWidth || '178px'};
  transition: 0.3s;
  height: fit-content;

  @media ${theme.media.width1044} {
    display: block;
    flex-direction: column;
    height: max-content;
  }

  @media ${theme.media.tablet} {
    max-width: unset;
    gap: 12px;
    flex-grow: 1;
  }
`

const SkillTitle = styled.h3`
  display: inline-block;
  font-size: 16px;
  transition: animation 0.5s ease-in-out;

  @media ${theme.media.tablet} {
    font-size: 20px;
    font-weight: 500;
  }
`

const SkillDescription = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media ${theme.media.tablet} {
    font-size: 18px;
  }
`

const FlexItem = styled.li`
  color: ${theme.colors.primaryLightText};
`
