import aboutBg from '@/assets/images/other/power-lines-sky.jpg'
import aboutImage1 from '@/assets/images/other/ulaanbaatar-sunrise.jpg'
import { useLang } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

const Hero = () => {
  const { t } = useLang()
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container max-w-315!">
        <SectionMeta left={t('Бидний тухай', 'About')} right="PowerGrid" className="mb-10 md:mb-14" />
        <div className="mx-auto mb-12 max-w-[56rem] text-center">
          <h1 className="display mixed">
            <b>{t('Эрчим хүчний хэмжилтийг', 'Energy metering')}</b>{' '}
            {t('нэг баталгаатай эх сурвалжид', 'in one verified source of truth')}
            <span className="accent">.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[36rem]">
            {t(
              'PowerGrid нь тоолуурын заалтаас тайлбарлаж болох төлбөр, баталгаатай команд хүртэлх урсгалыг Монгол Улсын хэмжээнд нэг платформд нэгтгэнэ.',
              'PowerGrid brings the whole flow — from meter reading to explainable billing and verified commands — into one platform for all of Mongolia.',
            )}
          </p>
        </div>
        <div className="mb-4">
          <img src={aboutImage1} className="rounded-card size-full object-cover" alt="PowerGrid" />
        </div>
        <div className="grid gap-4 md:grid-cols-10">
          <div className="md:col-span-3">
            <div
              className="rounded-card relative h-full min-h-64 overflow-hidden bg-cover bg-center p-7 text-white"
              style={{ backgroundImage: `url(${aboutBg})` }}
            >
              <div className="absolute inset-0 bg-black/45"></div>
              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <span className="chip chip--up on-ink self-start">{t('Тоолуурын багтаамж', 'Meter capacity')}</span>
                <div>
                  <div className="num num--md text-white">1,000,000</div>
                  <p className="mt-3 text-white/80">
                    {t('Монгол Улсын цахилгааны тоолуурт зориулсан.', "Built for Mongolia's electricity meters.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="card card--ink on-ink flex h-full flex-col justify-between gap-10 p-7 lg:p-9">
              <h2 className="h-section mixed on-ink">
                <b>{t('Нэг ч заалт алдахгүй,', 'Not a single reading lost,')}</b>{' '}
                {t('нэг ч төлбөр давхардахгүй', 'not a single payment duplicated')}
                <span className="text-accent-bright">.</span>
              </h2>
              <div>
                <PillButton to="/contact" variant="ghost">
                  {t('Холбогдох', 'Contact us')}
                </PillButton>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="bg-stage rounded-card flex h-full flex-col justify-between gap-10 p-7">
              <span className="chip chip--up self-start">{t('Олон улсын судалгаа', 'International research')}</span>
              <div>
                <div className="num num--md">
                  10<span className="num-sfx">+</span>
                </div>
                <p className="mt-3">
                  {t('Улсын туршлагыг судалж, шилдгийг нь авсан', 'Countries studied for the best of each')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
