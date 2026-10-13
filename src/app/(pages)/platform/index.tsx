import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import PlatformHero from './components/PlatformHero'
import PlatformStory from './components/PlatformStory'
import Advantages from './components/Advantages'
import Roadmap from './components/Roadmap'
import Rollout from './components/Rollout'
import PrincipleQuote from './components/PrincipleQuote'
import Faqs from './components/Faqs'
import OtherModules from './components/OtherModules'
import PlatformCta from './components/PlatformCta'
import PageMeta from '@/components/PageMeta'

const Index = () => {
  return (
    <>
      <PageMeta title={{ mn: 'Платформ', en: 'Platform' }} />
      <Navbar />
      <PlatformHero />
      <PlatformStory />
      <Roadmap />
      <Advantages />
      <Rollout />
      <PrincipleQuote />
      <Faqs />
      <OtherModules />
      <PlatformCta />
      <Footer />
    </>
  )
}

export default Index
