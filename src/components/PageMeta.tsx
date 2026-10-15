import { useEffect } from 'react'
import { useLang, type Text } from '@/i18n/context'

type Pagedata = {
  title?: Text
  description?: Text
}

const defaultDescription: Text = {
  mn: 'PowerGrid — Монгол Улсын ~1,000,000 цахилгааны тоолуурт зориулсан хэмжилтийн өгөгдлийн платформ. Тоолуураас нэхэмжлэх хүртэл нотлогдох нэг урсгал.',
  en: 'PowerGrid — a metering data platform for Mongolia’s ~1,000,000 electricity meters. One provable path from meter to invoice.',
}

const PageMeta = ({ title, description = defaultDescription }: Pagedata) => {
  const { t } = useLang()
  const brand = t(
    'PowerGrid — Ухаалаг тоолуурын үндэсний платформ',
    'PowerGrid — National Smart Metering Platform',
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
