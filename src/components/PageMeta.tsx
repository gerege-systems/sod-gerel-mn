import { useEffect } from 'react'
import { useLang, type Text } from '@/i18n/context'

type Pagedata = {
  title?: Text
  description?: Text
}

const defaultDescription: Text = {
  mn: 'PowerGrid — Монгол Улсын эрчим хүчний үндэсний дижитал дэд бүтэц. ~1,000,000 тоолуурын өгөгдөл нэг хабд, дэд станцаас нэхэмжлэх хүртэл нотлогдох нэг урсгал.',
  en: 'PowerGrid — Mongolia’s national digital energy infrastructure. ~1,000,000 meters in one hub, one provable path from the substation to the invoice.',
}

const PageMeta = ({ title, description = defaultDescription }: Pagedata) => {
  const { t } = useLang()
  const brand = t(
    'PowerGrid — Эрчим хүчний үндэсний дижитал дэд бүтэц',
    'PowerGrid — National Digital Energy Infrastructure',
  )
  const fullTitle = title ? `${t(title)} | ${brand}` : brand
  const fullDescription = t(description)

  useEffect(() => {
    document.title = fullTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', fullDescription)
  }, [fullTitle, fullDescription])

  return null
}

export default PageMeta
