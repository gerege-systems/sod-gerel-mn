import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import Reveal from '@/components/site/Reveal'
import { PageCta, Pill } from '@/components/site/ui'
import { useLang } from '@/i18n/context'
import ArticleContent from './components/ArticleContent'
import OtherArticles from './components/OtherArticles'

const Index = () => {
  const { t } = useLang()

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Архитектур', en: 'Architecture' }} />
      <ArticleContent />
      <Reveal effect="rise">
        <OtherArticles />
      </Reveal>
      <Reveal effect="fade-up">
        <PageCta
          title={t('Шийдвэр бүр ADR-ээр батлагдана.', 'Every decision is confirmed through an ADR.')}
          body={t(
            'Архитектур санал шатандаа. Туршилтын трансформатор, тоолуурын протокол, TEAMI-ийн эрхийн талаар ярилцаж, Үе 0-ийг хамтдаа эхлүүлье.',
            'The architecture is at the proposal stage. Let’s talk about a pilot transformer, meter protocols and TEAMI access, and start Phase 0 together.',
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
