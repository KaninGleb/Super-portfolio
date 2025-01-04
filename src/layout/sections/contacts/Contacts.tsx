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
            <FlexWrapper>
                <SectionTitle>contacts</SectionTitle>
                <DecorativeLine width={'127px'} height={'2px'}/>
            </FlexWrapper>

            <Paragraph children={text.contactsText}></Paragraph>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
    background-color: #942e4d;
    height: 228px;
`