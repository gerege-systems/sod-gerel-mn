import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'
import Reveal from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/ui'

/**
 * Асуултууд, нэг нэгээр нээгдэнэ. `<details>` биш: загвар нэгийг нээж бусдыг
 * хаадаг тул төлөв энд. aria-expanded / aria-controls disclosure хэв маягаар;
 * хаалттай хариулт модноос хасагдана.
 */
const Faq = ({
  title,
  label,
  items,
  id = 'faq',
}: {
  title: string
  label?: string
  items: ReadonlyArray<{ q: Text; a: Text }>
  id?: string
}) => {
  const { t } = useLang()
  const [open, setOpen] = useState(0)

  return (
    <section className="pgl-faq" id={id}>
      <div className="pgl-container">
        <SectionHeading align="center" label={label} title={title} />
      </div>

      <Reveal stagger className="pgl-faq__list">
        {items.map(({ q, a }, index) => {
          const isOpen = open === index
          return (
            <div key={q.en} className={`pgl-faq__item${isOpen ? ' is-open' : ''}`}>
              <button
                type="button"
                id={`${id}-q-${index}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a-${index}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span>{t(q)}</span>
                <Icon icon={isOpen ? 'lucide:minus' : 'lucide:plus'} aria-hidden />
              </button>
              {isOpen && (
                <div id={`${id}-a-${index}`} role="region" aria-labelledby={`${id}-q-${index}`}>
                  <p>{t(a)}</p>
                </div>
              )}
            </div>
          )
        })}
      </Reveal>
    </section>
  )
}

export default Faq
