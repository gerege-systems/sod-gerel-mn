import ctaImage from '@/assets/images/other/cta-bg.jpg'
import { useLang } from '@/i18n/context'

const MissionVision = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="border-default-200 flex h-full flex-col items-center justify-between gap-12 rounded-xl border p-5 pb-12 text-center md:items-start lg:p-10 lg:pb-16 lg:text-start">
              <h2 className="mb-12.5 text-2xl">{t('Эрхэм зорилго', 'Mission')}</h2>
              <p className="text-default-950">
                {t(
                  'Тоолуурын бодит заалтыг эх төхөөрөмжөөс нь авч, хэзээ ч дарж бичихгүйгээр хадгалж, шалгаж, баланс, тариф, төлбөр хүртэл тайлбарлаж болох нэг урсгалд холбох. Нэхэмжлэл, баланс, команд бүрийг эх заалт руу нь буцааж мөрдөж болохуйц, иргэн өөрийн өгөгдлийн эзэн байх үндэсний хэмжилтийн платформыг бүтээх.',
                  'To take every actual meter reading from its source device, keep it without ever overwriting it, validate it, and carry it through balance, tariff and billing in one explainable flow. To build a national metering platform where every invoice, balance and command traces back to its source reading, and customers own their data.',
                )}
              </p>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-xl">
              <img src={ctaImage} className="h-full w-full object-cover" alt="PowerGrid" />
              <div className="absolute inset-5 rounded-lg bg-white p-5 lg:inset-10">
                <div className="space-y-7.5">
                  <h2 className="text-2xl">{t('Алсын хараа', 'Vision')}</h2>
                  <p className="text-default-950">
                    {t(
                      'Монгол Улсын 1,000,000 тоолуурын хэмжилтийн цорын ганц баталгаатай эх сурвалж болох.',
                      "To become the single verified source of metering truth for Mongolia's 1,000,000 meters.",
                    )}
                  </p>
                  <ul
                    role="list"
                    className="text-default-950 list-inside list-disc space-y-2.5 ps-2"
                  >
                    <li>{t('Нэгдсэн хэмжилтийн эх сурвалж', 'A unified source of metering truth')}</li>
                    <li>{t('Тайлбарлагдах төлбөр', 'Billing you can explain')}</li>
                    <li>{t('Иргэн өөрийн өгөгдлийн эзэн', 'Customers own their data')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
