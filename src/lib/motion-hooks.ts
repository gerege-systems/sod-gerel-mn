import { useEffect, useRef } from 'react'
import { finePointer, motionOff } from '@/lib/motion'

/**
 * Гүйлгээтэй уялдсан хөдөлгөөний hook-ууд. Бүгд `motionOff()` үед юу ч хийхгүй.
 * rAF-аар зурдаг тул scroll бүрд нэгээс илүү frame дараалахгүй.
 */

/** Хуудасны дээд хэсгийн давхарга гүйлгээний хурдны хувиар хөдөлнө (hero зураг). */
export function useParallax<T extends HTMLElement>(factor: number, limit = 1200) {
  const node = useRef<T>(null)

  useEffect(() => {
    const element = node.current
    if (!element || motionOff()) return

    let frame = 0
    const paint = () => {
      frame = 0
      const y = Math.min(window.scrollY || 0, limit) * factor
      element.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
      element.style.transform = ''
    }
  }, [factor, limit])

  return node
}

/**
 * Элемент дэлгэцийн төвөөс хэр хол байгаагаар бага зэрэг шилжинэ — төхөөрөмж
 * самбараасаа «өргөгдөж гарах» мэдрэмж. factor 0.06–0.1 хангалттай.
 */
export function useDrift<T extends HTMLElement>(factor = 0.08, max = 48) {
  const node = useRef<T>(null)

  useEffect(() => {
    const element = node.current
    if (!element || motionOff()) return

    let frame = 0
    const paint = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.bottom < -max || rect.top > vh + max) return
      const offset = (rect.top + rect.height / 2 - vh / 2) * factor
      const y = Math.max(-max, Math.min(max, offset))
      element.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      element.style.transform = ''
    }
  }, [factor, max])

  return node
}

/**
 * Картууд заагч руу бага зэрэг налдаг (perspective tilt) ба заагчийн доор
 * зөөлөн гэрлийн толбо гарна. Нэг л сонсогч — `[data-tilt]` бүхий элементэд
 * delegation-оор. Зөвхөн хулганатай, хөдөлгөөн зөвшөөрсөн төхөөрөмж дээр.
 */
export const useTilt = () => {
  useEffect(() => {
    if (motionOff() || !finePointer()) return

    let frame = 0
    let target: HTMLElement | null = null
    let x = 0
    let y = 0

    const reset = (element: HTMLElement | null) => {
      if (!element) return
      element.classList.remove('is-tilting')
      element.style.removeProperty('--tx')
      element.style.removeProperty('--ty')
    }
    const paint = () => {
      frame = 0
      if (!target) return
      const rect = target.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const px = (x - rect.left) / rect.width
      const py = (y - rect.top) / rect.height
      target.style.setProperty('--tx', `${((py - 0.5) * -5).toFixed(2)}deg`)
      target.style.setProperty('--ty', `${((px - 0.5) * 5).toFixed(2)}deg`)
      target.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
      target.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
    }
    const onMove = (event: PointerEvent) => {
      const next = (event.target as Element | null)?.closest?.('[data-tilt]') as HTMLElement | null
      if (next !== target) {
        reset(target)
        target = next
        target?.classList.add('is-tilting')
      }
      if (!target) return
      x = event.clientX
      y = event.clientY
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onLeave = () => {
      reset(target)
      target = null
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
      reset(target)
    }
  }, [])
}
