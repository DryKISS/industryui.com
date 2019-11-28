/**
 * Date Picker
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { DatePicker } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Date Picker',
  component: DatePicker,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <DatePicker change={() => {}} month='' year='' />
