import { Link } from 'react-router-dom'
import featuredCase from '@/assets/images/other/featured-case.webp'
import { useLang } from '@/i18n/context'

const FeaturedCase = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-12.5">
          <div className="text-default-950 mb-2.5 text-sm">
            {t('Олон улсын туршлага', 'International experience')}
          </div>
          <h1 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
            {t('Онцлох жишиг', 'Featured reference')}
          </h1>
          <p className="text-default-600">
            {t(
              'Нэг бүтээгдэхүүнийг хуулбарласангүй. Улс бүрээс хамгийн сайн шийдлийг нь авч, Монголын тариф, хууль, сүлжээнд тохируулан нэг платформд нэгтгэв.',
              "We did not copy one product. We took the best answer from each country and fitted it to Mongolia's tariffs, laws and grid in one platform.",
            )}
          </p>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <Link to="/experience" className="absolute inset-0 z-1"></Link>
          <img
            src={featuredCase}
            alt={t('Финландын Fingrid Datahub', "Finland's Fingrid Datahub")}
            className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
          />
          <div className="inset-x-7.5 bottom-7.5 flex rounded bg-white p-4 md:absolute">
            <div className="space-y-2.5">
              <div className="bg-default-100 inline-flex rounded-md px-1.5 py-1 text-xs/none font-medium">
                {t('Финланд', 'Finland')}
              </div>
              <h2 className="text-xl md:text-2xl">
                {t(
                  'Fingrid Datahub — зөвшөөрөгдсөн талуудын нэгдсэн өгөгдөл солилцоо',
                  'Fingrid Datahub — a single data exchange for authorised parties',
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCase
