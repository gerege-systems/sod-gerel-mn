import type { CSSProperties } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import secureHall from '@/assets/images/trust/secure-hall.webp'
import accessRoom from '@/assets/images/trust/access-room.webp'
import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import Reveal from '@/components/site/Reveal'
import { CheckList, PageHero, Pill, SectionHeading, Tile } from '@/components/site/ui'
import { ADMIN_URL, LOGIN_URL } from '@/config'
import { useLang, type Text } from '@/i18n/context'
import { icon3d } from '@/components/site/icons3d'

type GuaranteeType = { icon: ImageSrc; title: Text; body: Text; figure?: string; figureSuffix?: Text }
type RoleType = { actor: Text; role: Text; system: Text; access: Text }
type AccessType = { icon: ImageSrc; who: Text; how: Text; where: Text; status: Text }

const guaranteesData: GuaranteeType[] = [
  {
    icon: icon3d.guard,
    title: { mn: 'Өгөгдлийн сан өөрөө хамгаална', en: 'The database enforces it' },
    body: { mn: 'PostgreSQL Row Level Security ба scope cell — зөвшөөрөгдөөгүй мөр API, экспорт, тайлан, background job-оор ч гарахгүй.', en: 'PostgreSQL Row Level Security and scope cells: an unauthorised row never leaves through API, export, report or background job.' },
    figure: 'RLS',
  },
  {
    icon: icon3d.twoKeys,
    title: { mn: 'Таслах командад хоёр түлхүүр', en: 'Two-person rule for disconnects' },
    body: { mn: 'Хүсэлт гаргагч өөрийн командыг хэзээ ч батлах боломжгүй. Нэг төхөөрөмжид нэг идэвхтэй команд.', en: 'The requester can never approve their own command. One active command per device.' },
    figure: '2',
    figureSuffix: { mn: 'түлхүүр', en: 'persons' },
  },
  {
    icon: icon3d.aggregation,
    title: { mn: 'k ≥ 10 босготой нэгтгэл', en: 'k ≥ 10 aggregation' },
    body: { mn: 'Цөөн өрхтэй бүлгээс нэг айлын хэрэглээ тодрохгүй. Нутгийн захиргаа түүхий хүснэгтэд хүрэх замгүй.', en: 'No single household can be singled out from a small group. Local government has no path to raw tables.' },
    figure: 'k ≥ 10',
  },
  {
    icon: icon3d.audit,
    title: { mn: 'Хандалт бүр аудиттай', en: 'Every access is audited' },
    body: { mn: 'Дэлгэрэнгүй хандалт бүрд хэн, юуг, хэзээ, ямар үндэслэлээр харсныг бичнэ. Аудит энгийн CRUD-аар устгагдахгүй.', en: 'Every detailed access records who saw what, when and on which grant. The audit trail cannot be deleted through ordinary CRUD.' },
  },
]

const rolesData: RoleType[] = [
  { actor: { mn: 'Түгээх компани', en: 'Distribution company' }, role: { mn: 'Metered Data Responsible', en: 'Metered Data Responsible' }, system: { mn: 'Core', en: 'Core' }, access: { mn: 'Өөрийн grid area-д бүрэн', en: 'Full, within its own grid area' } },
  { actor: { mn: 'Салбарын инженер', en: 'Field engineer' }, role: { mn: 'Engineer / Operator', en: 'Engineer / Operator' }, system: { mn: 'Core', en: 'Core' }, access: { mn: 'Өөрийн топологийн бүс, зөвшөөрөгдсөн команд', en: 'Own topology zone, permitted commands' } },
  { actor: { mn: 'ЭХЗХ', en: 'ERC (Energy Regulatory Commission)' }, role: { mn: 'Зохицуулагч, Viewer', en: 'Regulator, Viewer' }, system: { mn: 'Analytics (+ зорилготой grant)', en: 'Analytics (+ purpose-bound grant)' }, access: { mn: 'Бүх бүс, зөвхөн харах', en: 'All zones, read-only' } },
  { actor: { mn: 'Аймаг, дүүрэг', en: 'Provinces & districts' }, role: { mn: 'Төрийн байгууллага', en: 'Public authority' }, system: { mn: 'Зөвхөн Analytics', en: 'Analytics only' }, access: { mn: 'Харьяа бүлгийн нэгтгэл, k-босготой', en: 'Aggregates for their own groups, k-thresholded' } },
  { actor: { mn: 'Иргэн, ААН', en: 'Citizens & businesses' }, role: { mn: 'Final customer', en: 'Final customer' }, system: { mn: 'Хэрэглэгчийн портал', en: 'Customer portal' }, access: { mn: 'Өөрийн цэгийн өгөгдөл, зөвшөөрөл олгох', en: 'Own metering point data, granting consent' } },
  { actor: { mn: 'Банк, ESCO', en: 'Banks, ESCOs' }, role: { mn: 'Eligible party', en: 'Eligible party' }, system: { mn: 'API', en: 'API' }, access: { mn: 'Хэрэглэгчийн зөвшөөрлөөр, хугацаатай', en: 'With customer consent, time-limited' } },
  { actor: { mn: 'Аудитор', en: 'Auditor' }, role: { mn: 'Security auditor', en: 'Security auditor' }, system: { mn: 'Core + Analytics', en: 'Core + Analytics' }, access: { mn: 'Хугацаатай, хамрах хүрээтэй, зөвхөн харах', en: 'Time-limited, scoped, read-only' } },
]

const accessData: AccessType[] = [
  { icon: icon3d.signIn, who: { mn: 'Иргэн', en: 'Citizen' }, how: { mn: 'eID Mongolia — регистрийн дугаар эсвэл QR код', en: 'eID Mongolia: registration number or QR code' }, where: { mn: 'Хэрэглэгчийн портал', en: 'Customer portal' }, status: { mn: 'Нэвтрэлт ажиллаж байна · портал Үе 3-т', en: 'Sign-in live · portal in Phase 3' } },
  { icon: icon3d.organisation, who: { mn: 'Байгууллага', en: 'Organisation' }, how: { mn: 'Нэвтрэх нэр, нууц үг эсвэл OIDC / SSO', en: 'Username and password, or OIDC / SSO' }, where: { mn: 'Ажлын орчин (workspace)', en: 'Workspace' }, status: { mn: 'Нэвтрэлт ба эрх ажиллаж байна', en: 'Sign-in and permissions live' } },
  { icon: icon3d.console, who: { mn: 'Оператор', en: 'Operator' }, how: { mn: 'Зөвшөөрөгдсөн IP хаяг + TOTP заавал', en: 'Allow-listed IP address + mandatory TOTP' }, where: { mn: 'Операторын консол', en: 'Operator console' }, status: { mn: 'Ажиллаж байна', en: 'Live' } },
]

const citizenRightsData: Text[] = [
  { mn: 'Өөрийн хэрэглээ, шинэчлэгдсэн цаг, заалтын чанарыг харах', en: 'See your own usage, when it was last updated, and reading quality' },
  { mn: 'Нэхэмжлэх аль заалт, аль тарифаар тооцогдсоныг харах', en: 'See which readings and which tariff each invoice was calculated from' },
  { mn: 'Гуравдагч талд цэг, өгөгдлийн төрөл, хугацаа, зорилготой зөвшөөрөл олгох', en: 'Grant third parties consent scoped by metering point, data type, period and purpose' },
  { mn: 'Хэн, хэзээ хандсаныг харах, зөвшөөрлөө цуцлах', en: 'See who accessed your data and when, and revoke consent' },
]

const pad = (n: number) => String(n).padStart(2, '0')

const Index = () => {
  const { t } = useLang()

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Эрх ба нууцлал', en: 'Access & privacy' }} />

      <PageHero
        eyebrow={t('Эрх ба нууцлал · ЕХ 2023/1162 · IEC 62351-8', 'Access & privacy · EU 2023/1162 · IEC 62351-8')}
        title={t('Хэн, юуг, ямар үндэслэлээр харахыг', 'Who sees what, and why,')}
        accent={t('өгөгдлийн сан өөрөө хамгаална.', 'is enforced by the database itself.')}
        body={t(
          'Эрхийг засаг захиргаагаар бус, ЕХ-ны 2023/1162 ба IEC 62351-8-ийн үүрэг, хэмжилтийн цэгтэй холбоо хамаарлаар олгоно. Шүүлтүүр эрхийг хэзээ ч өргөтгөхгүй.',
          'Access follows EU 2023/1162 and IEC 62351-8 roles and the relationship to a metering point, not administrative borders. A filter never widens a permission.',
        )}
        actions={
          <>
            {guaranteesData.map((item, index) => (
              <a key={item.title.en} href={`#guarantee-${index + 1}`} className="pgl-chip">
                <span className="pgl-muted">{pad(index + 1)}</span> {t(item.title)}
              </a>
            ))}
          </>
        }
      >
        <div
          className="pgl-card pgl-card--navy pgl-card--plain pgl-card--photo"
          style={{ minHeight: '28rem', alignContent: 'space-between', '--pgl-photo': `url(${secureHall})` } as CSSProperties}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="pgl-tag pgl-tag--onnavy">PostgreSQL · Row Level Security</span>
            <span className="pgl-tag pgl-tag--onnavy">scope cell</span>
          </div>
          <p style={{ color: 'var(--pg-on-navy)', fontWeight: 600, fontSize: '1.05rem' }}>
            {t(
              'Эрх = байгууллагын grant-уудын нэгдэл ∩ үүргийн эрх ∩ хэрэглэгчийн хамрах хүрээ.',
              'Access = union of the organisation’s grants ∩ role permissions ∩ user scope.',
            )}
          </p>
        </div>
      </PageHero>

      <Reveal effect="rise">
        <section className="pgl-section pgl-section--sky">
          <div className="pgl-container">
            <SectionHeading
              label={t('Эрх ба нууцлал', 'ACCESS & PRIVACY')}
              title={t('Дөрвөн баталгаа — өгөгдлийн сан өөрөө хамгаална', 'Four guarantees — enforced by the database itself')}
            />
            <div className="pgl-feature-grid pgl-feature-grid--2">
              {guaranteesData.map((item, index) => (
                <article key={item.title.en} id={`guarantee-${index + 1}`} className={`pgl-feature-card${index === 0 ? ' pgl-feature-card--navy' : ''}`} data-tilt>
                  <Tile image={item.icon} />
                  <span className="pgl-feature-card__num">{pad(index + 1)} — 04</span>
                  {item.figure && (
                    <span className="pgl-figure">
                      {item.figure}
                      {item.figureSuffix && <em>{t(item.figureSuffix)}</em>}
                    </span>
                  )}
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.body)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Аудитын амлалт — зургийн дэвсгэртэй navy зурвас, картуудын хэмнэлийг тасална. */}
      <Reveal effect="fade-up">
        <section className="pgl-band pgl-band--quote pgl-photo-bg" style={{ '--pgl-photo': `url(${accessRoom})` } as CSSProperties}>
          <div className="pgl-band__inner">
            <span className="pgl-tag pgl-tag--onnavy">{t('Аудит', 'Audit')}</span>
            <blockquote>
              <p>
                {t(
                  '«Хэн, юуг, хэзээ, ямар үндэслэлээр харсан нь бүртгэгдэнэ. Аудитын мөр энгийн CRUD-аар устгагдахгүй — шүүлтүүр эрхийг хэзээ ч өргөтгөхгүй.»',
                  '“Who saw what, when and on which grant is recorded. The audit trail cannot be deleted through ordinary CRUD — and a filter never widens a permission.”',
                )}
              </p>
            </blockquote>
            <cite>{t('— PowerGrid эрхийн загвар', '— PowerGrid access model')}</cite>
          </div>
        </section>
      </Reveal>

      <Reveal effect="rise">
        <section className="pgl-section">
          <div className="pgl-container">
            <SectionHeading
              align="split"
              label={t('Нэвтрэх арга', 'SIGN-IN METHODS')}
              title={t('Хэн хаанаас, хэрхэн нэвтрэх вэ', 'Who signs in, where and how')}
              body={t(
                'Нэвтрэлт, байгууллага, гишүүнчлэл, эрхийн суурь powergrid.mn дээр аль хэдийн ажиллаж байна. Хэмжилтийн модулиуд үе шаттайгаар нэмэгдэнэ.',
                'The sign-in, organisation, membership and permissions foundation is already live on powergrid.mn. Metering modules arrive in stages.',
              )}
            />
            <div className="pgl-feature-grid">
              {accessData.map((item, index) => (
                <article key={item.who.en} className="pgl-feature-card" data-tilt>
                  <Tile image={item.icon} />
                  <span className="pgl-feature-card__num">{pad(index + 1)} — 03</span>
                  <h3>{t(item.who)}</h3>
                  <p style={{ color: 'var(--pg-ink)' }}>{t(item.how)}</p>
                  <p>{t(item.where)}</p>
                  <span className="pgl-chip" style={{ justifySelf: 'start', marginTop: 6 }}>
                    <i aria-hidden /> {t(item.status)}
                  </span>
                </article>
              ))}
            </div>
            <div className="pgl-chips" style={{ marginTop: 20 }}>
              <Pill href={LOGIN_URL} variant="solid">
                {t('Нэвтрэх', 'Sign in')}
              </Pill>
              <Pill href={ADMIN_URL} variant="ghost" icon="lucide:lock">
                {t('Операторын консол', 'Operator console')}
              </Pill>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="rise">
        <section className="pgl-section pgl-section--sky">
          <div className="pgl-container">
            <SectionHeading
              align="split"
              label={t('Үүрэгт суурилсан эрх', 'ROLE-BASED ACCESS')}
              title={t('Хэн юуг харах вэ', 'Who sees what')}
              body={t(
                'Эрх = байгууллагын grant-уудын нэгдэл ∩ үүргийн эрх ∩ хэрэглэгчийн хамрах хүрээ. Байгууллагуудын нэр, бүрэн эрх нь жишээ бөгөөд хууль, журамтай тулгаж батлагдана.',
                'Access = union of the organisation’s grants ∩ role permissions ∩ user scope. Organisation names and mandates are illustrative and will be confirmed against law and regulation.',
              )}
            />
            <div className="pgl-table-wrap">
              <table className="pgl-table">
                <thead>
                  <tr>
                    <th>{t('Оролцогч', 'Actor')}</th>
                    <th>{t('Үүрэг (2023/1162, IEC 62351-8)', 'Role (2023/1162, IEC 62351-8)')}</th>
                    <th>{t('Систем', 'System')}</th>
                    <th>{t('Хандалт', 'Access')}</th>
                  </tr>
                </thead>
                <tbody>
                  {rolesData.map((row) => (
                    <tr key={row.actor.en}>
                      <td>{t(row.actor)}</td>
                      <td>
                        <span className="pgl-chip">{t(row.role)}</span>
                      </td>
                      <td>{t(row.system)}</td>
                      <td>{t(row.access)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="pgl-table-cards">
              {rolesData.map((row) => (
                <li key={row.actor.en}>
                  <h3>{t(row.actor)}</h3>
                  <span className="pgl-chip" style={{ justifySelf: 'start' }}>
                    {t(row.role)}
                  </span>
                  <dl>
                    <div>
                      <dt>{t('Систем', 'System')}</dt>
                      <dd>{t(row.system)}</dd>
                    </div>
                    <div>
                      <dt>{t('Хандалт', 'Access')}</dt>
                      <dd>{t(row.access)}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fade-up">
        <section className="pgl-section pgl-navy">
          <div className="pgl-container">
            <div className="pgl-split">
              <div className="pgl-split__copy">
                <span className="pgl-tag pgl-tag--onnavy">{t('Иргэний эрх', 'CUSTOMER RIGHTS')}</span>
                <h2>
                  {t('Иргэн', 'Customers')}
                  <em style={{ color: 'var(--pg-accent-on-dark)' }}>{t('өөрийн өгөгдлийн эзэн.', 'own their data.')}</em>
                </h2>
                <p>
                  {t(
                    'ЕХ-ны «Download My Data» ба «Share My Data» загвараар иргэн хэрэглээгээ татаж, банк, ESCO зэрэг гуравдагч талд хугацаатай зөвшөөрөл олгож, хүссэн үедээ цуцална. Цуцалмагц хандалт дараагийн хүсэлтээс зогсоно.',
                    'Following the EU "Download My Data" and "Share My Data" model, customers export their usage, grant time-limited access to banks or ESCOs, and revoke it at will — access stops on the next request.',
                  )}
                </p>
                <p className="pgl-small">
                  {t(
                    'Хэрэглэгчийн портал ба зөвшөөрлийн бүртгэл хэрэгжүүлэх төлөвлөгөөний Үе 3-т орно.',
                    'The customer portal and consent registry are part of Phase 3 of the implementation plan.',
                  )}
                </p>
                <Link to="/platform#roadmap" className="pgl-pill pgl-pill--onnavy">
                  {t('Төлөвлөгөөг үзэх', 'View the roadmap')} <Icon icon="lucide:arrow-right" aria-hidden />
                </Link>
              </div>
              <div>
                <CheckList onNavy items={citizenRightsData.map((text) => t(text))} />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </SiteShell>
  )
}

export default Index
