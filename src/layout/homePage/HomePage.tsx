import {Media} from "./media/Media.tsx";
import {Header} from "./header/Header.tsx";
import {Testimony} from "./sections/testimony/Testimony.tsx";
import {Projects} from "./sections/projects/Projects.tsx";
import {Skills} from "./sections/skills/Skills.tsx";
import {Footer} from "./footer/Footer.tsx";
import {Main} from "./sections/main/Main.tsx";
import {AboutMe} from "./sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./sections/contacts/Contacts.tsx";


export const HomePage = () => {
    return (
        <div>
            <Media/>
            <Header/>
            <Main/>
            <Testimony/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
            <Footer/>
        </div>
    )
}