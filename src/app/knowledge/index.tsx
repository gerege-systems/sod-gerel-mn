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
import SectionMeta from '@/components/SectionMeta'
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
          <SectionMeta left={t('Мэдлэгийн сан', 'Knowledge base')} right="PowerGrid" className="mb-10 md:mb-14" />
          <div className="mx-auto mb-12 max-w-[52rem] text-center lg:mb-16">
            <h1 className="display mixed">
              <b>{t('Мэдлэгийн', 'Knowledge')}</b> {t('сан', 'base')}
              <span className="accent">.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[36rem]">
              {t(
                'PowerGrid-ийн олон улсын судалгаа, архитектур, хэрэгжүүлэх төлөвлөгөөнөөс товчилсон нийтлэлүүд.',
                'Short articles drawn from PowerGrid’s international research, architecture and implementation plan.',
              )}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {articlesData.map((article, index) => (
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
      <Footer />
    </>
  )
}

export default Index
