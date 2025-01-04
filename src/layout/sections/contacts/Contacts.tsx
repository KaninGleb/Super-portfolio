import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {DecorativeLine} from "../../../components/DecorativeLine.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Paragraph} from "../../../components/Paragraph.tsx";

const text = {
    contactsText: 'I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me'
}

export const Contacts = () => {
    return (
        <StyledContacts>
                {/*<FlexWrapper>*/}
                {/*    <SectionTitle>contacts</SectionTitle>*/}
                {/*    <DecorativeLine width={'127px'} height={'2px'}/>*/}
                {/*</FlexWrapper>*/}

                {/*<Paragraph children={text.contactsText}></Paragraph>*/}
                <FlexWrapper>
                    <SectionTitle>contacts</SectionTitle>
                    <DecorativeLine width={'127px'} height={'2px'}/>
                </FlexWrapper>

            <FlexWrapper justify='space-between'>
                <LeftSection>
                    <Paragraph children={text.contactsText}></Paragraph>
                </LeftSection>

                <RightSection>
                    <ContactInfo>
                        <ContactItem>Message me here</ContactItem>
                        <FlexWrapper direction='column'>
                            <ContactItem>💬 Elias3519</ContactItem>
                            <ContactItem>✉️ elias@elias.me</ContactItem>
                        </FlexWrapper>
                    </ContactInfo>
                </RightSection>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background-color: #942e4d;
    height: 228px;
`

const LeftSection = styled.div`
    //flex: 1;
    max-width: 505px;
    width: 100%;
    
    border: 1px solid #00bfff;
`

const RightSection = styled.div`
    display: flex;
    gap: 16px;
    
    max-width: 204px;
    width: 100%;
    max-height: 141px;
    height: 100%;
    
    padding: 16px;
    
    border: 1px solid #00bfff;
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const ContactItem = styled.p`

`