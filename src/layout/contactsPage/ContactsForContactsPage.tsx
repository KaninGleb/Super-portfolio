import styled from "styled-components";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Paragraph} from "../../components/Paragraph.tsx";
import {SocialList} from "../../components/SocialList.tsx";
import {theme} from "../../styles/Theme.tsx";
import {textData} from "../../data/appData.ts";
import bgLeft from "../../assets/images/background/contacts-page/contacts-page-bg-pseudo-left-short.svg";
import bgRight from "../../assets/images/background/contacts-page/contacts-page-bg-pseudo-right-short.svg";

import {imagePulseAnimation} from "../../animations/animations.ts";


export const ContactsForContactsPage = () => {
    return (
        <StyledContactsForContactsPage>
            <Container>
                <ContentFlexWrapper direction='column' gap='45px'>
                    <StyledFlexWrapper justify='space-between'>
                        <LeftSection direction='column' gap='20px'>
                            <Paragraph children={textData.contacts.paragraph} fontWeight='500' lineHeight={'1.3'}></Paragraph>
                        </LeftSection>

                        <RightSection gap='10px'>
                            <SupportWrapper direction='column' gap='8px'>
                                <Title>Support me here</Title>
                                <Description>4149500120690030</Description>
                            </SupportWrapper>
                            <MessageWrapper direction='column' gap='16px'>
                                <Title>Message me here</Title>
                                <SocialList displayFlex={true}
                                            direction={'column'}
                                            gap='8px'
                                            iconIds={['discord', 'email']}
                                            showIcon={true}
                                            iconsTitles={['!Elias#3519', 'elias@elias-dev.ml']}
                                            gapBetween={'5px'}
                                />
                            </MessageWrapper>
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
        content: "";
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
        content: "";
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
        &::before, &::after {
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

const Description = styled.span`
    font-weight: 400;
    color: ${theme.colors.primaryLightText};
`