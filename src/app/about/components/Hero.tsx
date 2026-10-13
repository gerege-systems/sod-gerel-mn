import { Link } from 'react-router-dom'
import aboutBg from '@/assets/images/other/power-lines-sky.jpg'
import aboutImage1 from '@/assets/images/other/ulaanbaatar-sunrise.jpg'
import { useLang } from '@/i18n/context'

const Hero = () => {
  const { t } = useLang()
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container max-w-315!">
        <div className="mb-12.5 text-center">
          <h1 className="text-default-950 mb-2.5 text-4xl md:text-5xl lg:text-[56px]">
            {t(
              'Эрчим хүчний хэмжилтийг нэг баталгаатай эх сурвалжид',
              'Energy metering in one verified source of truth',
            )}
          </h1>
          <p className="mx-auto md:max-w-1/2">
            {t(
              'PowerGrid нь тоолуурын заалтаас тайлбарлаж болох төлбөр, баталгаатай команд хүртэлх урсгалыг Монгол Улсын хэмжээнд нэг платформд нэгтгэнэ.',
              'PowerGrid brings the whole flow — from meter reading to explainable billing and verified commands — into one platform for all of Mongolia.',
            )}
          </p>
        </div>
        <div className="mb-2.5">
          <img src={aboutImage1} className="size-full rounded-lg" alt="PowerGrid" />
        </div>
        <div className="grid gap-4 md:grid-cols-10">
          <div className="md:col-span-3">
            <div
              className="relative h-full overflow-hidden rounded-xl bg-cover bg-center p-6 text-white"
              style={{ backgroundImage: `url(${aboutBg})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 space-y-3">
                <span className="inline-flex rounded-md bg-white/20 px-3 py-1 text-xs backdrop-blur">
                  {t('Тоолуурын багтаамж', 'Meter capacity')}
                </span>
                <div>
                  <h2 className="mb-8 text-4xl text-white">1,000,000</h2>
                  <p className="mt-2 text-white">
                    {t('Монгол Улсын цахилгааны тоолуурт зориулсан.', "Built for Mongolia's electricity meters.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="bg-default-950 flex h-full flex-col justify-between rounded-xl p-6">
              <h3 className="text-2xl leading-snug text-white">
                {t('Нэг ч заалт алдахгүй,', 'Not a single reading lost,')}{' '}
                <span className="text-default-400">
                  {t('нэг ч төлбөр давхардахгүй', 'not a single payment duplicated')}
                </span>
              </h3>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="group text-primary inline-flex items-center justify-center gap-5 rounded-xl bg-white px-4.5 py-3 font-medium transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      {t('Холбогдох', 'Contact us')}
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      {t('Холбогдох', 'Contact us')}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="bg-default-100 flex h-full flex-col justify-between rounded-xl p-6">
              <span className="w-fit rounded-md bg-white px-3 py-1 text-xs">
                {t('Олон улсын судалгаа', 'International research')}
              </span>
              <div className="mt-6">
                <h3 className="text-default-900 text-4xl font-semibold">10+</h3>
                <p className="text-default-600 mt-2">
                  {t(
                    'Улсын туршлагыг судалж, шилдгийг нь авсан',
                    'Countries studied for the best of each',
                  )}
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
