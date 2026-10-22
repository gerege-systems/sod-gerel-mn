import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import filmMp4 from '@/assets/images/home/chain-flow.mp4'
import filmWebm from '@/assets/images/home/chain-flow.webm'
import filmPoster from '@/assets/images/home/chain-flow-poster.webp'
import { useLang } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/ui'
import FlowRail from '@/components/site/FlowRail'

/**
 * Гинжин хэлхээ: нэг удаа сүлжээний киногоор, нэг удаа бодит зургаан шатаараа.
 * Кино нь дуугүй, давталттай тоглоно; постер нь эхний кадр тул кино ирэхээс
 * өмнө хэсэг хоосон харагдахгүй. Хөдөлгөөн багасгахыг хүссэн хэрэглэгчид кино
 * постер дээрээ зогсож, удирдлага нь гарна.
 */
const Chain = () => {
  const { t } = useLang()
  // Хөдөлгөөн багасгахыг хүссэн бол кино автоматаар тоглохгүй (SPA тул шууд уншина).
  const [still] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false)

  return (
    <section className="pgl-chain">
      <div className="pgl-chain__inner">
        <SectionHeading align="center" label={t(site.chain_tag)} title={t(site.chain_title)} body={t(site.chain_body)} />

        <Reveal effect="rise">
          <figure className="pgl-chain__figure">
            <video
              autoPlay={!still}
              controls={still}
              muted
              loop
              playsInline
              preload="metadata"
              poster={filmPoster}
              width={1280}
              height={720}
              aria-label={t(site.chain_alt)}
            >
              <source src={filmWebm} type="video/webm" />
              <source src={filmMp4} type="video/mp4" />
            </video>
            <figcaption className="pgl-glass">
              <Icon icon="lucide:git-branch" aria-hidden /> {t(site.chain_caption)}
            </figcaption>
          </figure>
        </Reveal>

        <div className="pgl-chain__rail">
          <FlowRail />
        </div>

        <Reveal className="pgl-chain__actions">
          <Link to="/architecture" className="pgl-pill pgl-pill--solid pgl-pill--lg">
            {t(site.chain_cta)} <Icon icon="lucide:arrow-right" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default Chain
