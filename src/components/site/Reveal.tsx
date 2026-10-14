import {
  Fragment,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { motionOff } from '@/lib/motion'

/**
 * Гүйлгэх үеийн илрэлтүүд. Бүгд `_site.css`-ийн «хөдөлгөөн» хэсэгт зурагдана;
 * энд зөвхөн анги солих, хэмжих логик бий. Хөдөлгөөн унтраалттай (`motionOff`)
 * үед эхнээсээ харагдах төлөвтэй тул юу ч хөдлөхгүй, юу ч нуугдахгүй.
 */
type Effect = 'fade-up' | 'rise' | 'fade'

const cx = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join(' ')

/**
 * Хэсэг уншигчийн хүрэх үед гарч ирнэ. `stagger` бол шууд хүүхдүүд нь ээлжлэн
 * (70 мс зайтай) гарч ирнэ — картын тор, жагсаалтад.
 */
const Reveal = ({
  children,
  effect = 'fade-up',
  delay = 0,
  stagger = false,
  className,
}: {
  children: ReactNode
  effect?: Effect
  delay?: number
  stagger?: boolean
  className?: string
}) => {
  const node = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(() => motionOff())

  useEffect(() => {
    const element = node.current
    if (!element || shown) return

    let done = false
    const check = () => {
      if (done) return
      if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {
        done = true
        setShown(true)
        stop()
      }
    }
    const observer = new IntersectionObserver(check, { rootMargin: '0px 0px -8% 0px' })
    observer.observe(element)
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    function stop() {
      observer.disconnect()
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
    return stop
  }, [shown])

  return (
    <div
      ref={node}
      className={cx('pgl-reveal', `pgl-reveal--${effect}`, stagger && 'pgl-stagger', shown && 'is-in', className)}
      style={delay ? ({ '--pgl-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}

export default Reveal

/* ───────────────────────────────────────────────── гарчгийн үгийн илрэлт */

const DIM: CSSProperties = { '--wp': 0 } as CSSProperties

/** Мөрийг үгээр хувааж, үг бүрийг <span class="pgl-w">-д хийнэ; элементүүдийг хэвээр үлдээнэ. */
const splitWords = (node: ReactNode, dim: boolean): ReactNode => {
  if (typeof node === 'string') {
    return node.split(/(\s+)/).map((part, index) =>
      part.trim() === '' ? (
        part
      ) : (
        <span className="pgl-w" style={dim ? DIM : undefined} key={index}>
          {part}
        </span>
      ),
    )
  }
  if (Array.isArray(node)) {
    return node.map((child, index) => <Fragment key={index}>{splitWords(child, dim)}</Fragment>)
  }
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children !== undefined) {
    return cloneElement(node, undefined, splitWords(node.props.children, dim))
  }
  return node
}

/**
 * Гарчгийн үгс дэлгэцэнд орж ирэхдээ бүдэгээс бүрэн бэх өнгө рүү ээлжлэн
 * гэрэлтэнэ (гүйлгээтэй уялдсан, буцаж ч бүдгэрнэ). Гарчгийн дотор тавина:
 * <h2><RevealText>{a}<em>{b}</em></RevealText></h2>
 */
export const RevealText = ({ children, className }: { children: ReactNode; className?: string }) => {
  const node = useRef<HTMLSpanElement>(null)
  const [active] = useState(() => !motionOff())

  useEffect(() => {
    const element = node.current
    if (!element || !active) return

    const words = Array.from(element.querySelectorAll<HTMLElement>('.pgl-w'))
    const count = words.length
    if (!count) return

    let frame = 0
    let last = -1
    const paint = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const vh = window.innerHeight
      // Элементийн дээд ирмэг дэлгэцийн 92%-аас 48% хүртэл явахад 0 → 1.
      const progress = Math.min(1, Math.max(0, (vh * 0.92 - rect.top) / (vh * 0.44)))
      if (progress === last) return
      last = progress
      const sweep = progress * (count + 1.5)
      words.forEach((word, index) => {
        word.style.setProperty('--wp', Math.min(1, Math.max(0, sweep - index)).toFixed(3))
      })
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [active, children])

  return (
    <span ref={node} className={cx('pgl-words', className)}>
      {splitWords(children, active)}
    </span>
  )
}
