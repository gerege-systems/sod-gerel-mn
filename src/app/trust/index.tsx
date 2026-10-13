import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import PageMeta from '@/components/PageMeta'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'
import { ADMIN_URL, LOGIN_URL } from '@/config'
import { useLang, type Text } from '@/i18n/context'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import iconDatabaseGuard from '@/assets/images/icons3d/database-guard.webp'
import iconTwoPerson from '@/assets/images/icons3d/two-person.webp'
import iconAggregation from '@/assets/images/icons3d/aggregation.webp'
import iconAudit from '@/assets/images/icons3d/audit.webp'
import iconCitizen from '@/assets/images/icons3d/citizen.webp'
import iconOrganisation from '@/assets/images/icons3d/organisation.webp'
import iconOperator from '@/assets/images/icons3d/operator.webp'

type GuaranteeType = {
  icon: ImageSrc
  title: Text
  body: Text
  /** Том тэмдэгт мөч (жишээ нь k ≥ 10) — байгаа тохиолдолд л харуулна */
  figure?: string
  figureSuffix?: Text
}

type RoleType = {
  actor: Text
  role: Text
  system: Text
  access: Text
}

type AccessType = {
  icon: ImageSrc
  who: Text
  how: Text
  where: Text
  status: Text
}

const guaranteesData: GuaranteeType[] = [
  {
    icon: iconDatabaseGuard,
    title: { mn: 'Өгөгдлийн сан өөрөө хамгаална', en: 'The database enforces it' },
    body: {
      mn: 'PostgreSQL Row Level Security ба scope cell — зөвшөөрөгдөөгүй мөр API, экспорт, тайлан, background job-оор ч гарахгүй.',
      en: 'PostgreSQL Row Level Security and scope cells: an unauthorised row never leaves through API, export, report or background job.',
    },
    figure: 'RLS',
  },
  {
    icon: iconTwoPerson,
    title: { mn: 'Таслах командад хоёр түлхүүр', en: 'Two-person rule for disconnects' },
    body: {
      mn: 'Хүсэлт гаргагч өөрийн командыг хэзээ ч батлах боломжгүй. Нэг төхөөрөмжид нэг идэвхтэй команд.',
      en: 'The requester can never approve their own command. One active command per device.',
    },
    figure: '2',
    figureSuffix: { mn: 'түлхүүр', en: 'persons' },
  },
  {
    icon: iconAggregation,
    title: { mn: 'k ≥ 10 босготой нэгтгэл', en: 'k ≥ 10 aggregation' },
    body: {
      mn: 'Цөөн өрхтэй бүлгээс нэг айлын хэрэглээ тодрохгүй. Нутгийн захиргаа түүхий хүснэгтэд хүрэх замгүй.',
      en: 'No single household can be singled out from a small group. Local government has no path to raw tables.',
    },
    figure: 'k ≥ 10',
  },
  {
    icon: iconAudit,
    title: { mn: 'Хандалт бүр аудиттай', en: 'Every access is audited' },
    body: {
      mn: 'Дэлгэрэнгүй хандалт бүрд хэн, юуг, хэзээ, ямар үндэслэлээр харсныг бичнэ. Аудит энгийн CRUD-аар устгагдахгүй.',
      en: 'Every detailed access records who saw what, when and on which grant. The audit trail cannot be deleted through ordinary CRUD.',
    },
  },
]

const rolesData: RoleType[] = [
  {
    actor: { mn: 'Түгээх компани', en: 'Distribution company' },
    role: { mn: 'Metered Data Responsible', en: 'Metered Data Responsible' },
    system: { mn: 'Core', en: 'Core' },
    access: { mn: 'Өөрийн grid area-д бүрэн', en: 'Full, within its own grid area' },
  },
  {
    actor: { mn: 'Салбарын инженер', en: 'Field engineer' },
    role: { mn: 'Engineer / Operator', en: 'Engineer / Operator' },
    system: { mn: 'Core', en: 'Core' },
    access: {
      mn: 'Өөрийн топологийн бүс, зөвшөөрөгдсөн команд',
      en: 'Own topology zone, permitted commands',
    },
  },
  {
    actor: { mn: 'ЭХЗХ', en: 'ERC (Energy Regulatory Commission)' },
    role: { mn: 'Зохицуулагч, Viewer', en: 'Regulator, Viewer' },
    system: { mn: 'Analytics (+ зорилготой grant)', en: 'Analytics (+ purpose-bound grant)' },
    access: { mn: 'Бүх бүс, зөвхөн харах', en: 'All zones, read-only' },
  },
  {
    actor: { mn: 'Аймаг, дүүрэг', en: 'Provinces & districts' },
    role: { mn: 'Төрийн байгууллага', en: 'Public authority' },
    system: { mn: 'Зөвхөн Analytics', en: 'Analytics only' },
    access: {
      mn: 'Харьяа бүлгийн нэгтгэл, k-босготой',
      en: 'Aggregates for their own groups, k-thresholded',
    },
  },
  {
    actor: { mn: 'Иргэн, ААН', en: 'Citizens & businesses' },
    role: { mn: 'Final customer', en: 'Final customer' },
    system: { mn: 'Хэрэглэгчийн портал', en: 'Customer portal' },
    access: {
      mn: 'Өөрийн цэгийн өгөгдөл, зөвшөөрөл олгох',
      en: 'Own metering point data, granting consent',
    },
  },
  {
    actor: { mn: 'Банк, ESCO', en: 'Banks, ESCOs' },
    role: { mn: 'Eligible party', en: 'Eligible party' },
    system: { mn: 'API', en: 'API' },
    access: {
      mn: 'Хэрэглэгчийн зөвшөөрлөөр, хугацаатай',
      en: 'With customer consent, time-limited',
    },
  },
  {
    actor: { mn: 'Аудитор', en: 'Auditor' },
    role: { mn: 'Security auditor', en: 'Security auditor' },
    system: { mn: 'Core + Analytics', en: 'Core + Analytics' },
    access: {
      mn: 'Хугацаатай, хамрах хүрээтэй, зөвхөн харах',
      en: 'Time-limited, scoped, read-only',
    },
  },
]

const accessData: AccessType[] = [
  {
    icon: iconCitizen,
    who: { mn: 'Иргэн', en: 'Citizen' },
    how: {
      mn: 'eID Mongolia — регистрийн дугаар эсвэл QR код',
      en: 'eID Mongolia: registration number or QR code',
    },
    where: { mn: 'Хэрэглэгчийн портал', en: 'Customer portal' },
    status: {
      mn: 'Нэвтрэлт ажиллаж байна · портал Үе 3-т',
      en: 'Sign-in live · portal in Phase 3',
    },
  },
  {
    icon: iconOrganisation,
    who: { mn: 'Байгууллага', en: 'Organisation' },
    how: {
      mn: 'Нэвтрэх нэр, нууц үг эсвэл OIDC / SSO',
      en: 'Username and password, or OIDC / SSO',
    },
    where: { mn: 'Ажлын орчин (workspace)', en: 'Workspace' },
    status: { mn: 'Нэвтрэлт ба эрх ажиллаж байна', en: 'Sign-in and permissions live' },
  },
  {
    icon: iconOperator,
    who: { mn: 'Оператор', en: 'Operator' },
    how: {
      mn: 'Зөвшөөрөгдсөн IP хаяг + TOTP заавал',
      en: 'Allow-listed IP address + mandatory TOTP',
    },
    where: { mn: 'Операторын консол', en: 'Operator console' },
    status: { mn: 'Ажиллаж байна', en: 'Live' },
  },
]

const citizenRightsData: Text[] = [
  {
    mn: 'Өөрийн хэрэглээ, шинэчлэгдсэн цаг, заалтын чанарыг харах',
    en: 'See your own usage, when it was last updated, and reading quality',
  },
  {
    mn: 'Нэхэмжлэх аль заалт, аль тарифаар тооцогдсоныг харах',
    en: 'See which readings and which tariff each invoice was calculated from',
  },
  {
    mn: 'Гуравдагч талд цэг, өгөгдлийн төрөл, хугацаа, зорилготой зөвшөөрөл олгох',
    en: 'Grant third parties consent scoped by metering point, data type, period and purpose',
  },
  {
    mn: 'Хэн, хэзээ хандсаныг харах, зөвшөөрлөө цуцлах',
    en: 'See who accessed your data and when, and revoke consent',
  },
]

const Rails = () => (
  <div className="rails" aria-hidden="true">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
)

const pad = (n: number) => String(n).padStart(2, '0')

const Index = () => {
  const { t } = useLang()
  return (
    <>
      <PageMeta title={{ mn: 'Эрх ба нууцлал', en: 'Access & privacy' }} />
      <Navbar />

      {/* ============ Hero: нэг том гарчиг + нэг объект ============ */}
      <section className="relative size-full overflow-hidden py-10 md:py-14.5">
        <div className="container">
          <SectionMeta
            left={t('Эрх ба нууцлал', 'Access & privacy')}
            right={t('ЕХ 2023/1162 · IEC 62351-8', 'EU 2023/1162 · IEC 62351-8')}
            className="mb-10 md:mb-14"
          />
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            <div className="flex flex-col justify-between gap-10 lg:col-span-7">
              <div>
                <h1 className="display mixed">
                  <b>{t('Хэн, юуг, ямар үндэслэлээр харахыг', 'Who sees what, and why,')}</b>{' '}
                  {t('өгөгдлийн сан өөрөө хамгаална', 'is enforced by the database itself')}
                  <span className="accent">.</span>
                </h1>
                <p className="mt-6 max-w-[36rem] text-lg">
                  {t(
                    'Эрхийг засаг захиргаагаар бус, ЕХ-ны 2023/1162 ба IEC 62351-8-ийн үүрэг, хэмжилтийн цэгтэй холбоо хамаарлаар олгоно. Шүүлтүүр эрхийг хэзээ ч өргөтгөхгүй.',
                    'Access follows EU 2023/1162 and IEC 62351-8 roles and the relationship to a metering point, not administrative borders. A filter never widens a permission.',
                  )}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {guaranteesData.map((item, index) => (
                  <a key={item.title.en} href={`#guarantee-${index + 1}`} className="chip">
                    <span className="meta">{pad(index + 1)}</span>
                    {t(item.title)}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="card card--ink on-ink relative flex h-full min-h-[26rem] flex-col justify-between overflow-hidden p-7 lg:p-9">
                <div
                  className="pointer-events-none absolute -top-[20%] -right-[20%] aspect-square w-[70%] rounded-full"
                  style={{
                    background:
                      'radial-gradient(closest-side, color-mix(in oklab, var(--color-accent-bright) 26%, transparent), transparent 72%)',
                  }}
                  aria-hidden="true"
                ></div>
                <div className="relative flex items-start justify-between gap-4">
                  <span className="meta on-ink">PostgreSQL · Row Level Security</span>
                  <span className="meta on-ink">scope cell</span>
                </div>
                <div className="relative mx-auto my-8 grid size-44 place-items-center rounded-full bg-white/92 shadow-[0_30px_60px_-30px_rgb(0_0_0/.8)] md:size-52">
                  <img src={iconDatabaseGuard} alt="" aria-hidden="true" className="size-32 md:size-36" />
                </div>
                <p className="relative text-lg font-medium tracking-[-0.01em] text-white">
                  {t(
                    'Эрх = байгууллагын grant-уудын нэгдэл ∩ үүргийн эрх ∩ хэрэглэгчийн хамрах хүрээ.',
                    'Access = union of the organisation’s grants ∩ role permissions ∩ user scope.',
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Дөрвөн баталгаа: bento, нэг хар карт ============ */}
      <section className="bg-stage py-15 md:py-25 lg:py-27.5">
        <div className="container">
          <SectionMeta left={t('Эрх ба нууцлал', 'Access & privacy')} right="01 — 04" />
          <h2 className="h-section mixed mt-10 mb-12 max-w-[44rem] lg:mt-14 lg:mb-16">
            <b>{t('Дөрвөн баталгаа', 'Four guarantees')}</b>{' '}
            {t('— өгөгдлийн сан өөрөө хамгаална', '— enforced by the database itself')}
            <span className="accent">.</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
            {guaranteesData.map((item, index) => {
              const isInk = index === 0
              return (
                <article
                  key={item.title.en}
                  id={`guarantee-${index + 1}`}
                  className={`card scroll-mt-28 flex flex-col p-7 lg:p-9 ${isInk ? 'card--ink on-ink' : ''}`}
                >
                  <div className="mb-10 flex items-start justify-between gap-6">
                    <span className={`meta ${isInk ? 'on-ink' : ''}`}>{pad(index + 1)} — 04</span>
                    {isInk ? (
                      <span className="grid size-24 place-items-center rounded-full bg-white/92">
                        <img src={item.icon} alt="" aria-hidden="true" loading="lazy" className="size-16" />
                      </span>
                    ) : (
                      <img src={item.icon} alt="" aria-hidden="true" loading="lazy" className="size-24" />
                    )}
                  </div>
                  {item.figure ? (
                    <div className={`num num--md mb-6 ${isInk ? 'text-white' : ''}`}>
                      {item.figure}
                      {item.figureSuffix && <span className="num-sfx">{t(item.figureSuffix)}</span>}
                    </div>
                  ) : (
                    <div className={`num num--md mb-6 ${isInk ? 'text-white/20' : 'text-hair'}`} aria-hidden="true">
                      {pad(index + 1)}
                    </div>
                  )}
                  <h3 className={`mb-3 text-xl lg:text-2xl ${isInk ? 'text-white' : ''}`}>{t(item.title)}</h3>
                  <p className={`max-w-[36rem] ${isInk ? 'text-white/70' : ''}`}>{t(item.body)}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ Нэвтрэх арга ============ */}
      <section className="py-15 md:py-25 lg:py-27.5">
        <div className="container">
          <SectionMeta left={t('Нэвтрэх арга', 'Sign-in methods')} right="02 — 04" />
          <div className="mt-10 mb-12 grid gap-6 lg:mt-14 lg:mb-16 lg:grid-cols-12 lg:gap-12">
            <h2 className="h-section mixed lg:col-span-7">
              <b>{t('Хэн хаанаас,', 'Who signs in,')}</b> {t('хэрхэн нэвтрэх вэ', 'where and how')}
              <span className="accent">.</span>
            </h2>
            <p className="max-w-[34rem] lg:col-span-5 lg:pt-2">
              {t(
                'Нэвтрэлт, байгууллага, гишүүнчлэл, эрхийн суурь powergrid.mn дээр аль хэдийн ажиллаж байна. Хэмжилтийн модулиуд үе шаттайгаар нэмэгдэнэ.',
                'The sign-in, organisation, membership and permissions foundation is already live on powergrid.mn. Metering modules arrive in stages.',
              )}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {accessData.map((item, index) => (
              <div key={item.who.en} className="card flex flex-col p-7 lg:p-8">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <img src={item.icon} alt="" aria-hidden="true" loading="lazy" className="size-22" />
                  <span className="meta">{pad(index + 1)} — 03</span>
                </div>
                <h3 className="text-2xl">{t(item.who)}</h3>
                <p className="text-ink mt-3">{t(item.how)}</p>
                <p className="meta mt-2">{t(item.where)}</p>
                <span className="chip mt-8 self-start">
                  <span className="size-1.5 rounded-full bg-green-500" aria-hidden="true"></span>
                  {t(item.status)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <PillButton href={LOGIN_URL} variant="dark" leadingIcon="tabler:fingerprint">
              {t('Нэвтрэх', 'Sign in')}
            </PillButton>
            <PillButton href={ADMIN_URL} variant="soft" leadingIcon="tabler:shield-lock">
              {t('Операторын консол', 'Operator console')}
            </PillButton>
          </div>
        </div>
      </section>

      {/* ============ Хэн юуг харах вэ ============ */}
      <section className="bg-stage py-15 md:py-25 lg:py-27.5">
        <div className="container">
          <SectionMeta left={t('Үүрэгт суурилсан эрх', 'Role-based access')} right="03 — 04" />
          <div className="mt-10 mb-12 grid gap-6 lg:mt-14 lg:mb-16 lg:grid-cols-12 lg:gap-12">
            <h2 className="h-section mixed lg:col-span-6">
              <b>{t('Хэн', 'Who')}</b> {t('юуг харах вэ', 'sees what')}
              <span className="accent">.</span>
            </h2>
            <p className="max-w-[36rem] lg:col-span-6 lg:pt-2">
              {t(
                'Эрх = байгууллагын grant-уудын нэгдэл ∩ үүргийн эрх ∩ хэрэглэгчийн хамрах хүрээ. Байгууллагуудын нэр, бүрэн эрх нь жишээ бөгөөд хууль, журамтай тулгаж батлагдана.',
                'Access = union of the organisation’s grants ∩ role permissions ∩ user scope. Organisation names and mandates are illustrative and will be confirmed against law and regulation.',
              )}
            </p>
          </div>

          {/* Desktop: hairline хүснэгт */}
          <div className="card hidden overflow-hidden md:block">
            <table className="w-full text-start text-sm lg:text-base">
              <thead>
                <tr className="border-hair border-b">
                  <th className="meta px-6 py-4 text-start lg:px-8">{t('Оролцогч', 'Actor')}</th>
                  <th className="meta px-6 py-4 text-start lg:px-8">
                    {t('Үүрэг (2023/1162, IEC 62351-8)', 'Role (2023/1162, IEC 62351-8)')}
                  </th>
                  <th className="meta px-6 py-4 text-start lg:px-8">{t('Систем', 'System')}</th>
                  <th className="meta px-6 py-4 text-start lg:px-8">{t('Хандалт', 'Access')}</th>
                </tr>
              </thead>
              <tbody className="divide-hair divide-y">
                {rolesData.map((row, index) => (
                  <tr key={row.actor.en}>
                    <td className="px-6 py-5 lg:px-8">
                      <div className="flex items-center gap-4">
                        <span className="meta w-6 tabular-nums">{pad(index + 1)}</span>
                        <span className="text-ink font-semibold tracking-[-0.01em]">{t(row.actor)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 lg:px-8">
                      <span className="chip">{t(row.role)}</span>
                    </td>
                    <td className="text-ink px-6 py-5 lg:px-8">{t(row.system)}</td>
                    <td className="px-6 py-5 lg:px-8">{t(row.access)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: оролцогч бүр карт */}
          <ul className="grid gap-3 md:hidden" role="list">
            {rolesData.map((row, index) => (
              <li key={row.actor.en} className="card p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-lg">{t(row.actor)}</h3>
                  <span className="meta tabular-nums">{pad(index + 1)}</span>
                </div>
                <span className="chip mb-4">{t(row.role)}</span>
                <dl className="border-hair divide-hair divide-y border-t text-sm">
                  <div className="flex justify-between gap-4 py-2.5">
                    <dt className="meta">{t('Систем', 'System')}</dt>
                    <dd className="text-ink text-end">{t(row.system)}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-2.5">
                    <dt className="meta">{t('Хандалт', 'Access')}</dt>
                    <dd className="text-end">{t(row.access)}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ Иргэний эрх: ink тайз ============ */}
      <section className="on-ink bg-ink relative overflow-hidden py-15 md:py-25 lg:py-27.5">
        <Rails />
        <div
          className="pointer-events-none absolute -bottom-[40%] -left-[10%] aspect-square w-[46vw] max-w-[720px] rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, color-mix(in oklab, var(--color-accent-bright) 16%, transparent), transparent 72%)',
          }}
          aria-hidden="true"
        ></div>
        <div className="container relative">
          <SectionMeta dark left={t('Иргэний эрх', 'Customer rights')} right="04 — 04" className="mb-12 lg:mb-16" />
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display mixed on-ink">
                <b>{t('Иргэн', 'Customers')}</b> {t('өөрийн өгөгдлийн эзэн', 'own their data')}
                <span className="text-accent-bright">.</span>
              </h2>
              <p className="mt-6 max-w-[32rem] text-white/60">
                {t(
                  'ЕХ-ны «Download My Data» ба «Share My Data» загвараар иргэн хэрэглээгээ татаж, банк, ESCO зэрэг гуравдагч талд хугацаатай зөвшөөрөл олгож, хүссэн үедээ цуцална. Цуцалмагц хандалт дараагийн хүсэлтээс зогсоно.',
                  'Following the EU "Download My Data" and "Share My Data" model, customers export their usage, grant time-limited access to banks or ESCOs, and revoke it at will — access stops on the next request.',
                )}
              </p>
            </div>
            <ol className="border-t border-white/10 lg:col-span-7" role="list">
              {citizenRightsData.map((text, index) => (
                <li key={text.en} className="flex items-start gap-5 border-b border-white/10 py-6 md:gap-8">
                  <span className="meta on-ink mt-2 w-6 shrink-0 tabular-nums">{pad(index + 1)}</span>
                  <span className="grow text-lg font-medium tracking-[-0.015em] text-white md:text-xl">{t(text)}</span>
                  <Icon icon="tabler:circle-check" className="text-accent-bright mt-1 size-6 shrink-0" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/55">
            <span>
              {t(
                'Хэрэглэгчийн портал ба зөвшөөрлийн бүртгэл хэрэгжүүлэх төлөвлөгөөний Үе 3-т орно.',
                'The customer portal and consent registry are part of Phase 3 of the implementation plan.',
              )}
            </span>
            <Link to="/platform#roadmap" className="chip on-ink">
              {t('Төлөвлөгөөг үзэх', 'View the roadmap')}
              <Icon icon="tabler:arrow-up-right" className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Index
