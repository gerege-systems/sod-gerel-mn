import { Link } from 'react-router-dom'
import article1 from '@/assets/images/knowledge/1.webp'
import article2 from '@/assets/images/knowledge/2.webp'
import article3 from '@/assets/images/knowledge/3.webp'
import article4 from '@/assets/images/knowledge/4.webp'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'

type ArticleType = {
  image: StaticImageData
  category: Text
  date: string
  title: Text
  link: string
}

const articlesData: ArticleType[] = [
  {
    image: article1,
    category: { mn: 'Архитектур', en: 'Architecture' },
    date: '2026.10.02',
    title: {
      mn: 'Яагаад гурван тусдаа систем: Core, Grouping, Analytics',
      en: 'Why three separate systems: Core, Grouping, Analytics',
    },
    link: '/architecture',
  },
  {
    image: article2,
    category: { mn: 'Өгөгдлийн чанар', en: 'Data quality' },
    date: '2026.10.02',
    title: {
      mn: 'Түүхий заалтыг яагаад хэзээ ч дарж засдаггүй вэ',
      en: 'Why raw readings are never overwritten',
    },
    link: '/architecture',
  },
  {
    image: article3,
    category: { mn: 'Команд', en: 'Commands' },
    date: '2026.10.02',
    title: {
      mn: '«Амжилттай» гэж хэзээ хэлэх вэ: командын төлөвийн машин',
      en: 'When to say "done": the command state machine',
    },
    link: '/architecture',
  },
  {
    image: article4,
    category: { mn: 'Багтаамж', en: 'Capacity' },
    date: '2026.10.02',
    title: {
      mn: 'Нэг сая тоолуур: өдөрт 96 сая бичлэг',
      en: 'One million meters: 96 million records a day',
    },
    link: '/architecture',
  },
]

const Knowledge = () => {
  const { t } = useLang()
  return (
    <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-15 flex flex-wrap justify-between gap-7.5 lg:mb-12.5">
          <div>
            <div className="text-default-950 mb-2 text-sm">{t('Мэдлэгийн сан', 'Knowledge base')}</div>
            <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
              {t('Судалгаа ба шийдвэрүүд', 'Research and decisions')}
            </h2>
            <p className="lg:max-w-3/4">
              {t(
                'Олон улсын судалгаа, архитектурын шийдвэр, хэрэгжүүлэх төлөвлөгөөнөөс товчилсон нийтлэлүүд.',
                'Short articles drawn from international research, architecture decisions and the implementation plan.',
              )}
            </p>
          </div>
          <div className="place-content-end text-end">
            <Link
              to="/knowledge"
              className="group bg-primary inline-flex items-center justify-center rounded-lg px-10 py-5 font-medium text-white transition-all"
            >
              <span className="relative block overflow-hidden">
                <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  {t('Бүгдийг үзэх', 'View all')}
                </span>
                <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  {t('Бүгдийг үзэх', 'View all')}
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="grid gap-2.5 md:grid-cols-2 lg:gap-6">
          {articlesData.map((article, index) => (
            <Link
              key={index}
              to={article.link}
              className="group grid items-center gap-2.5 rounded-xl bg-white p-2 transition lg:grid-cols-4 lg:gap-4 lg:pe-6"
            >
              <div className="w-full overflow-hidden rounded-lg md:h-75 lg:h-full">
                <img
                  src={article.image}
                  className="size-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                  alt={t(article.title)}
                />
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-end justify-between gap-5 p-4">
                  <div>
                    <div className="text-default-500 mb-3 flex items-center gap-3">
                      <span className="bg-default-100 rounded-md px-2 py-1 text-xs font-medium">
                        {t(article.category)}
                      </span>
                      <span className="text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-xl">{t(article.title)}</h3>
                  </div>
                  <div className="grow">
                    <Icon
                      icon="tabler:arrow-narrow-right"
                      className="size-6 -rotate-45 transition duration-300 group-hover:rotate-0"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Knowledge
