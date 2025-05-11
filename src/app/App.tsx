import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from '@/common'
import { HomePage, ProjectsPage, AboutMePage, ContactsPage, NotFoundPage404 } from '@/components'
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
