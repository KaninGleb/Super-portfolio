import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { Container, SectionTitle, FlexWrapper, Photo } from '@/common'
import { Fact } from '@/components'
import { sectionsTitlesData, contentData } from '@/app/appData.ts'
import { theme } from '@/styles'
import { myFunFactsImage } from '@/assets'
import { imagePulseAnimation } from '@/styles/animations/animations.ts'

export const MyFunFacts = () => {
  return (
    <StyledMyFunFacts>
      <Container>
        <SectionTitle section={sectionsTitlesData.aboutMePage.myFunFacts} />
        <SectionWrapper gap={'136px'}>
          <FactsSection>
            {contentData.aboutMePage.myFunFacts.map((fact, index) => (
              <FadeWrapper key={index} delay={index * 100} direction={'up'} duration={600}>
                <Fact key={index} fact={fact.fact} />
              </FadeWrapper>
            ))}
          </FactsSection>
          <PhotoSection>
            <Fade direction={'right'} duration={800}>
              <StyledPhoto src={myFunFactsImage} Wmin={150} Wmax={202} alt={'My fan facts image'} />
            </Fade>
          </PhotoSection>
        </SectionWrapper>
      </Container>
    </StyledMyFunFacts>
  )
}

const StyledMyFunFacts = styled.section`
  h2 {
    margin-bottom: 26px;
  }
`

const SectionWrapper = styled(FlexWrapper)`
  margin-right: 80px;

  @media ${theme.media.width1044} {
    margin-right: unset;
  }
`

const FactsSection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 16px;
`

const FadeWrapper = styled(Fade)`
  @media ${theme.media.tablet} {
    display: flex;
    flex-grow: 1;
  }
`

const PhotoSection = styled.div`
  transform: translateY(-30px);

  @media ${theme.media.width1044} {
    display: none;
  }
`

const StyledPhoto = styled(Photo)`
  animation: ${imagePulseAnimation} 2s infinite;
`
