import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '@/config'
import { useLang } from '@/i18n/context'
import { Pill, SectionHeading, Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    let startTimestamp: number | null = null
    const startValue = displayValue
    const endValue = value

    if (startValue === endValue) return

    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / 300, 1)
      setDisplayValue(Math.floor(progress * (endValue - startValue) + startValue))
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step)
      }
    }

    animationFrameId = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <>{displayValue.toLocaleString('en-US')}</>
}

/**
 * Нэвтрүүлэлт ба багтаамж. Тоонууд нь төлөвлөлтийн тооцоо (15 минутын
 * интервал × тоолуурын тоо) — хэмжилт биш, тэгж тэмдэглэгдсэн.
 */
const Rollout = () => {
  const { t } = useLang()
  const [isNational, setIsNational] = useState(true)

  return (
    <section className="pgl-section">
      <div className="pgl-container">
        <SectionHeading
          align="split"
          label={t('Нэвтрүүлэлт ба багтаамж', 'ROLLOUT AND CAPACITY')}
          title={t('Нэг трансформатороос нэг сая тоолуур хүртэл', 'From one transformer to one million meters')}
          body={t(
            '~1,000 → 10,000 → 100,000 → 500,000 → 1,000,000. Шат бүрд хүлээн авах босгыг хангасны дараа л дараагийнх руу шилжинэ. Оргил ачаалал ба 24 цагийн нөхөн таталтаар төлөвлөсөн — хоногийн дунджаар биш.',
            '~1,000 → 10,000 → 100,000 → 500,000 → 1,000,000. Each stage moves on only after its acceptance threshold is met. Planned for peak load and 24-hour catch-up, not for the daily average.',
          )}
        />

        <div className="pgl-capacity">
          <div className="pgl-capacity__intro">
            <h3>{t('Туршилтын бүлгээс эхлэх', 'Start with a pilot group')}</h3>
            <p>
              {t(
                'Нэг туршилтын трансформатор ба харьяа хэрэглэгчид, тоолуурын protocol баримт, TEAMI-ийн өгөгдлийн эрх — эхний шатанд эдгээрийг хамтдаа тодорхойлно.',
                'One pilot transformer and its customers, the meter protocol documentation, and data access to TEAMI: we define these together in the first stage.',
              )}
            </p>
            <div>
              <Pill to="/contact" variant="solid">
                {t('Холбогдох', 'Contact us')}
              </Pill>
            </div>
            <ul className="pgl-contact__rows" style={{ marginTop: 'auto' }}>
              <li style={{ boxShadow: 'none' }}>
                <Tile image={icon3d.message} size="sm" />
                <div>
                  <small>{t('Шууд имэйл бичих үү?', 'Prefer to email directly?')}</small>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </li>
            </ul>
            <Link to="/architecture" className="pgl-textlink">
              {t('Архитектурыг үзэх', 'View the architecture')} <Icon icon="lucide:arrow-right" aria-hidden />
            </Link>
          </div>

          <div className="pgl-capacity__box">
            <div className="pgl-chips" role="group" aria-label={t('Хэмжээ сонгох', 'Choose a scale')}>
              <button type="button" onClick={() => setIsNational(false)} aria-pressed={!isNational} className="pgl-chip">
                {t('10,000 тоолуур (1%)', '10,000 meters (1%)')}
              </button>
              <button type="button" onClick={() => setIsNational(true)} aria-pressed={isNational} className="pgl-chip">
                {t('1,000,000 тоолуур', '1,000,000 meters')}
              </button>
              <span className="pgl-sample pgl-sample--amber">{t('төлөвлөлтийн тооцоо', 'planning estimate')}</span>
            </div>

            <div className="pgl-capacity__cards">
              <div className="pgl-capacity__card">
                <span className="pgl-tag">{t('Өгөгдлийн суурь · Үе 0–2', 'Data foundation · Phases 0–2')}</span>
                <span className="pgl-num">
                  <AnimatedNumber value={isNational ? 96000000 : 960000} />
                </span>
                <small>{t('бичлэг / өдөр', 'records / day')}</small>
                <ul>
                  <li>{t('Тоолуур, хэмжилтийн цэг, топологийн бүртгэл', 'Meter, metering point and topology registry')}</li>
                  <li>{t('Бодит заалт цуглуулалт, raw архив, idempotency', 'Real reading collection, raw archive, idempotency')}</li>
                  <li>{t('VEE дүрмийн каталог, quarantine, хувилбар', 'VEE rule catalogue, quarantine, versioning')}</li>
                  <li>{t('Трансформаторын баланс ба D+1 бүрэн байдал', 'Transformer balance and D+1 completeness')}</li>
                  <li>{t('Prometheus/Grafana, runbook, PITR сэргээлт', 'Prometheus/Grafana, runbooks, PITR recovery')}</li>
                </ul>
                <p className="pgl-threshold">{t('Босго: D+1 бүрэн байдал ≥ 99%, давхардал 0', 'Threshold: D+1 completeness ≥ 99%, zero duplicates')}</p>
                <Pill to="/contact" variant="solid">
                  {t('Туршилт эхлүүлэх', 'Start a pilot')}
                </Pill>
              </div>

              <div className="pgl-capacity__card">
                <span className="pgl-tag">{t('Төлбөр, команд, аналитик · Үе 3–5', 'Billing, commands, analytics · Phases 3–5')}</span>
                <span className="pgl-num">
                  <AnimatedNumber value={isNational ? 16667 : 167} />
                </span>
                <small>{t('бичлэг / сек (15 мин оргил)', 'records / sec (15-min peak)')}</small>
                <ul>
                  <li>{t('Тарифын хувилбар, append-only ledger', 'Tariff versions, append-only ledger')}</li>
                  <li>{t('Shadow billing ≥ 2 мөчлөг, хуучин системтэй тулгалт', 'Shadow billing for ≥ 2 cycles, reconciled with the legacy system')}</li>
                  <li>{t('Хэрэглэгчийн портал, Download/Share My Data', 'Customer portal, Download/Share My Data')}</li>
                  <li>{t('Хоёр түлхүүртэй команд, read-back баталгаажуулалт', 'Two-person commands, read-back verification')}</li>
                  <li>{t('Бүлэглэл ба k-босготой аналитик', 'Grouping and k-thresholded analytics')}</li>
                </ul>
                <p className="pgl-threshold">{t('Босго: golden dataset 100%, худал VERIFIED 0', 'Threshold: golden dataset 100%, zero false VERIFIED')}</p>
                <Pill to="/contact" variant="ghost">
                  {t('Танилцуулга авах', 'Request a briefing')}
                </Pill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rollout
