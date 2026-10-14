import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { destroyLenis, initLenis, scrollToTarget } from '@/lib/motion'

/**
 * Инерцтэй гүйлгээ (Lenis) нэг удаа энд асна — хуудас солигдоход үлдэнэ.
 * Зам солигдоход дээш гүйлгэнэ; `#anchor`-той бол тухайн элемент гарч ирэх
 * хүртэл хүлээгээд (хуудсууд lazy ачаалагддаг) толгойн доор зогсоохоор гүйлгэнэ.
 * `prefers-reduced-motion` үед Lenis үүсэхгүй, хөтчийн ердийн гүйлгээ ажиллана.
 */
const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()

  useEffect(() => {
    initLenis()
    return destroyLenis
  }, [])

  useEffect(() => {
    if (!location.hash) return
    let tries = 0
    const timer = setInterval(() => {
      const target = document.getElementById(location.hash.slice(1))
      if (target || ++tries > 20) {
        clearInterval(timer)
        if (target) scrollToTarget(target)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!location.hash) scrollToTarget(0, true)
  }, [location.pathname, location.hash])

  return <>{children}</>
}

export default AppProvidersWrapper
