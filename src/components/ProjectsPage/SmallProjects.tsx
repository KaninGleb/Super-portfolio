import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { Container, FlexWrapper, SectionTitle } from '@/common'
import { SmallProject } from '@/components'
import { sectionsTitlesData, smallProjectsData } from '@/app/appData.ts'
import { theme } from '@/styles'

export const SmallProjects = () => {
  return (
    <StyledSmallProjects>
      <Container>
        <MainWrapper direction="column" gap="48px">
          <FlexWrapper justify="space-between" align="center" gap="16px">
            <FlexWrapper>
              <SectionTitle section={sectionsTitlesData.projectsPage.smallProjects} />
            </FlexWrapper>
          </FlexWrapper>
          <Fade direction={'left'}>
            <StyledFlexWrapper wrap="wrap" gap="16px">
              {Object.values(smallProjectsData).map((project, index) => (
                <SmallProject
                  key={index}
                  software={project.software}
                  title={project.title}
                  text={project.text}
                  links={project.links}
                  maxWidth={'330px'}
                />
              ))}
            </StyledFlexWrapper>
          </Fade>
        </MainWrapper>
      </Container>
    </StyledSmallProjects>
  )
}

const StyledSmallProjects = styled.section``

const MainWrapper = styled(FlexWrapper)`
  @media ${theme.media.tablet} {
    gap: 25px;
  }
`

const StyledFlexWrapper = styled(FlexWrapper)`
  @media ${theme.media.width1044} {
  }

  @media ${theme.media.tablet} {
    justify-content: center;
  }
`
