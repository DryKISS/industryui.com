/**
 * Input Date Picker
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { InputPicker } from '..'
import Readme from '../README.md'

export default {
  title: 'Molecules/Input Picker',
  component: InputPicker,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <InputPicker change={() => {}} month='' year='' />
