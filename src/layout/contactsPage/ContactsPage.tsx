import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {ScrollFillBar} from "../../components/scrollFillBar/ScrollFillBar.tsx";
import {Media} from "../homePage/media/Media.tsx";
import {RouterHeader} from "../../components/routerHeader/RouterHeader.tsx";
import {TitleSection} from "../projectsPage/TitleSection.tsx";
import {sectionsTitlesData} from "../../data/appData.ts";
import {ContactsForContactsPage} from "./ContactsForContactsPage.tsx";
import {AllMedia} from "./AllMedia.tsx";
import {Footer} from "../homePage/footer/Footer.tsx";

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