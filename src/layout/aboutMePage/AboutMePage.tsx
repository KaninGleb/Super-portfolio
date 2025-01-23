import {Media} from "../homePage/media/Media.tsx";
import {Header} from "../homePage/header/Header.tsx";
import {TitleSection} from "../projectsPage/TitleSection.tsx";
import {sectionsData} from "../../data/appData.ts";

export const AboutMePage = () => {
    return (
        <div>
            <Media/>
            <Header/>
            <TitleSection section={sectionsData.aboutMePage}/>
        </div>
    )
}