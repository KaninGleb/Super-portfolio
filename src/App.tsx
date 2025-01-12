import './App.css'
import {Media} from "./layout/media/Media.tsx";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
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

export default App