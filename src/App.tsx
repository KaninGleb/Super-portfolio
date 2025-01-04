import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <AboutMe/>
        </div>
    )
}

export default App