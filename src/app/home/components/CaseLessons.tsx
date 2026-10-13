import { Link } from 'react-router-dom'
import exp1 from '@/assets/images/experience/sydney.webp'
import exp2 from '@/assets/images/experience/london.webp'
import exp3 from '@/assets/images/experience/paris.webp'
import exp4 from '@/assets/images/experience/tashkent.webp'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

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
    <section className="pb-15 md:pb-25 lg:pb-27.5">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="grow">
            <SectionMeta left={t('Судалгаанаас авсан сургамж', 'Lessons from our research')} right="05 — 08" />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="meta">
            {String(casesData.length).padStart(2, '0')} {t('улс', 'countries')}
          </p>
          <Link to="/contact" className="chip">
            {t('Хамтран ажиллах', 'Work with us')}
            <Icon icon="tabler:arrow-up-right" className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-4">
          {casesData.map((item, index) => (
            <div key={index}>
              <hr className="border-hair" />
              <div className="hs-accordion">
                <button className="hs-accordion-toggle flex w-full items-center justify-between gap-4 py-6 text-start md:py-8 lg:py-10">
                  <div className="flex items-start gap-5 md:items-center md:gap-10">
                    <span className="meta mt-1 hidden w-8 shrink-0 tabular-nums md:mt-0 md:block">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-3">
                      <span className="chip chip--up">{t(item.country)}</span>
                      <h3 className="text-xl md:text-3xl">{t(item.title)}</h3>
                    </div>
                  </div>
                  <span className="relative flex size-4.5 shrink-0 items-center justify-center" aria-hidden="true">
                    <i className="bg-ink hs-accordion-active:rotate-90 absolute flex h-4.5 w-0.5 transition duration-500"></i>
                    <i className="bg-ink flex h-0.5 w-4.5"></i>
                  </span>
                </button>
                <div className="hs-accordion-content hidden w-full overflow-hidden text-start transition-[height] duration-300">
                  <div className="mb-10 grid gap-8 lg:grid-cols-7 lg:gap-16 lg:ps-18">
                    <div className="lg:col-span-3">
                      <div className="flex h-full flex-col justify-between gap-8">
                        <p className="text-default-600">{t(item.description)}</p>
                        <div className="bg-stage flex flex-wrap items-center justify-between gap-3 rounded-card p-2 ps-5">
                          <div className="flex flex-col py-1">
                            <span className="meta">{t(item.metricLabel)}</span>
                            <span className="text-ink mt-1 text-lg font-semibold tracking-[-0.02em]">
                              {t(item.metricValue)}
                            </span>
                          </div>
                          <PillButton to="/experience" variant="dark" size="sm">
                            {t('Дэлгэрэнгүй', 'Learn more')}
                          </PillButton>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-4">
                      <img
                        src={item.image}
                        alt={t(item.country)}
                        className="rounded-card size-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <hr className="border-hair" />
        </div>

        <div className="mt-10">
          <PillButton to="/experience" variant="dark">
            {t('Бүх туршлагыг үзэх', 'See all international experience')}
          </PillButton>
        </div>
      </div>
    </section>
  )
}

export default CaseLessons
