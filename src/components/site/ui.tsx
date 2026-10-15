import type { CSSProperties, ReactNode } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { RevealText } from '@/components/site/Reveal'
import { useDrift } from '@/lib/motion-hooks'

/**
 * Сайтын нэг стандартын барилгын чулуунууд. Загвар нь `_site.css`-ийн
 * «стандарт» хэсэгт: гарчгийн масштаб (.pgl-h1/.pgl-h2/.pgl-lede), хэсгийн
 * толгой (.pgl-head), дүрсний нэг хэлбэр (.pgl-icon), товч (.pgl-pill),
 * самбар (.pgl-panel), төхөөрөмжийн тайз (.pgl-stage).
 */
const cx = (...parts: (string | false | null | undefined)[]) => parts.filter(Boolean).join(' ')

/** Хэсгийн толгой: шошго → гарчиг → тайлбар → үйлдэл. Гарчиг нь үгээрээ илэрнэ. */
export const SectionHeading = ({
  label,
  title,
  body,
  action,
  align = 'start',
  inverse = false,
}: {
  label?: ReactNode
  title: ReactNode
  body?: ReactNode
  action?: ReactNode
  align?: 'start' | 'center' | 'split'
  inverse?: boolean
}) => {
  const split = align === 'split'
  const aside = split && (body || action)
  return (
    <div
      className={cx(
        'pgl-head',
        align === 'center' && 'pgl-head--center',
        split && 'pgl-head--split',
        inverse && 'pgl-head--onnavy',
      )}
    >
      <div className="pgl-head__main">
        {label ? <span className={cx('pgl-tag', inverse && 'pgl-tag--onnavy')}>{label}</span> : null}
        <h2 className="pgl-h2">
          <RevealText>{title}</RevealText>
        </h2>
        {!split && body ? <p className="pgl-lede">{body}</p> : null}
        {!split && action ? <div className="pgl-head__actions">{action}</div> : null}
      </div>
      {aside ? (
        <div className="pgl-head__aside">
          {body ? <p className="pgl-lede">{body}</p> : null}
          {action ? <div className="pgl-head__actions">{action}</div> : null}
        </div>
      ) : null}
    </div>
  )
}

const TILE_PX = { xs: 44, sm: 56, md: 64, lg: 88 } as const

/**
 * Дүрсний нэг хэлбэр: цэнхэр шилэн 3D дүрс (`icon3d`), хавтангүй, зөөлөн сүүдэртэй.
 * Хэмжээ: xs 44 (мөрийн зурвас), sm 56 (жагсаалт, гинжин зурвас), анхдагч 64 (карт),
 * lg 88 (том тайз). `icon` (lucide) нь зөвхөн 3D дүрс олдоогүй үеийн нөөц хавтан.
 */
export const Tile = ({
  icon,
  image,
  size = 'md',
  className,
}: {
  icon?: string
  image?: string
  size?: keyof typeof TILE_PX
  className?: string
}) => (
  <span className={cx('pgl-icon', image && 'pgl-icon--3d', size !== 'md' && `pgl-icon--${size}`, className)} aria-hidden>
    {image ? (
      <img src={image} alt="" width={TILE_PX[size]} height={TILE_PX[size]} loading="lazy" decoding="async" />
    ) : (
      <Icon icon={icon ?? 'lucide:circle'} />
    )}
  </span>
)

/** Төхөөрөмжийн тайз: зөөлөн дугуй самбар, дотроос нь төхөөрөмж өргөгдөж гарна. */
export const DeviceStage = ({
  src,
  alt,
  width,
  height,
  tone = 'sky',
  drift = 0.07,
  className,
  children,
}: {
  src: string
  alt: string
  width: number
  height: number
  tone?: 'sky' | 'navy' | 'white'
  drift?: number
  className?: string
  children?: ReactNode
}) => {
  const image = useDrift<HTMLImageElement>(drift)
  return (
    <div className={cx('pgl-stage', `pgl-stage--${tone}`, className)}>
      <img ref={image} src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      {children}
    </div>
  )
}

/** Дотоод хуудасны hero: зүүн талд бичвэр, баруун талд дүрслэл. */
export const PageHero = ({
  eyebrow,
  title,
  accent,
  body,
  actions,
  children,
  center = false,
}: {
  eyebrow: ReactNode
  title: ReactNode
  accent?: ReactNode
  body: ReactNode
  actions?: ReactNode
  children?: ReactNode
  center?: boolean
}) => (
  <section className={cx('pgl-page-hero', center && 'pgl-page-hero--center')}>
    <div className="pgl-container pgl-page-hero__inner">
      <div className="pgl-page-hero__copy pgl-enter">
        <div className="pgl-kicker">
          <span /> {eyebrow}
        </div>
        <h1 className="pgl-h1">
          {title} {accent ? <em>{accent}</em> : null}
        </h1>
        <p className="pgl-lede">{body}</p>
        {actions ? <div className="pgl-page-hero__actions">{actions}</div> : null}
      </div>
      {children ? <div className="pgl-page-hero__visual pgl-enter pgl-enter--late">{children}</div> : null}
    </div>
  </section>
)

/** Хуудасны төгсгөлийн navy уриалга. */
/** Хуудасны төгсгөлийн уриалга. `image` өгвөл navy бүрхүүлтэй зургийн дэвсгэртэй болно. */
export const PageCta = ({
  title,
  body,
  actions,
  image,
}: {
  title: ReactNode
  body: ReactNode
  actions: ReactNode
  image?: string
}) => (
  <section
    className={cx('pgl-page-cta', image && 'pgl-photo-bg')}
    style={image ? ({ '--pgl-photo': `url(${image})` } as CSSProperties) : undefined}
  >
    <div className="pgl-container">
      <div>
        <h2 className="pgl-h2">
          <RevealText>{title}</RevealText>
        </h2>
        <p className="pgl-lede">{body}</p>
      </div>
      <div className="pgl-page-cta__actions">{actions}</div>
    </div>
  </section>
)

/** Шалгах жагсаалт. */
export const CheckList = ({ items, onNavy = false }: { items: ReactNode[]; onNavy?: boolean }) => (
  <ul className={cx('pgl-check-list', onNavy && 'pgl-check-list--onnavy')}>
    {items.map((item, index) => (
      <li key={index}>
        <Icon icon="lucide:check" aria-hidden />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

/** Дотоод (react-router) эсвэл гадаад холбоос — ижил pill хэлбэртэй. */
export const Pill = ({
  to,
  href,
  variant = 'solid',
  size,
  children,
  icon = true,
  onClick,
}: {
  to?: string
  href?: string
  variant?: 'solid' | 'ghost' | 'outline' | 'light' | 'onnavy' | 'quiet'
  size?: 'lg' | 'xl'
  children: ReactNode
  icon?: boolean | string
  onClick?: () => void
}) => {
  const className = cx('pgl-pill', `pgl-pill--${variant}`, size && `pgl-pill--${size}`)
  const inner = (
    <>
      {children}
      {icon ? <Icon icon={icon === true ? 'lucide:arrow-right' : icon} aria-hidden /> : null}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {inner}
    </a>
  )
}
