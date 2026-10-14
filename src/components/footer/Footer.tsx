import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import logoIcon from '@zasvar/powergrid-logo-mark.svg'
import { ADMIN_URL, APP_URL, CONTACT_EMAIL, LOGIN_URL } from '@/config'
import { useLang } from '@/i18n/context'
import LanguageSwitch from '@/components/LanguageSwitch'
import { ABOUT_NAV, PUBLIC_NAV } from '@/components/site/nav'
import NewsletterForm from './NewsletterForm'

/**
 * Хөл: сайтын бүх хаяг, гурван баганад. Бүтээгдэхүүний багана нь толгойтой ижил
 * `PUBLIC_NAV`; үйлчилгээний багана нь энэ сайтаас гадуурх, бодитоор ажилладаг
 * хаягууд (нэвтрэлт, операторын консол, систем).
 */
const Footer = () => {
  const { t } = useLang()

  return (
    <footer className="pgl-footer">
      <div className="pgl-footer__grid">
        <div className="pgl-footer__brand">
          <Link to="/" aria-label="PowerGrid">
            <img className="pgl-nav__mark" src={logoIcon} alt="" width={34} height={34} aria-hidden />
            <b>PowerGrid</b>
          </Link>
          <p>
            {t(
              'Монгол Улсын ухаалаг тоолуурын үндэсний платформ. Заалт бүр тоолуураас нэхэмжлэх хүртэл мөрдөгдөнө.',
              "Mongolia's national smart metering platform. Every reading traced from the meter to the invoice.",
            )}
          </p>
          <p className="pgl-footer__owner">
            {t('Хөгжүүлэгч', 'Developed by')} — Gerege Systems
          </p>
          <div className="pgl-footer__news">
            <small>{t('Шинэ мэдээлэл авах', 'Stay informed')}</small>
            <NewsletterForm />
          </div>
        </div>

        <nav aria-label={t('Бүтээгдэхүүн', 'Product')}>
          <h2>{t('Бүтээгдэхүүн', 'Product')}</h2>
          {PUBLIC_NAV.map((item) => (
            <Link key={item.href} to={item.href}>
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <nav aria-label={t('Тухай', 'About')}>
          <h2>{t('Тухай', 'About')}</h2>
          {ABOUT_NAV.map((item) => (
            <Link key={item.href} to={item.href}>
              {t(item.label)}
            </Link>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>

        <nav aria-label={t('Үйлчилгээ', 'Services')}>
          <h2>{t('Үйлчилгээ', 'Services')}</h2>
          <a href={LOGIN_URL}>{t('Нэвтрэх', 'Sign in')}</a>
          <a href={ADMIN_URL} target="_blank" rel="noopener noreferrer">
            {t('Операторын консол', 'Operator console')}
          </a>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">
            powergrid.mn
          </a>
          <a href="https://github.com/gerege-systems" target="_blank" rel="noopener noreferrer">
            GitHub · Gerege Systems
          </a>
        </nav>
      </div>

      <div className="pgl-footer__bottom">
        <span>© {new Date().getFullYear()} Gerege Systems · PowerGrid</span>
        <span>{t('Ухаалаг тоолуурын үндэсний платформ', 'National Smart Metering Platform')}</span>
        <LanguageSwitch dark />
        <a href="#top" className="pgl-footer__top">
          {t('Дээш', 'Back to top')} <Icon icon="lucide:arrow-up" aria-hidden />
        </a>
      </div>
    </footer>
  )
}

export default Footer
