import { Link } from 'react-router-dom'
import article1 from '@/assets/images/knowledge/data-center.webp'
import article2 from '@/assets/images/knowledge/server-rack.webp'
import article3 from '@/assets/images/knowledge/control-switches.webp'
import article4 from '@/assets/images/knowledge/pylons-field.webp'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

type ArticleType = {
  image: ImageSrc
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
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Мэдлэгийн сан', 'Knowledge base')} right="07 — 08" />
        <div className="mt-10 mb-12 flex flex-wrap items-end justify-between gap-8 lg:mt-14">
          <div className="max-w-[44rem]">
            <h2 className="h-section mixed">
              <b>{t('Судалгаа', 'Research')}</b> {t('ба шийдвэрүүд', 'and decisions')}
              <span className="accent">.</span>
            </h2>
            <p className="mt-6 max-w-[34rem]">
              {t(
                'Олон улсын судалгаа, архитектурын шийдвэр, хэрэгжүүлэх төлөвлөгөөнөөс товчилсон нийтлэлүүд.',
                'Short articles drawn from international research, architecture decisions and the implementation plan.',
              )}
            </p>
          </div>
          <PillButton to="/knowledge" variant="dark">
            {t('Бүгдийг үзэх', 'View all')}
          </PillButton>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
          {articlesData.map((article, index) => (
            <Link
              key={index}
              to={article.link}
              className="group card grid items-center gap-3 p-2.5 transition-transform duration-300 ease-soft hover:-translate-y-0.5 lg:grid-cols-4 lg:gap-5 lg:pe-6"
            >
              <div className="w-full overflow-hidden rounded-[20px] md:h-60 lg:h-full">
                <img
                  src={article.image}
                  className="size-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
                  alt={t(article.title)}
                />
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-end justify-between gap-5 p-3 lg:p-2">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Knowledge
