import {ScrollFillBar} from "../../common/ScrollFillBar.tsx";
import {Media} from "./Media/Media.tsx";
import {RouterHeader} from "../../common/RouterHeader/RouterHeader.tsx";
import {Main} from './Sections/Main/Main.tsx';
import {Testimony} from "./Sections/Testimony/Testimony.tsx";
import {Projects} from "./Sections/Projects/Projects.tsx";
import {Skills} from "./Sections/Skills/Skills.tsx";
import {AboutMe} from './Sections/AboutMe/AboutMe.tsx';
import {Contacts} from './Sections/Contacts/Contacts.tsx';
import {Footer} from "./Footer/Footer.tsx";
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