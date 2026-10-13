import { createContext, useContext } from 'react'

export type Lang = 'mn' | 'en'

// Хоёр хэлтэй текст. Өгөгдлийн массивуудад ашиглана: { mn: '...', en: '...' }
export type Text = { mn: string; en: string }

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'mn',
  setLang: () => {},
})

/**
 * t('Монгол', 'English') эсвэл t({ mn, en }) — идэвхтэй хэлээрх текстийг буцаана.
 */
export const useLang = () => {
  const { lang, setLang } = useContext(LanguageContext)

  function t(mn: string, en: string): string
  function t(text: Text): string
  function t(mn: string | Text, en?: string): string {
    if (typeof mn === 'string') return lang === 'en' ? (en ?? mn) : mn
    return mn[lang]
  }

  return { lang, setLang, t }
}
