import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { Container, FlexWrapper, Paragraph, Photo } from '@/common'
import { contentData } from '@/app/appData.ts'
import { imagePulseAnimation, pulseAnimation, theme } from '@/styles'
import { aboutMePhoto, bothPseudo, bgLeft, bgRight } from '@/assets'

export const AboutMeForPage = () => {
  return (
    <StyledAboutMeForPage>
      <Container>
        <StyledFlexWrapper gap="166px">
          <LeftSection>
            <Fade direction={'up'} cascade damping={0.1}>
              {Object.values(contentData.homePage.aboutMe.paragraphs).map((paragraph, index) => (
                <Paragraph key={index} children={paragraph} />
              ))}
            </Fade>
          </LeftSection>
          <RightSection direction={'right'}>
            <StyledPhoto src={aboutMePhoto} Wmax={338} Wmin={250} alt="About Me Photo" />
          </RightSection>
        </StyledFlexWrapper>
      </Container>
    </StyledAboutMeForPage>
  )
}

const StyledAboutMeForPage = styled.section`
  margin-bottom: 42px;
  position: relative;
  overflow-x: clip;

  &::before {
    content: '';
    // prettier-ignore
    background-image: url("${bgLeft}");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 202px;
    left: 0;
    width: 160px;
    height: 976px;
    animation: ${imagePulseAnimation} 2s infinite;
  }

  &::after {
    content: '';
    // prettier-ignore
    background-image: url("${bgRight}");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: -90px;
    width: 170px;
    height: 1240px;
    animation: ${imagePulseAnimation} 2s infinite;
  }

  @media ${theme.media.bgPseudoOff} {
    &::before,
    &::after {
      display: none;
    }
  }
`

const StyledFlexWrapper = styled(FlexWrapper)`
  @media ${theme.media.width1044} {
    gap: 80px;
  }

  @media ${theme.media.tablet} {
    flex-wrap: wrap-reverse;
    gap: 30px;
  }
`

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: 28px;
  }
`

const RightSection = styled(Fade)`
  position: relative;
  height: fit-content;
  transform: translateY(-70px);

  &::after {
    content: '';
    display: inline-block;
    height: 2px;
    width: 270px;
    background-color: ${theme.colors.secondaryOutline};
    box-shadow: 0 0 5px rgba(199, 120, 221, 1);
    animation: ${pulseAnimation} 2s infinite;

    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    // prettier-ignore
    background-image: url("${bothPseudo}");
    background-size: contain;
    background-repeat: no-repeat;
    top: 60px;
    left: -5px;

    width: clamp(250px, calc((100vw - 328px) * (328 - 250) / (1024 - 328) + 250px), 328px);
    height: 276px;
    animation: ${imagePulseAnimation} 2s infinite;
    z-index: 999;
  }

  @media ${theme.media.tablet} {
    margin: 0 auto;
    transform: translateY(0px);
  }

  @media ${theme.media.mobile} {
    &::after {
      width: 220px;
      transform: translateX(-45%);
    }
  }
`

const StyledPhoto = styled(Photo)`
  display: block;
  position: relative;

  @media ${theme.media.tablet} {
  }
`
