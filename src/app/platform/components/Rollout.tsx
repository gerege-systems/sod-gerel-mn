import { CONTACT_EMAIL } from '@/config'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import { useEffect, useState } from 'react'
import { useLang } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

type AnimatedNumberProps = {
  value: number
}

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
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
  }, [value])

  return <>{displayValue.toLocaleString('en-US')}</>
}

const Rollout = () => {
  const { t } = useLang()
  const [isNational, setIsNational] = useState(true)

  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Нэвтрүүлэлт ба багтаамж', 'Rollout and capacity')} right="04 — 08" />
        <div className="mt-10 mb-12 grid gap-6 lg:mt-14 lg:mb-16 lg:grid-cols-12 lg:gap-12">
          <h2 className="h-section mixed lg:col-span-7">
            <b>{t('Нэг трансформатороос', 'From one transformer')}</b>{' '}
            {t('нэг сая тоолуур хүртэл', 'to one million meters')}
            <span className="accent">.</span>
          </h2>
          <div className="lg:col-span-5 lg:pt-2">
            <p className="max-w-[34rem]">
              {t(
                '~1,000 → 10,000 → 100,000 → 500,000 → 1,000,000. Шат бүрд хүлээн авах босгыг хангасны дараа л дараагийнх руу шилжинэ. Оргил ачаалал ба 24 цагийн нөхөн таталтаар төлөвлөсөн — хоногийн дунджаар биш.',
                '~1,000 → 10,000 → 100,000 → 500,000 → 1,000,000. Each stage moves on only after its acceptance threshold is met. Planned for peak load and 24-hour catch-up, not for the daily average.',
              )}
            </p>
            <Link to="/architecture" className="chip mt-5">
              {t('Архитектурыг үзэх', 'View the architecture')}
              <Icon icon="tabler:arrow-up-right" className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <div className="card flex h-full flex-col gap-7 p-7 lg:p-9">
              <h3 className="text-2xl lg:text-3xl">{t('Туршилтын бүлгээс эхлэх', 'Start with a pilot group')}</h3>
              <p>
                {t(
                  'Нэг туршилтын трансформатор ба харьяа хэрэглэгчид, тоолуурын protocol баримт, TEAMI-ийн өгөгдлийн эрх — эхний шатанд эдгээрийг хамтдаа тодорхойлно.',
                  "One pilot transformer and its customers, the meter protocol documentation, and data access to TEAMI: we define these together in the first stage.",
                )}
              </p>
              <div>
                <PillButton to="/contact" variant="dark" size="sm">
                  {t('Холбогдох', 'Contact us')}
                </PillButton>
              </div>
              <div className="border-hair mt-auto flex items-center gap-4 border-t pt-6">
                <div className="bg-stage flex size-11 shrink-0 items-center justify-center rounded-full">
                  <Icon icon="tabler:mail" className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="meta mb-1">{t('Шууд имэйл бичих үү?', 'Prefer to email directly?')}</div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink text-sm font-medium hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-stage rounded-card p-3 md:p-4">
              <div className="mb-4 flex" role="group" aria-label={t('Хэмжээ сонгох', 'Choose a scale')}>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsNational(false)}
                    aria-pressed={!isNational}
                    className="chip"
                  >
                    {t('10,000 тоолуур (1%)', '10,000 meters (1%)')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsNational(true)}
                    aria-pressed={isNational}
                    className="chip"
                  >
                    {t('1,000,000 тоолуур', '1,000,000 meters')}
                  </button>
                </div>
              </div>

              <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
                <div className="card flex flex-col p-6 lg:p-7">
                  <span className="meta">{t('Өгөгдлийн суурь · Үе 0–2', 'Data foundation · Phases 0–2')}</span>
                  <div className="num num--md mt-6">
                    <AnimatedNumber value={isNational ? 96000000 : 960000} />
                  </div>
                  <div className="meta mt-3">{t('бичлэг / өдөр', 'records / day')}</div>
                  <hr className="border-hair my-6" />
                  <ul role="list" className="mb-7 space-y-2.5 text-sm">
                    <li>{t('Тоолуур, хэмжилтийн цэг, топологийн бүртгэл', 'Meter, metering point and topology registry')}</li>
                    <li>{t('Бодит заалт цуглуулалт, raw архив, idempotency', 'Real reading collection, raw archive, idempotency')}</li>
                    <li>{t('VEE дүрмийн каталог, quarantine, хувилбар', 'VEE rule catalogue, quarantine, versioning')}</li>
                    <li>{t('Трансформаторын баланс ба D+1 бүрэн байдал', 'Transformer balance and D+1 completeness')}</li>
                    <li>{t('Prometheus/Grafana, runbook, PITR сэргээлт', 'Prometheus/Grafana, runbooks, PITR recovery')}</li>
                  </ul>
                  <p className="bg-stage mb-6 rounded-2xl px-3.5 py-2.5 text-sm">
                    {t('Босго: D+1 бүрэн байдал ≥ 99%, давхардал 0', 'Threshold: D+1 completeness ≥ 99%, zero duplicates')}
                  </p>
                  <div className="mt-auto">
                    <PillButton to="/contact" variant="dark" size="sm" full>
                      {t('Туршилт эхлүүлэх', 'Start a pilot')}
                    </PillButton>
                  </div>
                </div>

                <div className="card flex flex-col p-6 lg:p-7">
                  <span className="meta">
                    {t('Төлбөр, команд, аналитик · Үе 3–5', 'Billing, commands, analytics · Phases 3–5')}
                  </span>
                  <div className="num num--md mt-6">
                    <AnimatedNumber value={isNational ? 16667 : 167} />
                  </div>
                  <div className="meta mt-3">{t('бичлэг / сек (15 мин оргил)', 'records / sec (15-min peak)')}</div>
                  <hr className="border-hair my-6" />
                  <ul role="list" className="mb-7 space-y-2.5 text-sm">
                    <li>{t('Тарифын хувилбар, append-only ledger', 'Tariff versions, append-only ledger')}</li>
                    <li>
                      {t(
                        'Shadow billing ≥ 2 мөчлөг, хуучин системтэй тулгалт',
                        'Shadow billing for ≥ 2 cycles, reconciled with the legacy system',
                      )}
                    </li>
                    <li>{t('Хэрэглэгчийн портал, Download/Share My Data', 'Customer portal, Download/Share My Data')}</li>
                    <li>
                      {t('Хоёр түлхүүртэй команд, read-back баталгаажуулалт', 'Two-person commands, read-back verification')}
                    </li>
                    <li>{t('Бүлэглэл ба k-босготой аналитик', 'Grouping and k-thresholded analytics')}</li>
                  </ul>
                  <p className="bg-stage mb-6 rounded-2xl px-3.5 py-2.5 text-sm">
                    {t('Босго: golden dataset 100%, худал VERIFIED 0', 'Threshold: golden dataset 100%, zero false VERIFIED')}
                  </p>
                  <div className="mt-auto">
                    <PillButton to="/contact" variant="soft" size="sm" full>
                      {t('Танилцуулга авах', 'Request a briefing')}
                    </PillButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rollout
