import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import art from '@zasvar/hero-meter-city.webp'
import { useLang } from '@/i18n/context'
import { site } from '@/i18n/site'
import { useParallax } from '@/lib/motion-hooks'
import { icon3d } from '@/components/site/icons3d'
import { Tile } from '@/components/site/ui'

/**
 * Эхний дэлгэц: зүүн талд гарчиг ба хоёр товч, баруун талд ухаалаг тоолуур
 * бүхий хотын загвар. Доод зурвас нь өгөгдлийн замыг товчлон харуулна:
 * тоолуур → холбооны сүлжээ → PowerGrid → хэрэглэгч.
 *
 * Хөдөлгөөн: бичвэр ээлжлэн орж ирнэ, зураг зөөлөн гулсаж орж ирээд гүйлгэхэд
 * бичвэрээс удаан (parallax) хөдөлнө. Бүгд reduced-motion үед унтарна.
 */
const RAIL = [
  [icon3d.meter, site.hero_rail_meter],
  [icon3d.network, site.hero_rail_network],
  [icon3d.platform, site.hero_rail_platform],
  [icon3d.customer, site.hero_rail_customer],
] as const

const Hero = () => {
  const { t } = useLang()
  const artRef = useParallax<HTMLImageElement>(0.1, 900)

  return (
    <section className="pgl-hero">
      <img ref={artRef} className="pgl-hero__art" src={art} alt={t(site.hero_art_alt)} width={1672} height={941} fetchPriority="high" />

      <div className="pgl-hero__inner">
        <div className="pgl-hero__copy pgl-enter">
          <p className="pgl-eyebrow pgl-hero__eyebrow">{t(site.hero_eyebrow)}</p>
          <h1 className="pgl-hero__title">
            {t(site.hero_title_a)}
            <span>{t(site.hero_title_b)}</span>
          </h1>
          <p className="pgl-lede pgl-hero__lede">{t(site.hero_lede)}</p>
          <div className="pgl-hero__actions">
            <Link to="/platform" className="pgl-pill pgl-pill--solid pgl-pill--xl">
              {t(site.hero_cta)} <Icon icon="lucide:arrow-right" aria-hidden />
            </Link>
            <Link to="/contact" className="pgl-pill pgl-pill--outline pgl-pill--xl">
              {t(site.hero_cta2)}
            </Link>
          </div>
        </div>
      </div>

      <ol className="pgl-hero__rail pgl-enter pgl-enter--late">
        {RAIL.map(([icon, label], index) => (
          <li key={icon}>
            {index > 0 && <Icon icon="lucide:arrow-right" className="pgl-hero__rail-arrow" aria-hidden />}
            <Tile image={icon} size="xs" />
            {t(label)}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Hero
