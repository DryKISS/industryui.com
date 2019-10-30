/**
 * Checkbox
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'

// UI
import { Checkbox } from '../'
import Readme from '../README.md'

const CHECKBOXS = [
  {
    id: 'insurance',
    label: 'I pledge to get insurance for my new dog',
    required: true,
    value: 'Insurance'
  }
]

export default {
  title: 'Atoms/Form/Checkbox',
  component: Checkbox,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Checkbox
    data={CHECKBOXS}
    legend='Finally, which of the following do you pledge to do for your new dog?'
    change={action('button-click')}
  />
)
