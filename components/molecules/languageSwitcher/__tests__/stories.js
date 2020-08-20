/**
 * Big Calendar
 */

// React
import React, { useContext } from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { LanguageSwitcher } from '../components/languageSwitcher'
// import TextLanguage from '../components/textLanguage'

import { LocalizationContext } from '../../../services/localization'
import Readme from '../README.md'

export default {
  title: 'Molecules/LanguageSwitcher',
  components: LanguageSwitcher,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const context = useContext(LocalizationContext)
  console.log('location use context ', context)

  return (
    <>
      <LanguageSwitcher />
    </>
  )
}
