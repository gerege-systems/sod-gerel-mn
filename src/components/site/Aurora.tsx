import { useEffect, useRef } from 'react'
import { motionOff } from '@/lib/motion'

/**
 * Хуудасны ард удаан хөвөх гурван том, бүдэг хөх гэрлийн толбо.
 * `position: fixed` давхарга; гүйлгээний утгыг `--pgl-sy`-д өгөхөд толбо бүр
 * өөр хурдаар шилжинэ (CSS-д), дээр нь удаан keyframe дрейф. Хөдөлгөөн
 * унтраалттай үед зогсонги байрлалдаа үлдэнэ.
 */
const Aurora = () => {
  const node = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = node.current
    if (!element || motionOff()) return

    let frame = 0
    const paint = () => {
      frame = 0
      element.style.setProperty('--pgl-sy', String(Math.round(window.scrollY || 0)))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={node} className="pgl-aurora" aria-hidden>
      <i />
      <i />
      <i />
    </div>
  )
}

export default Aurora
