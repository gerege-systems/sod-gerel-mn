import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal from '@/components/site/Reveal'
import { SectionHeading, Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

/**
 * Заалт ирснээс итгэгдэх хүртэл юу болдог вэ — цайвар хөх самбар дотор.
 *
 * Баруун талын карт нь нэг багцын зураг: хувилбар, интервалын тоо, quarantine,
 * тооцоолсон тоо, трансформаторын зөрүү, өмнөх багцын checksum. «Жишээ» гэж
 * тэмдэглэгдсэн — доторх юу ч хэмжигдээгүй. 96 нь дүрэм (15 мин × 96 = нэг
 * өдөр), зөрүү 0.0 нь цэвэр багц ямар харагддагийг л харуулна.
 */
const LINES: { icon: string; title: Text; body: Text }[] = [
  { icon: icon3d.archive, title: site.report_l1_title, body: site.report_l1_body },
  { icon: icon3d.rules, title: site.report_l2_title, body: site.report_l2_body },
  { icon: icon3d.versions, title: site.report_l3_title, body: site.report_l3_body },
  { icon: icon3d.balance, title: site.report_l4_title, body: site.report_l4_body },
]

const ReportLoop = () => {
  const { t } = useLang()

  return (
    <section className="pgl-report">
      <div className="pgl-container">
        <div className="pgl-panel pgl-panel--sky">
          <SectionHeading align="center" label={t(site.report_tag)} title={t(site.report_title)} body={t(site.report_lede)} />

          <div className="pgl-report__grid">
            <Reveal stagger className="pgl-report__list">
              {LINES.map(({ icon, title, body }) => (
                <article key={icon}>
                  <Tile image={icon} size="sm" />
                  <div>
                    <b>{t(title)}</b>
                    <small>{t(body)}</small>
                  </div>
                </article>
              ))}
            </Reveal>

            <Reveal effect="rise">
              <article className="pgl-report__card" data-tilt>
                <header>
                  <div>
                    <b>{t(site.report_card_title)}</b>
                    <span className="pgl-sample">{t(site.report_card_sample)}</span>
                  </div>
                  <span className="pgl-report__badge">
                    <Icon icon="lucide:check" aria-hidden /> {t(site.report_card_badge)}
                  </span>
                </header>

                <dl className="pgl-report__rows">
                  <div>
                    <dt>{t(site.report_card_day)}</dt>
                    <dd>2026-10-13</dd>
                  </div>
                  <div>
                    <dt>{t(site.report_card_version)}</dt>
                    <dd>2</dd>
                  </div>
                  <div>
                    <dt>{t(site.report_card_intervals)}</dt>
                    <dd>96 / 96</dd>
                  </div>
                  <div>
                    <dt>{t(site.report_card_quarantine)}</dt>
                    <dd>0</dd>
                  </div>
                  <div>
                    <dt>{t(site.report_card_estimated)}</dt>
                    <dd>1</dd>
                  </div>
                </dl>

                <div className="pgl-report__residual">
                  <small>{t(site.report_card_residual)}</small>
                  <b>0.0 kWh</b>
                </div>

                <footer>
                  <small>{t(site.report_card_chain)}</small>
                  <code>9f2c…41ae</code>
                </footer>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReportLoop
