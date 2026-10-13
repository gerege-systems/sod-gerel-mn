import { CONTACT_EMAIL } from '@/config'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import { useEffect, useState } from 'react'
import { useLang } from '@/i18n/context'

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
        <div className="mb-7.5 flex flex-wrap justify-between gap-7.5 lg:mb-12.5">
          <div>
            <div className="text-default-950 mb-2 text-sm">{t('Нэвтрүүлэлт ба багтаамж', 'Rollout and capacity')}</div>
            <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
              {t('Нэг трансформатороос нэг сая тоолуур хүртэл', 'From one transformer to one million meters')}
            </h2>
            <p className="lg:max-w-3/5">
              {t(
                '~1,000 → 10,000 → 100,000 → 500,000 → 1,000,000. Шат бүрд хүлээн авах босгыг хангасны дараа л дараагийнх руу шилжинэ. Оргил ачаалал ба 24 цагийн нөхөн таталтаар төлөвлөсөн — хоногийн дунджаар биш.',
                '~1,000 → 10,000 → 100,000 → 500,000 → 1,000,000. Each stage moves on only after its acceptance threshold is met. Planned for peak load and 24-hour catch-up, not for the daily average.',
              )}
            </p>
          </div>
          <div className="place-content-end text-end">
            <Link to="/architecture" className="text-default-950 flex items-center gap-1 underline">
              <div>{t('Архитектурыг үзэх', 'View the architecture')}</div>
              <Icon icon="tabler:arrow-up-right" />
            </Link>
          </div>
        </div>

        <div className="grid gap-7.5 lg:grid-cols-3">
          <div>
            <div className="border-default-200 flex h-full flex-col gap-7.5 rounded-xl border p-6">
              <h2 className="mb-2.5 text-3xl">{t('Туршилтын бүлгээс эхлэх', 'Start with a pilot group')}</h2>
              <p className="mb-7.5">
                {t(
                  'Нэг туршилтын трансформатор ба харьяа хэрэглэгчид, тоолуурын protocol баримт, TEAMI-ийн өгөгдлийн эрх — эхний шатанд эдгээрийг хамтдаа тодорхойлно.',
                  "One pilot transformer and its customers, the meter protocol documentation, and data access to TEAMI: we define these together in the first stage.",
                )}
              </p>
              <div>
                <Link
                  to="/contact"
                  className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-4.5 py-3 font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      {t('Холбогдох', 'Contact us')}
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      {t('Холбогдох', 'Contact us')}
                    </span>
                  </span>
                </Link>
              </div>
              <div className="mt-auto flex items-center gap-4">
                <div className="bg-default-100 flex size-12.5 items-center justify-center rounded-full">
                  <Icon icon="tabler:mail" className="size-7" />
                </div>
                <div>
                  <h4 className="mb-1">{t('Шууд имэйл бичих үү?', 'Prefer to email directly?')}</h4>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-default-500 text-sm">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-default-100 rounded-lg p-5">
              <div className="mb-5 flex">
                <div className="rounded-lg bg-white p-1 transition">
                  <div className="flex flex-wrap justify-center gap-1">
                    <button
                      onClick={() => setIsNational(false)}
                      className={`flex cursor-pointer items-center rounded-md px-2.5 py-1.5 text-sm transition ${!isNational ? 'bg-default-100' : 'bg-white'}`}
                    >
                      {t('10,000 тоолуур (1%)', '10,000 meters (1%)')}
                    </button>
                    <button
                      onClick={() => setIsNational(true)}
                      className={`flex cursor-pointer items-center rounded-md px-2.5 py-1.5 text-sm transition ${isNational ? 'bg-default-100' : 'bg-white'}`}
                    >
                      {t('1,000,000 тоолуур', '1,000,000 meters')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-7.5 lg:grid-cols-2">
                <div className="flex flex-col rounded-lg bg-white p-6">
                  <h3 className="mb-4 text-xl">{t('Өгөгдлийн суурь · Үе 0–2', 'Data foundation · Phases 0–2')}</h3>
                  <hr className="border-default-200 my-6" />
                  <div className="mb-7.5 flex flex-wrap items-end gap-1.5">
                    <h2 className="text-[26px] leading-none">
                      <AnimatedNumber value={isNational ? 96000000 : 960000} />
                    </h2>
                    <div>{t('бичлэг / өдөр', 'records / day')}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="group bg-primary inline-flex w-full items-center justify-center gap-5 rounded-lg px-4.5 py-2.5 font-medium text-white transition-all"
                  >
                    <span className="relative block overflow-hidden">
                      <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                        {t('Туршилт эхлүүлэх', 'Start a pilot')}
                      </span>
                      <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                        {t('Туршилт эхлүүлэх', 'Start a pilot')}
                      </span>
                    </span>
                  </Link>
                  <ul role="list" className="my-7.5 list-inside list-disc space-y-2.5">
                    <li>{t('Тоолуур, хэмжилтийн цэг, топологийн бүртгэл', 'Meter, metering point and topology registry')}</li>
                    <li>{t('Бодит заалт цуглуулалт, raw архив, idempotency', 'Real reading collection, raw archive, idempotency')}</li>
                    <li>{t('VEE дүрмийн каталог, quarantine, хувилбар', 'VEE rule catalogue, quarantine, versioning')}</li>
                    <li>{t('Трансформаторын баланс ба D+1 бүрэн байдал', 'Transformer balance and D+1 completeness')}</li>
                    <li>{t('Prometheus/Grafana, runbook, PITR сэргээлт', 'Prometheus/Grafana, runbooks, PITR recovery')}</li>
                  </ul>
                  <p className="bg-default-100 mt-auto rounded px-2.5 py-1.5">
                    {t('Босго: D+1 бүрэн байдал ≥ 99%, давхардал 0', 'Threshold: D+1 completeness ≥ 99%, zero duplicates')}
                  </p>
                </div>

                <div className="flex flex-col rounded-lg bg-white p-6">
                  <h3 className="mb-4 text-xl">
                    {t('Төлбөр, команд, аналитик · Үе 3–5', 'Billing, commands, analytics · Phases 3–5')}
                  </h3>
                  <hr className="border-default-200 my-6" />
                  <div className="mb-7.5 flex flex-wrap items-end gap-1.5">
                    <h2 className="text-[26px] leading-none">
                      <AnimatedNumber value={isNational ? 16667 : 167} />
                    </h2>
                    <div>{t('бичлэг / сек (15 мин оргил)', 'records / sec (15-min peak)')}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="group bg-primary inline-flex w-full items-center justify-center gap-5 rounded-lg px-4.5 py-2.5 font-medium text-white transition-all"
                  >
                    <span className="relative block overflow-hidden">
                      <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                        {t('Танилцуулга авах', 'Request a briefing')}
                      </span>
                      <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                        {t('Танилцуулга авах', 'Request a briefing')}
                      </span>
                    </span>
                  </Link>
                  <ul role="list" className="my-7.5 list-inside list-disc space-y-2.5">
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
                  <p className="bg-default-100 mt-auto rounded px-2.5 py-1.5">
                    {t('Босго: golden dataset 100%, худал VERIFIED 0', 'Threshold: golden dataset 100%, zero false VERIFIED')}
                  </p>
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
