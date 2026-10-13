import { Link } from 'react-router-dom'
import aboutBg from '@/assets/images/other/power-lines-sky.jpg'
import heroImage1 from '@/assets/images/other/hero-engineer.jpg'
import heroImage2 from '@/assets/images/other/meters-row.jpg'
import helsinki from '@/assets/images/other/helsinki.jpg'
import sydney from '@/assets/images/other/sydney.jpg'
import { Icon } from '@iconify/react'
import { LOGIN_URL } from '@/config'
import { useLang } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

const Hero = () => {
  const { t } = useLang()
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container">
        <SectionMeta
          left={t('Ухаалаг тоолуурын үндэсний платформ', 'National Smart Metering Platform')}
          right={t('Улаанбаатар', 'Ulaanbaatar')}
          className="mb-10 md:mb-14"
        />
        <div className="grid gap-7.5 md:gap-16 lg:grid-cols-2 lg:gap-25">
          <div className="flex h-full flex-col gap-7.5 lg:gap-15">
            <div>
              <div className="mb-6">
                <Link to="/platform#roadmap" className="chip chip--accent">
                  <span className="bg-accent size-1.5 animate-pulse rounded-full" aria-hidden="true"></span>
                  {t('Хөгжүүлэлтийн шатанд · Үе 0', 'In development · Phase 0')}
                </Link>
              </div>
              <h1 className="display mixed mb-6">
                <b>{t('Нэг сая тоолуур.', 'One million meters.')}</b>{' '}
                {t('Нэг баталгаатай үнэн', 'One source of truth')}
                <span className="accent">.</span>
              </h1>

              <p className="max-w-[36rem]">
                {t(
                  'PowerGrid бол Монгол Улсын ~1,000,000 цахилгааны тоолуурт зориулан эхнээс нь бүтээж буй хэмжилтийн өгөгдлийн платформ. Тоолуурын заалтыг эх төхөөрөмжөөс нь авч, хэзээ ч дарж бичихгүйгээр хадгалж, шалгаж, баланс, тариф, төлбөр хүртэл тайлбарлаж болох нэг урсгалд холбохоор зорьж байна.',
                  "PowerGrid is a metering data platform being built from the ground up for Mongolia's ~1,000,000 electricity meters. It aims to take each reading from its source device, keep it without ever overwriting it, validate it, and carry it through balance, tariff and billing in one explainable flow.",
                )}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3 md:gap-4">
                <PillButton href={LOGIN_URL} variant="dark" leadingIcon="tabler:fingerprint">
                  {t('eID-ээр нэвтрэх', 'Sign in with eID')}
                </PillButton>
                <PillButton to="/platform" variant="soft">
                  {t('Хэрхэн ажилладгийг үзэх', 'See how it works')}
                </PillButton>
              </div>
              <p className="text-default-500 mt-4 text-xs">
                {t(
                  '1,000,000 нь захиалагчийн төлөвлөлтийн таамаглал бөгөөд албан ёсны тооллого биш.',
                  "1,000,000 is the client's planning assumption, not an official count.",
                )}
              </p>
            </div>

            <div className="mt-auto flex items-end justify-between gap-2.5">
              <div className="lg:w-3/4">
                <div className="meta mb-2.5">
                  {t('10 гаруй улсын туршлага дээр суурилсан', 'Built on the experience of 10+ countries')}
                </div>
                <p className="text-default-900 text-sm">
                  {t(
                    'Финланд, Австрали, Франц, Их Британи, Япон, Энэтхэг, Узбекистан болон ЕХ-ны 2023/1162 журмын лавлагаа загвар.',
                    'Finland, Australia, France, the UK, Japan, India, Uzbekistan and the EU 2023/1162 reference model.',
                  )}
                </p>
              </div>

              <div className="shrink-0">
                <div className="meta mb-2.5 text-nowrap">{t('Жишиг', 'References')}</div>

                <div className="flex gap-2.5">
                  <div className="group relative">
                    <img
                      src={helsinki}
                      alt={t('Финланд', 'Finland')}
                      className="size-20 shrink-0 rounded-2xl object-cover md:size-25"
                    />
                    <div className="bg-stage absolute inset-s-0 -bottom-2 w-full translate-y-full rounded-full px-2.5 py-1 text-center text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {t('Финланд', 'Finland')}
                    </div>
                  </div>
                  <div className="group relative">
                    <img
                      src={sydney}
                      alt={t('Австрали', 'Australia')}
                      className="size-20 shrink-0 rounded-2xl object-cover md:size-25"
                    />
                    <div className="bg-stage absolute inset-s-0 -bottom-2 w-full translate-y-full rounded-full px-2.5 py-1 text-center text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {t('Австрали', 'Australia')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5 md:grid-cols-2">
            <div>
              <img className="rounded-card size-full object-cover" src={heroImage1} alt="PowerGrid" />
            </div>

            <div className="space-y-2.5">
              <div className="bg-primary rounded-card p-6">
                <p className="mb-25 text-white">
                  {t(
                    'Түүхий заалтыг хэзээ ч дарж засахгүй. Засвар бүр шалтгаан, дүрэм, гүйцэтгэгчтэйгээ шинэ хувилбар болж хадгалагдана.',
                    'Raw readings are never overwritten. Every correction is kept as a new version with its reason, rule and author.',
                  )}
                </p>

                <div className="flex items-center gap-4">
                  <div className="text-primary flex size-11.5 shrink-0 items-center justify-center rounded-full bg-white">
                    <Icon icon="tabler:shield-check" className="size-6" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-lg font-semibold tracking-[-0.02em] text-white">
                      {t('Бүтээгдэхүүний зарчим №1', 'Product principle #1')}
                    </div>
                    <div className="meta text-white/50!">
                      {t('PowerGrid архитектур', 'PowerGrid architecture')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-card">
                <img src={aboutBg} alt="Image" className="rounded-card object-cover" />

                <div className="absolute inset-0 m-7.5 text-center">
                  <div className="text-default-950 mb-2.5 rounded-full bg-white/70 px-4 py-2.5 text-sm font-medium backdrop-blur">
                    {t('1,000,000 тоолуурт зориулсан', 'Built for 1,000,000 meters')}
                  </div>

                  <img src={heroImage2} alt="Image" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
