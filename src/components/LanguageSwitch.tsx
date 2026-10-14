import { useLang } from '@/i18n/context'

/**
 * MN | EN — хоёр хэсэгт хайрцаг (petronet.mn-ийн хэл сонгогчийн хэлбэр).
 * Нэг role="switch" товч; aria-checked=true нь English идэвхтэй гэсэн үг.
 */
const LanguageSwitch = ({ dark = false, className = '' }: { dark?: boolean; className?: string }) => {
  const { lang, setLang, t } = useLang()
  const isEn = lang === 'en'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label={t('Хэл: Монгол / English', 'Language: Mongolian / English')}
      title={isEn ? 'Монгол' : 'English'}
      onClick={() => setLang(isEn ? 'mn' : 'en')}
      className={`pgl-lang ${dark ? 'pgl-lang--onnavy' : ''} ${className}`.trim()}
    >
      <span data-on={isEn ? undefined : ''}>MN</span>
      <span data-on={isEn ? '' : undefined}>EN</span>
    </button>
  )
}

export default LanguageSwitch
