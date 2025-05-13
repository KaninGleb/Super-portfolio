import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { Container } from '../../../common/Layout/Container.tsx'
import { FlexWrapper } from '../../../common/Layout/FlexWrapper.tsx'
import { Paragraph } from '../../../common/Paragraph.tsx'
import { SocialList } from '../../../common/SocialList.tsx'
import { theme } from '../../../styles/Theme.tsx'
import { contentData } from '../../../app/appData.ts'
import { imagePulseAnimation } from '../../../styles/animations/animations.ts'
import bgLeft from '../../../assets/images/background/contacts-page/contacts-page-bg-pseudo-left-short.svg'
import bgRight from '../../../assets/images/background/contacts-page/contacts-page-bg-pseudo-right-short.svg'
import { CopyableText } from './CopyableText/CopyableText.tsx'

export const ContactsForContactsPage = () => {
  return (
    <StyledContactsForContactsPage>
      <Container>
        <ContentFlexWrapper direction="column" gap="45px">
          <StyledFlexWrapper justify="space-between">
            <LeftSection direction="column" gap="20px">
              <Fade direction={'up'}>
                <Paragraph children={contentData.homePage.contacts.paragraph} fontWeight="500" />
              </Fade>
            </LeftSection>
            <RightSection gap="10px">
              <Fade direction={'right'} cascade damping={0.1}>
                <SupportWrapper direction="column" gap="8px">
                  <Fade direction={'up'} cascade damping={0.2}>
                    <Title>{contentData.contactPage.contacts.supportMe}</Title>
                    <CopyableText
                      text={contentData.contactPage.contacts.walletTitle}
                      textToCopy={contentData.contactPage.contacts.walletToCopy}
                      iconId={'copy'}
                      altIconId={'copySuccess'}
                    />
                  </Fade>
                </SupportWrapper>
                <MessageWrapper direction="column" gap="16px">
                  <Fade direction={'up'}>
                    <Title>{contentData.contactPage.contacts.message}</Title>
                  </Fade>
                  <SocialList
                    displayFlex={true}
                    direction={'column'}
                    gap="8px"
                    iconIds={contentData.contactPage.contacts.socials.iconIds}
                    showIcon={true}
                    iconsTitles={contentData.contactPage.contacts.socials.iconsTitles}
                    gapBetween={'5px'}
                  />
                </MessageWrapper>
              </Fade>
            </RightSection>
          </StyledFlexWrapper>
        </ContentFlexWrapper>
      </Container>
    </StyledContactsForContactsPage>
  )
}

const StyledContactsForContactsPage = styled.section`
  margin-bottom: 24px;
  position: relative;
  overflow-x: clip;

  &::before {
    content: '';
    // prettier-ignore
    background-image: url("${bgLeft}");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 160px;
    left: 0;
    width: 110px;
    height: 50px;
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
    width: 156px;
    height: 156px;
    animation: ${imagePulseAnimation} 2s infinite;
  }

  @media ${theme.media.bgPseudoOff} {
    &::before,
    &::after {
      display: none;
    }
  }
`

const ContentFlexWrapper = styled(FlexWrapper)`
  @media ${theme.media.tablet} {
    gap: 30px;
  }
`

const StyledFlexWrapper = styled(FlexWrapper)`
  gap: 30px;

  @media ${theme.media.tablet} {
    flex-wrap: wrap;
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
  @media ${theme.media.contactsWrap} {
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
  }

  @media ${theme.media.tablet} {
    flex-wrap: unset;
    justify-content: unset;
  }

  @media ${theme.media.mobile} {
    flex-direction: column-reverse;
  }
`

const SupportWrapper = styled(FlexWrapper)`
  outline: 1px solid ${theme.colors.primaryOutline};
  padding: 16px;
  height: fit-content;
`

const MessageWrapper = styled(FlexWrapper)`
  outline: 1px solid ${theme.colors.primaryOutline};
  padding: 16px;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 16px;
`
