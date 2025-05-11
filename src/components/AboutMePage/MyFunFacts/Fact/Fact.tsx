import styled from 'styled-components'
import { theme } from '../../../../styles/Theme.tsx'

type FactPropsType = {
  fact: string
  highlights?: string[]
}

export const Fact = (props: FactPropsType) => {
  return <StyledFact dangerouslySetInnerHTML={{ __html: props.fact }} />
}

const StyledFact = styled.li`
  color: ${theme.colors.primaryLightText};
  padding: 8px;
  outline: 1px solid ${theme.colors.primaryOutline};
  width: fit-content;
  max-height: 38px;

  span {
    color: ${theme.colors.primaryText};
  }

  @media ${theme.media.tablet} {
    flex-grow: 1;
    max-height: unset;
    line-height: 1.625;
  }
`
