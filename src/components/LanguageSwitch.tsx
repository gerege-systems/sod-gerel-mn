import { useLang } from '@/i18n/context'

/**
 * MN | EN — хоёр төлөвт pill switch. Нэг role="switch" товч, pull-тай гүйдэг thumb.
 * aria-checked=true нь English идэвхтэй гэсэн үг.
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
      className={`seg ${dark ? 'seg--dark' : ''} ${className}`.trim()}
    >
      <span className="seg-track" aria-hidden="true">
        <span className="seg-thumb" />
        <span className="seg-label" data-on={isEn ? undefined : ''}>
          MN
        </span>
        <span className="seg-label" data-on={isEn ? '' : undefined}>
          EN
        </span>
      </span>
    </button>
  )
}

export default LanguageSwitch
