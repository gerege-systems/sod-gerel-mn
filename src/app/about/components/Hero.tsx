import sunrise from '@/assets/images/other/ulaanbaatar-sunrise.jpg'
import { useLang } from '@/i18n/context'
import { PageHero, Pill } from '@/components/site/ui'

const Hero = () => {
  const { t } = useLang()

  return (
    <>
      <PageHero
        eyebrow={t('Бидний тухай', 'About us')}
        title={t('Эрчим хүчний хэмжилтийг', 'Energy metering')}
        accent={t('нэг баталгаатай эх сурвалжид.', 'in one verified source of truth.')}
        body={t(
          'PowerGrid нь тоолуурын заалтаас тайлбарлаж болох төлбөр, баталгаатай команд хүртэлх урсгалыг Монгол Улсын хэмжээнд нэг платформд нэгтгэнэ.',
          'PowerGrid brings the whole flow — from meter reading to explainable billing and verified commands — into one platform for all of Mongolia.',
        )}
        actions={
          <>
            <Pill to="/contact" variant="solid">
              {t('Холбогдох', 'Contact us')}
            </Pill>
            <Pill to="/platform" variant="ghost" icon={false}>
              {t('Платформ', 'The platform')}
            </Pill>
          </>
        }
      >
        <img src={sunrise} alt={t('Улаанбаатарын өглөө', 'Ulaanbaatar at sunrise')} width={1200} height={900} />
      </PageHero>

      <section className="pgl-section pgl-section--tight">
        <div className="pgl-container">
          <dl className="pgl-stats">
            <div>
              <dd>~1,000,000</dd>
              <dt>{t('Тоолуурт зориулсан багтаамж', 'Meters it is engineered for')}</dt>
              <small>{t('захиалагчийн төлөвлөлтийн таамаглал — албан ёсны тооллого биш', "the client's planning assumption, not an official count")}</small>
            </div>
            <div>
              <dd>
                10<em>+</em>
              </dd>
              <dt>{t('Улсын туршлагыг судалж, шилдгийг нь авсан', 'Countries studied for the best of each')}</dt>
              <small>{t('олон улсын судалгаа v1.3', 'international research v1.3')}</small>
            </div>
            <div>
              <dd>0</dd>
              <dt>{t('Давхардсан төлбөр, худал VERIFIED — зорилт', 'Duplicate payments, false VERIFIED — target')}</dt>
              <small>{t('хүлээн авах босго, шат бүрд нотолгоотой', 'acceptance thresholds, evidenced at every stage')}</small>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}

export default Hero
