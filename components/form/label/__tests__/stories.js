/**
 * Form - Label
 */

// React
import React from 'react'

// Storybook
import { withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { FormLabel } from '../../'
import Readme from '../README.md'

export default {
  title: 'Form/Label',
  component: FormLabel,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    children: '',
    id: '',
    label: 'Label',
    ...props
  }

  return <FormLabel {...defaultProps} />
}

export const main = () => <BaseComponent />
