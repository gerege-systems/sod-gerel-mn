import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import PageMeta from '@/components/PageMeta'
import { ADMIN_URL, LOGIN_URL } from '@/config'
import { useLang, type Text } from '@/i18n/context'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

type GuaranteeType = {
  icon: string
  title: Text
  body: Text
}

type RoleType = {
  actor: Text
  role: Text
  system: Text
  access: Text
}

type AccessType = {
  icon: string
  who: Text
  how: Text
  where: Text
  status: Text
}

const guaranteesData: GuaranteeType[] = [
  {
    icon: 'tabler:lock-square-rounded',
    title: { mn: 'Өгөгдлийн сан өөрөө хамгаална', en: 'The database enforces it' },
    body: {
      mn: 'PostgreSQL Row Level Security ба scope cell — зөвшөөрөгдөөгүй мөр API, экспорт, тайлан, background job-оор ч гарахгүй.',
      en: 'PostgreSQL Row Level Security and scope cells: an unauthorised row never leaves through API, export, report or background job.',
    },
  },
  {
    icon: 'tabler:key',
    title: { mn: 'Таслах командад хоёр түлхүүр', en: 'Two-person rule for disconnects' },
    body: {
      mn: 'Хүсэлт гаргагч өөрийн командыг хэзээ ч батлах боломжгүй. Нэг төхөөрөмжид нэг идэвхтэй команд.',
      en: 'The requester can never approve their own command. One active command per device.',
    },
  },
  {
    icon: 'tabler:users-group',
    title: { mn: 'k ≥ 10 босготой нэгтгэл', en: 'k ≥ 10 aggregation' },
    body: {
      mn: 'Цөөн өрхтэй бүлгээс нэг айлын хэрэглээ тодрохгүй. Нутгийн захиргаа түүхий хүснэгтэд хүрэх замгүй.',
      en: 'No single household can be singled out from a small group. Local government has no path to raw tables.',
    },
  },
  {
    icon: 'tabler:file-search',
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
    icon: 'tabler:fingerprint',
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
    icon: 'tabler:building',
    who: { mn: 'Байгууллага', en: 'Organisation' },
    how: {
      mn: 'Нэвтрэх нэр, нууц үг эсвэл OIDC / SSO',
      en: 'Username and password, or OIDC / SSO',
    },
    where: { mn: 'Ажлын орчин (workspace)', en: 'Workspace' },
    status: { mn: 'Нэвтрэлт ба эрх ажиллаж байна', en: 'Sign-in and permissions live' },
  },
  {
    icon: 'tabler:shield-lock',
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

const Index = () => {
  const { t } = useLang()
  return (
    <>
      <PageMeta title={{ mn: 'Эрх ба нууцлал', en: 'Access & privacy' }} />
      <Navbar />

      <section className="relative size-full overflow-hidden py-10 md:py-14.5">
        <div className="container max-w-315!">
          <div className="mb-12.5 text-center">
            <div className="text-default-950 mb-2.5 text-sm">{t('Эрх ба нууцлал', 'Access & privacy')}</div>
            <h1 className="text-default-950 mx-auto mb-2.5 text-4xl md:text-5xl lg:max-w-4/5 lg:text-[56px]">
              {t(
                'Хэн, юуг, ямар үндэслэлээр харахыг өгөгдлийн сан өөрөө хамгаална',
                'Who sees what, and why, is enforced by the database itself',
              )}
            </h1>
            <p className="mx-auto md:max-w-3/5">
              {t(
                'Эрхийг засаг захиргаагаар бус, ЕХ-ны 2023/1162 ба IEC 62351-8-ийн үүрэг, хэмжилтийн цэгтэй холбоо хамаарлаар олгоно. Шүүлтүүр эрхийг хэзээ ч өргөтгөхгүй.',
                'Access follows EU 2023/1162 and IEC 62351-8 roles and the relationship to a metering point, not administrative borders. A filter never widens a permission.',
              )}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {guaranteesData.map((item) => (
              <div key={item.title.en} className="border-default-200 rounded-xl border p-6 lg:p-8">
                <div className="bg-accent/10 text-accent mb-6 flex size-12 items-center justify-center rounded-lg">
                  <Icon icon={item.icon} className="size-6" />
                </div>
                <h3 className="mb-2.5 text-xl">{t(item.title)}</h3>
                <p>{t(item.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
        <div className="container max-w-315!">
          <div className="mb-12.5">
            <div className="text-default-950 mb-2.5 text-sm">{t('Нэвтрэх арга', 'Sign-in methods')}</div>
            <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
              {t('Хэн хаанаас, хэрхэн нэвтрэх вэ', 'Who signs in, where and how')}
            </h2>
            <p className="lg:max-w-3/5">
              {t(
                'Нэвтрэлт, байгууллага, гишүүнчлэл, эрхийн суурь powergrid.mn дээр аль хэдийн ажиллаж байна. Хэмжилтийн модулиуд үе шаттайгаар нэмэгдэнэ.',
                'The sign-in, organisation, membership and permissions foundation is already live on powergrid.mn. Metering modules arrive in stages.',
              )}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {accessData.map((item) => (
              <div key={item.who.en} className="flex flex-col rounded-xl bg-white p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="bg-primary flex size-11 items-center justify-center rounded-lg text-white">
                    <Icon icon={item.icon} className="size-6" />
                  </div>
                  <h3 className="text-xl">{t(item.who)}</h3>
                </div>
                <p className="text-default-950 mb-1.5">{t(item.how)}</p>
                <p className="mb-6 text-sm">{t(item.where)}</p>
                <span className="bg-default-100 text-default-700 mt-auto inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs">
                  <span className="size-1.5 rounded-full bg-green-500"></span>
                  {t(item.status)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-7.5 flex flex-wrap gap-4">
            <a
              href={LOGIN_URL}
              className="bg-primary inline-flex items-center gap-2 rounded-lg px-8 py-4 font-medium text-white"
            >
              <Icon icon="tabler:fingerprint" className="size-5" />
              {t('Нэвтрэх', 'Sign in')}
            </a>
            <a
              href={ADMIN_URL}
              className="border-default-300 text-default-950 inline-flex items-center gap-2 rounded-lg border bg-white px-8 py-4 font-medium"
            >
              <Icon icon="tabler:shield-lock" className="size-5" />
              {t('Операторын консол', 'Operator console')}
            </a>
          </div>
        </div>
      </section>

      <section className="py-15 md:py-25 lg:py-27.5">
        <div className="container max-w-315!">
          <div className="mb-12.5">
            <div className="text-default-950 mb-2.5 text-sm">{t('Үүрэгт суурилсан эрх', 'Role-based access')}</div>
            <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">{t('Хэн юуг харах вэ', 'Who sees what')}</h2>
            <p className="lg:max-w-3/5">
              {t(
                'Эрх = байгууллагын grant-уудын нэгдэл ∩ үүргийн эрх ∩ хэрэглэгчийн хамрах хүрээ. Байгууллагуудын нэр, бүрэн эрх нь жишээ бөгөөд хууль, журамтай тулгаж батлагдана.',
                'Access = union of the organisation’s grants ∩ role permissions ∩ user scope. Organisation names and mandates are illustrative and will be confirmed against law and regulation.',
              )}
            </p>
          </div>
          <div className="border-default-200 overflow-x-auto rounded-xl border">
            <table className="w-full min-w-180 text-start text-sm md:text-base">
              <thead className="bg-default-100 text-default-950">
                <tr>
                  <th className="p-4 text-start font-medium">{t('Оролцогч', 'Actor')}</th>
                  <th className="p-4 text-start font-medium">
                    {t('Үүрэг (2023/1162, IEC 62351-8)', 'Role (2023/1162, IEC 62351-8)')}
                  </th>
                  <th className="p-4 text-start font-medium">{t('Систем', 'System')}</th>
                  <th className="p-4 text-start font-medium">{t('Хандалт', 'Access')}</th>
                </tr>
              </thead>
              <tbody className="divide-default-200 divide-y">
                {rolesData.map((row) => (
                  <tr key={row.actor.en}>
                    <td className="text-default-950 p-4 font-medium">{t(row.actor)}</td>
                    <td className="p-4">{t(row.role)}</td>
                    <td className="p-4">{t(row.system)}</td>
                    <td className="p-4">{t(row.access)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pb-15 md:pb-25 lg:pb-27.5">
        <div className="container max-w-315!">
          <div className="bg-default-950 grid gap-10 rounded-xl p-8 md:grid-cols-2 lg:p-15">
            <div>
              <div className="text-default-400 mb-2.5 text-sm">{t('Иргэний эрх', 'Customer rights')}</div>
              <h2 className="mb-5 text-3xl text-white md:text-4xl">
                {t('Иргэн өөрийн өгөгдлийн эзэн', 'Customers own their data')}
              </h2>
              <p className="text-default-400">
                {t(
                  'ЕХ-ны «Download My Data» ба «Share My Data» загвараар иргэн хэрэглээгээ татаж, банк, ESCO зэрэг гуравдагч талд хугацаатай зөвшөөрөл олгож, хүссэн үедээ цуцална. Цуцалмагц хандалт дараагийн хүсэлтээс зогсоно.',
                  'Following the EU "Download My Data" and "Share My Data" model, customers export their usage, grant time-limited access to banks or ESCOs, and revoke it at will — access stops on the next request.',
                )}
              </p>
            </div>
            <ul className="space-y-4 self-center">
              {citizenRightsData.map((text) => (
                <li key={text.en} className="flex gap-3 text-white">
                  <Icon icon="tabler:circle-check" className="text-accent-bright mt-0.5 size-5 shrink-0" />
                  {t(text)}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-default-500 mt-5 text-sm">
            {t(
              'Хэрэглэгчийн портал ба зөвшөөрлийн бүртгэл хэрэгжүүлэх төлөвлөгөөний Үе 3-т орно.',
              'The customer portal and consent registry are part of Phase 3 of the implementation plan.',
            )}{' '}
            <Link to="/platform#roadmap" className="underline">
              {t('Төлөвлөгөөг үзэх', 'View the roadmap')}
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Index
