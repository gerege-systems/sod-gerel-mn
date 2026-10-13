import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Hero from './components/Hero'
import Modules from './components/Modules'
import AboutPlatform from './components/AboutPlatform'
import Process from './components/Process'
import FeaturedCase from './components/FeaturedCase'
import CaseLessons from './components/CaseLessons'
import Kpis from './components/Kpis'
import Knowledge from './components/Knowledge'
import TeamCta from './components/TeamCta'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title={{ mn: 'Нүүр', en: 'Home' }} />
      <Navbar />
      <Hero />
      <Modules />
      <AboutPlatform />
      <Process />
      <FeaturedCase />
      <CaseLessons />
      <Kpis />
      <Knowledge />
      <TeamCta />
      <Footer />
    </>
  )
}

export default Index
