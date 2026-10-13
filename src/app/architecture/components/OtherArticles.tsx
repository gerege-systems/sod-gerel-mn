import { Link } from 'react-router-dom'
import article2 from '@/assets/images/knowledge/server-rack.webp'
import article3 from '@/assets/images/knowledge/control-switches.webp'
import article4 from '@/assets/images/knowledge/pylons-field.webp'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

type ArticleType = {
  image: ImageSrc
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
    <section className="bg-stage py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Бусад нийтлэл', 'More articles')} right={t('Мэдлэгийн сан', 'Knowledge base')} />
        <h2 className="h-section mt-10 mb-12 lg:mt-14">
          {t('Бусад нийтлэл', 'More articles')}
          <span className="accent">.</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {otherArticlesData.map((article, index) => (
            <Link
              key={index}
              to={article.link}
              className="group card flex flex-col p-2.5 transition-transform duration-300 ease-soft hover:-translate-y-0.5"
            >
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={article.image}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                  alt={t(article.title)}
                />
              </div>
              <div className="flex grow items-end justify-between gap-5 p-4">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="chip chip--up">{t(article.category)}</span>
                    <span className="meta">{article.date}</span>
                  </div>
                  <h3 className="text-xl">{t(article.title)}</h3>
                </div>
                <span className="arrow-chip" aria-hidden="true">
                  <Icon icon="tabler:arrow-up-right" className="size-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherArticles
