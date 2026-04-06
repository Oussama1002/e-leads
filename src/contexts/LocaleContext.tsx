import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { type Locale, pick, stringsFor, type LText } from '../i18n/morocco'

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: (path: string) => string
  pick: typeof pick
} | null>(null)

function getNested(obj: unknown, path: string): string | undefined {
  const parts = path.split('.')
  let cur: unknown = obj
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) {
      cur = (cur as Record<string, unknown>)[p]
    } else {
      return undefined
    }
  }
  return typeof cur === 'string' ? cur : undefined
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'fr'
    return (localStorage.getItem('eleads-locale') as Locale) || 'fr'
  })

  useEffect(() => {
    localStorage.setItem('eleads-locale', locale)
    document.documentElement.lang = locale === 'ar' ? 'ar-MA' : 'fr-MA'
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  const setLocale = useCallback((l: Locale) => setLocaleState(l), [])

  const t = useCallback(
    (path: string) => {
      const s = stringsFor(locale) as unknown as Record<string, unknown>
      return getNested(s, path) ?? path
    },
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, t, pick }),
    [locale, setLocale, t],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useI18n within LocaleProvider')
  return ctx
}

export type { Locale, LText }
