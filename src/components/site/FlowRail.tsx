import { useLang, type Text } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal from '@/components/site/Reveal'
import { Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

/**
 * Гинжин хэлхээний зурвас: үйлдвэрлэлээс нэхэмжлэх хүртэлх зургаан зогсоол.
 * Нүүр ба /platform хоёр хоёулаа үүнийг зурна — нэр нэг газраас солигдоно.
 * Зогсоолууд ээлжлэн илэрнэ.
 */
const FLOW_STEPS: [string, Text, Text][] = [
  [icon3d.generation, site.flow_generation, site.rail_generation_note],
  [icon3d.transmission, site.flow_transmission, site.rail_transmission_note],
  [icon3d.substation, site.flow_substation, site.rail_substation_note],
  [icon3d.balance, site.flow_transformer, site.rail_transformer_note],
  [icon3d.meter, site.flow_meter, site.rail_meter_note],
  [icon3d.invoice, site.flow_bill, site.rail_bill_note],
]

const FlowRail = () => {
  const { t } = useLang()

  return (
    <Reveal stagger className="pgl-flow-rail">
      {FLOW_STEPS.map(([icon, title, body], index) => (
        <div className="pgl-flow-step" key={icon}>
          <Tile image={icon} size="sm" />
          <span>
            <b>{t(title)}</b>
            <small>{t(body)}</small>
          </span>
          {index < FLOW_STEPS.length - 1 ? (
            <i className="pgl-flow-step__line" aria-hidden>
              <em />
            </i>
          ) : null}
        </div>
      ))}
    </Reveal>
  )
}

export default FlowRail
