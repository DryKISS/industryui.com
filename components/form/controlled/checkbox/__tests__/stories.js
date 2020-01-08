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

const data = [
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
  title: 'Form/Controlled/Checkbox',
  component: Checkbox,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    change: action('button-click'),
    data: data,
    legend: 'Legend',
    stacked: false,
    ...props
  }

  return <Checkbox {...defaultProps} />
}

export const main = () => <BaseComponent />
export const stacked = () => <BaseComponent stacked />
