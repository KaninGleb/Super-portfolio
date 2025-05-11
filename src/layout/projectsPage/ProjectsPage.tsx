import {ScrollFillBar} from "../../components/scrollFillBar/ScrollFillBar.tsx";
import {Media} from "../homePage/media/Media.tsx";
import {RouterHeader} from "../../components/routerHeader/RouterHeader.tsx";
import {TitleSection} from "./TitleSection.tsx";
import {sectionsTitlesData} from "../../app/appData.ts";
import {AllProjects} from "./AllProjects.tsx";
import {SmallProjects} from "./SmallProjects.tsx";
import {Footer} from "../homePage/footer/Footer.tsx";
import {GoTopBtn} from "../../common/GoTopBtn.tsx";


export const ProjectsPage = () => {
    return (
        <div>
            <ScrollFillBar/>
            <Media/>
            <RouterHeader/>
            <TitleSection section={sectionsTitlesData.projectsPage.headerProjects}/>
            <AllProjects/>
            <SmallProjects/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}