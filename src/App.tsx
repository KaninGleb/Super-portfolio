import styled from "styled-components";
import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";


function App() {
    return (
        <div className="App">
            <Container>
                <Header/>
            </Container>

            <Container>
                <Main/>
            </Container>

            <Container>
                <Projects/>
            </Container>

            <Container>
                <Skills/>
            </Container>

            <Container>
                <AboutMe/>
            </Container>

            <Container>
                <Contacts/>
            </Container>
        </div>
    )
}

export default App

const Container = styled.div`
    margin: auto;
    width: 1024px;
`