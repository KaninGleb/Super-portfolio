import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import {ScrollToTop} from "../common/ScrollToTop.tsx";
import {HomePage} from "../layout/HomePage/HomePage.tsx";
import {ProjectsPage} from "../layout/projectsPage/ProjectsPage.tsx";
import {AboutMePage} from "../layout/aboutMePage/AboutMePage.tsx";
import {ContactsPage} from "../layout/ContactsPage/ContactsPage.tsx";
import {NotFoundPage404} from "../layout/notFoundPage/NotFoundPage404.tsx";
import {Analytics} from "@vercel/analytics/react";

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/about-me" element={<AboutMePage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="*" element={<NotFoundPage404/>}/>
                </Routes>
                <Analytics/>
            </div>
        </Router>
    )
}

export default App;