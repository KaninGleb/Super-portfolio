import {Media} from "../media/Media.tsx";
import {Header} from "../header/Header.tsx";
import {TitleSection} from "./allProjects/TitleSection.tsx";
import {AllProjects} from "./allProjects/AllProjects.tsx";


export const ProjectsPage = () => {
    return (
        <div>
            <Media/>
            <Header/>
            <TitleSection/>
            <AllProjects/>
        </div>
    )
}