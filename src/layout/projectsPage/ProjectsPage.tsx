import {Media} from "../homePage/media/Media.tsx";
import {RouterHeader} from "../../components/routerHeader/RouterHeader.tsx";
import {TitleSection} from "./TitleSection.tsx";
import {AllProjects} from "./AllProjects.tsx";
import {SmallProjects} from "./SmallProjects.tsx";
import {Footer} from "../homePage/footer/Footer.tsx";
import {sectionsData} from "../../data/appData.ts";
import {GoTopBtn} from "../../components/goTopBtn/GoTopBtn.tsx";


export const ProjectsPage = () => {
    return (
        <div>
            <Media/>
            <RouterHeader/>
            <TitleSection section={sectionsData.headerProjects}/>
            <AllProjects/>
            <SmallProjects/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}