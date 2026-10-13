import { Link } from 'react-router-dom'
import module1 from '@/assets/images/platform/1.jpg'
import { useLang, type Text } from '@/i18n/context'

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
        <div className="grid gap-25 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="flex h-full flex-col gap-7.5 lg:gap-15">
              <div>
                <h1 className="text-default-950 mb-2.5 text-4xl md:text-5xl lg:text-[56px]">
                  {t('Хэмжилтийн өгөгдлийн платформ', 'Metering data platform')}
                </h1>
                <p>
                  {t(
                    'PowerGrid тоолуурын заалтыг эх төхөөрөмжөөс авч, хадгалж, баталгаажуулж, дахин гаргаж үзүүлэх баталгаатай урсгалыг бүрдүүлнэ. Төлбөр ба хэрэглэгчийн үйлчилгээ энэ баталгаатай өгөгдөл дээр нэмэгдэнэ. Модуль бүр тусдаа хариуцлагатай, тусдаа тестээр нотлогдож, үе шаттайгаар нэвтэрнэ.',
                    'PowerGrid builds a verified flow that takes each meter reading from its source device, stores it, validates it and can reproduce it on demand. Billing and customer services are added on top of this verified data. Every module has its own responsibility, is proven by its own tests, and is rolled out in phases.',
                  )}
                </p>
                <div className="mt-11 inline-flex items-center gap-4 md:gap-20 lg:gap-7.5">
                  <Link
                    to="/contact"
                    className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
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
                </div>
              </div>
              <div className="mt-auto">
                <h2 className="mb-2.5 text-xl">{t('Платформын бүрэлдэхүүн', 'Platform components')}</h2>
                <div className="flex flex-wrap items-center gap-4">
                  {componentsData.map((component, index) => (
                    <div
                      key={index}
                      className="bg-default-100 text-default-950 rounded px-4 py-2.5"
                    >
                      {t(component)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div>
              <img
                className="size-full rounded-lg object-cover"
                src={module1}
                alt={t('Хэмжилтийн өгөгдлийн платформ', 'Metering data platform')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformHero
