import { Link } from 'react-router-dom'
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

const otherArticlesData: ArticleType[] = [
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
      en: 'When can we say "done"? The command state machine',
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

const OtherArticles = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-5 gap-4 text-center md:mb-7.5 lg:mb-15">
          <h2 className="text-4xl lg:text-[44px]">{t('Бусад нийтлэл', 'More articles')}</h2>
        </div>
        <div className="mb-10 grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {otherArticlesData.map((article, index) => (
            <div
              key={index}
              className="group bg-default-100 relative overflow-hidden rounded-lg p-2"
            >
              <Link to={article.link} className="absolute inset-0 z-10"></Link>
              <div className="overflow-hidden rounded">
                <img
                  src={article.image}
                  className="size-full rounded object-cover transition-all duration-300 group-hover:scale-105"
                  alt={t(article.title)}
                />
              </div>
              <div className="flex items-end justify-between gap-5 p-4">
                <div>
                  <div className="text-default-500 mb-3 flex items-center gap-3">
                    <span className="border-default-200 rounded-md border px-2 py-1 text-xs font-medium">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherArticles
