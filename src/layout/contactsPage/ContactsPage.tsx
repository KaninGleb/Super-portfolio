import styled from "styled-components";
import {Media} from "../homePage/media/Media.tsx";
import {RouterHeader} from "../../components/routerHeader/RouterHeader.tsx";
import {TitleSection} from "../projectsPage/TitleSection.tsx";
import {sectionsData} from "../../data/appData.ts";
import {ContactsForContactsPage} from "./ContactsForContactsPage.tsx";
import {AllMedia} from "./AllMedia.tsx";
import {Footer} from "../homePage/footer/Footer.tsx";

export const ContactsPage = () => {
    return (
        <StyledDiv>
            <Media/>
            <RouterHeader/>
            <TitleSection section={sectionsData.contactsPage.contacts}/>
            <ContactsForContactsPage/>
            <AllMedia/>
            <Footer isAbsolute={true}/>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    position: relative;
    min-height: 100vh;
`