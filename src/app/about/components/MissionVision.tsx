import controlRoom from '@/assets/images/other/story-control-room.jpg'
import { useLang } from '@/i18n/context'
import { CheckList, SectionHeading } from '@/components/site/ui'

const MissionVision = () => {
  const { t } = useLang()

  return (
    <section className="pgl-section">
      <div className="pgl-container">
        <SectionHeading label={t('Эрхэм зорилго', 'MISSION')} title={t('Эрхэм зорилго ба алсын хараа', 'Mission and vision')} />
        <div className="pgl-split pgl-split--reverse" style={{ alignItems: 'stretch' }}>
          <figure>
            <img src={controlRoom} alt={t('Удирдлагын төв', 'Control centre')} width={1200} height={900} loading="lazy" decoding="async" style={{ height: '100%', aspectRatio: 'auto' }} />
          </figure>
          <div className="grid gap-3.5">
            <article className="pgl-card pgl-card--plain pgl-card--navy">
              <span className="pgl-tag pgl-tag--onnavy">{t('Эрхэм зорилго', 'Mission')}</span>
              <p style={{ color: 'var(--pg-on-navy)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>
                {t(
                  'Тоолуурын бодит заалтыг эх төхөөрөмжөөс нь авч, хэзээ ч дарж бичихгүйгээр хадгалж, шалгаж, баланс, тариф, төлбөр хүртэл тайлбарлаж болох нэг урсгалд холбох. Нэхэмжлэл, баланс, команд бүрийг эх заалт руу нь буцааж мөрдөж болохуйц, иргэн өөрийн өгөгдлийн эзэн байх үндэсний хэмжилтийн платформыг бүтээх.',
                  'To take every actual meter reading from its source device, keep it without ever overwriting it, validate it, and carry it through balance, tariff and billing in one explainable flow. To build a national metering platform where every invoice, balance and command traces back to its source reading, and customers own their data.',
                )}
              </p>
            </article>
            <article className="pgl-card pgl-card--plain">
              <span className="pgl-tag">{t('Алсын хараа', 'Vision')}</span>
              <h3>{t('Монгол Улсын 1,000,000 тоолуурын хэмжилтийн цорын ганц баталгаатай эх сурвалж болох.', "To become the single verified source of metering truth for Mongolia's 1,000,000 meters.")}</h3>
              <CheckList
                items={[
                  t('Нэгдсэн хэмжилтийн эх сурвалж', 'A unified source of metering truth'),
                  t('Тайлбарлагдах төлбөр', 'Billing you can explain'),
                  t('Иргэн өөрийн өгөгдлийн эзэн', 'Customers own their data'),
                ]}
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision
