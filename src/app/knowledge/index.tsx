import { Link } from 'react-router-dom'
import article1 from '@/assets/images/knowledge/data-center.webp'
import article2 from '@/assets/images/knowledge/server-rack.webp'
import article3 from '@/assets/images/knowledge/control-switches.webp'
import article4 from '@/assets/images/knowledge/pylons-field.webp'
import article5 from '@/assets/images/knowledge/server-room.webp'
import article6 from '@/assets/images/knowledge/meters-wall.webp'
import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import Reveal from '@/components/site/Reveal'
import { PageCta, PageHero, Pill } from '@/components/site/ui'
import { useLang, type Text } from '@/i18n/context'

type ArticleType = { image: ImageSrc; category: Text; date: string; title: Text; link: string }

const articlesData: ArticleType[] = [
  { image: article1, category: { mn: 'Архитектур', en: 'Architecture' }, date: '2026.10.02', title: { mn: 'Яагаад гурван тусдаа систем: Core, Grouping, Analytics', en: 'Why three separate systems: Core, Grouping, Analytics' }, link: '/architecture' },
  { image: article2, category: { mn: 'Өгөгдлийн чанар', en: 'Data quality' }, date: '2026.10.02', title: { mn: 'Түүхий заалтыг яагаад хэзээ ч дарж засдаггүй вэ', en: 'Why raw readings are never overwritten' }, link: '/architecture' },
  { image: article3, category: { mn: 'Команд', en: 'Commands' }, date: '2026.10.02', title: { mn: '«Амжилттай» гэж хэзээ хэлэх вэ: командын төлөвийн машин', en: 'When can we say "done"? The command state machine' }, link: '/architecture' },
  { image: article4, category: { mn: 'Багтаамж', en: 'Capacity' }, date: '2026.10.02', title: { mn: 'Нэг сая тоолуур: өдөрт 96 сая бичлэг', en: 'One million meters: 96 million records a day' }, link: '/architecture' },
  { image: article5, category: { mn: 'Эрх ба нууцлал', en: 'Access & privacy' }, date: '2026.10.02', title: { mn: 'ЕХ-ны 2023/1162 журам ба иргэний «Share My Data» эрх', en: 'EU 2023/1162 and the customer right to "Share My Data"' }, link: '/trust' },
  { image: article6, category: { mn: 'Төлбөр', en: 'Billing' }, date: '2026.10.02', title: { mn: 'Тайлбарлагдах төлбөр: тариф, ledger ба shadow billing', en: 'Billing you can explain: tariffs, ledger and shadow billing' }, link: '/platform' },
]

const Index = () => {
  const { t } = useLang()

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Мэдлэг', en: 'Knowledge' }} />

      <PageHero
        center
        eyebrow={t('Мэдлэгийн сан', 'Knowledge base')}
        title={t('Судалгаа', 'Research')}
        accent={t('ба шийдвэрүүд.', 'and decisions.')}
        body={t(
          'PowerGrid-ийн олон улсын судалгаа, архитектур, хэрэгжүүлэх төлөвлөгөөнөөс товчилсон нийтлэлүүд. Шийдвэр бүр ADR-ээр батлагдана.',
          'Short articles drawn from PowerGrid’s international research, architecture and implementation plan. Every decision is confirmed through an ADR.',
        )}
      />

      <Reveal effect="rise">
        <section className="pgl-section pgl-section--tight pgl-section--sky">
          <div className="pgl-container">
            <div className="pgl-cards">
              {articlesData.map((article) => (
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
      </Reveal>

      <Reveal effect="fade-up">
        <PageCta
          title={t('Асуулт үлдсэн үү?', 'Still have a question?')}
          body={t('Платформын хамрах хүрээ, тоолуурын нийцэл, хугацаа, нууцлалын талаарх түгээмэл асуултуудыг платформын хуудаснаас үзнэ үү.', 'See the most common questions about scope, meter compatibility, timeline and privacy on the platform page.')}
          actions={
            <>
              <Pill to="/platform#platform-faq" variant="solid" size="lg">
                {t('Түгээмэл асуулт', 'FAQ')}
              </Pill>
              <Pill to="/contact" variant="onnavy" size="lg" icon={false}>
                {t('Холбогдох', 'Contact')}
              </Pill>
            </>
          }
        />
      </Reveal>
    </SiteShell>
  )
}

export default Index
