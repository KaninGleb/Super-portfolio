import {ScrollFillBar} from "../../common/ScrollFillBar.tsx";
import {Media} from "../HomePage/Media/Media.tsx";
import {RouterHeader} from "../../common/RouterHeader/RouterHeader.tsx";
import {TitleSection} from "../ProjectsPage/TitleSection.tsx";
import {sectionsTitlesData} from "../../app/appData.ts";
import {AboutMeForPage} from "./AboutMeForPage.tsx";
import {SkillsAboutMe} from "./SkillsAboutMe.tsx";
import {MyFunFacts} from "./MyFunFacts/MyFunFacts.tsx";
import {GoTopBtn} from "../../common/GoTopBtn.tsx";
import {Footer} from '../HomePage/Footer/Footer.tsx';

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