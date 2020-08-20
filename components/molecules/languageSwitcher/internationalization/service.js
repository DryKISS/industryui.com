import { locales, defaultLocale } from './config'
import { useContext } from 'react'
import { LocaleContext } from './LocaleContext'
import translations from './translations'

export const isLocale = tested => {
  return locales.some(locale => locale === tested)
}

export const useTranslation = () => {
  const { locale } = useContext(LocaleContext)
  console.log('in useTranslation locale ', locale)
  console.log('en el translate ', window.localStorage.getItem('locale'))
  function t (key) {
    console.log('dentro de T ')

    if (!translations[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`)
    }
    return translations[locale][key] || translations[defaultLocale][key] || ''
  }

  return {
    t,
    locale
  }
}

export const getInitialLocale = () => {
  const localSetting = window.localStorage.getItem('locale')
  if (localSetting && isLocale(localSetting)) {
    return localSetting
  }

  const [browserSetting] = navigator.language.split('-')
  if (isLocale(browserSetting)) {
    return browserSetting
  }

  return defaultLocale
}
