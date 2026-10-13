import { Link } from 'react-router-dom'
import exp1 from '@/assets/images/experience/sydney.webp'
import exp2 from '@/assets/images/experience/london.webp'
import exp3 from '@/assets/images/experience/paris.webp'
import exp4 from '@/assets/images/experience/tashkent.webp'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'

type CaseType = {
  image: ImageSrc
  country: Text
  title: Text
  description: Text
  metricLabel: Text
  metricValue: Text
}

const casesData: CaseType[] = [
  {
    image: exp1,
    country: { mn: 'Австрали', en: 'Australia' },
    title: {
      mn: 'AEMO — заалтын төлөв, хувилбар ба дахин тооцоолол',
      en: 'AEMO — reading status, versions and recalculation',
    },
    description: {
      mn: '5 минутын settlement бүхий зах зээлд заалт бүр төлөв, хувилбарын түүхтэй. PowerGrid эндээс интервалын загвар, version, дүрэм өөрчлөгдөхөд дахин тооцоолох боломжийг авсан.',
      en: 'In a market with 5-minute settlement, every reading carries a status and version history. From here PowerGrid took its interval model, versioning, and the ability to recalculate when rules change.',
    },
    metricLabel: { mn: 'Settlement интервал', en: 'Settlement interval' },
    metricValue: { mn: '5 мин', en: '5 min' },
  },
  {
    image: exp2,
    country: { mn: 'Их Британи', en: 'United Kingdom' },
    title: {
      mn: 'Smart DCC — суурилуулалт ба бодит ажиллагааг салгах сургамж',
      en: 'Smart DCC — the lesson of separating installation from actual operation',
    },
    description: {
      mn: 'Нэгдсэн холбооны сүлжээтэй ч «smart mode»-оос гарсан тоолуурын асуудал гарсан. PowerGrid суурилуулсан, холбогдсон, төлбөрт бэлэн тоолуурыг тусад нь тоолно.',
      en: 'Despite a single national communications network, meters dropping out of "smart mode" became a problem. PowerGrid counts installed, communicating and billing-ready meters separately.',
    },
    metricLabel: { mn: 'PowerGrid-д', en: 'In PowerGrid' },
    metricValue: { mn: 'Нэн түрүүнд', en: 'Top priority' },
  },
  {
    image: exp3,
    country: { mn: 'Франц', en: 'France' },
    title: {
      mn: 'Enedis Linky — хэрэглэгч төвтэй хэмжилт ба өгөгдлийн эрх',
      en: 'Enedis Linky — customer-centred metering and data rights',
    },
    description: {
      mn: 'Linky үйлчилгээ хэрэглэгчид өөрийн хэрэглээний өгөгдөлд хандах эрхийг олгосон. PowerGrid өгөгдлийн зориулалт, хэрэглэгчийн харагдацыг суурь үеэс тусгана.',
      en: 'Linky gave customers access to their own consumption data. PowerGrid builds data purpose and the customer view in from the foundation phase.',
    },
    metricLabel: { mn: 'PowerGrid-д', en: 'In PowerGrid' },
    metricValue: { mn: 'Суурь үеэс', en: 'From the foundation phase' },
  },
  {
    image: exp4,
    country: { mn: 'Узбекистан', en: 'Uzbekistan' },
    title: {
      mn: 'Олон үйлдвэрлэгч, баланс ба billing-ийн интеграц',
      en: 'Multiple vendors, balance and billing integration',
    },
    description: {
      mn: 'Олон үйлдвэрлэгчийн тоолуурыг нэг баланс, төлбөрийн системд нэгтгэсэн туршлага. PowerGrid-д TEAMI-аас шилжих, төлбөрийн тулгалт хийх суурь болно.',
      en: "Experience bringing meters from many vendors into one balance and billing system. For PowerGrid it is the basis for migrating from TEAMI and reconciling payments.",
    },
    metricLabel: { mn: 'PowerGrid-д', en: 'In PowerGrid' },
    metricValue: { mn: 'Нэн түрүүнд', en: 'Top priority' },
  },
]

const CaseLessons = () => {
  const { t } = useLang()
  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-7.5">
          <div>
            <div className="text-default-950 text-sm">
              {t('Судалгаанаас авсан сургамж', 'Lessons from our research')}
            </div>
          </div>
          <div>
            <Link to="/contact" className="text-default-950 flex items-center gap-1 underline">
              <div>{t('Хамтран ажиллах', 'Work with us')}</div>
              <Icon icon="tabler:arrow-up-right" />
            </Link>
          </div>
        </div>

        <hr className="border-default-200 my-4 md:my-10 lg:my-12.5" />

        {casesData.map((item, index) => (
          <div key={index}>
            {index > 0 && <hr className="border-default-200" />}
            <div className="hs-accordion rounded-2xl">
              <button className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 py-4 text-start md:py-10 lg:py-12.5">
                <div className="space-y-2.5">
                  <div className="border-default-200 inline-flex rounded-md border px-2.5 py-1.5 text-sm/none font-medium">
                    {t(item.country)}
                  </div>
                  <h3 className="text-base md:text-3xl">{t(item.title)}</h3>
                </div>
                <div className="relative flex size-4.5 shrink-0 items-center justify-center">
                  <i className="bg-default-950 hs-accordion-active:rotate-90 absolute flex h-4.5 w-0.5 transition duration-500"></i>
                  <i className="bg-default-950 flex h-0.5 w-4.5"></i>
                </div>
              </button>
              <div className="hs-accordion-content hidden w-full overflow-hidden text-start transition-[height] duration-300">
                <div className="mb-12.5 grid gap-25 lg:grid-cols-7">
                  <div className="lg:col-span-3">
                    <div className="flex flex-col justify-between gap-10 md:gap-25 lg:gap-50">
                      <p className="text-default-600">{t(item.description)}</p>
                      <div className="bg-default-100 flex items-center justify-between gap-2.5 rounded-lg p-2 ps-4">
                        <div className="flex flex-wrap gap-1.25">
                          <div className="text-sm">{t(item.metricLabel)}</div>
                          <div className="text-default-950 font-medium">{t(item.metricValue)}</div>
                        </div>
                        <Link
                          to="/experience"
                          className="group bg-primary inline-flex items-center justify-center rounded-lg px-4.5 py-3 font-medium text-nowrap text-white transition-all"
                        >
                          <span className="relative block overflow-hidden">
                            <span className="block duration-[1.125s] group-hover:-translate-y-7">
                              {t('Дэлгэрэнгүй', 'Learn more')}
                            </span>
                            <span className="absolute inset-s-0 top-7 duration-[1.125s] group-hover:top-0">
                              {t('Дэлгэрэнгүй', 'Learn more')}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <img
                      src={item.image}
                      alt={t(item.country)}
                      className="size-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-7.5 grid">
          <Link
            to="/experience"
            className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
          >
            <span className="relative block overflow-hidden">
              <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                {t('Бүх туршлагыг үзэх', 'See all international experience')}
              </span>
              <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                {t('Бүх туршлагыг үзэх', 'See all international experience')}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseLessons
