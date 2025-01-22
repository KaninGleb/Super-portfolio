import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";
import {sectionsData, textData} from "../../../data/appData.ts";
import {theme} from "../../../styles/Theme.tsx";
import {SocialList} from "../../../components/SocialList.tsx";
import {Link} from "../../../components/Link.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <ContentFlexWrapper direction='column' gap='45px'>
                    <FlexWrapper>
                        <SectionTitle section={sectionsData.contacts}/>
                    </FlexWrapper>

                    <StyledFlexWrapper justify='space-between'>
                        <LeftSection direction='column' gap='20px'>
                            <Paragraph children={textData.contacts.paragraph} fontWeight='500' lineHeight={'1.3'}></Paragraph>
                            <Link to="/contacts" children={'Read more ->'} mWidth={'148px'}/>
                        </LeftSection>

                        <RightSection direction='column' gap='16px'>
                            <StyledTitle>Message me here</StyledTitle>
                            <SocialList displayFlex={true}
                                        direction={'column'}
                                        gap='8px'
                                        iconIds={['discord', 'email']}
                                        showIcon={true}
                                        iconsTitles={['!Elias#3519', 'elias@elias.me']}
                                        gapBetween={'5px'}
                            />
                            {/*<ContactInfo>*/}
                            {/*    <FlexWrapper direction='column' gap='8px'>*/}
                            {/*        <ContactItem>*/}
                            {/*            <Icon iconId={'discord'} width='32px' height='32px' viewBox='0 0 32 32'/>*/}
                            {/*            !Elias#3519*/}
                            {/*        </ContactItem>*/}
                            {/*        <ContactItem>*/}
                            {/*            <Icon iconId={'email'} width='32px' height='32px' viewBox='0 0 32 32'/>*/}
                            {/*            elias@elias.me*/}
                            {/*        </ContactItem>*/}
                            {/*    </FlexWrapper>*/}
                            {/*</ContactInfo>*/}
                        </RightSection>
                    </StyledFlexWrapper>
                </ContentFlexWrapper>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    
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