import {Media} from "../homePage/media/Media.tsx";
import {Header} from "../homePage/header/Header.tsx";
import {sectionsData} from "../../data/appData.ts";
import {TitleSection} from "../projectsPage/TitleSection.tsx";
import {ContactsForContactsPage} from "./ContactsForContactsPage.tsx";
import {AllMedia} from "./AllMedia.tsx";
import {Footer} from "../homePage/footer/Footer.tsx";

export const ContactsPage = () => {
    return (
        <div>
            <Media/>
            <Header/>
            <TitleSection section={sectionsData.contactsPage.contacts}/>
            <ContactsForContactsPage/>
            <AllMedia/>
            <Footer/>
        </div>
    )
}