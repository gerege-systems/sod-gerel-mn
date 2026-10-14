import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import energyCity from '@zasvar/trust-1.webp'
import energyStorage from '@zasvar/trust-2.webp'
import energyMix from '@zasvar/trust-3.webp'
import meterWall from '@zasvar/trust-4.webp'
import { useLang, type Text } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal from '@/components/site/Reveal'
import { SectionHeading, Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

/**
 * Яагаад энэ хуудасны тоонд итгэж болох вэ — хуудасны гүн navy самбар.
 *
 * Зургаан механизм, зургаан тэмдэг үг биш. Карт бүр архитектурт уншиж болох
 * зүйлийг нэрлэнэ: D+1 хуваарь, хувилбарын гинж, тэнцлийн тэгшитгэл, командын
 * төлөвийн машин, RLS, k-босго — тус бүр сайтын 3D дүрстэй. Зүүн талын карт
 * дээрх тоо нь төлөвлөлтийн таамаглал ба зорилтууд, тэгж бичигдсэн.
 */
const FEATURES: { icon: string; a: Text; b: Text; body: Text }[] = [
  { icon: icon3d.completeness, a: site.trust_f1_a, b: site.trust_f1_b, body: site.trust_f1_body },
  { icon: icon3d.versions, a: site.trust_f2_a, b: site.trust_f2_b, body: site.trust_f2_body },
  { icon: icon3d.balance, a: site.trust_f3_a, b: site.trust_f3_b, body: site.trust_f3_body },
  { icon: icon3d.twoKeys, a: site.trust_f4_a, b: site.trust_f4_b, body: site.trust_f4_body },
  { icon: icon3d.guard, a: site.trust_f5_a, b: site.trust_f5_b, body: site.trust_f5_body },
  { icon: icon3d.aggregation, a: site.trust_f6_a, b: site.trust_f6_b, body: site.trust_f6_body },
]

const SLIDES: { image: string; a: Text; b: Text; body: Text; href: string }[] = [
  { image: energyStorage, a: site.trust_slide_citizen_a, b: site.trust_slide_citizen_b, body: site.trust_slide_citizen_body, href: '/trust' },
  { image: energyCity, a: site.trust_slide_balance_a, b: site.trust_slide_balance_b, body: site.trust_slide_balance_body, href: '/platform' },
  { image: energyMix, a: site.trust_slide_collect_a, b: site.trust_slide_collect_b, body: site.trust_slide_collect_body, href: '/architecture' },
]

const Trust = () => {
  const { t } = useLang()

  const pills = [
    { tone: 'ok', label: t(site.trust_pill_d1), value: '≥ 99 %' },
    { tone: 'info', label: t(site.trust_pill_verified), value: '0' },
    { tone: 'muted', label: t(site.trust_pill_rpo), value: t('≤ 15 мин', '≤ 15 min') },
  ]

  return (
    <section className="pgl-trust" id="platform">
      <div className="pgl-container">
        <div className="pgl-panel pgl-panel--navy">
          <SectionHeading
            align="center"
            inverse
            label={t(site.trust_tag)}
            title={t(site.trust_title)}
            body={t(site.trust_lede)}
            action={
              <Link to="/trust" className="pgl-pill pgl-pill--onnavy">
                {t(site.trust_all)} <Icon icon="lucide:arrow-right" aria-hidden />
              </Link>
            }
          />

          <Reveal stagger className="pgl-trust__slides">
            {SLIDES.map((slide, index) => (
              <Link key={slide.href} to={slide.href} className="pgl-slide" data-tilt>
                <img src={slide.image} alt="" width={1400} height={787} loading="lazy" decoding="async" />
                <div className="pgl-slide__body">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>
                    {t(slide.a)}
                    <br />
                    {t(slide.b)}
                  </h3>
                  <p>{t(slide.body)}</p>
                </div>
              </Link>
            ))}
          </Reveal>

          <div className="pgl-trust__grid">
            <Reveal effect="rise" className="pgl-trust__map">
              <img src={meterWall} alt={t(site.trust_panel_alt)} width={1400} height={787} loading="lazy" decoding="async" />
              <ul className="pgl-trust__pills">
                {pills.map((pill) => (
                  <li key={pill.label} data-tone={pill.tone}>
                    <i aria-hidden />
                    <span>{pill.label}</span>
                    <b>
                      {pill.value} <em>{t(site.trust_unit)}</em>
                    </b>
                  </li>
                ))}
              </ul>
              <div className="pgl-trust__map-copy">
                <small>{t(site.trust_map_lead)}</small>
                <b>~1,000,000</b>
                <span>{t(site.trust_map_note)}</span>
                <Link to="/platform#roadmap" className="pgl-pill pgl-pill--light">
                  <Icon icon="lucide:route" aria-hidden /> {t(site.trust_map_cta)}
                </Link>
              </div>
            </Reveal>

            <Reveal stagger className="pgl-trust__features">
              {FEATURES.map(({ icon, a, b, body }, index) => (
                <article key={icon} data-tilt>
                  <Tile image={icon} />
                  <em>{String(index + 1).padStart(2, '0')}</em>
                  <h3>
                    {t(a)} {t(b)}
                  </h3>
                  <p>{t(body)}</p>
                </article>
              ))}
            </Reveal>
          </div>

          <p className="pgl-trust__foot">{t(site.trust_foot)}</p>
        </div>
      </div>
    </section>
  )
}

export default Trust
