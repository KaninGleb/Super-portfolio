import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { Container, SectionTitle, Paragraph, RouterDomLink, SocialList, FlexWrapper } from '@/common'
import { sectionsTitlesData, contentData } from '@/app/appData.ts'
import { theme } from '@/styles'

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <ContentFlexWrapper direction="column" gap="45px">
          <SectionTitle section={sectionsTitlesData.homePage.contacts} />
          <StyledFlexWrapper justify="space-between">
            <LeftSection direction="column" gap="20px">
              <Fade direction={'up'} cascade damping={0.2}>
                <Paragraph children={contentData.homePage.contacts.paragraph} fontWeight="500"></Paragraph>
                <RouterDomLink to="/contacts" children={contentData.homePage.contacts.readMoreBtn} mWidth={'148px'} />
              </Fade>
            </LeftSection>
            <Fade direction={'right'}>
              <RightSection direction="column" gap="16px">
                <Fade direction={'up'}>
                  <StyledTitle>{contentData.homePage.contacts.box}</StyledTitle>
                </Fade>
                <SocialList
                  displayFlex={true}
                  direction={'column'}
                  gap="8px"
                  iconIds={contentData.homePage.contacts.socials.iconIds}
                  showIcon={true}
                  iconsTitles={contentData.homePage.contacts.socials.iconsTitles}
                  gapBetween={'5px'}
                />
              </RightSection>
            </Fade>
          </StyledFlexWrapper>
        </ContentFlexWrapper>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  overflow: hidden;
  padding-bottom: 2px;
`

const ContentFlexWrapper = styled(FlexWrapper)`
  @media ${theme.media.tablet} {
    gap: 30px;
  }
`

const StyledFlexWrapper = styled(FlexWrapper)`
  @media ${theme.media.tablet} {
    flex-wrap: wrap;
    gap: 30px;
  }
`

const LeftSection = styled(FlexWrapper)`
  max-width: 505px;
  width: 100%;

  @media ${theme.media.tablet} {
    max-width: unset;
  }
`

const RightSection = styled(FlexWrapper)`
  outline: 1px solid ${theme.colors.primaryOutline};
  width: 100%;
  padding: 16px;
`

const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
`
