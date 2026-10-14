import fieldEngineer from '@/assets/images/other/field-engineer.jpg'
import logoIcon from '@/assets/images/powergrid-icon.svg'
import { useLang } from '@/i18n/context'
import { Tile } from '@/components/site/ui'

const Story = () => {
  const { t } = useLang()

  return (
    <section className="pgl-section pgl-section--sky">
      <div className="pgl-container">
        <div className="pgl-split">
          <div className="pgl-split__copy">
            <span className="pgl-tag">{t('Бидний тухай', 'ABOUT US')}</span>
            <h2>
              {t('Судалгаанаас төрсөн', 'A platform born')}
              <em>{t('платформ.', 'from research.')}</em>
            </h2>
            <p>
              {t(
                'PowerGrid нэг бүтээгдэхүүнийг хуулбарлахаас эхэлсэнгүй. Финландын өгөгдөл солилцоо, Австралийн заалтын чанар ба хувилбарын түүх, Францын өгөгдөлд хандах зохицуулалт, Японы байнгын ашиглалт, Энэтхэгийн хэрэглэгчийн хамгаалалт — улс бүрийн хамгийн сайн шийдлийг судалж, Монголын тариф, хууль, сүлжээнд тохируулсан.',
                "PowerGrid did not start by copying one product. Finland's data exchange, Australia's reading quality and version history, France's data-access rules, Japan's continuous operation, India's consumer protection — we studied the best answer from each country and fitted it to Mongolia's tariffs, laws and grid.",
              )}
            </p>
            <p>
              {t(
                'Эхний хөрөнгө оруулалтыг бодит заалт цуглуулах, өгөгдлийн чанар, тоолуурын бүртгэл, сүлжээний холбоос, баланс, командын баталгаажуулалтад төвлөрүүлнэ. Төлбөр болон хэрэглэгчийн үйлчилгээ эдгээр баталгаатай өгөгдөл дээр нэмэгдэнэ. Нэвтрүүлэлт нэг бүтэн трансформаторын бүлгээс (~1,000 тоолуур) эхэлж, 10,000 → 100,000 → 500,000 → 1,000,000 гэсэн шатаар өргөжих бөгөөд шат бүрд хүлээн авах босгыг нотолгоотойгоор хангасны дараа л дараагийнх руу шилжинэ.',
                'The first investment goes into real meter collection, data quality, the meter registry, grid connectivity, balance and command verification. Billing and customer service are built on top of that verified data. Rollout starts with one complete transformer group (~1,000 meters) and expands in stages of 10,000 → 100,000 → 500,000 → 1,000,000, moving to the next stage only once each stage has met its acceptance thresholds with evidence.',
              )}
            </p>
            <ul className="pgl-contact__rows" style={{ gridTemplateColumns: 'minmax(0, 320px)' }}>
              <li>
                <Tile image={logoIcon} size="sm" />
                <div>
                  <b>Gerege Systems</b>
                  <small>{t('PowerGrid-ийн хөгжүүлэгч', 'Developer of PowerGrid')}</small>
                </div>
              </li>
            </ul>
          </div>
          <figure>
            <img src={fieldEngineer} alt={t('Талбайн инженер', 'Field engineer')} width={1200} height={900} loading="lazy" decoding="async" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Story
