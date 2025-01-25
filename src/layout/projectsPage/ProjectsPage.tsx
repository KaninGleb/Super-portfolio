import {ScrollFillBar} from "../../components/scrollFillBar/ScrollFillBar.tsx";
import {Media} from "../homePage/media/Media.tsx";
import {RouterHeader} from "../../components/routerHeader/RouterHeader.tsx";
import {TitleSection} from "./TitleSection.tsx";
import {sectionsData} from "../../data/appData.ts";
import {AllProjects} from "./AllProjects.tsx";
import {SmallProjects} from "./SmallProjects.tsx";
import {Footer} from "../homePage/footer/Footer.tsx";
import {GoTopBtn} from "../../components/goTopBtn/GoTopBtn.tsx";


export const ProjectsPage = () => {
    return (
        <div>
            <ScrollFillBar/>
            <Media/>
            <RouterHeader/>
            <TitleSection section={sectionsData.projectsPage.headerProjects}/>
            <AllProjects/>
            <SmallProjects/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}