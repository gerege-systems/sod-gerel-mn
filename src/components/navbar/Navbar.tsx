import logo from '@/assets/images/powergrid-logo.svg'
import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LOGIN_URL } from '@/config'
import { useLang, type Text } from '@/i18n/context'
import LanguageSwitch from '@/components/LanguageSwitch'

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

  return (
    <header className="bg-body-bg sticky top-0 z-50 transition-all duration-300">
      <div className="container">
        <div className="flex w-full items-center justify-between py-5 md:py-6.5">
          <Link to="/" className="flex items-center">
            <img src={logo} className="flex h-11 w-auto md:h-12" alt="PowerGrid" />
          </Link>

          <div id="navbar" className="mx-auto hidden items-center justify-center lg:flex">
            {desktopMenuData.map((item) => {
              if (item.children) {
                const isDropdownActive = false
                return (
                  <div
                    key={item.label.en}
                    className="hs-dropdown relative inline-flex [--trigger:hover]"
                  >
                    <button
                      type="button"
                      className={`hs-dropdown-toggle group hover:text-primary flex items-center p-2.5 font-medium underline underline-offset-3 transition-all duration-300 hover:decoration-current ${isDropdownActive ? 'text-primary decoration-primary' : 'text-default-600 decoration-transparent'}`}
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      {t(item.label)}
                      <Icon icon="tabler:chevron-down" className="ms-3" />
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 border-default-100 from-default-100/90 to-default-100 top-2.5! mt-2 hidden w-56 rounded-xl border bg-linear-to-b p-1 opacity-0 transition-[opacity,margin] duration-300 before:absolute before:inset-s-0 before:-top-6 before:h-6 before:w-full after:absolute after:inset-s-0 after:-bottom-6 after:h-6 after:w-full"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="border-default-200 rounded-lg border bg-white p-2.5">
                        <div className="space-y-1">
                          {item.children.map((subItem) => {
                            const isSubActive = pathname === subItem.route
                            return (
                              <Link
                                key={subItem.route}
                                to={subItem.route}
                                className={`block rounded-sm px-3 py-2 text-sm font-semibold transition-all ${isSubActive ? 'text-primary bg-primary/6' : 'text-default-600 hover:bg-primary/6 hover:text-primary'}`}
                              >
                                {t(subItem.label)}
                              </Link>
                            )
                          })}
                        </div>
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
                    className={`group hover:text-primary flex items-center p-2.5 font-medium underline underline-offset-3 transition-all duration-300 hover:decoration-current ${isActive ? 'text-primary decoration-primary' : 'text-default-600 decoration-transparent'}`}
                  >
                    {t(item.label)}
                    <Icon
                      icon="tabler:arrow-up-right"
                      className={`ms-1.25 flex size-4 transition-all duration-300 ${isActive ? 'text-primary scale-100' : 'text-primary scale-0 group-hover:scale-100'}`}
                    />
                  </Link>
                )
              }
              return null
            })}
          </div>

          <div className="flex items-center justify-end gap-4">
            <LanguageSwitch />
            <Link
              to="/contact"
              className="text-default-900 hover:text-primary hidden font-medium transition duration-300 xl:flex"
            >
              {t('Холбогдох', 'Contact')}
            </Link>
            <div className="hidden items-center md:flex">
              <a
                href={LOGIN_URL}
                className="group bg-primary inline-flex items-center justify-center gap-2 rounded-lg px-4.5 py-2.5 font-medium text-white transition-all"
              >
                <Icon icon="tabler:fingerprint" className="size-5" />
                <span className="relative block overflow-hidden">
                  <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                    {t('Нэвтрэх', 'Sign in')}
                  </span>
                  <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                    {t('Нэвтрэх', 'Sign in')}
                  </span>
                </span>
              </a>
            </div>
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="mobile-menu"
                data-hs-overlay="#mobile-menu"
                className="bg-primary inline-flex size-10 items-center justify-center rounded-md font-medium text-white transition-all"
              >
                <Icon icon="tabler:align-right" className="size-6" />
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
        aria-labelledby="mobile-menu-label"
      >
        <div className="container">
          <div className="bg-body-bg border-default-200 mb-4 rounded-lg border shadow">
            <div className="divide-default-200 flex max-h-100 flex-col gap-1 divide-y overflow-y-auto">
              {desktopMenuData.map((item) => {
                if (item.children) {
                  return (
                    <div key={'mobile-' + item.label.en} className="hs-accordion">
                      <button
                        type="button"
                        className="hs-accordion-toggle group text-default-600 hover:text-primary flex w-full items-center p-2.5 font-medium underline decoration-transparent underline-offset-3 transition-all duration-300 hover:decoration-current"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        {t(item.label)}
                        <Icon
                          icon="tabler:chevron-down"
                          className="hs-accordion-active:rotate-180 ms-4 transition-all"
                        />
                      </button>
                      <div className="hs-accordion-content hidden w-full overflow-hidden ps-5 pb-4 transition-[height]">
                        <div className="space-y-1">
                          {item.children.map((subItem) => {
                            return (
                              <Link
                                key={'mobile-sub-' + subItem.route}
                                to={subItem.route}
                                className="block rounded-sm px-3 py-2 text-sm font-semibold text-default-600 hover:bg-primary/6 hover:text-primary transition-all"
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
                      className="group text-default-600 hover:text-primary flex items-center p-2.5 font-medium underline decoration-transparent underline-offset-3 transition-all duration-300 hover:decoration-current"
                    >
                      {t(item.label)}
                      <Icon
                        icon="tabler:arrow-up-right"
                        className="ms-1.25 flex size-4 transition-all duration-300 text-primary scale-0 group-hover:scale-100"
                      />
                    </Link>
                  )
                }
                return null
              })}
              <a
                href={LOGIN_URL}
                className="text-primary flex items-center gap-2 p-2.5 font-semibold"
              >
                <Icon icon="tabler:fingerprint" className="size-5" />
                {t('Нэвтрэх', 'Sign in')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
