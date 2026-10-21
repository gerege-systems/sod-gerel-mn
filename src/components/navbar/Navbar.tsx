import { useEffect, useState, useSyncExternalStore } from 'react'
import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router-dom'
import logoIcon from '@/assets/images/powergrid-logo-mark.svg'
import { LOGIN_URL } from '@/config'
import { useLang } from '@/i18n/context'
import { getLenis } from '@/lib/motion'
import LanguageSwitch from '@/components/LanguageSwitch'
import { ABOUT_NAV, PUBLIC_NAV } from '@/components/site/nav'

/** Цонх 24px-ээс илүү гүйсэн эсэх — гадаад төлөвийг шууд уншина, effect-гүй. */
const subscribeScroll = (notify: () => void) => {
  window.addEventListener('scroll', notify, { passive: true })
  return () => window.removeEventListener('scroll', notify)
}
const readScrolled = () => window.scrollY > 24
const readScrolledServer = () => false

/**
 * Нэг толгой, бүх хуудсанд.
 *
 * Нүүрэн дээр цайвар hero-гийн дээгүүр тунгалаг, гүйлгэмэгц шилэн гадаргуутай
 * болно. Дотоод хуудсууд өөрийн hero-той тул тэнд эхнээсээ өргөгдсөн байна.
 * Цэс нь `PUBLIC_NAV` — хөл мөн адил жагсаалтыг уншина.
 */
const Navbar = () => {
  const { t } = useLang()
  const { pathname, hash } = useLocation()
  const home = pathname === '/'
  const [drawer, setDrawer] = useState(false)
  const scrolled = useSyncExternalStore(subscribeScroll, readScrolled, readScrolledServer)
  const lifted = !home || scrolled

  // Escape хаана; хуудас солигдоход хаагдана.
  useEffect(() => {
    if (!drawer) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDrawer(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [drawer])

  // Цэс хуудсыг бүрхдэг тул ард нь хуудас гүйхгүй (Lenis ч зогсоно).
  useEffect(() => {
    if (!drawer) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    getLenis()?.stop()
    return () => {
      document.body.style.overflow = previous
      getLenis()?.start()
    }
  }, [drawer])

  const close = () => setDrawer(false)
  const current = `${pathname}${hash}`
  const isActive = (href: string) => (href.includes('#') ? current === href : pathname === href)

  return (
    <header className={`pgl-nav${lifted ? ' is-lifted' : ''}`}>
      <div className="pgl-nav__bar">
        <Link to="/" className="pgl-nav__brand" aria-label="PowerGrid">
          <img className="pgl-nav__mark" src={logoIcon} alt="" width={34} height={34} aria-hidden />
          <b>PowerGrid</b>
        </Link>

        <nav className="pgl-nav__links" aria-label={t('Цэс', 'Menu')}>
          {PUBLIC_NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={isActive(item.href) ? 'is-active' : undefined}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="pgl-nav__actions">
          <a href={LOGIN_URL} className="pgl-pill pgl-pill--solid">
            {t('Нэвтрэх', 'Sign in')} <Icon icon="lucide:arrow-right" aria-hidden />
          </a>
          <span className="pgl-nav__wide">
            <LanguageSwitch />
          </span>
          <button
            type="button"
            className="pgl-nav__burger"
            aria-label={t('Цэс', 'Menu')}
            aria-expanded={drawer}
            onClick={() => setDrawer((open) => !open)}
          >
            <Icon icon={drawer ? 'lucide:x' : 'lucide:menu'} aria-hidden />
          </button>
        </div>
      </div>

      {drawer && (
        <div className="pgl-drawer" data-lenis-prevent>
          <nav aria-label={t('Цэс', 'Menu')}>
            <span className="pgl-menu__title">{t('Хуудсууд', 'Pages')}</span>
            {PUBLIC_NAV.map((item) => (
              <Link key={item.href} to={item.href} onClick={close} className={isActive(item.href) ? 'is-active' : undefined}>
                {t(item.label)}
              </Link>
            ))}
            {ABOUT_NAV.map((item) => (
              <Link key={item.href} to={item.href} onClick={close} className={isActive(item.href) ? 'is-active' : undefined}>
                {t(item.label)}
              </Link>
            ))}
          </nav>
          <div className="pgl-drawer__foot">
            <LanguageSwitch />
            <a href={LOGIN_URL} className="pgl-pill pgl-pill--solid" onClick={close}>
              {t('Нэвтрэх', 'Sign in')} <Icon icon="lucide:arrow-right" aria-hidden />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
