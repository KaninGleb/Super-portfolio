import {ScrollFillBar} from "../../common/ScrollFillBar.tsx";
import {Media} from "../homePage/media/Media.tsx";
import {RouterHeader} from "../../common/RouterHeader/RouterHeader.tsx";
import {TitleSection} from "../projectsPage/TitleSection.tsx";
import {sectionsTitlesData} from "../../app/appData.ts";
import {AboutMeForPage} from "./AboutMeForPage.tsx";
import {SkillsAboutMe} from "./SkillsAboutMe.tsx";
import {MyFunFacts} from "./MyFunFacts/MyFunFacts.tsx";
import {Footer} from "../homePage/footer/Footer.tsx";
import {GoTopBtn} from "../../common/GoTopBtn.tsx";

export const AboutMePage = () => {
    return (
        <div>
            <ScrollFillBar/>
            <Media/>
            <RouterHeader/>
            <TitleSection section={sectionsTitlesData.aboutMePage.aboutMe}/>
            <AboutMeForPage/>
            <SkillsAboutMe/>
            <MyFunFacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}