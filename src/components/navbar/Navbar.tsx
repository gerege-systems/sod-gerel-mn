import logo from '@/assets/images/powergrid-logo.svg'
import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { LOGIN_URL } from '@/config'
import { useLang, type Text } from '@/i18n/context'
import LanguageSwitch from '@/components/LanguageSwitch'
import PillButton from '@/components/PillButton'

type SubNavigationType = {
  label: Text
  route: string
}

type NavigationType = {
  label: Text
  route?: string
  children?: SubNavigationType[]
}

const PAGES_SUBMENUData: SubNavigationType[] = [
  { label: { mn: 'Олон улсын туршлага', en: 'International experience' }, route: '/experience' },
  { label: { mn: 'Мэдлэг', en: 'Knowledge' }, route: '/knowledge' },
  { label: { mn: 'Бидний тухай', en: 'About' }, route: '/about' },
  { label: { mn: 'Холбоо барих', en: 'Contact' }, route: '/contact' },
]

const desktopMenuData: NavigationType[] = [
  { label: { mn: 'Платформ', en: 'Platform' }, route: '/platform' },
  { label: { mn: 'Архитектур', en: 'Architecture' }, route: '/architecture' },
  { label: { mn: 'Эрх ба нууцлал', en: 'Access & privacy' }, route: '/trust' },
  { label: { mn: 'Бусад', en: 'More' }, children: PAGES_SUBMENUData },
]

const Navbar = () => {
  const { pathname } = useLocation()
  const { t } = useLang()
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const mobileMenu = document.querySelector('#mobile-menu')
    if (window.HSOverlay && mobileMenu) {
      try {
        window.HSOverlay.close('#mobile-menu')
      } catch {
        // Цэс аль хэдийн хаагдсан байж болно.
      }
    }
    document.getElementById('mobile-menu-backdrop')?.remove()
    document.body.classList.remove('hs-overlay-body-open')
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }, [pathname])

  // Гүйлгэсний дараа арал шилэн капсул болж харагдана (opacity-оор, background биш).
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 ${stuck ? 'is-stuck' : ''}`}>
      <div className="container pt-3 md:pt-4">
        <div className="nav-island">
          <Link to="/" className="flex items-center ps-1" aria-label="PowerGrid">
            <img src={logo} className="h-9 w-auto md:h-10" alt="PowerGrid" />
          </Link>

          <nav
            id="navbar"
            className="mx-auto hidden items-center gap-1 lg:flex"
            aria-label={t('Үндсэн цэс', 'Main menu')}
          >
            {desktopMenuData.map((item) => {
              if (item.children) {
                const isDropdownActive = item.children.some((child) => child.route === pathname)
                return (
                  <div
                    key={item.label.en}
                    className="hs-dropdown relative inline-flex [--trigger:hover]"
                  >
                    <button
                      type="button"
                      className={`hs-dropdown-toggle nav-link ${isDropdownActive ? 'is-active' : ''}`}
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label={t('Бусад хуудас', 'More pages')}
                    >
                      {t(item.label)}
                      <Icon icon="tabler:chevron-down" className="size-4" />
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 top-2.5! mt-2 hidden w-60 rounded-[20px] border border-hair bg-white p-2 opacity-0 shadow-[0_30px_60px_-40px_rgb(9_12_30/0.45)] transition-[opacity,margin] duration-300 before:absolute before:inset-s-0 before:-top-6 before:h-6 before:w-full after:absolute after:inset-s-0 after:-bottom-6 after:h-6 after:w-full"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="space-y-0.5">
                        {item.children.map((subItem) => {
                          const isSubActive = pathname === subItem.route
                          return (
                            <Link
                              key={subItem.route}
                              to={subItem.route}
                              className={`nav-link w-full text-[14.5px] ${isSubActive ? 'is-active bg-stage' : 'hover:bg-stage'}`}
                            >
                              {t(subItem.label)}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              } else if (item.route) {
                const isActive = pathname === item.route
                return (
                  <Link
                    key={item.route}
                    to={item.route}
                    className={`nav-link ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {t(item.label)}
                  </Link>
                )
              }
              return null
            })}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageSwitch />
            <Link
              to="/contact"
              className={`nav-link hidden xl:inline-flex ${pathname === '/contact' ? 'is-active' : ''}`}
            >
              {t('Холбогдох', 'Contact')}
            </Link>
            <div className="hidden md:block">
              <PillButton href={LOGIN_URL} variant="primary" size="sm" leadingIcon="tabler:fingerprint">
                {t('Нэвтрэх', 'Sign in')}
              </PillButton>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="mobile-menu"
                aria-label={t('Цэс нээх', 'Open menu')}
                data-hs-overlay="#mobile-menu"
                className="nav-burger"
              >
                <Icon icon="tabler:menu-2" className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className="hs-overlay hs-overlay-open:translate-y-0 hs-overlay-open:opacity-100 hs-overlay-open:top-auto fixed inset-x-0 top-0 z-40 h-100 -translate-y-full transform opacity-0 transition-all duration-500 [--body-scroll:true] lg:hidden"
        role="dialog"
        tabIndex={-1}
        aria-label={t('Цэс', 'Menu')}
      >
        <div className="container pt-3">
          <div className="border-hair mb-4 rounded-[24px] border bg-white p-2 shadow-[0_30px_60px_-40px_rgb(9_12_30/0.45)]">
            <div className="flex max-h-[calc(100dvh-8rem)] flex-col gap-0.5 overflow-y-auto">
              {desktopMenuData.map((item) => {
                if (item.children) {
                  return (
                    <div key={'mobile-' + item.label.en} className="hs-accordion">
                      <button
                        type="button"
                        className="hs-accordion-toggle nav-link w-full justify-between py-3"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label={t('Бусад хуудас', 'More pages')}
                      >
                        {t(item.label)}
                        <Icon
                          icon="tabler:chevron-down"
                          className="hs-accordion-active:rotate-180 ms-auto size-4 transition-all"
                        />
                      </button>
                      <div className="hs-accordion-content hidden w-full overflow-hidden ps-4 pb-2 transition-[height]">
                        <div className="space-y-0.5">
                          {item.children.map((subItem) => {
                            return (
                              <Link
                                key={'mobile-sub-' + subItem.route}
                                to={subItem.route}
                                className={`nav-link w-full text-[14.5px] ${pathname === subItem.route ? 'is-active' : ''}`}
                              >
                                {t(subItem.label)}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )
                } else if (item.route) {
                  return (
                    <Link
                      key={'mobile-' + item.route}
                      to={item.route}
                      className={`nav-link w-full py-3 ${pathname === item.route ? 'is-active' : ''}`}
                    >
                      {t(item.label)}
                    </Link>
                  )
                }
                return null
              })}
              <Link
                to="/contact"
                className={`nav-link w-full py-3 ${pathname === '/contact' ? 'is-active' : ''}`}
              >
                {t('Холбогдох', 'Contact')}
              </Link>
              <div className="border-hair mt-1 flex items-center justify-between gap-3 border-t p-2 pt-3">
                <span className="meta">{t('Нэвтрэх', 'Sign in')}</span>
                <PillButton href={LOGIN_URL} variant="primary" size="sm" leadingIcon="tabler:fingerprint">
                  {t('Нэвтрэх', 'Sign in')}
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
