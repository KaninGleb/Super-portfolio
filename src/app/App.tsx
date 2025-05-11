import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from '@/common'
import { HomePage } from '@/components'
import { ProjectsPage } from '../components/ProjectsPage/ProjectsPage.tsx'
import { AboutMePage, ContactsPage } from '@/components'
import { NotFoundPage404 } from '../components/NotFoundPage/NotFoundPage404.tsx'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage404 />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  )
}

export default App
