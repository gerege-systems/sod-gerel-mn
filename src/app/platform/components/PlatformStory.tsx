import detailsImage from '@/assets/images/platform/platform-story.webp'
import { useLang, type Text } from '@/i18n/context'
import { Pill } from '@/components/site/ui'

const principlesData: Text[] = [
  { mn: 'Түүхий заалтыг дарж засахгүй — засвар бүр шинэ хувилбар', en: 'Raw readings are never overwritten — every correction is a new version' },
  { mn: 'DB-ийн төлөв өөрчлөгдсөн нь төхөөрөмж дээр биелсэн гэсэн үг биш', en: 'A changed state in the database does not mean it happened on the device' },
  { mn: 'Simulator, туршилтын өгөгдлийг эх үүсвэр ба орчноор тусгаарлана', en: 'Simulator and test data are isolated by source and environment' },
  { mn: '«Exactly once»-д найдахгүй; хүлээн авагч бүр idempotent', en: 'Nothing relies on "exactly once"; every receiver is idempotent' },
  { mn: 'Шинэ технологийг хэмжсэн нотолгоогоор нэмнэ; эхлээд PostgreSQL', en: 'New technology is added only on measured evidence; PostgreSQL first' },
]

const PlatformStory = () => {
  const { t } = useLang()

  return (
    <section className="pgl-section pgl-section--sky">
      <div className="pgl-container">
        <div className="pgl-split pgl-split--reverse">
          <figure>
            <img src={detailsImage} alt={t('Дэд станц, цахилгаан дамжуулах шугам ба сэргээгдэх эрчим хүч', 'A substation, transmission lines and renewable energy')} width={1600} height={900} loading="lazy" decoding="async" />
          </figure>
          <div className="pgl-split__copy">
            <span className="pgl-tag">{t('Таван зарчим', 'FIVE PRINCIPLES')}</span>
            <h2>
              {t('Өгөгдөл бол суурь', 'Data is the foundation')}
              <em>{t('— төлбөр, команд түүн дээр баригдана.', '— billing and commands are built on top of it.')}</em>
            </h2>
            <p>
              {t(
                'Гол үнэ цэнэ нь бодит тоолуурын заалтаас тайлбарлаж болох төлбөр, баталгаатай команд хүртэлх урсгалын зөв байдал. Тиймээс PowerGrid эхний хөрөнгө оруулалтаа бодит заалт цуглуулах, өгөгдлийн чанар, тоолуурын бүртгэл, сүлжээний холбоос, баланс, командын баталгаажуулалтад төвлөрүүлнэ.',
                'The core value is a correct flow from real meter readings to explainable bills and verified commands. That is why PowerGrid focuses its first investment on real reading collection, data quality, the meter registry, grid connectivity, balance and command verification.',
              )}
            </p>
            <ol className="pgl-numbered">
              {principlesData.map((item, index) => (
                <li key={item.en}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{t(item)}</span>
                </li>
              ))}
            </ol>
            <Pill to="/architecture" variant="solid">
              {t('Архитектурыг унших', 'Read the architecture')}
            </Pill>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformStory
