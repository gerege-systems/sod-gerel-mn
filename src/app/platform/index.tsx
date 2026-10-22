import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import Reveal from '@/components/site/Reveal'
import { PageCta, Pill } from '@/components/site/ui'
import type { CSSProperties } from 'react'
import quoteImage from '@/assets/images/platform/platform-quote.webp'
import ctaImage from '@/assets/images/platform/platform-cta.webp'
import { useLang } from '@/i18n/context'
import PlatformHero from './components/PlatformHero'
import PlatformStory from './components/PlatformStory'
import Roadmap from './components/Roadmap'
import Advantages from './components/Advantages'
import Rollout from './components/Rollout'
import Faqs from './components/Faqs'

const Index = () => {
  const { t } = useLang()

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Платформ', en: 'Platform' }} />
      <PlatformHero />
      <Reveal effect="rise">
        <PlatformStory />
      </Reveal>
      <Roadmap />
      <Reveal effect="rise">
        <Advantages />
      </Reveal>
      <Reveal effect="rise">
        <Rollout />
      </Reveal>
      <Reveal effect="fade-up">
        <section className="pgl-band pgl-band--quote pgl-photo-bg" style={{ '--pgl-photo': `url(${quoteImage})` } as CSSProperties}>
          <div className="pgl-band__inner">
            <span className="pgl-tag pgl-tag--onnavy">{t('Бүтээгдэхүүний зарчим', 'Product principle')}</span>
            <blockquote>
              <p>
                {t(
                  '«Өгөгдлийн сангийн төлөв өөрчлөгдсөн нь төхөөрөмж дээр биелсэн гэсэн үг биш. Тоолуурын төлөвийг дахин уншиж батлахаас нааш бид командыг «амжилттай» гэж хэзээ ч харуулахгүй — дутуу өгөгдлийг ч хулгай гэж хэзээ ч дүгнэхгүй.»',
                  '“A changed state in the database does not mean it happened on the device. We never show a command as successful until the meter’s state has been read back — and we never mistake missing data for theft.”',
                )}
              </p>
            </blockquote>
            <cite>{t('— PowerGrid архитектур', '— PowerGrid architecture')}</cite>
          </div>
        </section>
      </Reveal>
      <Reveal effect="fade-up">
        <Faqs />
      </Reveal>
      <Reveal effect="fade-up">
        <PageCta
          image={ctaImage}
          title={t('Нэг сая тоолуурын хэмжилтийг өнөөдрөөс төлөвлөе.', "Let's plan metering for a million meters, starting today.")}
          body={t(
            'Туршилтын трансформатор, тоолуурын протокол, TEAMI-ийн эрхийн талаар ярилцъя.',
            "Let's talk about a pilot transformer, meter protocols and TEAMI access.",
          )}
          actions={
            <>
              <Pill to="/contact" variant="solid" size="lg">
                {t('Эхлэх', 'Get started')}
              </Pill>
              <Pill to="/architecture" variant="onnavy" size="lg" icon={false}>
                {t('Архитектур', 'Architecture')}
              </Pill>
            </>
          }
        />
      </Reveal>
    </SiteShell>
  )
}

export default Index
