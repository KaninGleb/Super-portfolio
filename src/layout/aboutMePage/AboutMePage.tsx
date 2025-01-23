import {Media} from "../homePage/media/Media.tsx";
import {Header} from "../homePage/header/Header.tsx";
import {TitleSection} from "../projectsPage/TitleSection.tsx";
import {sectionsData} from "../../data/appData.ts";
import {AboutMeForPage} from "./AboutMeForPage.tsx";

export const AboutMePage = () => {
    return (
        <div>
            <Media/>
            <Header/>
            <TitleSection section={sectionsData.aboutMePage}/>
            <AboutMeForPage/>
        </div>
    )
}