/**
 * Services - Internationalisation - Provider
 */

// React
import React, { useContext, useEffect, useState } from 'react'

// Next
import { useRouter } from 'next/router'

// UI
import {
  ConfigContext,
  InternationalisationContext,
  isLocale,
  useLocalStorage
} from '../../'

export const InternationalisationProvider = ({ locale, children }) => {
  const { locales } = useContext(ConfigContext)
  const [getStoredLocale, setStoredLocale] = useLocalStorage('locale')

  const router = useRouter()
  const [localeState, setLocaleState] = useState({ locale: locale })

  useEffect(() => {
    if (localeState !== getStoredLocale) {
      setStoredLocale(localeState)
    }
  }, [localeState])

  useEffect(() => {
    if (
      isLocale({ locales: locales, test: router?.query.lang }) &&
      locale !== router?.query.lang
    ) {
      setLocaleState({ locale: router?.query.lang })
    }
  }, [router?.query.lang, localeState])

  return (
    <InternationalisationContext.Provider
      value={{ locale: localeState.locale, setLocale: setLocaleState }}>
      {children}
    </InternationalisationContext.Provider>
  )
}
