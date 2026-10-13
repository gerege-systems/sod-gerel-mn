import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import iconCollection from '@/assets/images/icons3d/collection.webp'
import iconVersioned from '@/assets/images/icons3d/versioned-data.webp'
import iconBalance from '@/assets/images/icons3d/balance.webp'
import iconCommand from '@/assets/images/icons3d/verified-command.webp'
import SectionMeta from '@/components/SectionMeta'
import { useLang, type Text } from '@/i18n/context'

type ModuleType = {
  icon: ImageSrc
  title: Text
  body: Text
  url: string
}

const standardsData: Text[] = [
  { mn: 'DLMS/COSEM', en: 'DLMS/COSEM' },
  { mn: 'IEC 62351-8', en: 'IEC 62351-8' },
  { mn: 'ЕХ 2023/1162', en: 'EU 2023/1162' },
  { mn: 'IEC CIM', en: 'IEC CIM' },
  { mn: 'PostgreSQL + RLS', en: 'PostgreSQL + RLS' },
  { mn: 'Gerege Nexus', en: 'Gerege Nexus' },
  { mn: 'eID Mongolia', en: 'eID Mongolia' },
  { mn: 'OIDC / SSO', en: 'OIDC / SSO' },
  { mn: 'TEAMI', en: 'TEAMI' },
]

// Текст: power-grid-mn/brand/copy.json — website.feature.* (үгчлэн).
const modulesData: ModuleType[] = [
  {
    icon: iconCollection,
    title: { mn: 'Бодит заалт цуглуулалт', en: 'Real meter collection' },
    body: {
      mn: 'DLMS/COSEM болон TEAMI адаптерууд бүсээрээ ажиллаж, retry, нөхөн таталт, backfill-ийг өөрөө удирдана. Ижил заалт хэд дахин ирсэн ч нэг л удаа бүртгэгдэнэ.',
      en: 'Regional DLMS/COSEM and TEAMI adapters handle retries, catch-up and backfill on their own. The same reading delivered twice is recorded once.',
    },
    url: '/platform',
  },
  {
    icon: iconVersioned,
    title: { mn: 'Хувилбартай MDM ба VEE', en: 'Versioned MDM and VEE' },
    body: {
      mn: 'Түүхий заалтыг хэзээ ч дарж засахгүй. Бодит, тооцоолсон, орлуулсан утгыг ялгаж, засвар бүрийг шалтгаан, дүрэм, гүйцэтгэгчтэй нь шинэ хувилбараар хадгална — Австралийн AEMO-гийн жишгээр.',
      en: 'Raw readings are never overwritten. Actual, estimated and substituted values stay distinct, and every correction is a new version with its reason, rule and author — the AEMO way.',
    },
    url: '/platform',
  },
  {
    icon: iconBalance,
    title: { mn: 'Трансформаторын баланс', en: 'Transformer balance' },
    body: {
      mn: 'Оролт ба гаралтыг ижил хугацаа, ижил сүлжээний заагт тулгаж, алдагдлыг өгөгдлийн бүрэн байдал, topology-ийн хувилбартай нь хамт харуулна. Дутуу өгөгдлийг хулгай гэж хэзээ ч дүгнэхгүй.',
      en: 'Input and output are reconciled over the same period and the same grid boundary, and every loss figure is shown with its completeness and topology version. Missing data is never mistaken for theft.',
    },
    url: '/platform',
  },
  {
    icon: iconCommand,
    title: { mn: 'Баталгаатай алсын команд', en: 'Verified remote commands' },
    body: {
      mn: 'Таслах, залгах команд REQUESTED → QUEUED → SENT → ACKNOWLEDGED → VERIFIED замаар явна. Тоолуурын төлөвийг дахин уншиж батлахаас нааш «амжилттай» гэж хэзээ ч харуулахгүй.',
      en: "Disconnect and reconnect commands move REQUESTED → QUEUED → SENT → ACKNOWLEDGED → VERIFIED. Nothing shows as done until the meter's state has been read back.",
    },
    url: '/platform',
  },
]

const Modules = () => {
  const { t } = useLang()
  return (
    <section className="bg-stage py-15 md:py-25 lg:py-27.5">
      <div className="container mb-12.5 lg:max-w-[70%]!">
        <p className="meta mb-8 text-center">
          {t(
            'Олон улсын стандарт ба технологи дээр суурилсан',
            'Built on international standards and technology',
          )}
        </p>
        <div className="relative flex w-full flex-nowrap gap-5 overflow-hidden md:gap-16">
          <div className="from-stage absolute inset-0 end-auto z-10 hidden w-25 bg-linear-to-tr from-18% to-transparent lg:flex"></div>
          <div className="marquee inline-flex gap-5 md:gap-16">
            {standardsData.map((item, index) => (
              <div key={index} className="inline-flex items-center">
                <span className="text-default-700 text-base font-semibold text-nowrap md:text-lg">{t(item)}</span>
              </div>
            ))}
          </div>
          <div className="marquee inline-flex gap-5 md:gap-16">
            {standardsData.map((item, index) => (
              <div key={index} className="inline-flex items-center">
                <span className="text-default-700 text-base font-semibold text-nowrap md:text-lg">{t(item)}</span>
              </div>
            ))}
          </div>
          <div className="from-stage absolute inset-0 start-auto z-10 hidden w-25 bg-linear-to-l from-18% to-transparent lg:flex"></div>
        </div>
      </div>
      <div className="container">
        <SectionMeta left={t('Юу хийдэг вэ', 'What it does')} right="01 — 08" />
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="h-section mixed">
              <b>{t('Тоолуураас нэхэмжлэх хүртэл', 'A provable path')}</b>{' '}
              {t('нотлогдох урсгал', 'from meter to invoice')}
              <span className="accent">.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="max-w-[34rem]">
              {t(
                'Заалт ирсэн мөчөөс эхлэн хаанаас, хэзээ, ямар дүрмээр, ямар хувилбараар ирснийг нь хадгална. Нэхэмжлэл, баланс, команд бүрийг эх заалт руу нь буцааж мөрдөж болно.',
                'From the moment a reading arrives, PowerGrid keeps where it came from, when, under which rule and in which version. Every invoice, balance and command traces back to its source reading.',
              )}
            </p>
            <div className="mt-5 inline-flex flex-wrap items-center gap-2">
              <span className="chip chip--up">{t('Хэмжилт', 'Metering')}</span>
              <Icon icon="tabler:bolt-filled" className="text-accent size-4" aria-hidden="true" />
              <span className="chip chip--up">{t('Итгэл', 'Trust')}</span>
              <span className="text-default-600 ms-1 text-sm">
                {t('Нэг ч заалт алдахгүй, давхардуулахгүй.', 'No reading lost, none duplicated.')}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:gap-6">
          {modulesData.map((module, index) => {
            const isInk = index === 0
            return (
              <Link
                key={module.title.en}
                to={module.url}
                className={`group card relative flex flex-col p-7 transition-transform duration-300 ease-soft hover:-translate-y-0.5 lg:p-9 ${isInk ? 'card--ink' : ''}`}
              >
                <div className="mb-8 flex items-start justify-between gap-4">
                  {isInk ? (
                    <span className="grid size-24 place-items-center rounded-full bg-white/92">
                      <img src={module.icon} alt="" aria-hidden="true" className="size-16" />
                    </span>
                  ) : (
                    <img src={module.icon} alt="" aria-hidden="true" loading="lazy" className="size-24" />
                  )}
                </div>
                <h3 className={`mb-3 text-xl lg:text-2xl ${isInk ? 'text-white' : ''}`}>
                  {t(module.title)}
                </h3>
                <p className={`max-w-[40rem] ${isInk ? 'text-white/70' : 'text-default-600'}`}>
                  {t(module.body)}
                </p>
                <div className="mt-8 flex items-center justify-between gap-4 pt-2 lg:mt-10">
                  <span className={`meta ${isInk ? 'on-ink' : ''}`}>
                    {String(index + 1).padStart(2, '0')} — 04
                  </span>
                  <span
                    className={`arrow-chip ${isInk ? 'bg-white text-ink' : ''}`}
                    aria-hidden="true"
                  >
                    <Icon icon="tabler:arrow-up-right" className="size-5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Modules
