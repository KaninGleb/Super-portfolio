import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { theme } from '../styles/Theme.tsx'
import { Icon } from './Icon.tsx'
import { socialData } from '../app/appData.ts'

type SocialListPropsType = {
  iconIds: string[]
  showIcon?: boolean
  iconsTitles?: string[]
  iconSize?: string
  displayFlex?: boolean
  direction?: string
  wrap?: string
  gap?: string
  gapBetween?: string
}

type FlexPropsType = {
  displayFlex?: boolean
  direction?: string
  wrap?: string
  gap?: string
}

type StyledIconPropsType = {
  gapBetween?: string
}

export const SocialList = (props: SocialListPropsType) => {
  return (
    <StyledSocialList displayFlex={props.displayFlex} direction={props.direction} wrap={props.wrap} gap={props.gap}>
      {props.iconIds.map((itemId, index) => {
        const socialItem = socialData.find((item) => item.id === itemId)
        const title = props.iconsTitles ? props.iconsTitles[index] : ''

        return (
          socialItem && (
            <Fade key={itemId} direction={'up'} delay={index * 100} cascade damping={0.2}>
              <SocialItem>
                <SocialLink
                  href={socialItem.href}
                  target="_blank"
                  aria-label={socialItem.areaLabel}
                  gapBetween={props.gapBetween}
                >
                  {props.showIcon && (
                    <Icon
                      iconId={socialItem.id}
                      width={props.iconSize || '32'}
                      height={props.iconSize || '32'}
                      viewBox={`0 0 32 32`}
                    />
                  )}
                  <IconTitle>{title}</IconTitle>
                </SocialLink>
              </SocialItem>
            </Fade>
          )
        )
      })}
    </StyledSocialList>
  )
}

const StyledSocialList = styled.ul<FlexPropsType>`
  display: ${(props) => (props.displayFlex ? 'flex' : '')};
  flex-direction: ${(props) => props.direction || undefined};
  flex-wrap: ${(props) => props.wrap || undefined};
  gap: ${(props) => props.gap || undefined};
`

const SocialItem = styled.li`
  max-height: 32px;

  @media ${theme.media.tablet} {
    max-height: 64px;
  }
`

const SocialLink = styled.a<StyledIconPropsType>`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.gapBetween};

  transition: 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    color: ${theme.colors.primaryText};
    span {
      color: ${theme.colors.primaryText};
    }
  }
`

const IconTitle = styled.span`
  display: flex;
  align-items: center;
  color: ${theme.colors.primaryLightText};
`
