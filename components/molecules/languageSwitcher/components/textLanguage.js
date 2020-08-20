import React from 'react'
import withLocale from '../internationalization/withLocale'
import { useTranslation } from '../internationalization/service'

const TextLanguage = () => {
  const { t } = useTranslation()

  return (
    <>
      <p>Test</p>
      <h1>{t('index')}</h1>
    </>
  )
}

export default withLocale(TextLanguage)
