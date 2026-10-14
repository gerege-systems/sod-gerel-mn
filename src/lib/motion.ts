import Lenis from 'lenis'

/**
 * Хөдөлгөөний нэг унтраалга.
 *
 * `prefers-reduced-motion: reduce` үед сайт дээрх бүх хөдөлгөөн (инерцтэй
 * гүйлгээ, parallax, үгийн илрэлт, tilt, дрейф) унтарч, агуулга шууд харагдана.
 * `?nomotion` query нь ижил үр дүнг өгдөг — дэлгэцийн зураг авах, шалгахад.
 */
export const motionOff = (): boolean => {
  if (typeof window === 'undefined') return true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
  return new URLSearchParams(window.location.search).has('nomotion')
}

/** Хулганатай, hover чаддаг төхөөрөмж — tilt зөвхөн тэнд. */
export const finePointer = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** Толгойн өндөр: anchor руу гүйлгэхэд энэ хэмжээгээр дээр зогсоно. */
export const ANCHOR_OFFSET = -88

let lenis: Lenis | null = null

/** Нэг л Lenis. Хөдөлгөөн унтраалттай бол үүсгэхгүй — хөтчийн ердийн гүйлгээ. */
export const initLenis = (): Lenis | null => {
  if (lenis || motionOff()) return lenis
  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.09,
    wheelMultiplier: 1,
    anchors: { offset: ANCHOR_OFFSET },
  })
  return lenis
}

export const getLenis = (): Lenis | null => lenis

/** Устгаад дахин үүсгэж болохоор цэвэрлэнэ (StrictMode-ийн давхар mount-д ч зөв). */
export const destroyLenis = () => {
  lenis?.destroy()
  lenis = null
}

/** Элемент эсвэл байрлал руу гүйлгэнэ — Lenis байвал түүгээр, үгүй бол хөтчөөр. */
export const scrollToTarget = (target: HTMLElement | number, immediate = false) => {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === 'number' ? 0 : ANCHOR_OFFSET, immediate })
    return
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: immediate ? 'auto' : 'smooth' })
    return
  }
  const top = target.getBoundingClientRect().top + window.scrollY + ANCHOR_OFFSET
  window.scrollTo({ top, behavior: immediate || motionOff() ? 'auto' : 'smooth' })
}
