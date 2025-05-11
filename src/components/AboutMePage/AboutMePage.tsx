import { ScrollFillBar, RouterHeader, GoTopBtn } from '@/common'
import { Media, TitleSection, AboutMeForPage, SkillsAboutMe, MyFunFacts, Footer } from '@/components'
import { sectionsTitlesData } from '@/app/appData.ts'

export const AboutMePage = () => {
  return (
    <div>
      <ScrollFillBar />
      <Media />
      <RouterHeader />
      <TitleSection section={sectionsTitlesData.aboutMePage.aboutMe} />
      <AboutMeForPage />
      <SkillsAboutMe />
      <MyFunFacts />
      <Footer />
      <GoTopBtn />
    </div>
  )
}
