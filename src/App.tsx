import './App.css'
import {Container} from "./components/Container.tsx";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>

            <Main/>

            <Projects/>

            <Skills/>

            <AboutMe/>

            <Container>
                <Contacts/>
            </Container>

            <Container>
                <Footer/>
            </Container>
        </div>
    )
}

export default App