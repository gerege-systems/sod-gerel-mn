import { Link } from 'react-router-dom'
import article2 from '@/assets/images/knowledge/server-rack.webp'
import article3 from '@/assets/images/knowledge/control-switches.webp'
import article4 from '@/assets/images/knowledge/pylons-field.webp'
import { useLang, type Text } from '@/i18n/context'
import { SectionHeading } from '@/components/site/ui'

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
    title: { mn: 'Түүхий заалтыг яагаад хэзээ ч дарж засдаггүй вэ', en: 'Why raw readings are never overwritten' },
    link: '/architecture',
  },
  {
    image: article3,
    category: { mn: 'Команд', en: 'Commands' },
    date: '2026.10.02',
    title: { mn: '«Амжилттай» гэж хэзээ хэлэх вэ: командын төлөвийн машин', en: 'When can we say "done"? The command state machine' },
    link: '/architecture',
  },
  {
    image: article4,
    category: { mn: 'Багтаамж', en: 'Capacity' },
    date: '2026.10.02',
    title: { mn: 'Нэг сая тоолуур: өдөрт 96 сая бичлэг', en: 'One million meters: 96 million records a day' },
    link: '/architecture',
  },
]

const OtherArticles = () => {
  const { t } = useLang()
  return (
    <section className="pgl-section pgl-section--sky">
      <div className="pgl-container">
        <SectionHeading
          align="split"
          label={t('Мэдлэгийн сан', 'KNOWLEDGE BASE')}
          title={t('Бусад нийтлэл', 'More articles')}
          body={t('Олон улсын судалгаа, архитектурын шийдвэр, хэрэгжүүлэх төлөвлөгөөнөөс товчилсон нийтлэлүүд.', 'Short articles drawn from international research, architecture decisions and the implementation plan.')}
        />
        <div className="pgl-cards">
          {otherArticlesData.map((article) => (
            <Link key={article.title.en} to={article.link} className="pgl-card" data-tilt>
              <img src={article.image} alt="" width={800} height={600} loading="lazy" decoding="async" />
              <div className="pgl-card__body">
                <div className="pgl-card__meta">
                  <span className="pgl-tag">{t(article.category)}</span>
                  <span>{article.date}</span>
                </div>
                <h3>{t(article.title)}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherArticles
