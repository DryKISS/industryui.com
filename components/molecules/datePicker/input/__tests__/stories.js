/**
 * Date Picker - Input
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { DatePickerInput } from 'components'
import Readme from '../README.md'

export default {
  title: 'Molecules/Date Picker/Input',
  component: DatePickerInput,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <DatePickerInput change={() => {}} month='' year='' />
