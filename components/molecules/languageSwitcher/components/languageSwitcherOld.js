import React from 'react'
import Router from 'next/router'
import { locales, languageNames } from '../internationalization/config'
import { LocaleContext } from '../internationalization/LocaleContext'

export const LanguageSwitcher = () => {
  const { locale } = React.useContext(LocaleContext)
  console.log('router ', locale)

  const handleLocaleChange = React.useCallback(
    e => {
      const regex = new RegExp(`^/(${locales.join('|')})`)
      Router.push(Router.pathname, Router.asPath.replace(regex, `/${e.target.value}`))
      console.log(languageNames[locale], locale)
    },
    [Router]
  )

  return (
    <select value={locale} onChange={handleLocaleChange}>
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {languageNames[locale]}
        </option>
      ))}
    </select>
  )
}
