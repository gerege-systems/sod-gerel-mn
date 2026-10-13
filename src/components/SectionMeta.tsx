import { Fragment } from 'react'

/**
 * Хэсгийн дээд булангийн жижиг meta мөр: зүүн шошго · баруун шошго · акцент цэг · он.
 * Жишээ: <SectionMeta left="Платформ" right="02 — 08" />
 * Текстийг дуудсан газраас t()-ээр хоёр хэлээр дамжуулна.
 */
type Props = {
  left: string
  right?: string
  /** Онын тэмдэглэгээ; false бол харуулахгүй */
  year?: string | false
  /** Хар (ink) тайзан дээр */
  dark?: boolean
  className?: string
}

const SectionMeta = ({ left, right, year = '2026', dark = false, className = '' }: Props) => {
  const items = [right, year || undefined].filter((item): item is string => Boolean(item))
  return (
    <div className={`meta-row ${dark ? 'on-ink' : ''} ${className}`.trim()}>
      <span>{left}</span>
      {items.length > 0 && (
        <span className="meta-r">
          {items.map((item, index) => (
            <Fragment key={index}>
              {index > 0 && <i className="meta-dot" aria-hidden="true" />}
              <span>{item}</span>
            </Fragment>
          ))}
        </span>
      )}
    </div>
  )
}

export default SectionMeta
