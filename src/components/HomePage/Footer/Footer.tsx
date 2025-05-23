import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import { theme, font } from '@/styles'
import { Container, Logo, SocialList, FlexWrapper } from '@/common'
import { contentData } from '@/app/appData.ts'

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <BothSections justify="space-between">
          <LeftSection>
            <StyledFlexWrapper gap="24px">
              <Logo />
              <SocialList
                iconIds={contentData.homePage.footer.socialsLeft.iconIds}
                iconsTitles={contentData.homePage.footer.socialsLeft.iconsTitles}
              />
            </StyledFlexWrapper>
            <Fade direction={'up'}>
              <span>{contentData.homePage.footer.span}</span>
            </Fade>
          </LeftSection>

          <FlexWrapper direction="column" align="flex-start" gap="12px">
            <Fade direction={'up'}>
              <h3>{contentData.homePage.footer.mediaHeader}</h3>
            </Fade>
            <SocialList
              displayFlex={true}
              gap={'8px'}
              iconIds={contentData.homePage.footer.socialsRight.iconIds}
              showIcon={true}
            />
          </FlexWrapper>
        </BothSections>
        <Fade direction={'up'}>
          <small>{contentData.homePage.footer.copyright}</small>
        </Fade>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  margin: 145px 0 32px;
  border-top: 1px solid ${theme.colors.primaryOutline};

  h3 {
    font-weight: 500;
    font-size: 24px;
  }

  small {
    font-size: 16px;
    color: #abb2bf;
  }

  @media ${theme.media.tablet} {
    margin: 70px 0 16px;
    small {
      ${font({ weight: 400, color: theme.colors.primaryLightText, Fmax: 16, Fmin: 14 })};
    }
  }
`

const BothSections = styled(FlexWrapper)`
  margin: 32px 0 48px;

  @media ${theme.media.tablet} {
    flex-wrap: wrap;
    margin: 20px 0 30px;
    gap: 30px;
  }
`

const LeftSection = styled.div`
  text-align: left;

  p {
    color: ${theme.colors.primaryLightText};
  }
`

const StyledFlexWrapper = styled(FlexWrapper)`
  margin-bottom: 16px;
`
