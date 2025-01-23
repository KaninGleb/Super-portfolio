import {Media} from "../homePage/media/Media.tsx";
import {Header} from "../homePage/header/Header.tsx";
import {TitleSection} from "../projectsPage/TitleSection.tsx";
import {sectionsData} from "../../data/appData.ts";
import {AboutMeForPage} from "./AboutMeForPage.tsx";
import {SkillsAboutMe} from "./SkillsAboutMe.tsx";
import {MyFunFacts} from "./MyFunFacts/MyFunFacts.tsx";
import {Footer} from "../homePage/footer/Footer.tsx";
import {GoTopBtn} from "../../components/goTopBtn/GoTopBtn.tsx";

export const AboutMePage = () => {
    return (
        <div>
            <Media/>
            <Header/>
            <TitleSection section={sectionsData.aboutMePage.aboutMe}/>
            <AboutMeForPage/>
            <SkillsAboutMe/>
            <MyFunFacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}