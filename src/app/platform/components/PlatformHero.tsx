import module1 from '@/assets/images/platform/smart-meter.jpg'
import { useLang, type Text } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

const componentsData: Text[] = [
  { mn: 'HES адаптер (DLMS/COSEM, TEAMI)', en: 'HES adapters (DLMS/COSEM, TEAMI)' },
  { mn: 'Түүхий архив ба idempotency', en: 'Raw archive and idempotency' },
  { mn: 'Хувилбартай MDM ба VEE', en: 'Versioned MDM and VEE' },
  { mn: 'Тоолуур ба топологийн бүртгэл', en: 'Meter and topology registry' },
  { mn: 'Трансформаторын баланс', en: 'Transformer balance' },
  { mn: 'Дохиолол ба incident', en: 'Alarms and incidents' },
  { mn: 'Тариф ба append-only ledger', en: 'Tariffs and append-only ledger' },
  { mn: 'Баталгаатай алсын команд', en: 'Verified remote commands' },
  { mn: 'Эрх, зөвшөөрөл ба аудит', en: 'Permissions, consent and audit' },
  { mn: 'Хэрэглэгчийн портал', en: 'Customer portal' },
  { mn: 'k-босготой аналитик', en: 'k-thresholded analytics' },
]

const PlatformHero = () => {
  const { t } = useLang()

  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container">
        <SectionMeta left={t('Платформ', 'Platform')} right="PowerGrid" className="mb-10 md:mb-14" />
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-3">
            <div className="flex h-full flex-col gap-10 lg:gap-16">
              <div>
                <h1 className="display mixed mb-6">
                  <b>{t('Хэмжилтийн өгөгдлийн', 'Metering data')}</b> {t('платформ', 'platform')}
                  <span className="accent">.</span>
                </h1>
                <p className="max-w-[36rem]">
                  {t(
                    'PowerGrid тоолуурын заалтыг эх төхөөрөмжөөс авч, хадгалж, баталгаажуулж, дахин гаргаж үзүүлэх баталгаатай урсгалыг бүрдүүлнэ. Төлбөр ба хэрэглэгчийн үйлчилгээ энэ баталгаатай өгөгдөл дээр нэмэгдэнэ. Модуль бүр тусдаа хариуцлагатай, тусдаа тестээр нотлогдож, үе шаттайгаар нэвтэрнэ.',
                    'PowerGrid builds a verified flow that takes each meter reading from its source device, stores it, validates it and can reproduce it on demand. Billing and customer services are added on top of this verified data. Every module has its own responsibility, is proven by its own tests, and is rolled out in phases.',
                  )}
                </p>
                <div className="mt-9">
                  <PillButton to="/contact" variant="dark">
                    {t('Туршилт эхлүүлэх', 'Start a pilot')}
                  </PillButton>
                </div>
              </div>
              <div className="mt-auto">
                <h2 className="meta mb-4">{t('Платформын бүрэлдэхүүн', 'Platform components')}</h2>
                <div className="flex flex-wrap items-center gap-2">
                  {componentsData.map((component, index) => (
                    <span key={index} className="chip">
                      {t(component)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <img
              className="rounded-card size-full object-cover"
              src={module1}
              alt={t('Хэмжилтийн өгөгдлийн платформ', 'Metering data platform')}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformHero
