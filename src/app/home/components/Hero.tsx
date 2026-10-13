import { Link } from 'react-router-dom'
import aboutBg from '@/assets/images/other/about-bg.jpg'
import heroImage1 from '@/assets/images/other/hero-image-1.jpg'
import heroImage2 from '@/assets/images/other/hero-image-2.jpg'
import helsinki from '@/assets/images/other/helsinki.jpg'
import sydney from '@/assets/images/other/sydney.jpg'
import { Icon } from '@iconify/react'
import { LOGIN_URL } from '@/config'
import { useLang } from '@/i18n/context'

const Hero = () => {
  const { t } = useLang()
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container">
        <div className="grid gap-7.5 md:gap-16 lg:grid-cols-2 lg:gap-25">
          <div className="flex h-full flex-col gap-7.5 lg:gap-15">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-default-950 text-sm font-medium tracking-wide uppercase">
                  {t('Ухаалаг тоолуурын үндэсний платформ', 'National Smart Metering Platform')}
                </span>
                <Link
                  to="/platform#roadmap"
                  className="bg-accent/10 text-accent inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                >
                  <span className="bg-accent size-1.5 animate-pulse rounded-full"></span>
                  {t('Хөгжүүлэлтийн шатанд · Үе 0', 'In development · Phase 0')}
                </Link>
              </div>
              <h1 className="text-default-950 mb-2.5 text-4xl md:text-5xl lg:text-[56px]">
                {t('Нэг сая тоолуур.', 'One million meters.')}{' '}
                <span className="text-accent">{t('Нэг', 'One')}</span>{' '}
                {t('баталгаатай үнэн.', 'source of truth.')}
              </h1>

              <p>
                {t(
                  'PowerGrid бол Монгол Улсын ~1,000,000 цахилгааны тоолуурт зориулан эхнээс нь бүтээж буй хэмжилтийн өгөгдлийн платформ. Тоолуурын заалтыг эх төхөөрөмжөөс нь авч, хэзээ ч дарж бичихгүйгээр хадгалж, шалгаж, баланс, тариф, төлбөр хүртэл тайлбарлаж болох нэг урсгалд холбохоор зорьж байна.',
                  "PowerGrid is a metering data platform being built from the ground up for Mongolia's ~1,000,000 electricity meters. It aims to take each reading from its source device, keep it without ever overwriting it, validate it, and carry it through balance, tariff and billing in one explainable flow.",
                )}
              </p>

              <div className="mt-11 inline-flex flex-wrap items-center gap-4 md:gap-7.5">
                <a
                  href={LOGIN_URL}
                  className="group bg-primary inline-flex items-center justify-center gap-3 rounded-lg px-8 py-5 font-medium text-white transition-all"
                >
                  <Icon icon="tabler:fingerprint" className="size-5" />
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      {t('eID-ээр нэвтрэх', 'Sign in with eID')}
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      {t('eID-ээр нэвтрэх', 'Sign in with eID')}
                    </span>
                  </span>
                </a>
                <Link
                  to="/platform"
                  className="border-default-200 text-default-950 hover:border-primary inline-flex items-center justify-center rounded-lg border px-8 py-5 font-medium transition-all"
                >
                  {t('Хэрхэн ажилладгийг үзэх', 'See how it works')}
                </Link>
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
                <div className="text-default-700 mb-2.5">
                  {t('10 гаруй улсын туршлага дээр суурилсан', 'Built on the experience of 10+ countries')}
                </div>
                <p className="text-primary">
                  {t(
                    'Финланд, Австрали, Франц, Их Британи, Япон, Энэтхэг, Узбекистан болон ЕХ-ны 2023/1162 журмын лавлагаа загвар.',
                    'Finland, Australia, France, the UK, Japan, India, Uzbekistan and the EU 2023/1162 reference model.',
                  )}
                </p>
              </div>

              <div className="shrink-0">
                <div className="text-default-950 mb-1.5 text-nowrap">{t('Жишиг', 'References')}</div>

                <div className="flex gap-2.5">
                  <div className="group relative">
                    <img
                      src={helsinki}
                      alt={t('Финланд', 'Finland')}
                      className="size-20 shrink-0 rounded object-cover md:size-25"
                    />
                    <div className="bg-default-100 absolute inset-s-0 -bottom-2 w-full translate-y-full rounded px-2.5 py-1 text-center text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {t('Финланд', 'Finland')}
                    </div>
                  </div>
                  <div className="group relative">
                    <img
                      src={sydney}
                      alt={t('Австрали', 'Australia')}
                      className="size-20 shrink-0 rounded object-cover md:size-25"
                    />
                    <div className="bg-default-100 absolute inset-s-0 -bottom-2 w-full translate-y-full rounded px-2.5 py-1 text-center text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {t('Австрали', 'Australia')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5 md:grid-cols-2">
            <div>
              <img className="size-full rounded-lg object-cover" src={heroImage1} alt="PowerGrid" />
            </div>

            <div className="space-y-2.5">
              <div className="bg-primary rounded-lg p-6">
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
                    <div className="text-lg text-white">
                      {t('Бүтээгдэхүүний зарчим №1', 'Product principle #1')}
                    </div>
                    <div className="text-default-400 text-sm">
                      {t('PowerGrid архитектур', 'PowerGrid architecture')}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <img src={aboutBg} alt="Image" className="rounded-lg object-cover" />

                <div className="absolute inset-0 m-7.5 text-center">
                  <div className="text-default-950 mb-2.5 rounded bg-white/50 px-4 py-3">
                    {t('1,000,000 тоолуурт зориулсан', 'Built for 1,000,000 meters')}
                  </div>

                  <img src={heroImage2} alt="Image" className="rounded" />
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
