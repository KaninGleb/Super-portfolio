import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import {theme} from "../../../../styles/Theme.tsx";
import {Container} from "../../../../components/Container.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {Paragraph} from "../../../../components/Paragraph.tsx";
import {RouterDomLink} from "../../../../components/RouterDomLink.tsx";
import {sectionsData, textData} from "../../../../data/appData.ts";
import {SocialList} from "../../../../components/SocialList.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <ContentFlexWrapper direction='column' gap='45px'>
                    <SectionTitle section={sectionsData.homePage.contacts}/>
                    <StyledFlexWrapper justify='space-between'>
                        <LeftSection direction='column' gap='20px'>
                            <Fade direction={'up'} cascade damping={.2}>
                                <Paragraph children={textData.contacts.paragraph} fontWeight='500' lineHeight={'1.3'}></Paragraph>
                                <RouterDomLink to="/contacts" children={'Read more ->'} mWidth={'148px'}/>
                            </Fade>
                        </LeftSection>
                        <Fade direction={'right'}>
                            <RightSection direction='column' gap='16px'>
                                <Fade direction={'up'}>
                                    <StyledTitle>Message me here</StyledTitle>
                                </Fade>
                                <SocialList displayFlex={true}
                                            direction={'column'}
                                            gap='8px'
                                            iconIds={['discord', 'email']}
                                            showIcon={true}
                                            iconsTitles={['!Elias#3519', 'elias@elias.me']}
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
    overflow: hidden
;
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
`

const RightSection = styled(FlexWrapper)`
    outline: 1px solid ${theme.colors.primaryOutline};
    max-width: 204px;
    width: 100%;
    padding: 16px;
`

const StyledTitle = styled.h3`
    font-weight: 600;
    font-size: 16px;
`