import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { theme } from '../../styles/Theme.tsx'
import { imagePulseAnimation, pulseAnimation } from '../../styles/animations/animations.ts'
import { font } from '../../styles/CommonFont.tsx'

type SectionTitlePropsType = {
  section: {
    id?: string
    name: string
    symbol: string
    Wmin?: number
    Wmax?: number
  }
}

export const SectionTitle = (props: SectionTitlePropsType) => {
  return (
    <Fade direction={'up'} duration={800}>
      <StyledSectionTitle id={props.section.id} Wmin={props.section.Wmin} Wmax={props.section.Wmax}>
        <span>{props.section.symbol}</span>
        {props.section.name}
      </StyledSectionTitle>
    </Fade>
  )
}

const StyledSectionTitle = styled.h2<{ Wmin?: number; Wmax?: number }>`
  display: inline-block;
  ${font({ weight: 500, Fmax: 32, Fmin: 26 })};
  color: #fff;
  position: relative;
  scroll-margin-top: 75px;

  span {
    color: #c778dd;
    animation: ${imagePulseAnimation} 2s infinite;
  }

  &::after {
    content: '';
    display: inline-block;
    height: 2px;
    background-color: ${theme.colors.secondaryOutline};

    position: absolute;
    top: 50%;
    left: 110%;

    width: clamp(
      ${(props) => props.Wmin}px,
      calc(
        (100vw - 375px) / (1024 - 375) * (${(props) => props.Wmax} - ${(props) => props.Wmin}) +
          ${(props) => props.Wmin}px
      ),
      ${(props) => props.Wmax}px
    );

    animation: ${pulseAnimation} 2s infinite;
    box-shadow: 0 0 5px rgba(199, 120, 221, 1);
  }
`
