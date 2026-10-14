import meter from '@zasvar/bento-meter.webp'
import { useLang, type Text } from '@/i18n/context'
import { PageHero, Pill } from '@/components/site/ui'
import FlowRail from '@/components/site/FlowRail'

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
    <>
      <PageHero
        eyebrow={t('Платформ', 'Platform')}
        title={t('Хэмжилтийн өгөгдлийн', 'The metering data')}
        accent={t('платформ.', 'platform.')}
        body={t(
          'PowerGrid тоолуурын заалтыг эх төхөөрөмжөөс авч, хадгалж, баталгаажуулж, дахин гаргаж үзүүлэх баталгаатай урсгалыг бүрдүүлнэ. Төлбөр ба хэрэглэгчийн үйлчилгээ энэ баталгаатай өгөгдөл дээр нэмэгдэнэ. Модуль бүр тусдаа хариуцлагатай, тусдаа тестээр нотлогдож, үе шаттайгаар нэвтэрнэ.',
          'PowerGrid builds a verified flow that takes each meter reading from its source device, stores it, validates it and can reproduce it on demand. Billing and customer services are added on top of this verified data. Every module has its own responsibility, is proven by its own tests, and is rolled out in phases.',
        )}
        actions={
          <>
            <Pill to="/contact" variant="solid">
              {t('Туршилт эхлүүлэх', 'Start a pilot')}
            </Pill>
            <Pill to="/platform#roadmap" variant="ghost" icon={false}>
              {t('Хаана явна', 'Where we are')}
            </Pill>
          </>
        }
      >
        <img className="is-product" src={meter} alt={t('Ухаалаг цахилгааны тоолуур', 'A smart electricity meter')} width={628} height={760} />
      </PageHero>

      <section className="pgl-section pgl-section--tight">
        <div className="pgl-container grid gap-6">
          <FlowRail />
          <div className="pgl-chips" aria-label={t('Платформын бүрэлдэхүүн', 'Platform components')}>
            {componentsData.map((component) => (
              <span key={component.en} className="pgl-chip">
                {t(component)}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PlatformHero
