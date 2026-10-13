import article1 from '@/assets/images/knowledge/data-center.webp'
import article2 from '@/assets/images/knowledge/server-rack.webp'
import article3 from '@/assets/images/knowledge/control-switches.webp'
import article4 from '@/assets/images/knowledge/pylons-field.webp'
import article5 from '@/assets/images/knowledge/server-room.webp'
import article6 from '@/assets/images/knowledge/meters-wall.webp'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import { useLang, type Text } from '@/i18n/context'

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
  {
    image: article5,
    category: { mn: 'Эрх ба нууцлал', en: 'Access & privacy' },
    date: '2026.10.02',
    title: {
      mn: 'ЕХ-ны 2023/1162 журам ба иргэний «Share My Data» эрх',
      en: 'EU 2023/1162 and the customer right to "Share My Data"',
    },
    link: '/architecture',
  },
  {
    image: article6,
    category: { mn: 'Төлбөр', en: 'Billing' },
    date: '2026.10.02',
    title: {
      mn: 'Тайлбарлагдах төлбөр: тариф, ledger ба shadow billing',
      en: 'Billing you can explain: tariffs, ledger and shadow billing',
    },
    link: '/architecture',
  },
]

const Index = () => {
  const { t } = useLang()
  return (
    <>
      <PageMeta title={{ mn: 'Мэдлэг', en: 'Knowledge' }} />
      <Navbar />
      <section className="relative size-full overflow-hidden py-10 md:py-14.5">
        <div className="container">
          <div className="mb-12.5 text-center">
            <h1 className="mb-2.5 text-4xl md:text-5xl lg:text-[56px]">{t('Мэдлэгийн сан', 'Knowledge base')}</h1>
            <p className="mx-auto md:max-w-1/2">
              {t(
                'PowerGrid-ийн олон улсын судалгаа, архитектур, хэрэгжүүлэх төлөвлөгөөнөөс товчилсон нийтлэлүүд.',
                'Short articles drawn from PowerGrid’s international research, architecture and implementation plan.',
              )}
            </p>
          </div>
          <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
            {articlesData.map((article, index) => (
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
      <Footer />
    </>
  )
}

export default Index
