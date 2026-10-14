import { Icon } from '@iconify/react'
import { LOGIN_URL } from '@/config'
import { useLang } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal, { RevealText } from '@/components/site/Reveal'
import { Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

/** Navy зурвас: хуудасны өгөх ёстой цорын ганц заавар — хаанаас эхлэх вэ. */
const Band = () => {
  const { t } = useLang()

  return (
    <section className="pgl-band">
      <Reveal className="pgl-band__inner">
        <Tile image={icon3d.start} />
        <h2 className="pgl-h2">
          <RevealText>
            {t(site.band_title_a)}
            <br />
            {t(site.band_title_b)}
          </RevealText>
        </h2>
        <p className="pgl-lede">{t(site.band_body)}</p>
        <div className="pgl-band__actions">
          <a href={LOGIN_URL} className="pgl-pill pgl-pill--solid pgl-pill--lg">
            {t(site.band_cta)} <Icon icon="lucide:arrow-right" aria-hidden />
          </a>
          <a href="#contact" className="pgl-pill pgl-pill--onnavy pgl-pill--lg">
            {t(site.band_cta2)}
          </a>
        </div>
        <small>{t(site.band_note)}</small>
      </Reveal>
    </section>
  )
}

export default Band
