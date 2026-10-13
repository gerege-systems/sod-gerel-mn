import detailsImage from '@/assets/images/platform/control-panel-team.jpg'
import { useLang, type Text } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

const principlesData: Text[] = [
  {
    mn: 'Түүхий заалтыг дарж засахгүй — засвар бүр шинэ хувилбар',
    en: 'Raw readings are never overwritten — every correction is a new version',
  },
  {
    mn: 'DB-ийн төлөв өөрчлөгдсөн нь төхөөрөмж дээр биелсэн гэсэн үг биш',
    en: 'A changed state in the database does not mean it happened on the device',
  },
  {
    mn: 'Simulator, туршилтын өгөгдлийг эх үүсвэр ба орчноор тусгаарлана',
    en: 'Simulator and test data are isolated by source and environment',
  },
  {
    mn: '«Exactly once»-д найдахгүй; хүлээн авагч бүр idempotent',
    en: 'Nothing relies on "exactly once"; every receiver is idempotent',
  },
  {
    mn: 'Шинэ технологийг хэмжсэн нотолгоогоор нэмнэ; эхлээд PostgreSQL',
    en: 'New technology is added only on measured evidence; PostgreSQL first',
  },
]

const PlatformStory = () => {
  const { t } = useLang()

  return (
    <section className="bg-stage py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Платформ', 'Platform')} right="01 — 08" className="mb-10 lg:mb-14" />
        <div className="grid gap-10 md:grid-cols-3 lg:gap-20">
          <div>
            <img
              src={detailsImage}
              alt={t('PowerGrid платформ', 'PowerGrid platform')}
              className="rounded-card size-full object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <div className="mb-10">
              <h2 className="h-section mixed mb-6">
                <b>{t('Өгөгдөл бол суурь', 'Data is the foundation')}</b>{' '}
                {t('— төлбөр, команд түүн дээр баригдана', '— billing and commands are built on top of it')}
                <span className="accent">.</span>
              </h2>
              <p className="max-w-[40rem]">
                {t(
                  'Гол үнэ цэнэ нь бодит тоолуурын заалтаас тайлбарлаж болох төлбөр, баталгаатай команд хүртэлх урсгалын зөв байдал. Тиймээс PowerGrid эхний хөрөнгө оруулалтаа бодит заалт цуглуулах, өгөгдлийн чанар, тоолуурын бүртгэл, сүлжээний холбоос, баланс, командын баталгаажуулалтад төвлөрүүлнэ.',
                  'The core value is a correct flow from real meter readings to explainable bills and verified commands. That is why PowerGrid focuses its first investment on real reading collection, data quality, the meter registry, grid connectivity, balance and command verification.',
                )}
              </p>
            </div>
            <ol role="list" className="border-hair mb-10 border-t">
              {principlesData.map((item, index) => (
                <li key={item.en} className="border-hair flex items-start gap-5 border-b py-4">
                  <span className="meta mt-1 w-6 shrink-0 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-ink">{t(item)}</span>
                </li>
              ))}
            </ol>
            <PillButton to="/architecture" variant="dark">
              {t('Архитектурыг унших', 'Read the architecture')}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformStory
