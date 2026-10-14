import { useLang, type Text } from '@/i18n/context'
import { CheckList, SectionHeading } from '@/components/site/ui'

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
  { mn: 'CI, долоо хоног бүрийн аюулгүй байдлын шалгалт, автомат deploy', en: 'CI, weekly security scans and automated deploys' },
  { mn: 'Олон улсын судалгаа, архитектур, хэрэгжүүлэх төлөвлөгөө', en: 'International research, architecture and implementation plan' },
]

const phasesData: PhaseType[] = [
  {
    phase: { mn: 'Үе 0', en: 'Phase 0' },
    title: { mn: 'Суурь ба PoC', en: 'Foundation and PoC' },
    duration: { mn: '2–3 долоо хоног', en: '2–3 weeks' },
    outcome: { mn: 'Тоолуурын inventory, protocol, эрхийн RLS загвар, модулийн араг, staging', en: 'Meter inventory, protocols, RLS permission model, module skeleton, staging' },
    exit: { mn: 'Туршилтын талбайн цэг бүрийн тоолуур ба topology батлагдсан', en: 'Every meter and the topology at the pilot site confirmed' },
    status: 'active',
  },
  {
    phase: { mn: 'Үе 1', en: 'Phase 1' },
    title: { mn: 'Ingestion ба MDM', en: 'Ingestion and MDM' },
    duration: { mn: '4–6 долоо хоног', en: '4–6 weeks' },
    outcome: { mn: 'Бодит заалт цуглуулалт, түүхий архив, VEE, simulator тусгаарлалт', en: 'Real reading collection, raw archive, VEE, simulator isolation' },
    exit: { mn: 'Хоцролт, давхардал, backfill-ийн тест тэнцсэн', en: 'Latency, duplicate and backfill tests passed' },
    status: 'planned',
  },
  {
    phase: { mn: 'Үе 2', en: 'Phase 2' },
    title: { mn: 'Баланс ба ажиллагаа', en: 'Balance and operations' },
    duration: { mn: '4–6 долоо хоног', en: '4–6 weeks' },
    outcome: { mn: 'Трансформаторын баланс, incident, D+1 самбар, тайлан', en: 'Transformer balance, incidents, D+1 dashboard, reports' },
    exit: { mn: 'Бүрэн бус өгөгдөл ба бодит зөрүүг ялгаж тайлбарладаг', en: 'Incomplete data and real discrepancies are told apart and explained' },
    status: 'planned',
  },
  {
    phase: { mn: 'Үе 3', en: 'Phase 3' },
    title: { mn: 'Тариф ба портал', en: 'Tariffs and portal' },
    duration: { mn: '≥ 2 billing мөчлөг', en: '≥ 2 billing cycles' },
    outcome: { mn: 'Тариф, ledger, shadow billing, хэрэглэгчийн портал, зөвшөөрөл', en: 'Tariffs, ledger, shadow billing, customer portal, consents' },
    exit: { mn: 'Golden dataset 100%; хуучин системтэй зөрүү шийдэгдсэн', en: 'Golden dataset 100%; differences with the legacy system resolved' },
    status: 'planned',
  },
  {
    phase: { mn: 'Үе 4', en: 'Phase 4' },
    title: { mn: 'Команд', en: 'Commands' },
    duration: { mn: '4–6 долоо хоног', en: '4–6 weeks' },
    outcome: { mn: 'Command worker, read-back, хоёр түлхүүр, DR дасгал', en: 'Command worker, read-back, two-person rule, DR drill' },
    exit: { mn: '0 худал VERIFIED; аюулгүй ажиллагааны нөхцөл батлагдсан', en: '0 false VERIFIED; safe-operation conditions approved' },
    status: 'planned',
  },
  {
    phase: { mn: 'Үе 5', en: 'Phase 5' },
    title: { mn: 'Аналитик ба өргөтгөл', en: 'Analytics and expansion' },
    duration: { mn: 'Бүсчилсэн', en: 'Region by region' },
    outcome: { mn: 'Аналитик модуль, бүлэглэл, бусад загвар, холбоо, бүс', en: 'Analytics module, grouping, more meter models, networks and regions' },
    exit: { mn: 'KPI ба TCO зорилт; ашиглалтын баг хүлээн авсан', en: 'KPI and TCO targets met; accepted by the operations team' },
    status: 'planned',
  },
]

const Roadmap = () => {
  const { t } = useLang()

  return (
    <section id="roadmap" className="pgl-section">
      <div className="pgl-container">
        <SectionHeading
          align="split"
          label={t('Хаана явна', 'WHERE WE ARE')}
          title={t('Одоо юу ажиллаж, юу ирэх вэ', 'What runs today, and what comes next')}
          body={t(
            'Үе бүр гарах нөхцөлөө биелүүлсэн үед л дараагийнх руу шилжинэ. Хугацаа нь ажлын төлөвлөлтийн жишиг бөгөөд гэрээний амлалт биш.',
            'Each phase moves on only once its exit criterion is met. Durations are planning estimates, not contractual commitments.',
          )}
        />

        <div className="pgl-roadmap">
          <div className="pgl-roadmap__live">
            <span className="pgl-chip" style={{ justifySelf: 'start' }}>
              <i aria-hidden /> {t('Одоо ажиллаж байна', 'Live today')}
            </span>
            <CheckList onNavy items={liveData.map((item) => t(item))} />
            <small>
              {t(
                'Хэмжилтийн бизнес модулиуд (бүртгэл, заалт, VEE, баланс, тариф, команд) хараахан нэвтрээгүй.',
                'The metering business modules (registry, readings, VEE, balance, tariff, commands) are not live yet.',
              )}
            </small>
          </div>

          <ol className="pgl-roadmap__phases">
            {phasesData.map((item, index) => {
              const active = item.status === 'active'
              return (
                <li key={item.phase.en} className={`pgl-roadmap__phase${active ? ' is-active' : ''}`}>
                  <span className="pgl-roadmap__num" aria-hidden>
                    {String(index).padStart(2, '0')}
                  </span>
                  <div>
                    <header>
                      <h3>
                        <span>{t(item.phase)}</span>
                        {t(item.title)}
                      </h3>
                      <div className="pgl-roadmap__chips">
                        <span className="pgl-chip pgl-chip--muted">{t(item.duration)}</span>
                        {active ? (
                          <span className="pgl-chip pgl-chip--blue">
                            <i aria-hidden /> {t('Явагдаж байна', 'In progress')}
                          </span>
                        ) : (
                          <span className="pgl-chip pgl-chip--muted">{t('Төлөвлөгдсөн', 'Planned')}</span>
                        )}
                      </div>
                    </header>
                    <p>{t(item.outcome)}</p>
                    <p className="pgl-muted">
                      <b>{t('Гарах нөхцөл:', 'Exit criterion:')}</b> {t(item.exit)}
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
