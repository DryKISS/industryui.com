/**
 * Big Calendar
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { LanguageSwitcher } from '../components/languageSwitcher'
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

export const main = () => <LanguageSwitcher />
