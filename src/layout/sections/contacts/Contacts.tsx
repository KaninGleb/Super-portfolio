import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.tsx";

const text = {
    contactsText: 'I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me'
}

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper direction='column' gap='45px'>
                    <FlexWrapper>
                        <SectionTitle><span>#</span>contacts</SectionTitle>
                        <DecorativeLine width={'127px'} height={'2px'}/>
                    </FlexWrapper>

                    <FlexWrapper justify='space-between'>
                        <LeftSection>
                            <StyledParagraph children={text.contactsText} fontWidth='500'></StyledParagraph>
                        </LeftSection>

                        <RightSection direction='column' gap='22px'>
                            <StyledTitle>Message me here</StyledTitle>
                            <ContactInfo>
                                <FlexWrapper direction='column' gap='21px'>
                                    <ContactItem>
                                        <Icon iconId={'discord'} width='25' height='20' viewBox='0 0 25 20'/>
                                        !Elias#3519
                                    </ContactItem>
                                    <ContactItem>
                                        <Icon iconId={'email'} width='23' height='17' viewBox='0 0 23 17'/>
                                        elias@elias.me
                                    </ContactItem>
                                </FlexWrapper>
                            </ContactInfo>
                        </RightSection>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    max-height: 228px;
    height: 100%;
    margin-bottom: 145px;
`

const LeftSection = styled(FlexWrapper)`
    max-width: 505px;
    width: 100%;
`

const StyledParagraph = styled(Paragraph)`
    font-weight: 500;
`

const RightSection = styled(FlexWrapper)`
    max-width: 204px;
    width: 100%;
    max-height: 141px;
    height: 100%;

    padding: 16px;

    border: 1px solid ${theme.colors.primaryBorder};
`

const StyledTitle = styled.h3`
    font-weight: 600;
    font-size: 16px;
`

const ContactInfo = styled.ul`
    display: flex;
    flex-direction: column;
`

const ContactItem = styled.li`
    display: flex;
    align-items: center;
    gap: 9px;
    
    color: ${theme.colors.primaryLightText};
`