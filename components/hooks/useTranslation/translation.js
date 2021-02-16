/**
 * useTranslation
 *
 * @see https://dev.to/biscuitech/i18n-with-next-js-and-full-ssg-support-2aih
 *
 * @todo Translations are usually pushed into the provider not here!
 */

// React
import { useContext } from 'react'

// UI
import { ConfigContext } from '../../services/config/context'
import { InternationalisationContext } from '../../services/internationalisation/context'

export const useTranslation = () => {
  const { defaultLocale, Translations } = useContext(ConfigContext)
  const { locale } = useContext(InternationalisationContext)

  const t = key => {
    if (!Translations[locale][key]) {
      // Debug
      console.warn(`Translation '${key}' for locale '${locale}' not found.`)
    }

    return Translations[locale][key] || Translations[defaultLocale][key] || ''
  }

  return {
    t,
    locale
  }
}
