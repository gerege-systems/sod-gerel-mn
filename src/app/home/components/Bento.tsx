import type { CSSProperties } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import wave from '@zasvar/section2-bg.webp'
import meter from '@zasvar/bento-meter.webp'
import monitor from '@zasvar/bento-monitor.webp'
import phone from '@zasvar/bento-phone.webp'
import { useLang } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal, { RevealText } from '@/components/site/Reveal'
import { useDrift } from '@/lib/motion-hooks'
import { Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

/**
 * Гурван мэдэгдэл, аргументад оруулах хувь нэмрээрээ хэмжээтэй.
 *
 * Том самбар нь бүтээгдэхүүний өөрийн өгүүлбэр, долгионт дэвсгэр дээр ухаалаг
 * тоолуураар. Хажуугийн хоёр нь хэн юугаар хардаг вэ: вэб дэлгэц (бүх оролцогч
 * нэг өгөгдөл) ба иргэний апп (Үе 3, загварын жишээ) — хоёулаа самбараасаа
 * өргөгдөж гарна (drift). Доорх гурван тоо нь төлөвлөлтийн тоо ба зорилт:
 * систем Үе 0-д байгаа тул амьд тоо байхгүй.
 */
const Bento = () => {
  const { t } = useLang()
  const monitorRef = useDrift<HTMLImageElement>(0.07, 36)
  const phoneRef = useDrift<HTMLImageElement>(0.08, 40)

  const stats = [
    { value: '~1,000,000', label: t(site.bento_stat_meters) },
    { value: t('96 сая', '96 M'), label: t(site.bento_stat_records) },
    { value: '≥ 99 %', label: t(site.bento_stat_d1) },
  ]

  return (
    <section className="pgl-bento">
      <Reveal stagger className="pgl-bento__grid">
        <article className="pgl-bento__lead" style={{ '--pgl-bento-wave': `url(${wave})` } as CSSProperties}>
          <img className="pgl-bento__orb" src={meter} alt={t(site.bento_orb_alt)} width={628} height={760} loading="lazy" decoding="async" />
          <div className="pgl-bento__lead-copy">
            <span className="pgl-tag">{t(site.bento_tag)}</span>
            <h2>
              <RevealText>
                {t(site.bento_title_a)}
                <em>{t(site.bento_title_b)}</em>
              </RevealText>
            </h2>
            <p>{t(site.bento_lede)}</p>
            <div className="pgl-bento__actions">
              <Link to="/platform" className="pgl-pill pgl-pill--solid">
                {t(site.bento_cta)} <Icon icon="lucide:arrow-right" aria-hidden />
              </Link>
              <Link to="/platform#roadmap" className="pgl-pill pgl-pill--ghost">
                {t(site.bento_cta2)}
              </Link>
            </div>
            <dl className="pgl-bento__stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
            <p className="pgl-bento__foot">{t(site.bento_stat_foot)}</p>
          </div>
        </article>

        <Link to="/architecture" className="pgl-bento__side" data-tilt>
          <Tile image={icon3d.screens} />
          <div>
            <h3>{t(site.bento_screens_title)}</h3>
            <p>{t(site.bento_screens_body)}</p>
          </div>
          <div className="pgl-bento__side-stage">
            <img ref={monitorRef} className="pgl-bento__shot" src={monitor} alt={t(site.bento_screens_alt)} width={1200} height={912} loading="lazy" decoding="async" />
          </div>
          <Icon icon="lucide:arrow-up-right" className="pgl-bento__go" aria-hidden />
        </Link>

        <Link to="/platform#roadmap" className="pgl-bento__wide" data-tilt>
          <div className="pgl-bento__device">
            <img ref={phoneRef} src={phone} alt={t(site.bento_app_alt)} width={520} height={957} loading="lazy" decoding="async" />
          </div>
          <div>
            <Tile image={icon3d.customer} />
            <h3>{t(site.bento_app_title)}</h3>
            <p>{t(site.bento_app_body)}</p>
            <span className="pgl-sample">{t(site.bento_app_tag)}</span>
          </div>
          <Icon icon="lucide:arrow-up-right" className="pgl-bento__go" aria-hidden />
        </Link>
      </Reveal>
    </section>
  )
}

export default Bento
