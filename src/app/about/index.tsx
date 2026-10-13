import Navbar from '@/components/navbar/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import MissionVision from './components/MissionVision'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from '@/components/footer/Footer'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title={{ mn: 'Бидний тухай', en: 'About' }} />
      <Navbar />
      <Hero />
      <Story />
      <MissionVision />
      <Team />
      <CTA />
      <Footer />
    </>
  )
}

export default Index
