import exp1 from '@/assets/images/experience/sydney.webp'
import exp2 from '@/assets/images/experience/london.webp'
import exp3 from '@/assets/images/experience/paris.webp'
import exp4 from '@/assets/images/experience/tashkent.webp'
import featured from '@/assets/images/other/helsinki-harbour.webp'
import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import Reveal from '@/components/site/Reveal'
import { PageCta, PageHero, Pill, SectionHeading } from '@/components/site/ui'
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
    title: { mn: 'AEMO — заалтын төлөв, хувилбар ба дахин тооцоолол', en: 'AEMO — reading status, versions and recalculation' },
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
    title: { mn: 'Smart DCC — суурилуулалт ба бодит ажиллагааг салгах сургамж', en: 'Smart DCC — the lesson of separating installation from actual operation' },
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
    title: { mn: 'Enedis Linky — хэрэглэгч төвтэй хэмжилт ба өгөгдлийн эрх', en: 'Enedis Linky — customer-centred metering and data rights' },
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
    title: { mn: 'Олон үйлдвэрлэгч, баланс ба billing-ийн интеграц', en: 'Multiple vendors, balance and billing integration' },
    description: {
      mn: 'Олон үйлдвэрлэгчийн тоолуурыг нэг баланс, төлбөрийн системд нэгтгэсэн туршлага. PowerGrid-д TEAMI-аас шилжих, төлбөрийн тулгалт хийх суурь болно.',
      en: 'Experience bringing meters from many vendors into one balance and billing system. For PowerGrid it is the basis for migrating from TEAMI and reconciling payments.',
    },
    metricLabel: { mn: 'PowerGrid-д', en: 'In PowerGrid' },
    metricValue: { mn: 'Нэн түрүүнд', en: 'Top priority' },
  },
]

const Index = () => {
  const { t } = useLang()

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Олон улсын туршлага', en: 'International experience' }} />

      <PageHero
        eyebrow={t('Олон улсын туршлага', 'International experience')}
        title={t('Улс бүрээс хамгийн сайн шийдлийг нь —', 'The best answer from each country —')}
        accent={t('Монголд тохируулсан.', 'fitted to Mongolia.')}
        body={t(
          'Узбекистан болон дэлхийн өөр есөн улс, ЕХ-ны журмын туршлагаас PowerGrid-д шууд хамаатай шаардлагыг ялгаж авсан. Эрэмбэ нь чансаа биш — хэрэгжүүлэх дараалал.',
          'We distilled the requirements that matter directly to PowerGrid from Uzbekistan, nine other countries and EU regulation. The order is not a ranking — it is the implementation sequence.',
        )}
        actions={
          <Pill to="/knowledge" variant="ghost">
            {t('Мэдлэгийн сан', 'Knowledge base')}
          </Pill>
        }
      >
        <img src={featured} alt={t('Хельсинкийн боомт', 'Helsinki harbour')} width={1200} height={900} />
        <span className="pgl-sample" style={{ position: 'absolute', left: 14, bottom: 14 }}>
          {t('Финланд · Fingrid Datahub', 'Finland · Fingrid Datahub')}
        </span>
      </PageHero>

      <Reveal effect="rise">
        <section className="pgl-section pgl-section--sky">
          <div className="pgl-container">
            <SectionHeading
              align="split"
              label={t('Судалгаанаас авсан сургамж', 'LESSONS FROM OUR RESEARCH')}
              title={t('Дөрвөн улс, дөрвөн сургамж', 'Four countries, four lessons')}
              body={t(
                'Финландын Fingrid Datahub — зөвшөөрөгдсөн талуудын нэгдсэн өгөгдөл солилцоо — хоёр хэлний загварын эх сурвалж. Доорх дөрөв нь PowerGrid-ийн эхний үе шатуудад шууд орсон.',
                "Finland's Fingrid Datahub — a single data exchange for authorised parties — is the source of the data-exchange model. The four below went directly into PowerGrid's first phases.",
              )}
            />
            <div className="pgl-cards pgl-cards--2">
              {casesData.map((item, index) => (
                <article key={item.country.en} className="pgl-card" data-tilt>
                  <img src={item.image} alt={t(item.country)} width={1200} height={900} loading="lazy" decoding="async" />
                  <div className="pgl-card__body">
                    <div className="pgl-card__meta">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span className="pgl-tag">{t(item.country)}</span>
                    </div>
                    <h3>{t(item.title)}</h3>
                    <p>{t(item.description)}</p>
                    <div className="pgl-chips" style={{ marginTop: 6 }}>
                      <span className="pgl-chip pgl-chip--muted">{t(item.metricLabel)}</span>
                      <span className="pgl-chip pgl-chip--blue">{t(item.metricValue)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fade-up">
        <PageCta
          title={t('Нэг бүтээгдэхүүнийг хуулбарласангүй.', 'We did not copy one product.')}
          body={t(
            'Финланд, Австрали, Франц, Их Британи, Япон, Энэтхэг, Узбекистан болон ЕХ-ны 2023/1162 журмын лавлагаа загвар — улс бүрээс хамгийн сайн шийдлийг нь авч, Монголын тариф, хууль, сүлжээнд тохируулав.',
            'Finland, Australia, France, the UK, Japan, India, Uzbekistan and the EU 2023/1162 reference model — the best answer from each, fitted to Mongolia’s tariffs, laws and grid.',
          )}
          actions={
            <>
              <Pill to="/platform" variant="solid" size="lg">
                {t('Платформыг үзэх', 'See the platform')}
              </Pill>
              <Pill to="/contact" variant="onnavy" size="lg" icon={false}>
                {t('Хамтран ажиллах', 'Work with us')}
              </Pill>
            </>
          }
        />
      </Reveal>
    </SiteShell>
  )
}

export default Index
