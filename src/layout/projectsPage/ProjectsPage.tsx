import {Media} from "../media/Media.tsx";
import {Header} from "../header/Header.tsx";
import {TitleSection} from "./TitleSection.tsx";
import {AllProjects} from "./AllProjects.tsx";
import {SmallProjects} from "./SmallProjects.tsx";


export const ProjectsPage = () => {
    return (
        <div>
            <Media/>
            <Header/>
            <TitleSection/>
            <AllProjects/>
            <SmallProjects/>
        </div>
    )
}