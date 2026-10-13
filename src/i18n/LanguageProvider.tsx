import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext, type Lang } from './context'

const STORAGE_KEY = 'powergrid-lang'

const readStoredLang = (): Lang => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'mn'
  } catch {
    return 'mn'
  }
}

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Хадгалах боломжгүй үед (private цонх) зөвхөн энэ сессэд үйлчилнэ.
    }
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
