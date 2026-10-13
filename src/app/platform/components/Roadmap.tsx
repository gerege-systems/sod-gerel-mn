import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

type PhaseType = {
  phase: Text
  title: Text
  duration: Text
  outcome: Text
  exit: Text
  status: 'active' | 'planned'
}

const liveData: Text[] = [
  { mn: 'powergrid.mn дээр Gerege Nexus суурь ажиллаж байна', en: 'Gerege Nexus foundation running on powergrid.mn' },
  { mn: 'eID Mongolia, нууц үг, OIDC / SSO нэвтрэлт', en: 'eID Mongolia, password and OIDC / SSO sign-in' },
  { mn: 'Байгууллага, гишүүнчлэл ба эрхийн суурь', en: 'Organisations, memberships and permission foundation' },
  { mn: 'Операторын консол — IP хязгаар ба TOTP', en: 'Operator console with IP allowlist and TOTP' },
  {
    mn: 'CI, долоо хоног бүрийн аюулгүй байдлын шалгалт, автомат deploy',
    en: 'CI, weekly security scans and automated deploys',
  },
  {
    mn: 'Олон улсын судалгаа, архитектур, хэрэгжүүлэх төлөвлөгөө',
    en: 'International research, architecture and implementation plan',
  },
]

const phasesData: PhaseType[] = [
  {
    phase: { mn: 'Үе 0', en: 'Phase 0' },
    title: { mn: 'Суурь ба PoC', en: 'Foundation and PoC' },
    duration: { mn: '2–3 долоо хоног', en: '2–3 weeks' },
    outcome: {
      mn: 'Тоолуурын inventory, protocol, эрхийн RLS загвар, модулийн араг, staging',
      en: 'Meter inventory, protocols, RLS permission model, module skeleton, staging',
    },
    exit: {
      mn: 'Туршилтын талбайн цэг бүрийн тоолуур ба topology батлагдсан',
      en: 'Every meter and the topology at the pilot site confirmed',
    },
    status: 'active',
  },
  {
    phase: { mn: 'Үе 1', en: 'Phase 1' },
    title: { mn: 'Ingestion ба MDM', en: 'Ingestion and MDM' },
    duration: { mn: '4–6 долоо хоног', en: '4–6 weeks' },
    outcome: {
      mn: 'Бодит заалт цуглуулалт, түүхий архив, VEE, simulator тусгаарлалт',
      en: 'Real reading collection, raw archive, VEE, simulator isolation',
    },
    exit: {
      mn: 'Хоцролт, давхардал, backfill-ийн тест тэнцсэн',
      en: 'Latency, duplicate and backfill tests passed',
    },
    status: 'planned',
  },
  {
    phase: { mn: 'Үе 2', en: 'Phase 2' },
    title: { mn: 'Баланс ба ажиллагаа', en: 'Balance and operations' },
    duration: { mn: '4–6 долоо хоног', en: '4–6 weeks' },
    outcome: {
      mn: 'Трансформаторын баланс, incident, D+1 самбар, тайлан',
      en: 'Transformer balance, incidents, D+1 dashboard, reports',
    },
    exit: {
      mn: 'Бүрэн бус өгөгдөл ба бодит зөрүүг ялгаж тайлбарладаг',
      en: 'Incomplete data and real discrepancies are told apart and explained',
    },
    status: 'planned',
  },
  {
    phase: { mn: 'Үе 3', en: 'Phase 3' },
    title: { mn: 'Тариф ба портал', en: 'Tariffs and portal' },
    duration: { mn: '≥ 2 billing мөчлөг', en: '≥ 2 billing cycles' },
    outcome: {
      mn: 'Тариф, ledger, shadow billing, хэрэглэгчийн портал, зөвшөөрөл',
      en: 'Tariffs, ledger, shadow billing, customer portal, consents',
    },
    exit: {
      mn: 'Golden dataset 100%; хуучин системтэй зөрүү шийдэгдсэн',
      en: 'Golden dataset 100%; differences with the legacy system resolved',
    },
    status: 'planned',
  },
  {
    phase: { mn: 'Үе 4', en: 'Phase 4' },
    title: { mn: 'Команд', en: 'Commands' },
    duration: { mn: '4–6 долоо хоног', en: '4–6 weeks' },
    outcome: {
      mn: 'Command worker, read-back, хоёр түлхүүр, DR дасгал',
      en: 'Command worker, read-back, two-person rule, DR drill',
    },
    exit: {
      mn: '0 худал VERIFIED; аюулгүй ажиллагааны нөхцөл батлагдсан',
      en: '0 false VERIFIED; safe-operation conditions approved',
    },
    status: 'planned',
  },
  {
    phase: { mn: 'Үе 5', en: 'Phase 5' },
    title: { mn: 'Аналитик ба өргөтгөл', en: 'Analytics and expansion' },
    duration: { mn: 'Бүсчилсэн', en: 'Region by region' },
    outcome: {
      mn: 'Аналитик модуль, бүлэглэл, бусад загвар, холбоо, бүс',
      en: 'Analytics module, grouping, more meter models, networks and regions',
    },
    exit: {
      mn: 'KPI ба TCO зорилт; ашиглалтын баг хүлээн авсан',
      en: 'KPI and TCO targets met; accepted by the operations team',
    },
    status: 'planned',
  },
]

const Roadmap = () => {
  const { t } = useLang()

  return (
    <section id="roadmap" className="scroll-mt-28 py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Хаана явна', 'Where we are')} right="02 — 08" />
        <div className="mt-10 mb-12 grid gap-6 lg:mt-14 lg:mb-16 lg:grid-cols-12 lg:gap-12">
          <h2 className="h-section mixed lg:col-span-7">
            <b>{t('Одоо юу ажиллаж,', 'What runs today')}</b> {t('юу ирэх вэ', 'and what comes next')}
            <span className="accent">.</span>
          </h2>
          <p className="max-w-[34rem] lg:col-span-5 lg:pt-2">
            {t(
              'Үе бүр гарах нөхцөлөө биелүүлсэн үед л дараагийнх руу шилжинэ. Хугацаа нь ажлын төлөвлөлтийн жишиг бөгөөд гэрээний амлалт биш.',
              'Each phase moves on only once its exit criterion is met. Durations are planning estimates, not contractual commitments.',
            )}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="bg-primary rounded-card p-7 text-white lg:p-9">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium">
              <span className="size-1.5 rounded-full bg-green-400" aria-hidden="true"></span>
              {t('Одоо ажиллаж байна', 'Live today')}
            </div>
            <ul className="space-y-4">
              {liveData.map((item) => (
                <li key={item.en} className="flex gap-3">
                  <Icon icon="tabler:circle-check-filled" className="mt-0.5 size-5 shrink-0 text-green-400" />
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-white/55">
              {t(
                'Хэмжилтийн бизнес модулиуд (бүртгэл, заалт, VEE, баланс, тариф, команд) хараахан нэвтрээгүй.',
                'The metering business modules (registry, readings, VEE, balance, tariff, commands) are not live yet.',
              )}
            </p>
          </div>

          <ol className="border-hair border-t lg:col-span-2">
            {phasesData.map((item, index) => {
              const active = item.status === 'active'
              return (
                <li
                  key={item.phase.en}
                  className={`border-hair grid gap-4 border-b py-6 md:grid-cols-[4.5rem_1fr] md:gap-8 lg:py-7 ${active ? 'relative' : ''}`}
                >
                  <div
                    className={`num num--sm ${active ? 'text-accent' : 'text-hair'}`}
                    aria-hidden="true"
                  >
                    {index}
                  </div>
                  <div>
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl">
                        <span className={`me-2 ${active ? 'text-accent' : 'text-mute'}`}>{t(item.phase)}</span>
                        {t(item.title)}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="chip chip--up">{t(item.duration)}</span>
                        {active ? (
                          <span className="chip chip--up chip--solid">
                            <span className="size-1.5 animate-pulse rounded-full bg-green-400" aria-hidden="true"></span>
                            {t('Явагдаж байна', 'In progress')}
                          </span>
                        ) : (
                          <span className="chip chip--up text-mute">{t('Төлөвлөгдсөн', 'Planned')}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-ink mb-1.5">{t(item.outcome)}</p>
                    <p className="text-sm">
                      <span className="text-ink font-medium">{t('Гарах нөхцөл:', 'Exit criterion:')}</span> {t(item.exit)}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Roadmap
