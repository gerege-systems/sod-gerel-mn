import exp1 from '@/assets/images/experience/sydney.webp'
import exp2 from '@/assets/images/experience/london.webp'
import exp3 from '@/assets/images/experience/paris.webp'
import exp4 from '@/assets/images/experience/tashkent.webp'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import PageMeta from '@/components/PageMeta'
import SectionMeta from '@/components/SectionMeta'
import { useLang, type Text } from '@/i18n/context'

type ExperienceType = {
  image: ImageSrc
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
          <SectionMeta left={t('Олон улсын туршлага', 'International experience')} right="PowerGrid" className="mb-10 md:mb-14" />
          <div className="mx-auto mb-12 max-w-[52rem] text-center lg:mb-16">
            <h1 className="display mixed">
              <b>{t('Олон улсын', 'International')}</b> {t('туршлага', 'experience')}
              <span className="accent">.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[36rem]">
              {t(
                'Узбекистан болон дэлхийн өөр есөн улс, ЕХ-ны журмын туршлагаас PowerGrid-д шууд хамаатай шаардлагыг ялгаж авсан. Эрэмбэ нь чансаа биш — хэрэгжүүлэх дараалал.',
                'We distilled the requirements that matter directly to PowerGrid from Uzbekistan, nine other countries and EU regulation. The order is not a ranking — it is the implementation sequence.',
              )}
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            {experienceData.map((item, index) => (
              <div key={index} className="group rounded-card relative overflow-hidden">
                <img
                  src={item.image}
                  className="w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
                  alt={t(item.category)}
                />
                <div className="absolute inset-x-4 bottom-4 lg:inset-x-6 lg:bottom-6">
                  <div className="rounded-[22px] bg-white/92 p-5 backdrop-blur md:max-w-[80%]">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="meta">{String(index + 1).padStart(2, '0')}</span>
                      <span className="chip chip--up">{t(item.category)}</span>
                    </div>
                    <h2 className="text-lg md:text-xl">{t(item.title)}</h2>
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
