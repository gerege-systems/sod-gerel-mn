import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import Reveal from '@/components/site/Reveal'
import { PageCta, Pill } from '@/components/site/ui'
import { useLang } from '@/i18n/context'
import Hero from './components/Hero'
import Story from './components/Story'
import MissionVision from './components/MissionVision'
import Team from './components/Team'

const Index = () => {
  const { t } = useLang()

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Бидний тухай', en: 'About' }} />
      <Hero />
      <Reveal effect="rise">
        <Story />
      </Reveal>
      <Reveal effect="rise">
        <MissionVision />
      </Reveal>
      <Reveal effect="rise">
        <Team />
      </Reveal>
      <Reveal effect="fade-up">
        <PageCta
          title={t('Нэг сая тоолуурыг нэг баталгаатай платформд нэгтгэе.', "Let's bring one million meters onto one verified platform.")}
          body={t(
            'Туршилтын трансформаторын бүлэг, тоолуурын протокол, TEAMI-ийн өгөгдлийн талаар бидэнтэй холбогдож, эхний шатыг хамтдаа төлөвлөе.',
            "Get in touch about a pilot transformer group, meter protocols or TEAMI data, and let's plan the first stage together.",
          )}
          actions={
            <>
              <Pill to="/contact" variant="solid" size="lg">
                {t('Холбогдох', 'Contact us')}
              </Pill>
              <Pill to="/platform#roadmap" variant="onnavy" size="lg" icon={false}>
                {t('Нэвтрүүлэх төлөвлөгөө', 'The rollout plan')}
              </Pill>
            </>
          }
        />
      </Reveal>
    </SiteShell>
  )
}

export default Index
