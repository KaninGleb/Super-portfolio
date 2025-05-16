import { ScrollFillBar, RouterHeader, GoTopBtn } from '@/common'
import { Media, Main, Testimony, Projects, Skills, AboutMe, Contacts, Footer } from '@/components'

export const HomePage = () => {
  return (
    <div>
      <ScrollFillBar />
      <Media />
      <RouterHeader />
      <Main />
      <Testimony />
      <Projects />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </div>
  )
}
