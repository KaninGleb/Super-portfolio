import styled from 'styled-components'
import { Zoom } from 'react-awesome-reveal'
import { Container, FlexWrapper } from '@/common'
import { imagePulseAnimation, theme, font } from '@/styles'
import { contentData } from '@/app/appData.ts'
import { pseudoBgR, quotationMark } from '@/assets'

export const Testimony = () => {
  return (
    <StyledTestimony>
      <Container>
        <ZoomFlexWrapper>
          <StyledFlexWrapper direction="column" align="flex-end">
            <StyledQuote>{contentData.homePage.testimony.quote}</StyledQuote>
            <StyledCite>{contentData.homePage.testimony.cite}</StyledCite>
          </StyledFlexWrapper>
        </ZoomFlexWrapper>
      </Container>
    </StyledTestimony>
  )
}

const StyledTestimony = styled.section`
  font-size: 24px;
  margin-bottom: 74px;
  position: relative;
  overflow-x: clip;

  &::after {
    content: '';
    // prettier-ignore
    background-image: url("${pseudoBgR}");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 14px;
    right: -90px;
    width: 170px;
    height: 1720px;
    animation: ${imagePulseAnimation} 2s infinite;
  }

  @media ${theme.media.bgPseudoOff} {
    &::after {
      display: none;
    }
  }

  @media ${theme.media.mobile} {
    margin-bottom: 50px;
  }
`

const ZoomFlexWrapper = styled(Zoom)`
  display: flex;
  justify-content: center;
`

const StyledFlexWrapper = styled(FlexWrapper)`
  position: relative;
`

const StyledQuote = styled.blockquote`
  ${font({ weight: 500, Fmax: 24, Fmin: 16 })};
  border: 1px solid ${theme.colors.primaryOutline};
  padding: 32px;
  max-width: 714px;
  width: 100%;
  position: relative;

  &::before {
    content: '';
    // prettier-ignore
    background-image: url("${quotationMark}");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    max-width: 42px;
    width: 100%;
    height: 100%;
    top: -14px;
    left: 10px;
    max-height: 30px;
    z-index: 1;
  }

  &::after {
    content: '';
    // prettier-ignore
    background-image: url("${quotationMark}");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    max-width: 42px;
    width: 100%;
    height: 100%;
    bottom: -14px;
    right: 12px;
    max-height: 30px;
  }

  @media ${theme.media.tablet} {
    max-width: fit-content;
    padding: 26px;
    line-height: 1.625;
  }

  @media ${theme.media.mobile} {
    padding: 15px;
  }
`

const StyledCite = styled.cite`
  ${font({ weight: 500, Fmax: 24, Fmin: 16 })};
  border: 1px solid ${theme.colors.primaryOutline};
  border-top: none;
  padding: 16px;

  @media ${theme.media.tablet} {
    padding: 14px;
  }
`
