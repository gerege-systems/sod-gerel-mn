import exp1 from '@/assets/images/experience/1.webp'
import exp2 from '@/assets/images/experience/2.webp'
import exp3 from '@/assets/images/experience/3.webp'
import exp4 from '@/assets/images/experience/4.webp'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import PageMeta from '@/components/PageMeta'
import { useLang, type Text } from '@/i18n/context'

type ExperienceType = {
  image: StaticImageData
  category: Text
  title: Text
}

const experienceData: ExperienceType[] = [
  {
    image: exp1,
    category: { mn: 'Австрали', en: 'Australia' },
    title: {
      mn: 'AEMO — интервалын загвар, хувилбар ба дахин тооцоолол',
      en: 'AEMO — interval model, versioning and recalculation',
    },
  },
  {
    image: exp2,
    category: { mn: 'Их Британи', en: 'United Kingdom' },
    title: {
      mn: 'Smart DCC — суурилуулалт ба ажиллагааны KPI-г салгах',
      en: 'Smart DCC — separating installation and operational KPIs',
    },
  },
  {
    image: exp3,
    category: { mn: 'Франц', en: 'France' },
    title: {
      mn: 'Enedis Linky — хэрэглэгч төвтэй хэмжилт ба өгөгдлийн эрх',
      en: 'Enedis Linky — customer-centred metering and data rights',
    },
  },
  {
    image: exp4,
    category: { mn: 'Узбекистан', en: 'Uzbekistan' },
    title: {
      mn: 'Олон үйлдвэрлэгч, баланс ба billing-ийн интеграц',
      en: 'Multiple vendors, balance and billing integration',
    },
  },
]

const Index = () => {
  const { t } = useLang()
  return (
    <>
      <PageMeta title={{ mn: 'Олон улсын туршлага', en: 'International experience' }} />
      <Navbar />
      <section className="relative size-full overflow-hidden py-10 md:py-14.5">
        <div className="container">
          <div className="mb-12.5 text-center">
            <h1 className="mb-2.5 text-4xl md:text-5xl lg:text-[56px]">{t('Олон улсын туршлага', 'International experience')}</h1>
            <p className="mx-auto md:max-w-1/2">
              {t(
                'Узбекистан болон дэлхийн өөр есөн улс, ЕХ-ны журмын туршлагаас PowerGrid-д шууд хамаатай шаардлагыг ялгаж авсан. Эрэмбэ нь чансаа биш — хэрэгжүүлэх дараалал.',
                'We distilled the requirements that matter directly to PowerGrid from Uzbekistan, nine other countries and EU regulation. The order is not a ranking — it is the implementation sequence.',
              )}
            </p>
          </div>
          <div className="grid gap-7.5 lg:grid-cols-2">
            {experienceData.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                  alt={t(item.category)}
                />
                <div className="absolute bottom-0 m-5">
                  <div className="inline-flex rounded bg-white p-4">
                    <div className="space-y-2.5">
                      <div className="bg-default-100 border-default-200 inline-flex rounded border px-2.5 py-1.5 text-sm/none font-medium">
                        {t(item.category)}
                      </div>
                      <h2 className="text-xl">{t(item.title)}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Index
