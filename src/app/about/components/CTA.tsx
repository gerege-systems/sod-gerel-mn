import { useLang } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

const CTA = () => {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden py-15 md:py-25 lg:py-27.5">
      <div className="rails" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="container relative">
        <SectionMeta left={t('Холбоо барих', 'Contact')} right="04 — 04" className="mb-12 lg:mb-16" />
        <div className="mx-auto max-w-[56rem] text-center">
          <h2 className="display mixed">
            <b>{t('Нэг сая тоолуурыг', "Let's bring one million meters")}</b>{' '}
            {t('нэг баталгаатай платформд нэгтгэе', 'onto one verified platform')}
            <span className="accent">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[36rem]">
            {t(
              'Туршилтын трансформаторын бүлэг, тоолуурын протокол, TEAMI-ийн өгөгдлийн талаар бидэнтэй холбогдож, эхний шатыг хамтдаа төлөвлөе.',
              "Get in touch about a pilot transformer group, meter protocols or TEAMI data, and let's plan the first stage together.",
            )}
          </p>
          <div className="mt-10">
            <PillButton to="/contact" variant="dark">
              {t('Холбогдох', 'Contact us')}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
