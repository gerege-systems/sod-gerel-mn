import { Icon } from '@iconify/react'
import type { MouseEventHandler, ReactNode } from 'react'
import { Link } from 'react-router-dom'

/**
 * Сайт даяар ашиглах цорын ганц товч: pill хэлбэр, дугуй сум chip, hover үед
 * chip-ийн ардаас өнгө "дэлбээлэн" (bloom) бүх товчийг дүүргэнэ.
 * Зөвхөн transform/opacity анимацилна; prefers-reduced-motion-ийг хүндэтгэнэ.
 *
 * Хувилбарыг гадаргуугаар нь сонгоно:
 *  - dark    — цайвар гадаргуу дээрх үндсэн үйлдэл (navy бие, хөх chip)
 *  - soft    — үндсэн товчны хажуугийн хоёрдогч үйлдэл (саарал бие)
 *  - primary — хуудасны хамгийн чухал CTA (хөх бие, цагаан chip)
 *  - ghost   — зураг, navy/хар самбар дээр (цагаан шилэн бие)
 */
export type PillVariant = 'dark' | 'soft' | 'primary' | 'ghost'
export type PillSize = 'md' | 'sm'
export type PillArrow = 'right' | 'up-right' | 'none'

type Props = {
  children: ReactNode
  /** Дотоод зам — react-router <Link> */
  to?: string
  /** Гадаад / абсолют хаяг — <a> */
  href?: string
  variant?: PillVariant
  size?: PillSize
  arrow?: PillArrow
  /** Шошгоны өмнө харуулах Iconify icon (жишээ нь tabler:fingerprint) */
  leadingIcon?: string
  /** Бүтэн өргөн, шошго зүүн — chip баруун */
  full?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLElement>
  target?: string
  rel?: string
  title?: string
  'aria-label'?: string
  /** Зөвхөн дэлгэц уншигчид зориулсан нэмэлт тайлбар */
  srHint?: string
}

const ArrowRight = () => (
  <svg
    className="gb-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const ArrowUpRight = () => (
  <svg
    className="gb-arrow"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

const PillButton = ({
  children,
  to,
  href,
  variant = 'dark',
  size = 'md',
  arrow = 'right',
  leadingIcon,
  full = false,
  className = '',
  type = 'button',
  disabled,
  onClick,
  target,
  rel,
  title,
  srHint,
  'aria-label': ariaLabel,
}: Props) => {
  const cls = [
    'gb',
    `gb--${variant}`,
    size === 'sm' && 'gb--sm',
    arrow === 'none' && 'gb--bare',
    full && 'gb--full',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span className="gb-bloom" aria-hidden="true" />
      <span className="gb-label">
        {leadingIcon && <Icon icon={leadingIcon} className="gb-lead" aria-hidden="true" />}
        {children}
      </span>
      {arrow !== 'none' && (
        <span className="gb-chip" aria-hidden="true">
          {arrow === 'up-right' ? <ArrowUpRight /> : <ArrowRight />}
        </span>
      )}
      {srHint && <span className="sr-only">{srHint}</span>}
    </>
  )

  const shared = {
    className: cls,
    'data-arrow': arrow,
    onClick,
    title,
    'aria-label': ariaLabel,
  }

  if (to) {
    return (
      <Link to={to} target={target} rel={rel} {...shared}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...shared}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} disabled={disabled} {...shared}>
      {inner}
    </button>
  )
}

export default PillButton
