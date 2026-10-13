import { useLang, type Lang } from '@/i18n/context'

const options: { value: Lang; label: string; title: string }[] = [
  { value: 'mn', label: 'MN', title: 'Монгол' },
  { value: 'en', label: 'EN', title: 'English' },
]

const LanguageSwitch = ({ dark = false }: { dark?: boolean }) => {
  const { lang, setLang } = useLang()

  return (
    <div
      role="group"
      aria-label={lang === 'en' ? 'Language' : 'Хэл'}
      className={`flex rounded-lg border p-0.5 text-xs font-semibold ${dark ? 'border-default-800' : 'border-default-200'}`}
    >
      {options.map((option) => {
        const active = lang === option.value
        return (
          <button
            key={option.value}
            type="button"
            title={option.title}
            aria-pressed={active}
            onClick={() => setLang(option.value)}
            className={`rounded-md px-2.5 py-1.5 transition ${
              active
                ? dark
                  ? 'text-default-950 bg-white'
                  : 'bg-primary text-white'
                : dark
                  ? 'text-default-400 hover:text-white'
                  : 'text-default-600 hover:text-primary'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitch
