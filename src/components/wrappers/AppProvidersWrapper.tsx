import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    // Хуудас lazy ачаалагддаг тул anchor гарч ирэх хүртэл хүлээнэ.
    let tries = 0
    const timer = setInterval(() => {
      const target = document.getElementById(location.hash.slice(1))
      if (target || ++tries > 20) {
        clearInterval(timer)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
    return () => clearInterval(timer)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0)
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

    import('preline').then(() => {
      if (typeof window.HSStaticMethods?.autoInit === 'function') {
        window.HSStaticMethods.autoInit()
      }
    })
  }, [location.pathname])

  return <>{children}</>
}

export default AppProvidersWrapper
