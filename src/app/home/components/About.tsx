import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import laptop from '@zasvar/about-laptop.webp'
import { useLang } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal, { RevealText } from '@/components/site/Reveal'
import { DeviceStage, Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

/**
 * Энэ хэн бэ, юу гэж мэдэгддэг вэ — тухайн зүйлийнхээ зургийн хажууд.
 * Зөөврийн компьютер зөөлөн самбараасаа өргөгдөж гарна (DeviceStage).
 * Доорх гурван тоо нь баримтад бичигдсэн зүйлс: одоогийн шат, үе шатны тоо,
 * судалсан улсын тоо. Хэмжилт байхгүй тул хэмжилт зурахгүй.
 */
const About = () => {
  const { t } = useLang()

  const traits = [
    { icon: icon3d.meter, label: t(site.about_trait_source) },
    { icon: icon3d.versions, label: t(site.about_trait_versions) },
    { icon: icon3d.national, label: t(site.about_trait_one) },
  ]

  return (
    <section className="pgl-about" id="about">
      <div className="pgl-about__grid">
        <Reveal className="pgl-about__copy">
          <span className="pgl-tag">{t(site.about_tag)}</span>
          <h2 className="pgl-h2">
            <RevealText>
              {t(site.about_title_a)}
              <em>{t(site.about_title_b)}</em>
            </RevealText>
          </h2>
          <p>{t(site.about_body)}</p>
          <p className="pgl-small pgl-muted">{t(site.about_1m_note)}</p>

          <ul className="pgl-about__traits">
            {traits.map(({ icon, label }) => (
              <li key={icon}>
                <Tile image={icon} size="sm" />
                {label}
              </li>
            ))}
          </ul>

          <div className="pgl-about__actions">
            <Link to="/architecture" className="pgl-pill pgl-pill--solid">
              {t(site.about_cta)} <Icon icon="lucide:arrow-right" aria-hidden />
            </Link>
            <Link to="/trust" className="pgl-textlink">
              {t(site.about_link)} <Icon icon="lucide:arrow-right" aria-hidden />
            </Link>
          </div>

          <dl className="pgl-about__stats">
            <div>
              <dt>{t('Үе 0', 'Phase 0')}</dt>
              <dd>{t(site.about_stat_phase)}</dd>
            </div>
            <div>
              <dt>6</dt>
              <dd>{t(site.about_stat_phases)}</dd>
            </div>
            <div>
              <dt>10+</dt>
              <dd>{t(site.about_stat_countries)}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal effect="rise" className="pgl-about__figure">
          <DeviceStage src={laptop} alt={t(site.about_figure_alt)} width={1400} height={819} tone="sky" drift={0.07} />
        </Reveal>
      </div>
    </section>
  )
}

export default About
