import React from 'react'
import { useRouter } from 'next/router'
import { isLocale } from './service'

export const LocaleContext = React.createContext({
  locale: 'en',
  setLocale: () => null
})
export const LocaleProvider = ({ lang, children }) => {
  console.log('locale provider lang ', lang)
  const [locale, setLocale] = React.useState(lang)

  console.log('here', locale)

  const { query } = useRouter()

  React.useEffect(() => {
    if (locale !== window.localStorage.getItem('locale')) {
      window.localStorage.setItem('locale', locale)
    }
  }, [locale])

  React.useEffect(() => {
    if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {
      setLocale(query.lang)
    }
  }, [query.lang, locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}
