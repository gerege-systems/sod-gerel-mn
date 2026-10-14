import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import cityWinter from '@/assets/images/other/ulaanbaatar-winter.jpg'
import { APP_URL, CONTACT_EMAIL, LOGIN_URL } from '@/config'
import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import Reveal from '@/components/site/Reveal'
import { PageCta, Pill, Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'
import { useLang } from '@/i18n/context'
import ContactForm from './components/ContactForm'

const Index = () => {
  const { t } = useLang()

  const steps = [
    {
      n: '01',
      title: t('Туршилтын трансформатор', 'The pilot transformer'),
      body: t('Нэг бүтэн трансформаторын бүлэг (~1,000 тоолуур) ба харьяа хэрэглэгчдийн жагсаалт.', 'One complete transformer group (~1,000 meters) and the list of its customers.'),
    },
    {
      n: '02',
      title: t('Тоолуурын протокол', 'Meter protocols'),
      body: t('Үйлдвэрлэгч, загвар, firmware, auth mode, OBIS mapping — лабораторийн туршилтаар баталгаажна.', 'Vendor, model, firmware, auth mode, OBIS mapping — qualified by lab tests.'),
    },
    {
      n: '03',
      title: t('TEAMI-ийн эрх', 'TEAMI access'),
      body: t('Одоогийн системээс pull адаптераар унших эрх, source ID, timezone, нэгжийн mapping.', 'Read access to the existing system through a pull adapter: source IDs, timezone and unit mapping.'),
    },
  ]

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Холбоо барих', en: 'Contact' }} />

      <section className="pgl-contact pgl-contact--page">
        <div className="pgl-contact__grid">
          <div className="pgl-contact__copy pgl-enter">
            <span className="pgl-tag">{t('Холбоо барих', 'Contact')}</span>
            <h1 className="pgl-h1">{t('PowerGrid-ийг танай байгууллагад нэвтрүүлэх үү?', 'Bringing PowerGrid to your organisation?')}</h1>
            <p>
              {t(
                'Түгээх компани, зохицуулагч, тоолуур нийлүүлэгч эсвэл гуравдагч тал — туршилтын бүлэг, протоколын баримт, өгөгдөлд хандах эрхийн талаар бидэнд бичээрэй. Эхний шатанд эдгээр гурвыг хамтдаа тодорхойлно.',
                'Distribution company, regulator, meter vendor or third party — write to us about a pilot group, protocol documentation or data-access rights. In the first stage we define these three together.',
              )}
            </p>
            <ol className="pgl-contact__steps">
              {steps.map((step) => (
                <li key={step.n}>
                  <span>{step.n}</span>
                  <div>
                    <b>{step.title}</b>
                    <small>{step.body}</small>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="pgl-contact__side pgl-enter pgl-enter--late">
            <ul className="pgl-contact__rows">
              <li>
                <Tile image={icon3d.message} size="sm" />
                <div>
                  <small>{t('И-мэйл', 'Email')}</small>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </li>
              <li>
                <Tile image={icon3d.location} size="sm" />
                <div>
                  <small>{t('Байршил', 'Location')}</small>
                  <b>{t('Улаанбаатар хот, Монгол Улс', 'Ulaanbaatar, Mongolia')}</b>
                </div>
              </li>
              <li>
                <Tile image={icon3d.signIn} size="sm" />
                <div>
                  <small>{t('Систем', 'Platform')}</small>
                  <a href={APP_URL}>powergrid.mn</a>
                </div>
              </li>
            </ul>
            <ContactForm />
          </div>
        </div>
      </section>

      <Reveal effect="rise">
        <section className="pgl-section">
          <div className="pgl-container">
            <div className="pgl-split">
              <figure>
                <img src={cityWinter} alt={t('Өвлийн Улаанбаатар', 'Ulaanbaatar in winter')} width={1200} height={900} loading="lazy" decoding="async" />
              </figure>
              <div className="pgl-split__copy">
                <span className="pgl-tag">{t('Мэргэжлийн багтай ярилцах', 'Talk to the team')}</span>
                <h2>
                  {t('Нэг трансформаторын бүлгээс эхэлж,', "Let's start with one transformer group")}
                  <em>{t('нэг сая тоолуурт хүрье.', 'and reach one million meters.')}</em>
                </h2>
                <p>
                  {t(
                    '6–8 хүний үндсэн баг, талбайн цахилгааны инженер ба billing мэргэжилтэнтэй хамтран ажиллана. Командын баталгаажуулалт ба төлбөрийн жишиг тооцоо эзэнгүй үлдэхгүй.',
                    'A core team of 6–8 people works alongside a field electrical engineer and a billing specialist. Command verification and reference billing calculations never go without an owner.',
                  )}
                </p>
                <div className="pgl-chips">
                  {[
                    t('Домэйн ба бүтээгдэхүүн', 'Domain & product'),
                    t('Backend ба интеграц', 'Backend & integration'),
                    t('QA ба өгөгдлийн чанар', 'QA & data quality'),
                    t('DevOps ба аюулгүй байдал', 'DevOps & security'),
                  ].map((label) => (
                    <span key={label} className="pgl-chip">
                      {label}
                    </span>
                  ))}
                </div>
                <Link to="/about" className="pgl-textlink">
                  {t('Бидний тухай', 'About us')} <Icon icon="lucide:arrow-right" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fade-up">
        <PageCta
          title={t('Систем рүү нэвтрэх үү?', 'Ready to sign in?')}
          body={t(
            'Нэвтрэлт, байгууллага, гишүүнчлэл ба эрхийн суурь powergrid.mn дээр аль хэдийн ажиллаж байна — eID Mongolia, нууц үг эсвэл OIDC / SSO.',
            'Sign-in, organisations, membership and the permissions foundation are already live on powergrid.mn — eID Mongolia, password or OIDC / SSO.',
          )}
          actions={
            <>
              <Pill href={LOGIN_URL} variant="solid" size="lg">
                {t('Систем рүү нэвтрэх', 'Sign in to the platform')}
              </Pill>
              <Pill to="/trust" variant="onnavy" size="lg" icon={false}>
                {t('Нэвтрэх аргууд', 'Sign-in methods')}
              </Pill>
            </>
          }
        />
      </Reveal>
    </SiteShell>
  )
}

export default Index
