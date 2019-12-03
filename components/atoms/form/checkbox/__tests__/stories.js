/**
 * Checkbox
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { Checkbox } from 'components'
import Readme from '../README.md'

const CHECKBOXS = [
  {
    id: 'check',
    label: 'Yes',
    required: true,
    value: 'check'
  },
  {
    id: 'checked',
    label: 'No',
    required: true,
    value: 'checked'
  }
]

export default {
  title: 'Atoms/Form/Checkbox',
  component: Checkbox,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Checkbox data={CHECKBOXS} legend='Legend' change={action('button-click')} stacked />
)
