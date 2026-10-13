import { Link } from 'react-router-dom'
import detailsImage from '@/assets/images/platform/control-panel-team.jpg'
import { useLang } from '@/i18n/context'

const PlatformStory = () => {
  const { t } = useLang()

  return (
    <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="grid gap-7.5 md:grid-cols-3 lg:gap-25">
          <div>
            <div className="size-full">
              <img
                src={detailsImage}
                alt={t('PowerGrid платформ', 'PowerGrid platform')}
                className="size-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="mb-10">
              <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
                {t(
                  'Өгөгдөл бол суурь — төлбөр, команд түүн дээр баригдана.',
                  'Data is the foundation — billing and commands are built on top of it.',
                )}
              </h2>
              <p>
                {t(
                  'Гол үнэ цэнэ нь бодит тоолуурын заалтаас тайлбарлаж болох төлбөр, баталгаатай команд хүртэлх урсгалын зөв байдал. Тиймээс PowerGrid эхний хөрөнгө оруулалтаа бодит заалт цуглуулах, өгөгдлийн чанар, тоолуурын бүртгэл, сүлжээний холбоос, баланс, командын баталгаажуулалтад төвлөрүүлнэ.',
                  'The core value is a correct flow from real meter readings to explainable bills and verified commands. That is why PowerGrid focuses its first investment on real reading collection, data quality, the meter registry, grid connectivity, balance and command verification.',
                )}
              </p>
            </div>
            <ul role="list" className="mb-10 list-inside list-disc space-y-2.5">
              <li>
                {t(
                  'Түүхий заалтыг дарж засахгүй — засвар бүр шинэ хувилбар',
                  'Raw readings are never overwritten — every correction is a new version',
                )}
              </li>
              <li>
                {t(
                  'DB-ийн төлөв өөрчлөгдсөн нь төхөөрөмж дээр биелсэн гэсэн үг биш',
                  'A changed state in the database does not mean it happened on the device',
                )}
              </li>
              <li>
                {t(
                  'Simulator, туршилтын өгөгдлийг эх үүсвэр ба орчноор тусгаарлана',
                  'Simulator and test data are isolated by source and environment',
                )}
              </li>
              <li>
                {t(
                  '«Exactly once»-д найдахгүй; хүлээн авагч бүр idempotent',
                  'Nothing relies on "exactly once"; every receiver is idempotent',
                )}
              </li>
              <li>
                {t(
                  'Шинэ технологийг хэмжсэн нотолгоогоор нэмнэ; эхлээд PostgreSQL',
                  'New technology is added only on measured evidence; PostgreSQL first',
                )}
              </li>
            </ul>
            <Link
              to="/architecture"
              className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
            >
              <span className="relative block overflow-hidden">
                <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  {t('Архитектурыг унших', 'Read the architecture')}
                </span>
                <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  {t('Архитектурыг унших', 'Read the architecture')}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformStory
