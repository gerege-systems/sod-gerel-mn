import { useLang } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

const PlatformCta = () => {
  const { t } = useLang()

  return (
    <section className="bg-stage relative overflow-hidden py-15 md:py-25 lg:py-27.5">
      <div className="rails" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="container relative">
        <SectionMeta left={t('Холбоо барих', 'Contact us')} right="08 — 08" className="mb-12 lg:mb-16" />
        <div className="mx-auto max-w-[56rem] text-center">
          <h2 className="display mixed">
            <b>{t('Нэг сая тоолуурын хэмжилтийг', "Let's plan metering for a million meters,")}</b>{' '}
            {t('өнөөдрөөс төлөвлөе', 'starting today')}
            <span className="accent">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[34rem]">
            {t(
              'Туршилтын трансформатор, тоолуурын протокол, TEAMI-ийн эрхийн талаар ярилцъя.',
              "Let's talk about a pilot transformer, meter protocols and TEAMI access.",
            )}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <PillButton to="/contact" variant="dark">
              {t('Эхлэх', 'Get started')}
            </PillButton>
            <PillButton to="/contact" variant="soft" arrow="up-right">
              {t('Холбоо барих', 'Contact us')}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformCta
