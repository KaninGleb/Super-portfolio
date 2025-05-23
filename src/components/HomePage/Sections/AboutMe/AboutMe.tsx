import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { Container, SectionTitle, Paragraph, RouterDomLink, FlexWrapper, Photo } from '@/common'
import { sectionsTitlesData, contentData } from '@/app/appData.ts'
import { imagePulseAnimation, pulseAnimation, theme } from '@/styles'
import { aboutMePhoto, pseudoBgL, bothPseudo } from '@/assets'

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <StyledSectionTitle>
          <SectionTitle section={sectionsTitlesData.homePage.aboutMe} />
        </StyledSectionTitle>
        <StyledFlexWrapper gap="166px">
          <LeftSection>
            <Fade direction={'up'} cascade damping={0.1}>
              {Object.values(contentData.homePage.aboutMe.paragraphs).map((paragraph, index) => (
                <Paragraph key={index} children={paragraph} />
              ))}
              <RouterDomLink to="/about-me" children={contentData.homePage.aboutMe.readMoreBtn} mWidth={'148px'} />
            </Fade>
          </LeftSection>
          <RightSection direction={'right'}>
            <StyledPhoto src={aboutMePhoto} Wmax={338} Wmin={250} alt="About Me Photo" />
          </RightSection>
        </StyledFlexWrapper>
      </Container>
    </StyledAboutMe>
  )
}

const StyledAboutMe = styled.section`
  margin-bottom: 112px;
  padding-bottom: 2px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    // prettier-ignore
    background-image: url("${pseudoBgL}");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 134px;
    left: 0;
    width: 160px;
    height: 680px;
    animation: ${imagePulseAnimation} 2s infinite;
  }

  @media ${theme.media.bgPseudoOff} {
    padding-bottom: 2px;

    &::before {
      display: none;
    }
  }

  @media ${theme.media.tablet} {
    margin-bottom: 70px;
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
  p {
    margin-bottom: 28px;
  }
`

const StyledSectionTitle = styled(FlexWrapper)`
  margin-bottom: 22px;

  @media ${theme.media.tablet} {
    margin-bottom: unset;
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
