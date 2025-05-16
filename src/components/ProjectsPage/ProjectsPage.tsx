import { ScrollFillBar, RouterHeader, GoTopBtn } from '@/common'
import { Media, TitleSection, AllProjects, SmallProjects, Footer } from '@/components'
import { sectionsTitlesData } from '@/app/appData.ts'

export const ProjectsPage = () => {
  return (
    <div>
      <ScrollFillBar />
      <Media />
      <RouterHeader />
      <TitleSection section={sectionsTitlesData.projectsPage.headerProjects} />
      <AllProjects />
      <SmallProjects />
      <Footer />
      <GoTopBtn />
    </div>
  )
}
