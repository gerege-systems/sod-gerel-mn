import ctaImage from '@/assets/images/other/pylons-dusk.jpg'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

const MissionVision = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <SectionMeta left={t('Эрхэм зорилго', 'Mission')} right="02 — 04" className="mb-10 lg:mb-14" />
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="card flex h-full flex-col justify-between gap-12 p-7 lg:p-10">
              <h2 className="h-section">
                {t('Эрхэм зорилго', 'Mission')}
                <span className="accent">.</span>
              </h2>
              <p className="text-ink text-lg font-medium tracking-[-0.01em] md:text-xl">
                {t(
                  'Тоолуурын бодит заалтыг эх төхөөрөмжөөс нь авч, хэзээ ч дарж бичихгүйгээр хадгалж, шалгаж, баланс, тариф, төлбөр хүртэл тайлбарлаж болох нэг урсгалд холбох. Нэхэмжлэл, баланс, команд бүрийг эх заалт руу нь буцааж мөрдөж болохуйц, иргэн өөрийн өгөгдлийн эзэн байх үндэсний хэмжилтийн платформыг бүтээх.',
                  'To take every actual meter reading from its source device, keep it without ever overwriting it, validate it, and carry it through balance, tariff and billing in one explainable flow. To build a national metering platform where every invoice, balance and command traces back to its source reading, and customers own their data.',
                )}
              </p>
            </div>
          </div>
          <div>
            <div className="rounded-card relative min-h-[28rem] overflow-hidden">
              <img src={ctaImage} className="absolute inset-0 h-full w-full object-cover" alt="PowerGrid" />
              <div className="absolute inset-4 flex flex-col justify-between rounded-[22px] bg-white p-6 lg:inset-8 lg:p-8">
                <div>
                  <h2 className="mb-5 text-2xl lg:text-3xl">
                    {t('Алсын хараа', 'Vision')}
                    <span className="accent">.</span>
                  </h2>
                  <p className="text-ink">
                    {t(
                      'Монгол Улсын 1,000,000 тоолуурын хэмжилтийн цорын ганц баталгаатай эх сурвалж болох.',
                      "To become the single verified source of metering truth for Mongolia's 1,000,000 meters.",
                    )}
                  </p>
                </div>
                <ul role="list" className="border-hair mt-6 border-t">
                  {[
                    { mn: 'Нэгдсэн хэмжилтийн эх сурвалж', en: 'A unified source of metering truth' },
                    { mn: 'Тайлбарлагдах төлбөр', en: 'Billing you can explain' },
                    { mn: 'Иргэн өөрийн өгөгдлийн эзэн', en: 'Customers own their data' },
                  ].map((item) => (
                    <li key={item.en} className="border-hair text-ink flex items-center gap-3 border-b py-3">
                      <Icon icon="tabler:circle-check" className="text-accent size-5 shrink-0" aria-hidden="true" />
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
