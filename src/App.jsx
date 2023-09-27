import { AboutMeSection } from "./AboutMeSection"
import { BannerSection } from "./BannerSection"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { ProjectSection } from "./ProjectSection"
import { TechSection } from "./TechSection"
import { MainContent } from "./MainContent"
import { technologies } from "./data/technologies"

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectSection />
      </MainContent>
      <Footer />
    </>
  )
}

export default App
