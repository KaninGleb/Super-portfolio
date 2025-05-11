import {ScrollFillBar} from "../../components/scrollFillBar/ScrollFillBar.tsx";
import {Media} from "./media/Media.tsx";
import {RouterHeader} from "../../components/routerHeader/RouterHeader.tsx";
import {Main} from "./sections/main/Main.tsx";
import {Testimony} from "./sections/testimony/Testimony.tsx";
import {Projects} from "./sections/projects/Projects.tsx";
import {Skills} from "./sections/skills/Skills.tsx";
import {AboutMe} from "./sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./sections/contacts/Contacts.tsx";
import {Footer} from "./footer/Footer.tsx";
import {GoTopBtn} from "../../common/GoTopBtn.tsx";


export const HomePage = () => {
    return (
        <div>
            <ScrollFillBar/>
            <Media/>
            <RouterHeader/>
            <Main/>
            <Testimony/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
            <Footer/>
            <GoTopBtn/>
        </div>
    )
}