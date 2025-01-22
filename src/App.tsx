import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from "./layout/homePage/HomePage.tsx";
import {ProjectsPage} from "./layout/projectsPage/ProjectsPage.tsx";
import {AboutMePage} from "./layout/aboutMePage/AboutMePage.tsx";
import {ContactsPage} from "./layout/contactsPage/ContactsPage.tsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/about" element={<AboutMePage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App