import styled from "styled-components";
import {FlexWrapper} from "../../common/Layout/FlexWrapper.tsx";
import {ScrollFillBar} from "../../common/ScrollFillBar.tsx";
import {Media} from "../HomePage/Media/Media.tsx";
import {RouterHeader} from "../../common/RouterHeader/RouterHeader.tsx";
import {TitleSection} from "../projectsPage/TitleSection.tsx";
import {sectionsTitlesData} from "../../app/appData.ts";
import {ContactsForContactsPage} from "./ContactsForContactsPage/ContactsForContactsPage.tsx";
import {AllMedia} from "./AllMedia/AllMedia.tsx";
import {Footer} from '../HomePage/Footer/Footer.tsx';

export const ContactsPage = () => {
    return (
        <StyledDiv>
            <GrowWrapper>
                <ScrollFillBar/>
                <Media/>
                <RouterHeader/>
                <TitleSection section={sectionsTitlesData.contactsPage.contacts}/>
                <ContactsForContactsPage/>
                <AllMedia/>
            </GrowWrapper>
            <Footer/>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const GrowWrapper = styled(FlexWrapper)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`