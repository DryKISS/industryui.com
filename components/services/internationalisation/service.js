/**
 * Get Initial Locale
 * Gets the users locale string from locale storage
 *
 * @todo the User Provider should also push down a user saved locale
 * @todo we have a localstorage hook - use it
 */
// React
import { useContext } from 'react'

// UI
import { ConfigContext } from '../../'

export const isLocale = ({ locales, tested }) => {
  return locales.some((locale) => locale === tested)
}

export const GetInitialLocale = () => {
  const { defaultLocale } = useContext(ConfigContext)

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
